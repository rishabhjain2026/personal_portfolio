import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const navigation = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/work", label: "Selected work" },
];

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Alex Morgan home" onClick={closeMenu}>am<span>.</span></Link>
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
      <nav className={`nav-links${menuOpen ? " is-open" : ""}`} id="primary-nav" aria-label="Main navigation">
        {navigation.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} onClick={closeMenu}>
            {label}
          </NavLink>
        ))}
        <NavLink className="nav-contact" to="/contact" onClick={closeMenu}>
          Let’s talk <span aria-hidden="true">↗</span>
        </NavLink>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer page-shell">
      <Link className="wordmark" to="/" aria-label="Alex Morgan home">am<span>.</span></Link>
      <p>Made with care, in Brooklyn. <span>© 2026 Alex Morgan</span></p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">GITHUB ↗</a>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  );
}
