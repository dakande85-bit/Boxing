import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ProductCard from '../components/ProductCard.jsx';
import NewsletterBanner from '../components/NewsletterBanner.jsx';
import { dropProducts } from '../data/dropProducts.js';
import { routes } from '../data/routes.js';

export default function Drop001() {
  return (
    <div className="site-shell drop-page">
      <Header />
      <main>
        <section className="drop-hero">
          <p className="kicker">DROP 001 / CORE COLLECTION</p>
          <h1>BUILT FOR THE QUIET ROUNDS.</h1>
          <p>A focused first release for the disciplined fighter. Minimal black training staples, cold metallic branding, and a uniform built around work nobody sees.</p>
          <div className="drop-hero-actions">
            <a className="button" href="#drop-products">VIEW PIECES</a>
            <a className="text-cta" href={routes.campaign}>EXPLORE CAMPAIGN</a>
          </div>
        </section>

        <section className="drop-edit">
          <div>
            <p className="kicker">NO AUDIENCE. NO NOISE.</p>
            <h2>THE FIRST UNIFORM OF AURA.</h2>
          </div>
          <p>Drop 001 keeps the system tight: heavyweight basics, training silhouettes, and pieces that move from early gym work to everyday streetwear.</p>
        </section>

        <section className="drop-products" id="drop-products">
          <div className="section-head">
            <p className="kicker">CORE PIECES</p>
            <h2>DROP 001</h2>
          </div>
          <div className="piece-grid">
            {dropProducts.map((piece) => <ProductCard key={piece.name} {...piece} />)}
          </div>
        </section>

        <section className="drop-system">
          <div><span>01</span><h3>TRAINING FIRST</h3><p>Everything must feel wearable before it feels decorative.</p></div>
          <div><span>02</span><h3>LIMITED NOISE</h3><p>Minimal front branding. Strong identity. No clutter.</p></div>
          <div><span>03</span><h3>CONTROLLED RELEASE</h3><p>Small drops, tighter product decisions, sharper demand.</p></div>
        </section>

        <NewsletterBanner />
      </main>
      <Footer />
    </div>
  );
}
