---
name: aws-sam-deploy
description: Runs and troubleshoots AWS SAM deployment for this project (Vue app in Go Lambda with auth). Use when the user wants to deploy to AWS, run sam build/deploy, fix deployment errors, or asks about hosting the app on AWS.
---

# AWS SAM Deployment

Use this skill when deploying the app to AWS or when fixing deployment or build issues.

## Mandatory Rules

- **IaC** = AWS SAM only. No Terraform, no raw CloudFormation.
- **Stack name** = Jira ticket number for the project. Always ask the user for it if unknown.
- **Region** = `us-east-1`
- **Profile** = `produx-pdlc`
- **DNS** = hosted zone `Z00445592TH2X5CKZ2FCI` (jcprodux.net); hostname = Jira ticket number
- **SSL** = wildcard ACM cert `arn:aws:acm:us-east-1:112284275763:certificate/667deffa-ddd7-4802-a4fe-23d215034495`
- **Auth** = DynamoDB sessions + cookie; credentials `user@jclabs.com` / `Apple21!`
- **Database** = DynamoDB only, single-table design. Table name = Jira ticket. No scans — ensure data model supports queries.
- **File storage** = S3. Add CloudFront if needed.
- **Runtime** = Go Lambda with embedded static files (`embed` FS). Only host pages created in the repo, not all of Storybook.
- **SAM resource types only** — only use resource types that SAM supports.

## Deployment Workflow

**Full deploy (recommended):**

```bash
make deploy
```

This runs: `make build-app` -> `sam build` -> `sam deploy` with the correct stack name, region, and profile.

**Step-by-step (for debugging):**

1. **Build frontend and copy into backend:**
   ```bash
   make build-app
   ```
   Runs `npm run build`, then copies `dist/*` to `backend/static/`

2. **Build Lambda artifact:**
   ```bash
   sam build
   ```

3. **Deploy stack:**
   ```bash
   sam deploy --stack-name <jira-ticket> --region us-east-1 --profile produx-pdlc --resolve-s3 --capabilities CAPABILITY_IAM --no-confirm-changeset
   ```

## Validation Before Deploy

- **Validate template:** `sam validate`
- **Local invoke (optional):** `sam local start-api` (requires Docker)

## Common Issues and Fixes

| Issue | Fix |
|-------|-----|
| `static: contains no embeddable files` | Run `make build-app` before `sam build` |
| Wrong stack name or region | Use `make deploy` or pass correct flags |
| Profile / auth errors | Check: `aws sts get-caller-identity --profile produx-pdlc` |
| Lambda build fails (Go) | Run `make build-app` then `cd backend && GOOS=linux GOARCH=arm64 go build -o bootstrap .` |

## After Deploy

- App URL: `https://<stack-name>.jclabs.dev`
- Login: `user@jclabs.com` / `Apple21!`
- Stack info: `aws cloudformation describe-stacks --stack-name <stack-name> --profile produx-pdlc --region us-east-1`

## Makefile Targets

| Target | Command | Purpose |
|--------|---------|---------|
| `build-app` | `npm run build` then `cp -r dist/* backend/static/` | Build Vue app and populate backend static for Go embed |
| `sam-build` | Depends on `build-app`, then `sam build` | Full build including Lambda |
| `deploy` | Depends on `sam-build`, then `sam deploy ...` | Build and deploy in one step |

## Key Paths

- Template: `template.yaml`
- Lambda code: `backend/` (Go)
- Static assets: `backend/static/` (filled by `make build-app`)
- Hosted zone: `Z02503081OYXKQRZUP380` (jclabs.dev)
- Domain pattern: `https://<stack-name>.jclabs.dev`
