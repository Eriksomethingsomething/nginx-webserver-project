# Dockerized Web Server

A static website served by **Nginx inside a Docker container**, managed with Docker Compose. This project includes a custom 404 page, health checks, restart policies, and read-only volume mounts.

## Overview

This project demonstrates how to build, configure, and run a containerized web server using Docker and Nginx.

## Technologies

- **HTML, CSS & JavaScript** — Website structure, styling, and interactivity
- **Nginx** — Serves the website and handles HTTP requests
- **Docker** — Builds images and runs containers
- **Docker Compose** — Configures and manages the service
- **Git & GitHub** — Version control and project hosting

## Project Structure

```text
docker-nginx/
├── html/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── 404.html
├── nginx/
│   └── default.conf
├── .dockerignore
├── .gitignore
├── Dockerfile
├── compose.yaml
└── README.md
```

| File or folder       | Purpose                                                      |
| -------------------- | ------------------------------------------------------------ |
| `html/`              | Website files                                                |
| `html/index.html`    | Main webpage                                                 |
| `html/style.css`     | Website styling                                              |
| `html/script.js`     | Adds website interactivity                                   |
| `html/404.html`      | Custom missing-page content                                  |
| `nginx/default.conf` | Nginx server configuration                                   |
| `Dockerfile`         | Defines how the Docker image is built                        |
| `compose.yaml`       | Configures ports, volumes, health checks, and restart policy |
| `.dockerignore`      | Excludes selected files from the build context               |
| `.gitignore`         | Specifies files Git should ignore                            |

## How It Works

1. Docker builds an image using the Nginx base image specified in the Dockerfile.
2. The Dockerfile copies the website files and custom Nginx configuration into the image.
3. Docker Compose configures the service, including port mapping, read-only volume mounts, and a health check.
4. Port `8082` on the host maps to port `80` inside the container.
5. Read-only mounts make local website and Nginx configuration files available to the running container during development.
6. Nginx serves a custom 404 page for missing URLs.
7. Docker periodically checks whether Nginx responds to a local HTTP request.
8. The `unless-stopped` restart policy allows Docker to restart the service after unexpected stops.

## Getting Started

### Prerequisites

- Docker Desktop or a system with Docker Engine and the Docker Compose plugin
- Git

### 1. Clone the repository

If you have not cloned the project yet, run:

```bash
git clone https://github.com/Eriksomethingsomething/nginx-webserver-project.git
cd nginx-webserver-project/docker-nginx
```

If you already have the repository on your computer, open a terminal in the existing `docker-nginx` directory instead.

### 2. Build and start the website

```bash
docker compose up -d --build
```

### 3. Open the website

Visit [http://localhost:8082](http://localhost:8082).

### 4. Test the custom 404 page

Visit [http://localhost:8082/doesnotexist](http://localhost:8082/doesnotexist).

The request should return an HTTP `404 Not Found` status and display the custom error page.

### 5. Check container health

```bash
docker compose ps
```

The service should report `healthy` after the health check succeeds.

### 6. View logs

```bash
docker compose logs
```

To show only the latest 30 lines:

```bash
docker compose logs --tail=30
```

### 7. Validate the Nginx configuration

```bash
docker compose run --rm website nginx -t
```

This checks the Nginx configuration using a temporary container with the Compose service configuration.

### 8. Stop the website

```bash
docker compose down
```

This stops and removes the Docker Compose service. It does not stop a separate Nginx server running directly on your computer.

## Features

- Static website served by Nginx
- Alpine-based Nginx image
- Custom Nginx configuration
- Custom 404 page
- JavaScript-powered frontend interactions
- Docker Compose service management
- Port mapping (`8082:80`)
- Read-only volume mounts
- Automatic restart policy
- Container health check
- Git and GitHub version control

## Learning Objectives

This project provides hands-on experience with:

- Building Docker images and running containers
- Managing services with Docker Compose
- Understanding ports, volumes, and health checks
- Configuring and troubleshooting Nginx
- Testing HTTP status codes and server configuration
- Tracking changes with Git and GitHub
- Preparing a containerized application for automated testing and CI/CD

## Author

**Erik Andersen**

Built as a hands-on project to learn Docker, web servers, and version control.

For an overview of the complete repository, see the [main README](../README.md).
