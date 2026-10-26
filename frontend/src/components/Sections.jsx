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
  const sectionNumber = {
    "ABOUT": "02",
    "EXPERIENCE": "03",
    "PROJECTS": "04",
    "SKILLS": "05",
    "QUALITY": "06",
    "QUALITY ASSURANCE": "06",
    "EDUCATION": "07",
    "MILESTONES": "08",
    "CONTACT": "09",
  }[label.split(" · ")[0]] ?? "01";

  return (
    <section className={`page-intro page-shell ${className}`}>
      <div className="page-intro-copy">
        <Eyebrow>{label}</Eyebrow>
        <h1>{title}</h1>
        {description && <p className="page-lede">{description}</p>}
      </div>
      <span className="page-intro-mark" aria-hidden="true">{sectionNumber}</span>
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
      <div className="product-preview">
        <div className="artwork-window-top">
          <span /><span /><span />
          <b>{project.name}</b>
          <small>UI STUDY · ILLUSTRATIVE</small>
        </div>
        <div className="mock-interface">
          <aside className="mock-sidebar">
            <i />
            <span />
            <span />
            <span />
            <span />
          </aside>
          <div className="mock-content">
            <div className="mock-heading">
              <span />
              <i />
            </div>
            {project.artwork === "safe-reach" ? (
              <div className="mock-map">
                <span className="map-route" />
                <i className="map-pin map-pin-start">A</i>
                <i className="map-pin map-pin-end">B</i>
                <span className="mock-status"><i /> JOURNEY ACTIVE</span>
              </div>
            ) : project.artwork === "assessment" ? (
              <div className="mock-question">
                <span />
                <i />
                <i />
                <i />
                <b><i /></b>
              </div>
            ) : (
              <div className="mock-deploy">
                <span><i /> BUILD COMPLETED</span>
                <div />
                <div />
                <div />
              </div>
            )}
            <div className="mock-ui-footer"><span /><span /><span /><span /></div>
          </div>
        </div>
      </div>
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
