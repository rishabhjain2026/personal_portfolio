import { Link } from "react-router-dom";
import { CallToAction, ProjectArtwork } from "../components/Sections.jsx";

function DeveloperIllustration() {
  return (
    <div className="hero-visual" aria-label="An animated developer workspace">
      <div className="visual-grid" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="float-tag tag-top"><span className="tag-mark">✳</span> systems thinker</div>
      <div className="float-tag tag-bottom"><span className="tag-pulse" /> currently building</div>
      <div className="terminal-card">
        <div className="terminal-top">
          <div className="window-dots"><i /><i /><i /></div>
          <span>good-work.ts</span><span className="terminal-menu">···</span>
        </div>
        <div className="terminal-content">
          <p><span className="code-muted">01</span> <span className="code-purple">const</span> <span className="code-white">approach</span> = {"{"}</p>
          <p><span className="code-muted">02</span> &nbsp; craft: <span className="code-green">"intentional"</span>,</p>
          <p><span className="code-muted">03</span> &nbsp; details: <span className="code-green">"considered"</span>,</p>
          <p><span className="code-muted">04</span> &nbsp; impact: <span className="code-green">"real"</span>,</p>
          <p><span className="code-muted">05</span> {"}"};</p>
          <p className="terminal-blank"><span className="code-muted">06</span></p>
          <p><span className="code-muted">07</span> <span className="code-purple">await</span> <span className="code-orange">makeItMatter</span>(approach)<span className="cursor">▍</span></p>
        </div>
        <div className="terminal-bottom">
          <span><span className="tiny-green-dot" /> all systems thoughtful</span>
          <span>UTF-8&nbsp;&nbsp; TypeScript</span>
        </div>
      </div>
      <div className="visual-caption"><span>FIG. 01</span><span>THE WORK IS THE POINT.</span></div>
      <span className="orbit-star" aria-hidden="true">✳</span>
    </div>
  );
}

function ProjectCard({ name, description, variant, category, year, id }) {
  return (
    <Link className="project-card" to={`/work#${id}`}>
      <ProjectArtwork variant={variant} index={variant === "goodform" ? "02" : "01"} label={category} />
      <div className="project-info">
        <div><h3>{name}</h3><p>{description}</p></div>
        <span className="project-arrow">↗</span>
      </div>
      <div className="project-tags"><span>{category}</span><span>{year}</span></div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS <span className="eyebrow-year">· 2026</span></p>
          <h1>I build things<br />for the <span className="serif-italic">real world.</span></h1>
          <p className="hero-description">Senior software engineer turning complex problems into clear, reliable digital experiences. Thoughtful by design. Solid under the hood.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/work">Explore my work <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" to="/about">A little about me <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-meta"><span>BASED IN BROOKLYN, NY</span><span className="meta-divider" /><span>BUILDING EVERYWHERE</span></div>
        </div>
        <DeveloperIllustration />
      </section>

      <section className="intro-strip page-shell">
        <span className="strip-label">A GOOD FIT FOR</span>
        <p>Ambitious ideas<span> · </span>Complex systems<span> · </span>Teams who care</p>
        <Link to="/about" aria-label="Learn how I work">↗</Link>
      </section>

      <section className="featured page-shell">
        <div className="section-heading">
          <div><p className="eyebrow">A FEW THINGS I’VE WORKED ON</p><h2>Selected <span className="serif-italic">work.</span></h2></div>
          <Link className="text-link" to="/work">View all projects <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="project-grid">
          <ProjectCard id="northstar" name="Northstar" description="A calmer command center for complex operations." variant="northstar" category="PRODUCT ENGINEERING" year="2024" />
          <ProjectCard id="goodform" name="Goodform" description="Making everyday wellness feel a little more human." variant="goodform" category="FULL-STACK DEVELOPMENT" year="2023" />
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
