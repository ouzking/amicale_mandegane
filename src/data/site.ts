import groupe from '../assets/&&&.jpeg';
import xawareTeam from '../assets/12.jpeg';
import gala from '../assets/141.jpeg';
import galaTeam from '../assets/1.jpeg';
import galaGuests from '../assets/44.jpeg';
import portraitA from '../assets/3.jpeg';
import portraitB from '../assets/5.jpeg';
import famille from '../assets/AEEOM.jpeg';
import dakar from '../assets/0000.jpeg';
import caravane from '../assets/caravane.jpeg';
import ziguinchor from '../assets/ziguinchor.jpeg';
import type { Tr } from '../i18n/core';

export const CONTACT = {
  phones: ['+221 77 179 09 61', '+221 77 437 85 58'],
  email: 'aeeomsectiondakar@gmail.com',
  whatsappContact: '221774378558',
  whatsappPartner: '221784785795',
  location: 'Dakar · Ziguinchor, Sénégal',
  hours: [
    { days: { fr: 'Lundi au Vendredi', en: 'Monday to Friday', wo: 'Altine ba Àjjuma' } as Tr, time: '9h00 – 18h00' },
    { days: { fr: 'Samedi', en: 'Saturday', wo: 'Gaawu' } as Tr, time: '10h00 – 16h00' },
  ],
};

export const SOCIALS = {
  facebook: 'https://www.facebook.com/share/18SC3Zgozv/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/amicale_mandegane?igsh=cmJ2bHNtM2ZwcThi&utm_source=qr',
  tiktok: 'https://www.tiktok.com/@amicale_mandegane1',
};

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, '')}`;

export const whatsappHref = (number: string, text: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

export interface GalleryImage {
  src: string;
  caption: Tr;
}

export const GALLERY: GalleryImage[] = [
  { src: groupe, caption: { fr: 'La grande famille AEEOM réunie', en: 'The great AEEOM family together', wo: 'Njaboot gu mag gu AEEOM ci benn bérab' } },
  { src: gala, caption: { fr: 'Dîner de Gala · 2e édition', en: 'Gala Dinner · 2nd edition', wo: 'Reeru Gala · ñaareelu yoon' } },
  { src: xawareTeam, caption: { fr: 'Tenue traditionnelle, fierté mandégane', en: 'Traditional attire, Mandégane pride', wo: 'Yére yu cosaan, ngoru Mandégane' } },
  { src: galaTeam, caption: { fr: 'Les membres sur le tapis rouge du Gala', en: 'Members on the Gala red carpet', wo: 'Way-bokk yi ci kaaru Gala bi' } },
  { src: caravane, caption: { fr: 'Caravane Médicale à Mandégane', en: 'Medical Caravan in Mandégane', wo: 'Karawaanu Paj ca Mandégane' } },
  { src: portraitA, caption: { fr: 'Élégance au Dîner de Gala', en: 'Elegance at the Gala Dinner', wo: 'Rafet ca Reeru Gala ba' } },
  { src: famille, caption: { fr: 'Moments de fraternité', en: 'Moments of fellowship', wo: 'Ay diir yu mbokk' } },
  { src: galaGuests, caption: { fr: 'Invités du Dîner de Gala', en: 'Gala Dinner guests', wo: 'Gan yi ca Reeru Gala ba' } },
  { src: ziguinchor, caption: { fr: 'Section Ziguinchor sur le terrain', en: 'Ziguinchor Section in the field', wo: 'Pàccu Ziguinchor ci jëf' } },
  { src: portraitB, caption: { fr: 'Le Gala, rendez-vous de prestige', en: 'The Gala, a prestigious occasion', wo: 'Gala bi, ndaje mu tedd' } },
  { src: dakar, caption: { fr: 'Section Dakar en mission', en: 'Dakar Section on a mission', wo: 'Pàccu Dakar ci liggéey' } },
];

export const HERO_SLIDES = [
  { src: groupe, label: { fr: 'Communauté', en: 'Community', wo: 'Askan' } as Tr },
  { src: gala, label: { fr: 'Dîner de Gala', en: 'Gala Dinner', wo: 'Reeru Gala' } as Tr },
  { src: xawareTeam, label: { fr: 'Culture', en: 'Culture', wo: 'Aada' } as Tr },
  { src: caravane, label: { fr: 'Engagement', en: 'Commitment', wo: 'Yéene' } as Tr },
];
