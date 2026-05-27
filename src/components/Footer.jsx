import { assets } from '../data/assets.js';
import { footerItems, routes } from '../data/routes.js';

export default function Footer() {
  return (
    <footer className="footer">
      <a href={routes.home} aria-label="AURA Boxing home"><img src={assets.logo} alt="AURA Boxing" /></a>
      <nav aria-label="Footer navigation">
        {footerItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <p>(c) 2025 AURA BOXING. ALL RIGHTS RESERVED.</p>
    </footer>
  );
}
