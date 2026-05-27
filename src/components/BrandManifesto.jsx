import { routes } from '../data/routes.js';

export default function BrandManifesto() {
  return (
    <section className="manifesto" aria-label="AURA Fight Club manifesto">
      <div>
        <p className="kicker">AURA FIGHT CLUB</p>
        <h2>NO AUDIENCE.<br />NO NOISE.<br />JUST THE WORK.</h2>
        <p className="copy">Built for the quiet rounds, the early mornings, the discipline nobody sees, and the craft that speaks when the bell rings.</p>
        <a className="text-cta" href={routes.campaign}>READ THE CAMPAIGN</a>
      </div>
    </section>
  );
}
