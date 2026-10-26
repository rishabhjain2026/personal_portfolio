import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="inner-hero page-shell">
      <p className="eyebrow">404 · PAGE NOT FOUND</p>
      <h1>This path took<br />an <span className="serif-italic">unexpected turn.</span></h1>
      <Link className="button button-primary" to="/">Back to home <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
