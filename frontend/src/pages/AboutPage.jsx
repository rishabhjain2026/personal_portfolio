import { CallToAction, Eyebrow } from "../components/Sections.jsx";

const principles = [
  ["01", "Start with the why.", "Understand the people and constraints before picking the tools."],
  ["02", "Make quality a habit.", "Small thoughtful decisions add up to products that last."],
  ["03", "Leave things better.", "Strong teams are built on shared context and generous collaboration."],
];

export default function AboutPage() {
  return (
    <main>
      <section className="inner-hero page-shell">
        <Eyebrow available>THE PERSON BEHIND THE PULL REQUEST</Eyebrow>
        <h1>Good work starts<br />with <span className="serif-italic">good questions.</span></h1>
        <p className="inner-lede">I’m Alex — an engineer, collaborator, and lifelong student of how things work. I care about the details people notice and the systems they don’t.</p>
      </section>
      <section className="about-body page-shell">
        <div className="about-aside">
          <Eyebrow>A LITTLE CONTEXT</Eyebrow>
          <div className="portrait-art" aria-label="Abstract portrait illustration">
            <div className="portrait-sun" /><div className="portrait-shape shape-one" /><div className="portrait-shape shape-two" /><div className="portrait-shape shape-three" />
            <span>AM&nbsp; / &nbsp;NYC</span>
          </div>
          <p className="aside-note">Curious by default.<br />Considered by design.</p>
        </div>
        <div className="about-copy">
          <p className="about-lead">Software is at its best when the hard parts feel simple to the people using it.</p>
          <p>Over the last several years, I’ve partnered with thoughtful teams to take ambitious ideas from early sketches to products people rely on. My work spans frontend craft, backend architecture, and the conversations that help a team figure out what to build in the first place.</p>
          <p>I enjoy untangling complexity without making a show of it: clear interfaces, resilient systems, useful documentation, and a healthy respect for the next person who has to work in the codebase.</p>
          <div className="principles">
            {principles.map(([number, title, description]) => (
              <div key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></div>
            ))}
          </div>
        </div>
      </section>
      <section className="toolkit page-shell">
        <div><Eyebrow>MY TOOLKIT</Eyebrow><h2>Right tool.<br /><span className="serif-italic">Right reason.</span></h2></div>
        <div className="toolkit-list">
          <div><span>LANGUAGES</span><p>TypeScript · JavaScript · Python · SQL</p></div>
          <div><span>FRONTEND</span><p>React · Next.js · HTML · CSS</p></div>
          <div><span>BACKEND &amp; CLOUD</span><p>Node.js · REST APIs · AWS · PostgreSQL</p></div>
          <div><span>HOW I WORK</span><p>Systems thinking · Mentorship · Product partnership</p></div>
        </div>
      </section>
      <CallToAction eyebrow="SOMETHING GOOD STARTS HERE" title={<>Have a project<br /><span className="serif-italic">in mind?</span></>} />
    </main>
  );
}
