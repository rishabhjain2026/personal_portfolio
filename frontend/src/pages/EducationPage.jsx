import { CallToAction, Eyebrow, PageIntro, Reveal } from "../components/Sections.jsx";
import { profile } from "../data/portfolio.js";

export default function EducationPage() {
  return (
    <main id="main-content">
      <PageIntro
        label="EDUCATION · THE STARTING POINT"
        title={<>A foundation in<br /><span className="serif-italic">computer science.</span></>}
        description="Formal study, applied through projects and early-career software development experience."
      />
      <section className="education-detail page-shell">
        <Reveal className="education-year"><span>01</span><i /></Reveal>
        <Reveal className="education-content" delay={100}>
          <Eyebrow>COMPUTER SCIENCE AND ENGINEERING</Eyebrow>
          <h2>Samrat Ashok<br /><span className="serif-italic">Technological Institute</span></h2>
          <p className="education-location">Vidisha, Madhya Pradesh, India</p>
          <p>{profile.education}</p>
          <p className="education-note">The graduation year, academic scores, and awards are not included because they could not be verified from the information available.</p>
        </Reveal>
        <Reveal className="education-visual" ariaHidden="true" delay={180}>
          <div className="education-orbit" /><span>CS<br /><i>↗</i><br />E</span><small>LEARN · BUILD · REFINE</small>
        </Reveal>
      </section>
      <CallToAction eyebrow="ALWAYS BUILDING ON THE FOUNDATION" />
    </main>
  );
}
