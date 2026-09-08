STACK_NAME  := th-1769
REGION      := us-east-1
PROFILE     := produx-pdlc
DEMO_ID     := th-1769
DOMAIN_NAME := th-1769.jcprodux.net
HOSTED_ZONE := Z00445592TH2X5CKZ2FCI

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
		--no-confirm-changeset \
		--parameter-overrides StackName=$(STACK_NAME) DomainName=$(DOMAIN_NAME) HostedZoneId=$(HOSTED_ZONE)

## Remove build artifacts
clean:
	rm -rf dist-demos/$(DEMO_ID) backend/static/* .aws-sam
