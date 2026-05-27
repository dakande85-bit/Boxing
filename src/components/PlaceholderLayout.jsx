import { routes } from '../data/routes.js';

export default function PlaceholderLayout({ heading, body }) {
  return (
    <main className="placeholder-page">
      <section>
        <p>AURA BOXING</p>
        <h1>{heading}</h1>
        <div>{body}</div>
        <a href={routes.home}>BACK TO HOME</a>
      </section>
    </main>
  );
}
