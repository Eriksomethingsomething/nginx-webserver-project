# Dockerized Web Server

A static website served by **Nginx inside a Docker container**, managed with Docker Compose. This project includes a custom 404 error page, health checks, restart policies, and read-only configuration and volume mounts.

## Overview

This project demonstrates how to build, configure, run, and troubleshoot a containerized web server using Docker and Nginx.

The website is available on the Docker host and can be accessed from other computers on the same network when network connectivity and firewall settings allow it.

## Technologies

- **HTML, CSS & JavaScript** — Website structure, styling, and interactivity
- **Nginx** — Serves static files and handles HTTP requests
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

| File or folder | Purpose |
|---|---|
| `html/` | Static website files |
| `html/index.html` | Main webpage |
| `html/style.css` | Website styling |
| `html/script.js` | Frontend interactivity |
| `html/404.html` | Custom missing-page content |
| `nginx/default.conf` | Nginx server configuration |
| `Dockerfile` | Defines how the Docker image is built |
| `compose.yaml` | Configures ports, volumes, health checks, and restart policy |
| `.dockerignore` | Excludes selected files from the Docker build context |
| `.gitignore` | Specifies files Git should ignore |

## How It Works

1. Docker builds an image using the Nginx base image specified in the Dockerfile.
2. The Dockerfile copies the website files and custom Nginx configuration into the image.
3. Docker Compose configures the service, including port mapping, read-only mounts, health checks, and restart policy.
4. Host port `8082` maps to port `80` inside the container.
5. Read-only mounts help prevent the container from modifying mounted files.
6. Nginx serves `index.html` as the default page.
7. Nginx serves the custom `404.html` page when a requested resource is not found, returning HTTP status `404`.
8. Docker periodically checks the health of the Nginx service.
9. The `unless-stopped` restart policy allows Docker to restart the service after unexpected stops unless it has been explicitly stopped.

## Getting Started

### Prerequisites

- Docker Engine or Docker Desktop
- Docker Compose plugin
- Git

### 1. Clone the repository

If you have not cloned the repository yet:

```bash
git clone https://github.com/Eriksomethingsomething/nginx-webserver-project.git
cd nginx-webserver-project/docker-nginx
```

Replace the repository URL if your actual GitHub username or repository URL differs.

If you already have the repository, open a terminal in the existing `docker-nginx` directory.

### 2. Build and start the website

```bash
docker compose up -d --build
```

This builds the Docker image and starts the service in the background.

### 3. Check the container status

```bash
docker compose ps
```

The container should eventually report `healthy` if its configured health check succeeds.

### 4. Open the website

**On the machine running Docker:**

[http://localhost:8082/](http://localhost:8082/)

**From another computer on the same network:**

[http://192.168.116.128:8082/](http://192.168.116.128:8082/)

The network URL assumes `192.168.116.128` is the current, reachable IP address of the Docker host. If the server's IP address changes, use the new address.

The client computer must be able to reach the server, and any relevant firewall rules must permit TCP port `8082`.

### 5. Test the custom 404 page

Open the following URL on the Docker host:

[http://localhost:8082/doesnotexist](http://localhost:8082/doesnotexist)

Or, from another computer on the network:

[http://192.168.116.128:8082/doesnotexist](http://192.168.116.128:8082/doesnotexist)

Nginx should display the custom TRAILBOUND 404 page.

Verify the HTTP status code from the Docker host:

```bash
curl -i http://localhost:8082/doesnotexist
```

The response should begin with:

```text
HTTP/1.1 404 Not Found
```

**Verified:** The custom 404 HTML was returned, and the server responded with HTTP `404 Not Found`.

### 6. Check container health

```bash
docker compose ps
```

If the service remains in `starting` or becomes `unhealthy`, inspect the logs and verify the health-check configuration.

### 7. View logs

Display the service logs:

```bash
docker compose logs website
```

Display only the latest 30 lines:

```bash
docker compose logs --tail=30 website
```

### 8. Validate the Nginx configuration

```bash
docker compose exec website nginx -t
```

This checks the Nginx configuration inside the running container.

### 9. Rebuild after making changes

If you modify files copied into the Docker image, rebuild and recreate the service:

```bash
docker compose up -d --build
```

If the files are mounted as volumes, changes may become available without rebuilding, depending on the mount configuration.

### 10. Stop the website

```bash
docker compose down
```

This stops and removes the Compose-managed containers and network. It does not remove the built image or stop a separate Nginx server running directly on the host.

## Features

- Static website served by Nginx
- Alpine-based Nginx image
- Custom Nginx configuration
- Custom TRAILBOUND 404 error page
- JavaScript-powered frontend interactions
- Docker Compose service management
- Host-to-container port mapping (`8082:80`)
- Read-only configuration and volume mounts
- Automatic restart policy
- Container health check
- Git and GitHub version control

## Learning Objectives

This project provides hands-on experience with:

- Building Docker images and running containers
- Managing services with Docker Compose
- Understanding port mapping, volumes, and health checks
- Configuring and troubleshooting Nginx
- Testing HTTP status codes and server responses
- Understanding local versus network access
- Tracking changes with Git and GitHub
- Preparing a containerized application for automated testing and CI/CD

## Author

**Erik Andersen**

Built as a hands-on project to learn Docker, web servers, Nginx configuration, and version control.

For an overview of the complete repository, see the [main README](../README.md).
