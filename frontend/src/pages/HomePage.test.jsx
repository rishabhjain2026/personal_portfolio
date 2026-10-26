import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import HomePage from "./HomePage.jsx";

function renderHomePage() {
  return renderToStaticMarkup(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );
}

describe("homepage", () => {
  it("renders the portfolio introduction and primary actions", () => {
    const markup = renderHomePage();

    expect(markup).toContain("Building");
    expect(markup).toContain("Software");
    expect(markup).toContain("Solving Problems");
    expect(markup).toContain("Ensuring Quality");
    expect(markup).toContain("Explore My Work");
    expect(markup).toContain("View Resume");
    expect(markup).toContain("Let’s Connect");
  });

  it("renders the portrait-led workspace and its supporting panels", () => {
    const markup = renderHomePage();

    expect(markup).toContain('class="hero-visual"');
    expect(markup).toContain("hero-portrait");
    expect(markup).toContain("rishabh-jain-profile.jpg");
    expect(markup).toContain("hero-desk");
    expect(markup).toContain("hero-code-card");
    expect(markup).toContain("hero-terminal-card");
    expect(markup).toContain("hero-tech-card");
    expect(markup).toContain("hero-project-card");
  });

  it("links the featured project to its detail route", () => {
    expect(renderHomePage()).toContain('href="/projects/safe-reach"');
  });
});
