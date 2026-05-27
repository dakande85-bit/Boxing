import { assets } from './assets.js';
import { routes } from './routes.js';

export const dropProducts = [
  {
    name: 'AURA Fight Club Tee',
    type: 'Oversized training tee',
    price: 'EUR --',
    image: assets.fightClubTee,
    href: routes.productComingSoon,
    status: 'Coming soon'
  },
  {
    name: 'AURA Sleeveless Hoodie',
    type: 'Cut-off zip training layer',
    price: 'EUR --',
    image: assets.sleevelessHoodie,
    href: routes.productComingSoon,
    status: 'Coming soon'
  },
  {
    name: 'AURA Training Pants',
    type: 'Relaxed fight club pant',
    price: 'EUR --',
    image: assets.trainingPants,
    href: routes.productComingSoon,
    status: 'Coming soon'
  }
];
