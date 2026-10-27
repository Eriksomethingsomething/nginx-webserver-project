# Nginx Webserver Project

## Overview

This project demonstrates two ways to host websites using Nginx:

1. **Normal Nginx** — installed directly on Ubuntu Linux.
2. **Docker Nginx** — running inside a Docker container managed by Docker Compose.

The purpose of this project is to understand how web servers work, how websites are deployed, and the differences between traditional installation and containerization.

## Technologies Used

- Ubuntu Linux
- Nginx
- Docker
- Docker Compose
- HTML, CSS and JavaScript
- Git and GitHub
- VMware

## Project Structure

```text
nginx-webserver-project/
├── README.md
├── normal-nginx/
│   ├── index.html
│   ├── style.css
│   └── nginx-site.conf
├── docker-nginx/
│   ├── Dockerfile
│   ├── compose.yaml
│   ├── README.md
│   ├── html/
│   │   ├── index.html
│   │   ├── 404.html
│   │   ├── style.css
│   │   └── script.js
│   └── nginx/
│       └── default.conf
└── git-practice/
    └── README.md
```

The `normal-nginx/` directory contains the website files for the Nginx service installed directly on Ubuntu.

The `docker-nginx/` directory contains the Dockerfile, Docker Compose configuration, website files, and Nginx configuration for the containerized website.

The `git-practice/` directory contains notes and exercises for learning Git and GitHub.

## 1. Normal Nginx

Normal Nginx is installed directly on Ubuntu and runs as a Linux service.

**Configuration details**

- Web server: Nginx
- Host port: `80`
- Website: My Portfolio
- Service management: `systemctl`

### Useful Commands

Check whether Nginx is running:

```bash
sudo systemctl status nginx
```

Test the Nginx configuration:

```bash
sudo nginx -t
```

Reload Nginx after configuration changes:

```bash
sudo systemctl reload nginx
```

Check the local website from the Ubuntu machine:

```bash
curl -I http://localhost/
```

## 2. Docker Nginx

The Docker version runs Nginx inside a container. Docker Compose manages the container and its configuration.

**Configuration details**

- Web server: Nginx
- Host port: `8082`
- Container port: `80`
- Website: TRAILBOUND | Outdoor & Adventure
- Management: Docker Compose

Port mapping `8082:80` means that requests to port `8082` on the host are forwarded to port `80` inside the container.

### Start the Docker Website

Open a terminal in the `docker-nginx/` directory and run:

```bash
docker compose up -d --build
```

Check the running containers:

```bash
docker compose ps
```

View recent logs:

```bash
docker compose logs --tail=30
```

Check the website locally:

```bash
curl -I http://localhost:8082/
```

Stop the Docker project:

```bash
docker compose down
```

These Docker Compose commands manage the Docker project. They do not stop the separate normal Nginx service.

See [`docker-nginx/README.md`](docker-nginx/README.md) for more details about the Docker implementation.

## 3. Accessing the Websites

The websites have been tested in two Ubuntu environments.

| Environment | Normal Nginx — My Portfolio | Docker Nginx — TRAILBOUND |
|---|---|---|
| Ubuntu VM on MacBook | `http://192.168.116.128/` | `http://192.168.116.128:8082/` |
| Desktop Ubuntu | `http://192.168.136.130/` | `http://192.168.136.130:8082/` |

These are the IP addresses recorded during testing. They may change if the network configuration changes.

**Important:** `localhost` always refers to the machine on which the request is made. For example, `http://localhost/` in the MacBook's browser refers to macOS itself, not the Ubuntu virtual machine.

To access a website from another device, the host must be reachable over the network and the relevant port must be allowed through the firewall.

## 4. Main Differences

| Feature | Normal Nginx | Docker Nginx |
|---|---|---|
| Installation | Installed directly on Ubuntu | Runs inside a container |
| Management | `systemctl` | Docker Compose |
| Host port | `80` | `8082` |
| Containerization | Not containerized | Runs in a container |
| Configuration | Linux Nginx configuration | Dockerfile, Compose file and Nginx configuration |
| Main benefit | Simple system-level service | Portable and reproducible deployment |

## 5. Testing Checklist

- [ ] Confirm that the Ubuntu machine is running.
- [ ] Check the current IP address.
- [ ] Confirm that normal Nginx is running.
- [ ] Test the normal Nginx configuration with `sudo nginx -t`.
- [ ] Open the Portfolio website on port `80`.
- [ ] Confirm that the Docker container is running.
- [ ] Open the TRAILBOUND website on port `8082`.
- [ ] Check the Docker logs if something fails.
- [ ] Capture screenshots for the project presentation.

## 6. Learning Objectives

Through this project, I have gained practical experience with:

- Hosting websites using Nginx.
- Managing Linux services.
- Configuring and testing a web server.
- Building and running Docker containers.
- Using Docker Compose to manage applications.
- Understanding host ports and container ports.
- Troubleshooting local and network access.
- Maintaining project files with Git and GitHub.

## Conclusion

This project demonstrates two approaches to deploying a web server. Normal Nginx runs directly on Ubuntu as a system service, while Docker Nginx runs inside a container managed by Docker Compose.

Both approaches can serve websites, but they differ in deployment, isolation, configuration and management. Comparing them provides a practical introduction to Linux administration and containerization.

## Author

Erik Andersen

*Hands-on project exploring Nginx, Docker, Linux and web-server deployment.*