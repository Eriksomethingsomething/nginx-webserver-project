# Nginx Webserver Project

## Overview

This project demonstrates two ways to host a website using Nginx:

1. Normal Nginx installed directly on Ubuntu Linux.
2. Nginx running inside a Docker container.

Both servers serve a website, but they use different deployment methods.

## 1. Normal Nginx on Ubuntu

- Platform: Ubuntu Linux in VMware
- Web server: Nginx installed directly on Linux
- URL: http://192.168.136.130/
- Nginx configuration: /etc/nginx/sites-available/myserver
- Website directory on Ubuntu: /var/www/myserver/html/

The `normal-nginx` folder in this project contains copies of the website files used for development and presentation.

Useful commands on Ubuntu:

```bash
sudo systemctl status nginx
sudo nginx -t
sudo systemctl reload nginx
```

## 2. Nginx with Docker

- Platform: Docker
- Configuration files: `docker-nginx/Dockerfile` and `docker-nginx/compose.yaml`
- Website URL on the Ubuntu VM: http://192.168.136.130:8082/
- Container port: 80
- Published host port: 8082

To start the Docker project, open a terminal in the `docker-nginx` directory and run:

```bash
docker compose up -d --build
docker compose ps
```

To stop it:

```bash
docker compose down
```

These commands affect the Docker project only, not the normal Nginx service.

## Main Differences

| Feature | Normal Nginx | Docker Nginx |
| --- | --- | --- |
| Installation | Directly on Ubuntu | Inside a container |
| Management | systemctl | Docker Compose |
| Website port | 80 | 8082 on the host |
| Isolation | Runs on the Linux system | Runs in a container |

## Presentation Checklist

- Start the Ubuntu VMware machine.
- Check that the Ubuntu IP address is correct.
- Open the normal website at http://192.168.136.130/.
- Open the Docker website at http://192.168.136.130:8082/.
- Explain the difference between direct installation and containerization.

Note: The IP address may change if the Ubuntu VM's network configuration changes.
