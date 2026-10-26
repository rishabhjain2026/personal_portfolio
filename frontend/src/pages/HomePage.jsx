import { Link } from "react-router-dom";
import { CallToAction, Eyebrow, ProjectCard, Reveal, SectionHeading, SkillPills } from "../components/Sections.jsx";
import { profile, projects, skillGroups } from "../data/portfolio.js";

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Developer portrait with code, terminal, technology, and project panels">
      <div className="visual-orbit visual-orbit-outer" aria-hidden="true" />
      <div className="visual-orbit visual-orbit-inner" aria-hidden="true" />
      <div className="visual-glow" aria-hidden="true" />
      <div className="hero-portrait-wrap">
        <img className="hero-portrait" src={profile.portrait} alt="Rishabh Jain" />
      </div>
      <div className="hero-desk" aria-hidden="true">
        <div className="hero-desk-surface" />
        <div className="hero-laptop"><span>RJ<span>.</span></span></div>
      </div>
      <div className="hero-code-card hero-float">
        <div className="panel-heading"><span><i /> workspace.js</span><small>JS</small></div>
        <pre><code><b>function</b> buildReliableSoftware() {`{`}<br />&nbsp; <em>design</em>();<br />&nbsp; <em>test</em>();<br />&nbsp; <strong>ship</strong>();<br />{`}`}</code></pre>
      </div>
      <div className="hero-terminal-card hero-float">
        <div className="panel-heading"><span>TERMINAL</span><small>— □ ×</small></div>
        <p><i>rj@portfolio</i>:~$ <span className="terminal-typing">npm run build</span></p>
        <p className="terminal-success">✓ Build completed <span>in 1.42s</span></p>
        <p><i>rj@portfolio</i>:~$ <span className="terminal-cursor">_</span></p>
      </div>
      <div className="hero-tech-card hero-float">
        <span className="tech-card-label">TOOLS IN THE WORKFLOW</span>
        <div className="tech-icons" aria-label="JavaScript, React, Node.js, PostgreSQL, Docker, and Postman">
          <span title="JavaScript">JS</span><span title="React">⚛</span><span title="Node.js">N</span>
          <span title="PostgreSQL">P</span><span title="Docker">D</span><span title="Postman">↗</span>
        </div>
      </div>
      <Link className="hero-project-card hero-float" to="/projects/safe-reach">
        <div className="project-preview-art"><span>SR</span><i /><i /><i /></div>
        <div className="project-preview-copy"><small>FEATURED PROJECT · 01</small><b>SafeReach</b><span>Full-stack safety platform <i aria-hidden="true">↗</i></span></div>
      </Link>
      <div className="hero-orbit-tag" aria-hidden="true"><span /> BUILD · TEST · REFINE</div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="hero-socials" aria-label="Social links">
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">GH</a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">in</a>
      <a href={profile.resume} target="_blank" rel="noreferrer" aria-label="View resume">CV</a>
    </div>
  );
}

function HomeAbout() {
  return (
    <section className="home-about page-shell">
      <div className="home-about-copy">
        <Eyebrow>02 / A LITTLE ABOUT ME</Eyebrow>
        <div className="home-about-heading">
          <h2>About<span className="accent-dot">.</span></h2>
          <span className="section-orbit" aria-hidden="true">RJ</span>
        </div>
        <p className="about-lead">I like getting underneath the interface—understanding what the API, the data, and the unexpected input are doing.</p>
        <p className="about-copy-body">{profile.education} I’m building on that foundation through software development internships and practical full-stack projects.</p>
        <Link className="text-link" to="/about">A little more about my approach <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="home-about-cards">
        <Reveal className="about-skill-card">
          <span>01 / TOOLKIT</span>
          <h3>Tech stack</h3>
          <p>JavaScript · React · Node.js · Express · PostgreSQL · Prisma</p>
        </Reveal>
        <Reveal className="about-skill-card" delay={80}>
          <span>02 / APPLICATIONS</span>
          <h3>Full-stack</h3>
          <p>Frontend interfaces, backend APIs, databases, and authentication workflows.</p>
        </Reveal>
        <Reveal className="about-skill-card" delay={150}>
          <span>03 / DELIVERY</span>
          <h3>Development tools</h3>
          <p>Git · GitHub · Postman · Docker · AWS</p>
        </Reveal>
        <Reveal className="about-skill-card" delay={220}>
          <span>04 / QUALITY</span>
          <h3>QA mindset</h3>
          <p>Manual checks, negative paths, API validation, and thoughtful bug reports.</p>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="status-dot" /> SOFTWARE DEVELOPER <span className="eyebrow-year">| FULL-STACK · QA ENTHUSIAST</span></p>
          <h1 className="hero-headline">
            <span>Building Software<span className="accent-dot">.</span></span>
            <span>Solving Problems<span className="accent-dot">.</span></span>
            <span>Ensuring Quality<span className="accent-dot">.</span></span>
          </h1>
          <p className="hero-description">I’m Rishabh Jain, a software developer focused on building useful applications, solving technical problems, and creating reliable digital experiences through thoughtful engineering and testing.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">Explore My Work <span aria-hidden="true">↗</span></Link>
            <a className="button button-secondary" href={profile.resume} target="_blank" rel="noreferrer">View Resume <span aria-hidden="true">↗</span></a>
            <Link className="text-link" to="/contact">Let’s Connect <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-bottom">
            <div className="hero-stats">
              <span><b>~06</b><small>MONTHS INTERNSHIP EXPERIENCE</small></span>
              <span><b>CSE</b><small>SATIE · VIDISHA, INDIA</small></span>
            </div>
            <SocialLinks />
          </div>
        </div>
        <HeroVisual />
      </section>

      <div className="home-marquee" aria-hidden="true">
        <div className="home-marquee-track" aria-hidden="true">
          {Array.from({ length: 4 }, (_, index) => (
            <span key={index}>BUILD WITH INTENT <i>✳</i> TEST WITH CARE <i>✳</i> SHIP WITH CONFIDENCE <i>✳</i></span>
          ))}
        </div>
      </div>

      <HomeAbout />

      <section className="featured page-shell">
        <SectionHeading eyebrow="03 / WORK & EXPERIENCE" title={<>Selected <span>projects.</span></>} link="/projects" linkLabel="View all projects" />
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={`0${index + 1}`} />
          ))}
        </div>
      </section>

      <section className="home-snapshot page-shell">
        <Reveal className="snapshot-copy">
          <Eyebrow>04 / DEVELOPMENT × QUALITY</Eyebrow>
          <h2>Build carefully.<br /><span>Test the details.</span></h2>
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
          <Eyebrow>05 / INTERNSHIPS</Eyebrow>
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
