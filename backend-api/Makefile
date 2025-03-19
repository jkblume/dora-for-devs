run_dev:
	cd cmd/api && go run main.go

build:
	docker build -t europe-west3-docker.pkg.dev/jakob-295419/jkbflwr/dora-rag-chatbot-api:latest .

push: build
	docker push europe-west3-docker.pkg.dev/jakob-295419/jkbflwr/dora-rag-chatbot-api:latest

deploy:
	cd deployment; ansible-playbook -i inventory.ini --vault-password-file credential.vault -t dora-for-dev-backend main.yml

# straight to production (stp)
stp: build push deploy