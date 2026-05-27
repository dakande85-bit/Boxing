import { assets } from '../data/assets.js';
import { routes } from '../data/routes.js';

export default function Hero() {
  return (
    <section className="hero" aria-label="AURA Boxing hero">
      <div className="hero-media" aria-hidden="true">
        <img src={assets.hero} alt="" />
      </div>

      <div className="hero-content">
        <p className="hero-label">AURA BOXING</p>
        <h1>EARNED,<br />NOT GIVEN.</h1>
        <p className="hero-subtitle">THE CRAFT DOESN'T LIE.</p>
        <div className="hero-actions" aria-label="Hero actions">
          <a className="hero-button hero-button-primary" href={routes.drop001}>SHOP DROP 001</a>
          <a className="hero-button hero-button-secondary" href={routes.campaign}>EXPLORE CAMPAIGN</a>
        </div>
      </div>

      <div className="hero-bottom-strip">
        <span>DISCIPLINE / DEDICATION / SACRIFICE</span>
      </div>
    </section>
  );
}
