import { CallToAction, Eyebrow, PageIntro, Reveal } from "../components/Sections.jsx";
import { learningMilestones, profile } from "../data/portfolio.js";

export default function AchievementsPage() {
  return (
    <main id="main-content">
      <PageIntro
        label="MILESTONES · LEARNING IN PRACTICE"
        title={<>Progress worth<br /><span className="serif-italic">showing.</span></>}
        description="A small collection of verified project and learning milestones—without inventing awards, certifications, or numbers."
      />
      <section className="milestones-list page-shell">
        {learningMilestones.map((milestone, index) => (
          <Reveal className="milestone-row" key={milestone.number} delay={index * 75}>
            <span className="milestone-number">{milestone.number}</span>
            <h2>{milestone.title}</h2>
            <p>{milestone.detail}</p>
            <span className="milestone-mark" aria-hidden="true">↗</span>
          </Reveal>
        ))}
      </section>
      <section className="milestones-note page-shell">
        <Eyebrow>NO INVENTED BADGES</Eyebrow>
        <p>No awards, hackathons, certifications, or contributions have been added without evidence. Project links and my resume provide the available source material.</p>
        <a className="text-link" href={profile.resume} target="_blank" rel="noreferrer">View resume <span aria-hidden="true">↗</span></a>
      </section>
      <CallToAction eyebrow="THE NEXT MILESTONE IS STILL AHEAD" />
    </main>
  );
}
