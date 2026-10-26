export const profile = {
  name: "Rishabh Jain",
  initials: "RJ",
  portrait: "/rishabh-jain-profile.jpg",
  email: "Rishabh.tech26@gmail.com",
  location: "Vidisha, Madhya Pradesh",
  linkedin: "https://www.linkedin.com/in/rishabh-jain-b64347276/",
  github: "https://github.com/rishabhjain2026",
  resume:
    "https://drive.google.com/file/d/10WcCqgYD3ysSQdeNojoE19BfsRyZdL1I/view",
  education:
    "Computer Science and Engineering graduate from Samrat Ashok Technological Institute, Vidisha, Madhya Pradesh.",
  experienceSummary:
    "Approximately six months of hands-on software development internship experience, including placements with Webseeder and Brandsmashers.",
};

export const navigation = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/quality", label: "QA" },
  { to: "/education", label: "Education" },
  { to: "/achievements", label: "Milestones" },
  { to: "/contact", label: "Contact" },
];

export const projects = [
  {
    slug: "safe-reach",
    name: "SafeReach",
    shortName: "SR",
    category: "SAFETY · FULL STACK",
    summary:
      "A web and mobile safety application built around journeys, location tracking, and keeping trusted contacts informed.",
    description:
      "SafeReach brings journey tracking and personal safety workflows together. Its public repository includes separate frontend and backend applications, authenticated routes, journey and contact features, tracking, and safety-event and notification modules.",
    contribution:
      "A full-stack project in Rishabh's public portfolio. The repository documents the implementation; individual contribution details have not been independently verified.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    features: [
      "Journey and contact management routes",
      "Location tracking and device-related endpoints",
      "Safety events and notification modules",
      "Authentication and validation middleware",
    ],
    challenges: [
      "Keeping safety-related flows split into clear backend modules",
      "Connecting journey, tracking, and contact workflows",
      "Separating authenticated routes from public access",
    ],
    github: "https://github.com/rishabhjain2026/Safe_Reach_safety",
    artwork: "safe-reach",
  },
  {
    slug: "skills-assessment",
    name: "Aimerz Skills Assessment",
    shortName: "AS",
    category: "REACT · INTERACTIVE ASSESSMENT",
    summary:
      "A timed, single-page skills assessment with saved progress, a score summary, and answer review.",
    description:
      "A responsive React assessment with ten multiple-choice questions, a ten-minute timer, saved progress, a results summary, and a review of submitted answers. The public project documentation describes a browser-based quiz; it does not substantiate AI-generated scoring or AI assessment features.",
    contribution:
      "A frontend React project documented in the public repository. The project README describes its features and local setup.",
    stack: ["React", "JavaScript", "Vite", "localStorage"],
    features: [
      "Timed, ten-question assessment flow",
      "Progress persistence in the browser",
      "Score summary and answer review",
      "Responsive single-page interface",
    ],
    challenges: [
      "Keeping timer and quiz actions in one assessment state flow",
      "Restoring saved progress on a return visit",
      "Making submitted answers easy to review",
    ],
    github:
      "https://github.com/rishabhjain2026/Ai_Online_Assessment_application",
    live: "https://ai-online-assessment-application.vercel.app/",
    artwork: "assessment",
  },
  {
    slug: "container-deployment",
    name: "Docker + AWS deployment",
    shortName: "DA",
    category: "DEPLOYMENT · DOCKER",
    summary:
      "A containerized React and Express portfolio workflow designed to run from a single production image.",
    description:
      "The public repository demonstrates a split Vite frontend and Express backend, with the production frontend built into the directory served by Express. Its root Dockerfile packages the application for container deployment.",
    contribution:
      "A deployment project in Rishabh's public portfolio. Repository structure and its deployment notes are the available evidence; cloud configuration and current service health have not been verified here.",
    stack: ["Docker", "Node.js", "Express", "React", "Vite", "AWS"],
    features: [
      "Separate frontend and backend package manifests",
      "Production frontend build served by Express",
      "Container-based application packaging",
      "A health-check endpoint in the backend",
    ],
    challenges: [
      "Serving client-side routes from the Express production server",
      "Keeping build output and runtime image responsibilities clear",
      "Using the deployment platform's port configuration",
    ],
    github: "https://github.com/rishabhjain2026/aws-deployment",
    artwork: "deployment",
  },
];

export const skillGroups = [
  {
    name: "Frontend",
    level: "PROJECT EXPERIENCE",
    skills: ["JavaScript", "React", "HTML", "CSS", "Vite"],
  },
  {
    name: "Backend & APIs",
    level: "PROJECT EXPERIENCE",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    name: "Data",
    level: "PROJECT EXPERIENCE",
    skills: ["MongoDB", "PostgreSQL", "SQL", "Prisma"],
  },
  {
    name: "Programming",
    level: "WORKING KNOWLEDGE",
    skills: ["Java", "JavaScript"],
  },
  {
    name: "Tools & delivery",
    level: "HANDS-ON",
    skills: ["Git", "GitHub", "Postman", "Docker", "AWS"],
  },
  {
    name: "Quality mindset",
    level: "PRACTICE & INTEREST",
    skills: [
      "Manual testing",
      "API validation",
      "Regression checks",
      "Bug reporting",
    ],
  },
];

export const internshipOrganizations = ["Webseeder", "Brandsmashers"];

export const testingScenarios = [
  {
    id: "login",
    label: "Login API",
    method: "POST",
    endpoint: "/api/auth/login",
    caseName: "Missing password",
    expected: "Reject the request with a validation error.",
    note: "Illustrative case — not an executed test against a live service.",
  },
  {
    id: "journey",
    label: "Journey tracking",
    method: "POST",
    endpoint: "/api/journeys",
    caseName: "Unauthenticated request",
    expected: "Deny access before creating a journey.",
    note: "Illustrative case — based on a publicly documented project domain.",
  },
  {
    id: "database",
    label: "Data integrity",
    method: "SQL",
    endpoint: "journeys.owner_id",
    caseName: "Cross-user access",
    expected: "Return only rows owned by the authenticated user.",
    note: "Illustrative validation idea — no production database was queried.",
  },
];

export const learningMilestones = [
  {
    number: "01",
    title: "Built across the stack",
    detail:
      "Public project repositories span React interfaces, Express APIs, database-backed modules, and a containerized deployment workflow.",
  },
  {
    number: "02",
    title: "Made assessment flows interactive",
    detail:
      "A documented React quiz combines a timer, answer state, browser persistence, and a results review.",
  },
  {
    number: "03",
    title: "Added a quality lens",
    detail:
      "Exploring negative paths, API contracts, data integrity, and regression checks alongside feature development.",
  },
];
