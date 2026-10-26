import { Link } from "react-router-dom";
import { CallToAction, Eyebrow, ProjectCard, Reveal, SectionHeading, SkillPills } from "../components/Sections.jsx";
import { profile, projects, skillGroups } from "../data/portfolio.js";
import { usePointerGlow } from "../hooks/usePointerGlow.js";

function CodeVisual() {
  const visualRef = usePointerGlow();
  return (
    <div ref={visualRef} className="hero-visual" aria-label="Animated code editor illustration">
      <div className="visual-grid" />
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <span className="float-tag tag-top"><span className="tag-mark">✳</span> build with intent</span>
      <span className="float-tag tag-bottom"><span className="tag-pulse" /> test the edge cases</span>
      <div className="terminal-card">
        <div className="terminal-top">
          <div className="window-dots"><i /><i /><i /></div>
          <span>approach.js</span>
          <span className="terminal-menu">···</span>
        </div>
        <div className="terminal-content" aria-hidden="true">
          <p><span className="code-muted">01</span> <span className="code-purple">const</span> <span className="code-white">approach</span> = {"{"}</p>
          <p><span className="code-muted">02</span> &nbsp; build: <span className="code-green">"useful software"</span>,</p>
          <p><span className="code-muted">03</span> &nbsp; debug: <span className="code-green">"with curiosity"</span>,</p>
          <p><span className="code-muted">04</span> &nbsp; test: <span className="code-green">"the details"</span></p>
          <p><span className="code-muted">05</span> {"}"};</p>
          <p className="terminal-blank"><span className="code-muted">06</span></p>
          <p><span className="code-muted">07</span> <span className="code-purple">await</span> <span className="code-orange">makeItReliable</span>()<span className="cursor">▍</span></p>
        </div>
        <div className="terminal-bottom">
          <span><span className="tiny-green-dot" /> quality is part of the build</span>
          <span>JS&nbsp; / &nbsp;API</span>
        </div>
      </div>
      <div className="visual-caption"><span>FIG. 01</span><span>BUILD · DEBUG · VERIFY</span></div>
      <span className="orbit-star" aria-hidden="true">✳</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="status-dot" /> SOFTWARE DEVELOPER <span className="eyebrow-year">· VIDISHA, INDIA</span></p>
          <h1 className="hero-headline">
            <span>Building software.</span>
            <span className="serif-italic">Checking the details.</span>
          </h1>
          <p className="hero-description">
            I’m {profile.name}, a software developer interested in full-stack
            applications, practical problem-solving, and the testing that helps
            make software dependable.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">Explore my work <span aria-hidden="true">↗</span></Link>
            <a className="text-link" href={profile.resume} target="_blank" rel="noreferrer">View resume <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-meta">
            <a href={profile.github} target="_blank" rel="noreferrer">GITHUB <span aria-hidden="true">↗</span></a>
            <span className="meta-divider" />
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <CodeVisual />
      </section>

      <section className="intro-strip page-shell" aria-label="Areas of interest">
        <span className="strip-label">INTERESTED IN</span>
        <p>Full-stack development<span> · </span>Backend APIs<span> · </span>Software quality</p>
        <Link to="/about" aria-label="Learn more about Rishabh">↗</Link>
      </section>

      <section className="featured page-shell">
        <SectionHeading eyebrow="SELECTED PROJECTS" title={<>Selected <span className="serif-italic">work.</span></>} link="/projects" linkLabel="All projects" />
        <div className="project-grid">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={`0${index + 1}`} />
          ))}
        </div>
      </section>

      <section className="home-snapshot page-shell">
        <Reveal className="snapshot-copy">
          <Eyebrow>HOW I LIKE TO WORK</Eyebrow>
          <h2>Build thoughtfully.<br /><span className="serif-italic">Test the edges.</span></h2>
          <p>From interface to API to data, I’m interested in how the pieces fit—and what happens when a user takes the less obvious path.</p>
          <Link className="text-link" to="/quality">See my QA approach <span aria-hidden="true">↗</span></Link>
        </Reveal>
        <Reveal className="snapshot-skills" delay={100}>
          <span className="snapshot-label">TOOLS I’VE WORKED WITH</span>
          <SkillPills items={["JavaScript", "React", "Node.js", "Express", "PostgreSQL", "Prisma", "Postman", "Docker"]} />
          <Link className="text-link" to="/skills">Browse skills <span aria-hidden="true">↗</span></Link>
        </Reveal>
      </section>

      <section className="experience-preview page-shell">
        <Reveal className="experience-preview-heading">
          <Eyebrow>EARLY CAREER</Eyebrow>
          <h2>Learning by<br /><span className="serif-italic">building.</span></h2>
          <p>Approximately six months of software development internship experience, including Webseeder and Brandsmashers.</p>
          <Link className="text-link" to="/experience">Explore experience <span aria-hidden="true">↗</span></Link>
        </Reveal>
        <div className="experience-preview-list">
          {["Webseeder", "Brandsmashers"].map((company, index) => (
            <Reveal className="experience-preview-row" key={company} delay={index * 100}>
              <span className="experience-index">0{index + 1}</span>
              <span>{company}</span>
              <span className="experience-kind">SOFTWARE DEVELOPMENT INTERNSHIP</span>
            </Reveal>
          ))}
        </div>
      </section>

      <CallToAction eyebrow="HAVE A QUESTION OR AN IDEA?" title={<>Let’s start<br /><span className="serif-italic">a conversation.</span></>} />
    </main>
  );
}
