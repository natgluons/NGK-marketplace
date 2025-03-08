# NGK Marketplace

## Docker Instructions

### Prerequisites
- Docker
- Docker Compose

### Docker Commands

#### First Time Setup
```bash
# Build and start the containers
docker compose up --build
```

#### Production Deployment
```bash
# Install dependencies
npm install

# Build for production
npm run build

# The production files will be in the 'dist' directory
# These files are static and can be served by any web server

# If using nginx, copy the files to your web server directory:
cp -r dist/* /var/www/html/

# Or serve locally for testing:
npm install -g serve
serve -s dist
```

Note: For production deployment, make sure to:
1. Set proper environment variables
2. Configure your web server (nginx/apache) correctly
3. Set up SSL certificates for HTTPS
4. Configure proper security headers

#### Daily Usage
```bash
# Start the containers
docker compose up

# Start the containers in detached mode (run in background)
docker compose up -d

# Stop the containers
docker compose down

# Restart containers
docker compose restart

# View logs
docker compose logs

# View logs and follow them
docker compose logs -f

# Rebuild and restart containers (if you make changes to Dockerfile)
docker compose up --build

# Remove all containers and volumes (clean slate)
docker compose down -v
```

#### Additional Useful Commands
```bash
# View running containers
docker ps

# Enter the container shell
docker compose exec app sh

# View container resource usage
docker stats
```

The application will be available at: http://localhost:3000

### Troubleshooting

If you encounter issues:

1. Try stopping all containers and removing volumes:
```bash
docker compose down -v
```

2. Rebuild the containers:
```bash
docker compose up --build
```

3. If the issue persists, you can try cleaning Docker system:
```bash
docker system prune -a
docker volume prune
```
