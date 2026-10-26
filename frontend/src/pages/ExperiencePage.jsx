import { Link } from "react-router-dom";
import { Eyebrow, PageIntro, Reveal } from "../components/Sections.jsx";
import { internshipOrganizations, profile } from "../data/portfolio.js";

export default function ExperiencePage() {
  return (
    <main id="main-content">
      <PageIntro
        label="EXPERIENCE · EARLY CAREER"
        title={<>A foundation built<br />through <span className="serif-italic">practice.</span></>}
        description={profile.experienceSummary}
      />
      <section className="experience-page-section page-shell">
        <div className="experience-total">
          <span className="experience-total-number">~06</span>
          <span className="experience-total-copy">MONTHS<br />INTERNSHIP EXPERIENCE</span>
          <p>Approximate combined duration, as provided. Individual dates and responsibilities are not included where they could not be verified.</p>
        </div>
        <div className="experience-list">
          {internshipOrganizations.map((company, index) => (
            <Reveal className="experience-entry" key={company} delay={index * 90}>
              <span className="experience-index">0{index + 1}</span>
              <div>
                <Eyebrow>SOFTWARE DEVELOPMENT · INTERNSHIP</Eyebrow>
                <h2>{company}</h2>
                <p>Internship experience at {company}. The resume is the source for further role-specific details.</p>
              </div>
              <a className="experience-resume-link" href={profile.resume} target="_blank" rel="noreferrer" aria-label={`View resume for details about ${company}`}>↗</a>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="experience-note page-shell">
        <Eyebrow>WHAT I’M TAKING FORWARD</Eyebrow>
        <p>Hands-on software development, curiosity about the full request-to-database path, and a growing habit of checking assumptions before they become bugs.</p>
        <Link className="text-link" to="/quality">Explore the quality side <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
