STACK_NAME  := get-started
REGION      := us-east-1
PROFILE     := 112284275763_admin
DEMO_ID     := get-started

.PHONY: build-app sam-build deploy clean

## Build the Vue demo and copy into backend/static/
build-app:
	DEMO_ID=$(DEMO_ID) npx vite build --config vite.config.demos.ts
	rm -rf backend/static/*
	cp -r dist-demos/$(DEMO_ID)/. backend/static/
	mv backend/static/.demo-$(DEMO_ID).html backend/static/index.html

## SAM build (depends on build-app)
sam-build: build-app
	sam build

## Full deploy: build → sam build → sam deploy
deploy: sam-build
	sam deploy \
		--stack-name $(STACK_NAME) \
		--region $(REGION) \
		--profile $(PROFILE) \
		--resolve-s3 \
		--capabilities CAPABILITY_IAM \
		--no-confirm-changeset

## Remove build artifacts
clean:
	rm -rf dist-demos/$(DEMO_ID) backend/static/* .aws-sam
