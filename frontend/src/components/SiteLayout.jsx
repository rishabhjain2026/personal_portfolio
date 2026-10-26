import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { navigation, profile } from "../data/portfolio.js";

function OpeningMark() {
  const [show, setShow] = useState(
    () => !window.sessionStorage.getItem("rj-intro-seen"),
  );

  useEffect(() => {
    if (!show) return undefined;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const finish = () => {
      window.sessionStorage.setItem("rj-intro-seen", "true");
      setShow(false);
    };
    const timer = window.setTimeout(finish, reduceMotion ? 350 : 980);
    return () => window.clearTimeout(timer);
  }, [show]);

  if (!show) return null;
  return (
    <div className="opening-mark" role="status" aria-label="Rishabh Jain">
      <span>RJ<span className="accent-dot">.</span></span>
      <small>RISHABH JAIN · SOFTWARE DEVELOPER</small>
      <button
        type="button"
        className="intro-skip"
        onClick={() => {
          window.sessionStorage.setItem("rj-intro-seen", "true");
          setShow(false);
        }}
      >
        Skip intro
      </button>
    </div>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Rishabh Jain home">
        <span className="wordmark-mark">rj<span>.</span></span>
        <span className="wordmark-label">RISHABH JAIN</span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span />
      </button>
      <nav
        className={`nav-links${menuOpen ? " is-open" : ""}`}
        id="primary-nav"
        aria-label="Main navigation"
      >
        {navigation.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              [to === "/contact" ? "nav-cta" : "", isActive ? "active" : ""]
                .filter(Boolean)
                .join(" ")
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer page-shell">
      <div className="footer-main">
        <div className="footer-identity">
          <Link className="wordmark footer-wordmark" to="/" aria-label="Rishabh Jain home">
            <span className="wordmark-mark">rj<span>.</span></span>
            <span className="wordmark-label">RISHABH JAIN</span>
          </Link>
          <p>Thoughtful software.<br /><span>Carefully built and tested.</span></p>
        </div>
        <div className="footer-connect">
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
          <a href={`mailto:${profile.email}`}>{profile.email}<span aria-hidden="true"> ↗</span></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Rishabh Jain <span>· Built with curiosity and care.</span></p>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/education">Education</Link>
          <Link to="/achievements">Milestones</Link>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  const location = useLocation();

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <OpeningMark />
      <div className="portfolio-frame">
        <span className="frame-annotation frame-annotation-left" aria-hidden="true">RJ / PORTFOLIO — 2026</span>
        <span className="frame-annotation frame-annotation-right" aria-hidden="true">BUILD · TEST · REFINE</span>
        <SiteHeader />
        <div className="page-transition" key={location.pathname}>
          <Outlet />
        </div>
        <SiteFooter />
      </div>
    </>
  );
}
