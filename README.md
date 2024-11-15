
# Web Application Deployment POC (Angular - Spring)

This repository is a POC (Proof of Concept) created in response to an issue faced by Victor Almada. The problem involved deploying a web application where the Angular SPA was unable to reach the backend API, built with Java/Spring, using the container's service name.

The proposed solution uses relative routes for frontend API requests and a reverse proxy with Nginx to route incoming requests to the corresponding backend endpoints.

---

## Instructions

### 1. Development

If you are developing, launch the Angular application with the following command:

```bash
ng serve --proxy-config proxy.conf.json --open
```

This will serve the Angular application locally and route API requests to the backend via the proxy configuration.

### 2. Deployment

To deploy the application, follow these steps:

1. Build and start the Docker containers:

   ```bash
   docker compose up -d
   ```

2. Verify that the containers are running:

   ```bash
   docker ps
   ```

This will launch the frontend and backend containers in detached mode.

### 3. Stopping the Application

To stop the application, run:

```bash
docker compose down
```

This will stop and remove all containers associated with the application.

---

## Notes

- Ensure Docker and Node.js are installed before starting development or deployment.
- Angular automatically reloads changes during development when running `ng serve`.
