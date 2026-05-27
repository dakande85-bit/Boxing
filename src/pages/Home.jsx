import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import BrandManifesto from '../components/BrandManifesto.jsx';
import FeaturedPieces from '../components/FeaturedPieces.jsx';
import NewsletterBanner from '../components/NewsletterBanner.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <BrandManifesto />
        <FeaturedPieces />
        <NewsletterBanner />
      </main>
      <Footer />
    </div>
  );
}
