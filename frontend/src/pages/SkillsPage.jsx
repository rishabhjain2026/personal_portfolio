import { CallToAction, Eyebrow, PageIntro, Reveal, SkillPills } from "../components/Sections.jsx";
import { skillGroups } from "../data/portfolio.js";

export default function SkillsPage() {
  return (
    <main id="main-content">
      <PageIntro
        label="SKILLS · A WORKING TOOLKIT"
        title={<>A toolkit that’s<br /><span className="serif-italic">still growing.</span></>}
        description="Technologies are grouped by how they show up in my work. These labels describe exposure and practice—not mastery."
      />
      <section className="skills-grid page-shell">
        {skillGroups.map((group, index) => (
          <Reveal className="skill-group" key={group.name} delay={(index % 2) * 80}>
            <div className="skill-group-heading">
              <span className="skill-number">0{index + 1}</span>
              <div><h2>{group.name}</h2><span>{group.level}</span></div>
              <span className="skill-plus" aria-hidden="true">+</span>
            </div>
            <SkillPills items={group.skills} />
          </Reveal>
        ))}
      </section>
      <section className="skills-footnote page-shell">
        <Eyebrow>HOW TO READ THIS LIST</Eyebrow>
        <p>The strongest evidence is the linked project work. Tools not represented in a public project are included only when provided as part of my working knowledge.</p>
      </section>
      <CallToAction eyebrow="ALWAYS ANOTHER USEFUL THING TO LEARN" />
    </main>
  );
}
