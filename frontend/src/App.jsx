import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";
import AchievementsPage from "./pages/AchievementsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import EducationPage from "./pages/EducationPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import QualityPage from "./pages/QualityPage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import { profile, projects } from "./data/portfolio.js";

const pageMetadata = {
  "/": {
    title: "Rishabh Jain — Software Developer",
    description: "Rishabh Jain is a software developer interested in full-stack applications, backend APIs, and software quality.",
  },
  "/about": {
    title: "About — Rishabh Jain",
    description: "Meet Rishabh Jain and learn about his software development journey and engineering approach.",
  },
  "/experience": {
    title: "Experience — Rishabh Jain",
    description: "Software development internship experience with Webseeder and Brandsmashers.",
  },
  "/projects": {
    title: "Projects — Rishabh Jain",
    description: "Explore Rishabh Jain's software projects, including SafeReach and a React skills assessment.",
  },
  "/skills": {
    title: "Skills — Rishabh Jain",
    description: "A practical overview of Rishabh Jain's software development and quality assurance toolkit.",
  },
  "/quality": {
    title: "Quality Assurance — Rishabh Jain",
    description: "Explore testing scenarios and Rishabh Jain's quality-focused software development approach.",
  },
  "/education": {
    title: "Education — Rishabh Jain",
    description: "Computer Science and Engineering at Samrat Ashok Technological Institute in Vidisha.",
  },
  "/achievements": {
    title: "Milestones — Rishabh Jain",
    description: "Verified learning and software project milestones from Rishabh Jain.",
  },
  "/contact": {
    title: "Contact — Rishabh Jain",
    description: "Contact Rishabh Jain by email, LinkedIn, GitHub, or resume.",
  },
};

function PageEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const project = pathname.startsWith("/projects/")
      ? projects.find(({ slug }) => `/projects/${slug}` === pathname)
      : null;
    const metadata = project
      ? {
          title: `${project.name} — ${profile.name}`,
          description: project.summary,
        }
      : pageMetadata[pathname];
    document.title = metadata?.title ?? "Page not found — Rishabh Jain";

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        "content",
        metadata?.description ?? "Explore Rishabh Jain's software developer portfolio.",
      );
    }

    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <PageEffects />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="projects" element={<WorkPage />} />
          <Route path="projects/:projectId" element={<WorkPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="quality" element={<QualityPage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="achievements" element={<AchievementsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
