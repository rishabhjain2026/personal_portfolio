import { Link, useParams } from "react-router-dom";
import { CallToAction, Eyebrow, PageIntro, ProjectArtwork, ProjectCard, Reveal, SkillPills } from "../components/Sections.jsx";
import { projects } from "../data/portfolio.js";

function ProjectDetail({ project }) {
  return (
    <main id="main-content">
      <section className="project-detail-hero page-shell">
        <Link className="back-link" to="/projects">← &nbsp; All projects</Link>
        <Eyebrow>{project.category}</Eyebrow>
        <h1>{project.name}<span className="accent-dot">.</span></h1>
        <p className="page-lede">{project.summary}</p>
        <ProjectArtwork project={project} large />
      </section>
      <section className="project-detail-body page-shell">
        <Reveal className="project-detail-copy">
          <Eyebrow>OVERVIEW</Eyebrow>
          <p className="about-lead">{project.description}</p>
          <p>{project.contribution}</p>
          <div className="project-detail-links">
            <a className="button button-primary" href={project.github} target="_blank" rel="noreferrer">View source <span aria-hidden="true">↗</span></a>
            {project.live && <a className="text-link" href={project.live} target="_blank" rel="noreferrer">Open live project <span aria-hidden="true">↗</span></a>}
          </div>
        </Reveal>
        <Reveal className="project-detail-aside" delay={100}>
          <div><Eyebrow>TECHNOLOGY</Eyebrow><SkillPills items={project.stack} /></div>
          <div><Eyebrow>FEATURES IN THE REPOSITORY</Eyebrow><ul className="detail-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
          <div><Eyebrow>ENGINEERING CONSIDERATIONS</Eyebrow><ul className="detail-list">{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </Reveal>
      </section>
      <CallToAction eyebrow="BUILDING WITH BOTH SIDES IN MIND" title={<>Build it well.<br /><span className="serif-italic">Check it too.</span></>} />
    </main>
  );
}

export default function WorkPage() {
  const { projectId } = useParams();
  const project = projects.find(({ slug }) => slug === projectId);

  if (projectId && !project) {
    return (
      <main id="main-content">
        <PageIntro label="PROJECT NOT FOUND" title={<>This project<br /><span className="serif-italic">isn’t here.</span></>} description="Browse the projects that are available in this portfolio." />
        <div className="page-shell"><Link className="button button-primary" to="/projects">Back to projects <span aria-hidden="true">↗</span></Link></div>
      </main>
    );
  }
  if (project) return <ProjectDetail project={project} />;

  return (
    <main id="main-content">
      <PageIntro
        className="work-hero"
        label="PROJECTS · A FEW THINGS I’VE BUILT"
        title={<>Useful ideas,<br /><span className="serif-italic">made tangible.</span></>}
        description="A selection of public projects, presented with the features and technologies supported by their repositories. No inflated results or invented metrics."
      />
      <section className="work-grid page-shell">
        {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={`0${index + 1}`} />)}
      </section>
      <CallToAction eyebrow="A PROJECT OR A GOOD QUESTION?" />
    </main>
  );
}
