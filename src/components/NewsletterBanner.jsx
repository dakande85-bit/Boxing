import { useState } from 'react';
import { assets } from '../data/assets.js';

export default function NewsletterBanner() {
  const [joined, setJoined] = useState(false);

  return (
    <section className="join-banner" id="join-aura" aria-label="Join AURA" style={{ '--join-image': `url(${assets.joinBanner})` }}>
      <div className="sr-only">
        <h2>JOIN AURA</h2>
        <p>EARLY ACCESS. LIMITED PIECES. NO NOISE.</p>
      </div>
      <form className="join-form" onSubmit={(event) => { event.preventDefault(); setJoined(true); }}>
        <label className="sr-only" htmlFor="email">Email address</label>
        <input id="email" type="email" name="email" placeholder="EMAIL ADDRESS" required />
        <button type="submit">JOIN</button>
        <span className={joined ? 'success is-visible' : 'success'}>You're on the list.</span>
      </form>
    </section>
  );
}
