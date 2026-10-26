# Alex Morgan — developer portfolio

A responsive React portfolio with an Express server. The React application and its dependencies live in `frontend`; the Express server and its dependencies live in `backend`. Vite generates the frontend production build directly into `backend/public`, which Express serves with static middleware. There is no database or `.env` file.

## Run locally

Install Node.js 20 or newer, install each application's dependencies from its own folder, and start the Vite development server:

```sh
cd frontend
npm ci
npm run dev
```

Open the Vite URL printed in the terminal (usually `http://localhost:5173`). To build the frontend and run the production server:

```sh
cd frontend
npm run build
cd ../backend
npm ci
npm start
```

The production server defaults to `http://localhost:3000`, reads the hosting platform's `PORT` setting when provided, serves the built React app from `backend/public`, and responds to `GET /api/health` with `{"status":"ok"}`. Each folder has its own `package.json`, lockfile, and `node_modules`.

## Deploy to AWS

The root `Dockerfile` builds the frontend and backend separately, then packages the frontend build with the production Express server. Build the image from the project root so Docker can access both folders. The server binds to `0.0.0.0` and uses the `PORT` supplied by AWS. No database or `.env` file is required.

## Personalize before publishing

The name, biography, location, availability, email address, social links, project descriptions, skills, dates, and metadata are sample portfolio content. Replace them with accurate details in the React components under `frontend/src/pages` and `frontend/src/components`. Search those files for `Alex Morgan`, `Brooklyn`, and `hello@example.com`. Update page metadata in `frontend/src/App.jsx` and `frontend/index.html` as well. The sample projects and experience are illustrative and should not be presented as your own until replaced.

The contact link opens the visitor's email application; the server does not store or send messages.




















ec2 instance kar aws par instance create kar 

id par click karke connce kar 

in ssh clientt


how to connce vali command dikhagi uskio run kar in terminla in root directoy

connet ho gy ec2 machine par ab jo install karna ha vo kar sakhtrah ha apan

sudo dnf update -y


sudo dnf install -y docker
install docker on aws

now to set the same environment we use image

image create kar then on docker hub then pust to aws


in aws terminal
docker build -t deployment-fullstack

docker run -p 5050:3000 imagename


image ko docker hub par dal de


docker login

sudo docker tag deployment-fullstack:latest rishabh16009/portfolio:latest

docker push rishabh16009/portfolio:tagname


docker pull rishabh16009/portfolio
jo docker hub pad dala usko aws par lane ka,liya

