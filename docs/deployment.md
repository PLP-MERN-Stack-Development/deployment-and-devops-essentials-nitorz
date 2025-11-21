# Deployment Guide (example)

## Prerequisites
- GitHub repository with this code
- MongoDB Atlas cluster (create cluster, add network IP and DB user)
- Hosting platform:
  - Backend: Render / Railway / Heroku / DigitalOcean App Platform
  - Frontend: Vercel / Netlify / GitHub Pages

## Environment variables
Copy `.env.example` to `.env` and fill secrets.

## Backend (Render example)
1. Create a new Web Service on Render.
2. Connect your GitHub repo, choose `server/` as the root.
3. Set the environment variables (MONGO_URI, NODE_ENV, PORT, JWT_SECRET).
4. Add a health check path `/health`.
5. Enable automatic deploys from `main` branch.

## Frontend (Vercel example)
1. Connect repo and set the root to `client/`.
2. Set `REACT_APP_API_URL` to your backend URL.
3. Enable automatic deploys.

## Database
- Use MongoDB Atlas
- Create a least-privilege user for production with a strong password
- Use IP allowlist or VPC peering

## Backups
- Use Atlas built-in backups or schedule mongodump exports.

## Rollback
- Use provider's rollback or redeploy a previous commit.

