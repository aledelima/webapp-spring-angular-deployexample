# Use a Node.js 18 image to build the Angular app
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy the Angular project files
COPY . .

# Install dependencies
RUN npm install

# Build the Angular app
RUN npm run build --prod

# Use an NGINX image to serve the Angular app
FROM nginx:alpine

# Adjust the path to match the project structure
COPY --from=build /app/dist/frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
