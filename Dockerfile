# Build stage
FROM node:14 as build

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy all source code to the container
COPY . .

# Build the React application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the built React files from the build stage to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

