import { events } from '../../data/events';
import type { Tr } from '../../i18n/core';

export interface NavItem {
  name: Tr;
  path: string;
  submenu?: { name: Tr; path: string; meta?: Tr }[];
  /** Accroche affichée dans le méga-menu. */
  pitch?: Tr;
}

export const NAVIGATION: NavItem[] = [
  { name: { fr: 'Accueil', en: 'Home', wo: 'Kër' }, path: '/' },
  {
    name: { fr: 'Organisation', en: 'Organisation', wo: 'Mbootaay' },
    path: '/organisation',
    pitch: {
      fr: 'Deux sections, une seule vision.',
      en: 'Two sections, one single vision.',
      wo: 'Ñaari pàcc, benn gis-gis.',
    },
    submenu: [
      {
        name: { fr: 'Section Dakar', en: 'Dakar Section', wo: 'Pàccu Dakar' },
        path: '/organisation/dakar',
        meta: { fr: 'Hub national', en: 'National hub', wo: 'Kër gu mag' },
      },
      {
        name: { fr: 'Section Ziguinchor', en: 'Ziguinchor Section', wo: 'Pàccu Ziguinchor' },
        path: '/organisation/ziguinchor',
        meta: { fr: 'Ancrage régional', en: 'Regional base', wo: 'Ci gox bi' },
      },
    ],
  },
  {
    name: { fr: 'Événements', en: 'Events', wo: 'Xew-xew' },
    path: '/evenements',
    pitch: {
      fr: 'Six rendez-vous qui rythment notre année.',
      en: 'Six gatherings that shape our year.',
      wo: 'Juróom-benni ndaje yuy dundal sunu at.',
    },
    submenu: events.map((e) => ({ name: e.title, path: `/evenements/${e.slug}`, meta: e.category })),
  },
  { name: { fr: 'Membres', en: 'Members', wo: 'Way-bokk' }, path: '/membres' },
  { name: { fr: 'Partenaires', en: 'Partners', wo: 'Àndandoo' }, path: '/partenaires' },
  { name: { fr: 'Contact', en: 'Contact', wo: 'Jokkoo' }, path: '/contact' },
];

export const JOIN_LABEL: Tr = { fr: 'Nous rejoindre', en: 'Join us', wo: 'Bokk ci nun' };
