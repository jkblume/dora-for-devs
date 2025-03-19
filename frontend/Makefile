run_dev:
	npm run dev

run:
	npm run build && npm run start

build:
	docker build -t europe-west3-docker.pkg.dev/jakob-295419/jkbflwr/chatbot-minimal-dora:latest .

push: build
	docker push europe-west3-docker.pkg.dev/jakob-295419/jkbflwr/chatbot-minimal-dora:latest

deploy:
	cd deployment; ansible-playbook -i inventory.ini --vault-password-file credential.vault -t dora-for-dev-frontend main.yml

# straight to production (stp)
stp: build push deploy