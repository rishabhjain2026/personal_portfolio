import { CallToAction, Eyebrow, PageIntro, Reveal } from "../components/Sections.jsx";
import { profile } from "../data/portfolio.js";

const principles = [
  ["01", "Understand before building.", "Start with the problem and the people using the software."],
  ["02", "Think beyond the happy path.", "Consider inputs, failure states, and how the pieces work together."],
  ["03", "Keep learning in the open.", "Use projects and feedback to build understanding, not just a longer tool list."],
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageIntro
        label="ABOUT · HOW I APPROACH THE WORK"
        title={<>Curious by nature.<br /><span className="serif-italic">Careful by design.</span></>}
        description={`I’m ${profile.name}, a software developer from ${profile.location}. I enjoy understanding how applications fit together and making their everyday flows feel reliable.`}
      />
      <section className="about-body page-shell">
        <Reveal className="about-aside">
          <Eyebrow>A LITTLE CONTEXT</Eyebrow>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy2lF8odKdL30D5Skm82Er3gr1uaS_fUXBCcf2hrcHmw&s=10"></img>
          <p className="aside-note">A developer who likes to ask<br />“what could go wrong?”</p>
        </Reveal>
        <Reveal className="about-copy" delay={100}>
          <p className="about-lead">Good software is useful on the expected path—and considered on the unexpected one.</p>
          <p>I studied Computer Science and Engineering at Samrat Ashok Technological Institute in Vidisha. My experience includes approximately six months of software development internships across Webseeder and Brandsmashers.</p>
          <p>Today I’m especially interested in full-stack development, backend APIs, databases, debugging, and the testing habits that help keep small changes from becoming bigger problems.</p>
          <div className="principles">
            {principles.map(([number, title, description]) => (
              <div key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <CallToAction eyebrow="MORE ABOUT THE JOURNEY" title={<>Made up of<br /><span className="serif-italic">small steps.</span></>} />
    </main>
  );
}
