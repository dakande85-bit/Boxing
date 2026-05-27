import ProductCard from './ProductCard.jsx';
import { featuredPieces } from '../data/featuredPieces.js';
import { routes } from '../data/routes.js';

export default function FeaturedPieces() {
  return (
    <section className="featured" aria-label="Featured pieces">
      <div className="section-head">
        <p className="kicker">DROP 001 / CORE TRAINING SYSTEM</p>
        <h2>FEATURED PIECES</h2>
      </div>
      <div className="piece-grid">
        {featuredPieces.map((piece) => <ProductCard key={piece.name} {...piece} />)}
      </div>
      <a className="button" href={routes.drop001}>SHOP DROP 001</a>
    </section>
  );
}
