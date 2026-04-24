package main

import (
	"context"
	"embed"
	"encoding/base64"
	"fmt"
	"io/fs"
	"os"
	"strings"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
	"github.com/google/uuid"
)

//go:embed all:static
var staticFiles embed.FS

var (
	tableName = os.Getenv("SESSION_TABLE")
	ddbClient *dynamodb.Client
	staticFS  fs.FS
)

const (
	cookieName   = "session"
	sessionTTL   = 24 * time.Hour
	authEmail    = "user@jclabs.com"
	authPassword = "Apple21!"
)

func init() {
	cfg, err := config.LoadDefaultConfig(context.Background())
	if err != nil {
		panic(fmt.Sprintf("unable to load AWS config: %v", err))
	}
	ddbClient = dynamodb.NewFromConfig(cfg)

	sub, err := fs.Sub(staticFiles, "static")
	if err != nil {
		panic(fmt.Sprintf("unable to create sub FS: %v", err))
	}
	staticFS = sub
}

func handler(ctx context.Context, req events.APIGatewayV2HTTPRequest) (events.APIGatewayV2HTTPResponse, error) {
	path := req.RawPath
	method := req.RequestContext.HTTP.Method

	if path == "/login" && method == "GET" {
		return loginPage(""), nil
	}

	if path == "/login" && method == "POST" {
		return handleLogin(ctx, req)
	}

	if path == "/logout" {
		return handleLogout(ctx, req)
	}

	// All other routes: check session
	sessionID := extractCookie(req.Cookies, cookieName)
	if sessionID == "" || !validSession(ctx, sessionID) {
		return redirect("/login"), nil
	}

	return serveStatic(path)
}

func handleLogin(ctx context.Context, req events.APIGatewayV2HTTPRequest) (events.APIGatewayV2HTTPResponse, error) {
	body := req.Body
	if req.IsBase64Encoded {
		decoded, err := base64.StdEncoding.DecodeString(body)
		if err == nil {
			body = string(decoded)
		}
	}

	params := parseForm(body)
	email := params["email"]
	password := params["password"]

	if email != authEmail || password != authPassword {
		return loginPage("Invalid email or password"), nil
	}

	sessionID := uuid.New().String()
	ttl := time.Now().Add(sessionTTL).Unix()

	_, err := ddbClient.PutItem(ctx, &dynamodb.PutItemInput{
		TableName: aws.String(tableName),
		Item: map[string]types.AttributeValue{
			"PK":        &types.AttributeValueMemberS{Value: "SESSION#" + sessionID},
			"SK":        &types.AttributeValueMemberS{Value: "SESSION"},
			"email":     &types.AttributeValueMemberS{Value: email},
			"createdAt": &types.AttributeValueMemberS{Value: time.Now().UTC().Format(time.RFC3339)},
			"ttl":       &types.AttributeValueMemberN{Value: fmt.Sprintf("%d", ttl)},
		},
	})
	if err != nil {
		return events.APIGatewayV2HTTPResponse{StatusCode: 500, Body: "Session creation failed"}, nil
	}

	cookie := fmt.Sprintf("%s=%s; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=%d", cookieName, sessionID, int(sessionTTL.Seconds()))
	return events.APIGatewayV2HTTPResponse{
		StatusCode: 302,
		Headers:    map[string]string{"Location": "/"},
		Cookies:    []string{cookie},
	}, nil
}

func handleLogout(ctx context.Context, req events.APIGatewayV2HTTPRequest) (events.APIGatewayV2HTTPResponse, error) {
	sessionID := extractCookie(req.Cookies, cookieName)
	if sessionID != "" {
		ddbClient.DeleteItem(ctx, &dynamodb.DeleteItemInput{
			TableName: aws.String(tableName),
			Key: map[string]types.AttributeValue{
				"PK": &types.AttributeValueMemberS{Value: "SESSION#" + sessionID},
				"SK": &types.AttributeValueMemberS{Value: "SESSION"},
			},
		})
	}

	cookie := fmt.Sprintf("%s=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0", cookieName)
	return events.APIGatewayV2HTTPResponse{
		StatusCode: 302,
		Headers:    map[string]string{"Location": "/login"},
		Cookies:    []string{cookie},
	}, nil
}

func validSession(ctx context.Context, sessionID string) bool {
	result, err := ddbClient.GetItem(ctx, &dynamodb.GetItemInput{
		TableName: aws.String(tableName),
		Key: map[string]types.AttributeValue{
			"PK": &types.AttributeValueMemberS{Value: "SESSION#" + sessionID},
			"SK": &types.AttributeValueMemberS{Value: "SESSION"},
		},
	})
	return err == nil && result.Item != nil
}

func serveStatic(path string) (events.APIGatewayV2HTTPResponse, error) {
	filePath := strings.TrimPrefix(path, "/")
	if filePath == "" {
		filePath = "index.html"
	}

	data, err := fs.ReadFile(staticFS, filePath)
	if err != nil {
		// SPA fallback
		data, err = fs.ReadFile(staticFS, "index.html")
		if err != nil {
			return events.APIGatewayV2HTTPResponse{StatusCode: 404, Body: "Not found"}, nil
		}
		filePath = "index.html"
	}

	contentType := guessContentType(filePath)

	if isBinary(contentType) {
		return events.APIGatewayV2HTTPResponse{
			StatusCode:      200,
			Headers:         map[string]string{"Content-Type": contentType, "Cache-Control": cacheControl(filePath)},
			Body:            base64.StdEncoding.EncodeToString(data),
			IsBase64Encoded: true,
		}, nil
	}

	return events.APIGatewayV2HTTPResponse{
		StatusCode: 200,
		Headers:    map[string]string{"Content-Type": contentType, "Cache-Control": cacheControl(filePath)},
		Body:       string(data),
	}, nil
}

func loginPage(errorMsg string) events.APIGatewayV2HTTPResponse {
	errHTML := ""
	if errorMsg != "" {
		errHTML = fmt.Sprintf(`<div style="color:#dc2626;margin-bottom:16px;font-size:14px">%s</div>`, errorMsg)
	}

	html := fmt.Sprintf(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login — Get Started</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:Inter,system-ui,sans-serif;background:#f5f5f5;display:flex;align-items:center;justify-content:center;min-height:100vh}
    .card{background:#fff;border-radius:12px;padding:40px;width:100%%;max-width:400px;box-shadow:0 1px 3px rgba(0,0,0,.1)}
    h1{font-size:24px;font-weight:600;margin-bottom:8px;color:#111}
    p{font-size:14px;color:#666;margin-bottom:24px}
    label{display:block;font-size:14px;font-weight:500;color:#333;margin-bottom:6px}
    input{width:100%%;padding:10px 12px;border:1px solid #d1d5db;border-radius:8px;font-size:14px;margin-bottom:16px;outline:none}
    input:focus{border-color:#4f46e5;box-shadow:0 0 0 3px rgba(79,70,229,.1)}
    button{width:100%%;padding:10px;background:#4f46e5;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer}
    button:hover{background:#4338ca}
  </style>
</head>
<body>
  <div class="card">
    <h1>Sign In</h1>
    <p>JumpCloud Circuit Playground</p>
    %s
    <form method="POST" action="/login">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required placeholder="user@jclabs.com" />
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required />
      <button type="submit">Sign In</button>
    </form>
  </div>
</body>
</html>`, errHTML)

	return events.APIGatewayV2HTTPResponse{
		StatusCode: 200,
		Headers:    map[string]string{"Content-Type": "text/html; charset=utf-8"},
		Body:       html,
	}
}

func extractCookie(cookies []string, name string) string {
	for _, c := range cookies {
		parts := strings.SplitN(c, "=", 2)
		if len(parts) == 2 && strings.TrimSpace(parts[0]) == name {
			return strings.TrimSpace(parts[1])
		}
	}
	return ""
}

func parseForm(body string) map[string]string {
	params := make(map[string]string)
	for _, pair := range strings.Split(body, "&") {
		kv := strings.SplitN(pair, "=", 2)
		if len(kv) == 2 {
			params[urlDecode(kv[0])] = urlDecode(kv[1])
		}
	}
	return params
}

func urlDecode(s string) string {
	s = strings.ReplaceAll(s, "+", " ")
	var result strings.Builder
	i := 0
	for i < len(s) {
		if s[i] == '%' && i+2 < len(s) {
			var val byte
			fmt.Sscanf(s[i+1:i+3], "%02x", &val)
			result.WriteByte(val)
			i += 3
		} else {
			result.WriteByte(s[i])
			i++
		}
	}
	return result.String()
}

func guessContentType(path string) string {
	ext := ""
	if idx := strings.LastIndex(path, "."); idx >= 0 {
		ext = path[idx:]
	}
	m := map[string]string{
		".html":  "text/html; charset=utf-8",
		".css":   "text/css; charset=utf-8",
		".js":    "application/javascript; charset=utf-8",
		".json":  "application/json",
		".svg":   "image/svg+xml",
		".png":   "image/png",
		".jpg":   "image/jpeg",
		".jpeg":  "image/jpeg",
		".gif":   "image/gif",
		".ico":   "image/x-icon",
		".woff":  "font/woff",
		".woff2": "font/woff2",
		".ttf":   "font/ttf",
		".map":   "application/json",
	}
	if ct, ok := m[ext]; ok {
		return ct
	}
	return "application/octet-stream"
}

func isBinary(contentType string) bool {
	return !strings.HasPrefix(contentType, "text/") &&
		!strings.Contains(contentType, "javascript") &&
		!strings.Contains(contentType, "json") &&
		!strings.Contains(contentType, "svg") &&
		!strings.Contains(contentType, "xml")
}

func cacheControl(path string) string {
	if strings.Contains(path, "/assets/") {
		return "public, max-age=31536000, immutable"
	}
	return "public, max-age=60"
}

func redirect(location string) events.APIGatewayV2HTTPResponse {
	return events.APIGatewayV2HTTPResponse{
		StatusCode: 302,
		Headers:    map[string]string{"Location": location},
	}
}

func main() {
	lambda.Start(handler)
}
