const express = require("express");
const { access } = require("node:fs/promises");
const path = require("node:path");

const app = express();
const publicDirectory = path.join(__dirname, "public");
const indexFile = path.join(publicDirectory, "index.html");

app.disable("x-powered-by");
app.get("/api/health", (request, response) => {
  response.set("Cache-Control", "no-store").json({ status: "ok" });
});

app.use((request, response, next) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.set("Allow", "GET, HEAD").status(405).type("text/plain").send("Method not allowed");
    return;
  }

  next();
});

app.use(express.static(publicDirectory, {
  fallthrough: true,
  index: false,
  maxAge: "1h",
  setHeaders(response, filePath) {
    const fileName = path.basename(filePath);
    if (/[.-][a-z0-9_-]{8,}\./i.test(fileName)) {
      response.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    }
    response.setHeader("X-Content-Type-Options", "nosniff");
    response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  },
}));

app.use("/api", (request, response) => {
  response.status(404).type("text/plain").send("Not found");
});

app.get(/.*/, (request, response, next) => {
  if (path.extname(request.path)) {
    response.status(404).type("text/plain").send("Not found");
    return;
  }

  response.set("Cache-Control", "no-cache").sendFile(indexFile, (error) => {
    if (error) {
      next(error);
    }
  });
});

app.use((error, request, response, next) => {
  console.error("Unable to serve request:", error);
  if (response.headersSent) {
    next(error);
    return;
  }

  response.status(500).type("text/plain").send("Internal server error");
});

const port = Number(process.env.PORT ?? 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error(`Invalid PORT value: ${process.env.PORT}`);
}

async function startServer() {
  await access(indexFile);
  app.listen(port, "0.0.0.0", () => {
    console.log(`Portfolio server listening on port ${port}`);
  });
}

startServer().catch((error) => {
  console.error(`Unable to start portfolio server: ${error.message}`);
  process.exitCode = 1;
});
