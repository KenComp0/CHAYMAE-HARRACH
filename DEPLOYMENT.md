# Deployment Guide

## Building for Production

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

This will:
- Build the React client to `dist/public/`
- Bundle the Express server to `dist/index.cjs`

## Running in Production

1. Set the environment variable:
```bash
NODE_ENV=production node dist/index.cjs
```

Or on Windows PowerShell:
```powershell
$env:NODE_ENV="production"; node dist/index.cjs
```

2. The server will start on the port specified by the `PORT` environment variable (defaults to 5000).

## Environment Variables

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Set to `production` for production builds

## Deployment Platforms

### Vercel / Netlify
For static-only deployment, you can deploy just the `dist/public` folder.

### Node.js Hosting (Railway, Render, etc.)
Deploy the entire project and run:
```bash
npm run build
NODE_ENV=production node dist/index.cjs
```

### Docker
Create a Dockerfile:
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["node", "dist/index.cjs"]
```

