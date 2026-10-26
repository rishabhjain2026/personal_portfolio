import { useState } from "react";
import { CallToAction, Eyebrow, PageIntro, Reveal } from "../components/Sections.jsx";
import { testingScenarios } from "../data/portfolio.js";

const qualityAreas = [
  ["01", "Plan the scenario", "Check the expected path, boundaries, invalid inputs, and recovery behavior."],
  ["02", "Validate the API", "Look at method, status, response shape, validation errors, and authorization."],
  ["03", "Verify the data", "Check persisted values, ownership, and consistency without assuming the UI tells the whole story."],
  ["04", "Report clearly", "Describe reproducible steps, expected and actual behavior, and the impact of an issue."],
];

export default function QualityPage() {
  const [selectedId, setSelectedId] = useState(testingScenarios[0].id);
  const selected = testingScenarios.find(({ id }) => id === selectedId);

  return (
    <main id="main-content">
      <PageIntro
        label="QUALITY ASSURANCE · A DEVELOPER’S LENS"
        title={<>Quality isn’t a final<br /><span className="serif-italic">checkbox.</span></>}
        description="Testing is part of understanding a feature: what should happen, what could fail, and how we can tell the data and behavior are sound."
      />
      <section className="quality-grid page-shell">
        <div className="quality-principles">
          {qualityAreas.map(([number, title, description], index) => (
            <Reveal className="quality-principle" key={number} delay={index * 60}>
              <span>{number}</span>
              <div><h2>{title}</h2><p>{description}</p></div>
            </Reveal>
          ))}
          <p className="quality-disclaimer">Manual QA knowledge and practice examples are presented here. Professional automation-testing experience is not claimed.</p>
        </div>
        <Reveal className="test-console" delay={120}>
          <div className="test-console-header">
            <span><i /> TEST CASE PLAYGROUND</span>
            <span className="demo-badge">DEMONSTRATION</span>
          </div>
          <div className="test-tabs" role="tablist" aria-label="Demonstration test scenarios">
            {testingScenarios.map((scenario) => (
              <button
                key={scenario.id}
                type="button"
                role="tab"
                id={`tab-${scenario.id}`}
                aria-selected={selectedId === scenario.id}
                aria-controls={`panel-${scenario.id}`}
                onClick={() => setSelectedId(scenario.id)}
              >
                {scenario.label}
              </button>
            ))}
          </div>
          <div
            className="test-case-panel"
            role="tabpanel"
            id={`panel-${selected.id}`}
            aria-labelledby={`tab-${selected.id}`}
          >
            <div className="test-request-line"><span>{selected.method}</span>{selected.endpoint}</div>
            <div className="test-case-row"><span>SCENARIO</span><strong>{selected.caseName}</strong></div>
            <div className="test-case-row"><span>EXPECTED</span><strong>{selected.expected}</strong></div>
            <div className="test-result"><span className="test-result-dot" /> {selected.note}</div>
          </div>
          <p className="test-console-foot">SIMULATED EXAMPLE · NO LIVE API OR DATABASE REQUEST IS SENT</p>
        </Reveal>
      </section>
      <CallToAction eyebrow="RELIABILITY STARTS WITH A GOOD QUESTION" title={<>What happens<br /><span className="serif-italic">if it fails?</span></>} />
    </main>
  );
}
