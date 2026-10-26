import { Link } from "react-router-dom";

export function Eyebrow({ children, available = false }) {
  return (
    <p className="eyebrow">
      {available && <span className="status-dot" />}
      {children}
    </p>
  );
}

export function CallToAction({ eyebrow = "HAVE A GOOD ONE IN MIND?", title = <>Let’s make<br /><span className="serif-italic">it real.</span></> }) {
  return (
    <section className="home-cta page-shell">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="cta-row">
        <h2>{title}</h2>
        <Link className="round-link" to="/contact" aria-label="Start a conversation">↗</Link>
      </div>
      <a className="cta-email" href="mailto:hello@example.com">hello@example.com <span>↗</span></a>
    </section>
  );
}

export function ProjectArtwork({ variant, index, label }) {
  if (variant === "goodform" || variant === "goodform-work") {
    return (
      <div className={variant === "goodform-work" ? "work-art goodform-visual" : "project-visual goodform-visual"}>
        <span className="goodform-stamp">good<br />form<span>®</span></span>
        <span className="goodform-caption">A healthier relationship with the everyday.</span>
        <span className="visual-index">{index} / {label}</span>
      </div>
    );
  }

  if (variant === "fieldnotes") {
    return (
      <div className="work-art fieldnotes-visual">
        <div className="fieldnotes-paper">
          <span>FIELD<br />NOTES</span>
          <i>ISSUE 08 — 2022</i>
          <b>Make room<br />for the work.</b>
        </div>
        <span className="visual-index">{index} / {label}</span>
      </div>
    );
  }

  return (
    <div className={variant === "northstar-work" ? "work-art northstar-visual" : "project-visual northstar-visual"}>
      <span className="project-orb orb-blue" />
      <span className="project-window">
        <i /><i /><i /><b>northstar / overview</b><span className="chart-line" />
      </span>
      <span className="visual-index">{index} / {label}</span>
    </div>
  );
}

export function WorkProject({ id, variant, index, label, category, year, name, summary, role, focus }) {
  return (
    <article className="work-entry" id={id}>
      <ProjectArtwork variant={variant} index={index} label={label} />
      <div className="work-details">
        <Eyebrow>{category} · {year}</Eyebrow>
        <h2>{name}</h2>
        <p>{summary}</p>
        <div className="work-meta">
          <div><span>MY ROLE</span><p>{role}</p></div>
          <div><span>FOCUS</span><p>{focus}</p></div>
        </div>
      </div>
    </article>
  );
}
