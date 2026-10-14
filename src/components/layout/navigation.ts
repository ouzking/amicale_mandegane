import { events } from '../../data/events';

export interface NavItem {
  name: string;
  path: string;
  submenu?: { name: string; path: string; meta?: string }[];
}

export const NAVIGATION: NavItem[] = [
  { name: 'Accueil', path: '/' },
  {
    name: 'Organisation',
    path: '/organisation',
    submenu: [
      { name: 'Section Dakar', path: '/organisation/dakar', meta: 'Hub national' },
      { name: 'Section Ziguinchor', path: '/organisation/ziguinchor', meta: 'Ancrage régional' },
    ],
  },
  {
    name: 'Événements',
    path: '/evenements',
    submenu: events.map((e) => ({ name: e.title, path: `/evenements/${e.slug}`, meta: e.category })),
  },
  { name: 'Membres', path: '/membres' },
  { name: 'Partenaires', path: '/partenaires' },
  { name: 'Contact', path: '/contact' },
];
