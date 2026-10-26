# Rishabh Jain — Software Developer Portfolio

A responsive, dark-themed, multi-page React portfolio with a cinematic hero, lightweight motion, project detail pages, and a clearly labeled QA demonstration. The portfolio content is kept in `frontend/src/data/portfolio.js`.

## Run locally

Use Node.js 20 or newer. In PowerShell, install dependencies and start the Vite development server:

```powershell
cd frontend
npm ci
npm run dev
```

Vite prints the local URL (usually `http://localhost:5173`). Open each route directly, including `/projects/safe-reach` and `/quality`, to verify navigation and refresh behavior.

## Build and run the production app

```powershell
cd frontend
npm run build
cd ..\backend
npm ci
npm start
```

The default server address is `http://localhost:3000`; set `PORT` in the host environment to change it. The existing Vite build writes to `backend/public`, and Express serves that build and falls back to the React app for client-side routes. `GET /api/health` returns `{"status":"ok"}`. The portfolio does not need a database, API credentials, or `.env` file.

## Docker and AWS

Build the image from the repository root; the multi-stage Dockerfile builds the frontend, installs only backend production dependencies in the runtime image, and serves the static build from Express:

```powershell
docker build -t rishabh-jain-portfolio .
docker run --rm -p 3000:3000 -e PORT=3000 rishabh-jain-portfolio
```

Open `http://localhost:3000`. For AWS, publish and run the image using your own registry, instance, networking, and environment settings. Allow inbound traffic only on the port exposed by your service. No cloud resources are created or changed by this project.

## Vercel frontend

Create a Vercel project from the same repository and set **Root Directory** to `frontend`. The included `frontend/vercel.json` configures the Vite build output and rewrites deep links to the React entry point. On Vercel, Vite writes to `frontend/dist`; for local and Express/Docker builds, it continues writing to `backend/public`.

Vercel serves the frontend only. It does not run the Express server from this deployment. The current portfolio has no frontend API dependency: contact uses `mailto:` and there is no contact form or message storage. If a future feature calls the Express API from the Vercel site, host that backend separately and configure an explicit allowlist for the Vercel origin before adding cross-origin requests.

## Portfolio content and interactions

- Update verified profile and project content in `frontend/src/data/portfolio.js`.
- Resume access points to the supplied Google Drive link; email opens the email application's `mailto:` handler.
- The QA scenario selector is an illustrative example only. It does not issue an API request or access a database.
- Project features are based on the corresponding public repositories. Only the assessment repository advertises a live URL; other projects link to their source repositories.
- The introductory mark is shown once per browser session and can be skipped. Scroll reveals and the interface respect reduced-motion preferences.
- No animation library or contact-service dependency is required.

## Validation

Run `npm run build` from `frontend` to verify and generate the production frontend. Run `npm start` from `backend` after building, then visit `/api/health` and refresh a nested route such as `/projects/safe-reach`. Docker and Vercel deployment behavior depends on your deployment configuration and should be checked in those environments.
