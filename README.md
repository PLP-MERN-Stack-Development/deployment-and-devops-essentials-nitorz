# Week 7: Deployment and DevOps Essentials – MERN App Submission

This archive contains a production-ready MERN application scaffold + CI/CD and deployment configuration
prepared for submission.

## What is included
- `client/` — React frontend (build-ready)
- `server/` — Express backend (production-ready with logging, helmet, env support)
- `.github/workflows/ci-cd.yml` — GitHub Actions workflow for CI and CD (example)
- `docker/` — Dockerfiles and `docker-compose.prod.yml` for production
- `scripts/deploy.sh` — Example deploy script (for manual deploys)
- `docs/` — Deployment & monitoring documentation
- `.env.example` files for both client and server

## How to use
1.clone the repo
2. Follow `docs/deployment.md` to configure environment variables and deploy to your chosen provider.
3. Replace placeholders in `.env` files with real secrets (do not commit secrets to GitHub).

## Notes
- This is a template and must be connected to a real MongoDB Atlas cluster and hosting provider.
- CI/CD workflow contains placeholders for secrets that must be configured in GitHub repository settings.

