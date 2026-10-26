import { Eyebrow } from "../components/Sections.jsx";

export default function ContactPage() {
  return (
    <main className="contact-page page-shell">
      <section className="contact-copy">
        <Eyebrow available>OPEN TO THE RIGHT CONVERSATION</Eyebrow>
        <h1>Good things<br />start with <span className="serif-italic">hello.</span></h1>
        <p className="inner-lede">Have a project, a tricky problem, or just want to compare notes? My inbox is open.</p>
        <a className="contact-email" href="mailto:hello@example.com">hello@example.com <span>↗</span></a>
        <div className="contact-note"><span className="note-star">✳</span><p>I usually reply within two working days.<br />Looking forward to hearing from you.</p></div>
      </section>
      <aside className="contact-card">
        <Eyebrow>A GOOD PLACE TO BEGIN</Eyebrow>
        <div className="contact-card-line"><span>01</span><p>What are you working on?</p></div>
        <div className="contact-card-line"><span>02</span><p>Where would a little help go a long way?</p></div>
        <div className="contact-card-line"><span>03</span><p>What would a great outcome look like?</p></div>
        <div className="contact-card-footer"><span className="status-dot" /> CURRENTLY BASED IN BROOKLYN, NY</div>
      </aside>
    </main>
  );
}
