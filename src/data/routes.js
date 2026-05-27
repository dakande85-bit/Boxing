export const routes = {
  home: '/',
  shop: '/shop',
  drop001: '/collections/drop-001',
  campaign: '/campaign',
  about: '/about',
  contact: '/contact',
  sizeGuide: '/size-guide',
  shipping: '/shipping',
  returns: '/returns',
  privacyPolicy: '/privacy-policy',
  terms: '/terms',
  join: '/join',
  account: '/account',
  cart: '/cart',
  productComingSoon: '/products/coming-soon'
};

export const navItems = [
  { label: 'Home', href: routes.home },
  { label: 'Shop', href: routes.shop },
  { label: 'Drop 001', href: routes.drop001 },
  { label: 'Campaign', href: routes.campaign },
  { label: 'Join Aura', href: routes.join }
];

export const footerItems = [
  { label: 'Shop', href: routes.shop },
  { label: 'Campaign', href: routes.campaign },
  { label: 'About', href: routes.about },
  { label: 'Contact', href: routes.contact },
  { label: 'Size Guide', href: routes.sizeGuide },
  { label: 'Shipping', href: routes.shipping },
  { label: 'Returns', href: routes.returns },
  { label: 'Privacy Policy', href: routes.privacyPolicy },
  { label: 'Terms', href: routes.terms }
];
