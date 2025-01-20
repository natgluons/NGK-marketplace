# Use Node.js base image
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies and Vue CLI service globally
RUN npm install -g @vue/cli @vue/cli-service
RUN npm install

# Copy the rest of your application
COPY . .

# Add environment variable to allow connections
ENV HOST=0.0.0.0

# Build the Vue.js app
RUN npm run build

# Expose the port Vue.js serves on (default 8080)
EXPOSE 3000
ENV PORT=3000

# Start the application
CMD ["npm", "run", "serve"]