import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import WorkPage from "./pages/WorkPage.jsx";

const pageMetadata = {
  "/": {
    title: "Alex Morgan — Software Engineer",
    description: "Alex Morgan is a senior software engineer building thoughtful digital products and dependable platforms.",
  },
  "/about": {
    title: "About — Alex Morgan",
    description: "How Alex Morgan thinks about engineering, collaboration, and building for the long term.",
  },
  "/work": {
    title: "Selected Work — Alex Morgan",
    description: "Selected product engineering, platform, and full-stack work by Alex Morgan.",
  },
  "/contact": {
    title: "Let’s Talk — Alex Morgan",
    description: "Get in touch with Alex Morgan about thoughtful software engineering and your next project.",
  },
};

function PageEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname];
    document.title = metadata?.title ?? "Page not found — Alex Morgan";

    const description = document.querySelector('meta[name="description"]');
    if (description && metadata) {
      description.setAttribute("content", metadata.description);
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
          <Route path="work" element={<WorkPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
