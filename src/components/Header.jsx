import { ShoppingBag, User } from 'lucide-react';
import { assets } from '../data/assets.js';
import { navItems, routes } from '../data/routes.js';

export default function Header() {
  return (
    <header className="header" aria-label="AURA site header">
      <a className="brand" href={routes.home} aria-label="AURA Boxing home">
        <img src={assets.logo} alt="AURA Boxing" />
      </a>
      <nav className="nav" aria-label="Main navigation">
        {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <div className="header-actions">
        <a href={routes.account} aria-label="Account"><User size={20} /></a>
        <a href={routes.cart} aria-label="Cart"><ShoppingBag size={20} /></a>
      </div>
    </header>
  );
}
