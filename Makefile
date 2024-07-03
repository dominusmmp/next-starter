DOCKER_CONTAINER_NAME = next-starter-docker-container
DOCKER_COMPOSE_FILE = docker-compose.yml

.PHONY: all
all: build

.PHONY: build
build:
	docker-compose -f $(DOCKER_COMPOSE_FILE) build

.PHONY: up
up:
	docker-compose -f $(DOCKER_COMPOSE_FILE) up -d

.PHONY: down
down:
	docker-compose -f $(DOCKER_COMPOSE_FILE) down

.PHONY: clean
clean:
	docker-compose -f $(DOCKER_COMPOSE_FILE) down --rmi all --volumes --remove-orphans

.PHONY: logs
logs:
	docker-compose -f $(DOCKER_COMPOSE_FILE) logs -f

.PHONY: exec
exec:
	docker exec -it $(DOCKER_CONTAINER_NAME) /bin/sh

.PHONY: prune
prune:
	docker image prune -f

.PHONY: rebuild
rebuild:
	docker-compose -f $(DOCKER_COMPOSE_FILE) build --no-cache

.PHONY: help
help:
	@echo "Makefile commands:"
	@echo "  build    - Build the Docker image"
	@echo "  up       - Run the Docker container"
	@echo "  down     - Stop the Docker container"
	@echo "  clean    - Clean up Docker images and containers"
	@echo "  logs     - View logs from the Docker container"
	@echo "  exec     - Run a shell in the running Docker container"
	@echo "  prune    - Remove dangling images"
	@echo "  rebuild  - Rebuild the Docker image without cache"
	@echo "  help     - Display this help message"
