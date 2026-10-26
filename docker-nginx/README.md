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
my-webserver-image/
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

| File or folder | Purpose |
|---|---|
| `html/` | Website files |
| `html/index.html` | Main webpage |
| `html/style.css` | Website styling |
| `html/script.js` | Adds website interactivity, including product filters, mobile navigation, and a demo cart counter |
| `html/404.html` | Custom missing-page content |
| `nginx/default.conf` | Nginx server configuration |
| `Dockerfile` | Defines how the image is built |
| `compose.yaml` | Configures ports, volumes, health checks, and restart policy |
| `.dockerignore` | Excludes selected files from the build context |
| `.gitignore` | Specifies files Git should ignore |

## How It Works

1. Docker builds an image using `nginx:1.31.7-alpine` as its base image.
2. The Dockerfile copies the website files and custom Nginx configuration into the image.
3. Docker Compose configures the service, including port mapping, read-only volume mounts, and a health check.
4. Port `8082` on the host maps to port `80` inside the container.
5. Read-only mounts make local HTML, CSS, JavaScript, and Nginx configuration files available to the running container during development.
6. Nginx serves a custom 404 page for missing URLs.
7. Docker periodically checks whether Nginx responds to a local HTTP request.
8. The `unless-stopped` restart policy allows Docker to restart the service after unexpected stops.

## Getting Started

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Eriksomethingsomething/my-webserver-image.git
cd my-webserver-image
```

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

The service should eventually report `healthy` if the health check succeeds.

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

## Features

- Static website served by Nginx
- Version-tagged Alpine-based Nginx image
- Custom Nginx configuration
- Custom 404 page
- JavaScript-powered frontend interactions
- Demo cart counter (no real checkout or payment processing)
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

*Built as a hands-on project to learn Docker, web servers, and version control.*