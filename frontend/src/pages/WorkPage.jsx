import { CallToAction, Eyebrow, WorkProject } from "../components/Sections.jsx";

const projects = [
  {
    id: "northstar",
    variant: "northstar-work",
    index: "01",
    label: "PLATFORM",
    category: "PRODUCT PLATFORM",
    year: "2024",
    name: "Northstar",
    summary: "A calmer command center for teams juggling complex operations. Northstar brings scattered signals into a clear, dependable picture.",
    role: "Product engineering",
    focus: "React · TypeScript · APIs",
  },
  {
    id: "goodform",
    variant: "goodform-work",
    index: "02",
    label: "COMMERCE",
    category: "DIGITAL COMMERCE",
    year: "2023",
    name: "Goodform",
    summary: "Making everyday wellness feel a little more human. A considered shopping experience built around useful guidance, not more noise.",
    role: "Full-stack development",
    focus: "Next.js · Node.js · Commerce",
  },
  {
    id: "fieldnotes",
    variant: "fieldnotes",
    index: "03",
    label: "INTERNAL TOOLS",
    category: "INTERNAL TOOLS",
    year: "2022",
    name: "Fieldnotes",
    summary: "A lightweight knowledge hub that helps distributed teams capture decisions, share context, and spend more time moving forward.",
    role: "Engineering & design partnership",
    focus: "JavaScript · Node.js · Search",
  },
];

export default function WorkPage() {
  return (
    <main>
      <section className="inner-hero work-hero page-shell">
        <Eyebrow>A FEW PROBLEMS, SOLVED TOGETHER</Eyebrow>
        <h1>Selected <span className="serif-italic">work.</span></h1>
        <p className="inner-lede">A handful of projects that reflect the way I like to work: get close to the problem, find the useful idea, and make it hold up in the real world.</p>
      </section>
      <section className="work-list page-shell">
        {projects.map((project) => <WorkProject key={project.id} {...project} />)}
      </section>
      <CallToAction eyebrow="YOUR CHALLENGE COULD BE NEXT" title={<>Let’s make<br /><span className="serif-italic">it matter.</span></>} />
    </main>
  );
}
