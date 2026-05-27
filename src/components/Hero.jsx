import { assets } from '../data/assets.js';
import { routes } from '../data/routes.js';

export default function Hero() {
  return (
    <section className="hero" aria-label="AURA Boxing hero">
      <img src={assets.hero} alt="Aura Boxing Earned Not Given hero" />
      <div className="sr-only">
        <p>AURA BOXING</p>
        <h1>EARNED, NOT GIVEN.</h1>
        <p>THE CRAFT DOESN'T LIE.</p>
        <p>DISCIPLINE / DEDICATION / SACRIFICE</p>
      </div>
      <a className="hero-link hero-link-shop" href={routes.drop001} aria-label="Shop Drop 001" />
      <a className="hero-link hero-link-campaign" href={routes.campaign} aria-label="Explore Campaign" />
    </section>
  );
}
