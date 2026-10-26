import { Link } from "react-router-dom";
import { profile } from "../data/portfolio.js";
import { useReveal } from "../hooks/useReveal.js";

export function Eyebrow({ children, dot = false }) {
  return (
    <p className="eyebrow">
      {dot && <span className="status-dot" aria-hidden="true" />}
      {children}
    </p>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  ariaHidden,
}) {
  const { ref, visible } = useReveal();
  return (
    <Tag
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      ref={ref}
      aria-hidden={ariaHidden}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function PageIntro({ label, title, description, className = "" }) {
  return (
    <section className={`page-intro page-shell ${className}`}>
      <Eyebrow>{label}</Eyebrow>
      <h1>{title}</h1>
      {description && <p className="page-lede">{description}</p>}
    </section>
  );
}

export function SectionHeading({ eyebrow, title, link, linkLabel }) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
      </div>
      {link && (
        <Link className="text-link" to={link}>
          {linkLabel} <span aria-hidden="true">↗</span>
        </Link>
      )}
    </div>
  );
}

export function ProjectArtwork({ project, large = false }) {
  return (
    <div
      className={`project-artwork artwork-${project.artwork}${large ? " artwork-large" : ""}`}
      aria-hidden="true"
    >
      <div className="artwork-grid" />
      <div className="artwork-window">
        <div className="artwork-window-top">
          <span /><span /><span />
          <b>{project.slug}.js</b>
        </div>
        <div className="artwork-code">
          <span>01</span> <i>const</i> <b>{project.shortName.toLowerCase()}</b> = {"{"}
          <br />
          <span>02</span> &nbsp; build: <em>"with care"</em>,
          <br />
          <span>03</span> &nbsp; quality: <em>"in the details"</em>
          <br />
          <span>04</span> {"}"}
          <strong>▍</strong>
        </div>
      </div>
      <span className="artwork-index">{project.category}</span>
      <span className="artwork-orbit" />
    </div>
  );
}

export function ProjectCard({ project, index = "01" }) {
  return (
    <Reveal className="project-card-wrap">
      <Link className="project-card" to={`/projects/${project.slug}`}>
        <ProjectArtwork project={project} />
        <div className="project-info">
          <div>
            <span className="project-card-index">{index} / {project.category}</span>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
          </div>
          <span className="project-arrow" aria-hidden="true">↗</span>
        </div>
        <span className="project-tags">
          {project.stack.slice(0, 4).join(" · ")}
        </span>
      </Link>
    </Reveal>
  );
}

export function CallToAction({
  eyebrow = "A GOOD PLACE TO START",
  title = <>Let’s build<br /><span className="serif-italic">something useful.</span></>,
}) {
  return (
    <section className="home-cta page-shell">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="cta-row">
        <h2>{title}</h2>
        <Link className="round-link" to="/contact" aria-label="Go to contact page">
          ↗
        </Link>
      </div>
      <a className="cta-email" href={`mailto:${profile.email}`}>
        {profile.email} <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}

export function SkillPills({ items }) {
  return (
    <ul className="skill-pills">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}
