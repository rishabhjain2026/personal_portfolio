import { Eyebrow, PageIntro } from "../components/Sections.jsx";
import { profile } from "../data/portfolio.js";

export default function ContactPage() {
  return (
    <main id="main-content" className="contact-page">
      <PageIntro
        label="CONTACT · START A CONVERSATION"
        title={<>Good things<br />start with <span className="serif-italic">hello.</span></>}
        description="Have a question, a role to discuss, or an interesting problem? Reach out directly."
        className="contact-intro"
      />
      <section className="contact-body page-shell">
        <div className="contact-copy">
          <Eyebrow>EMAIL</Eyebrow>
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a>
          <p className="contact-note">This opens your email application. No contact form or message-storage service is configured on this site.</p>
        </div>
        <div className="contact-card">
          <Eyebrow>FIND ME ELSEWHERE</Eyebrow>
          <a className="contact-card-link" href={profile.linkedin} target="_blank" rel="noreferrer">
            <span><small>01</small> LinkedIn</span><span aria-hidden="true">↗</span>
          </a>
          <a className="contact-card-link" href={profile.github} target="_blank" rel="noreferrer">
            <span><small>02</small> GitHub</span><span aria-hidden="true">↗</span>
          </a>
          <a className="contact-card-link" href={profile.resume} target="_blank" rel="noreferrer">
            <span><small>03</small> Resume</span><span aria-hidden="true">↗</span>
          </a>
          <p className="contact-card-footer"><span className="status-dot" /> BASED IN {profile.location.toUpperCase()}</p>
        </div>
      </section>
    </main>
  );
}
