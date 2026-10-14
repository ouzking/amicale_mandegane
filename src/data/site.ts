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

export const CONTACT = {
  phones: ['+221 77 179 09 61', '+221 77 437 85 58'],
  email: 'aeeomsectiondakar@gmail.com',
  whatsappContact: '221774378558',
  whatsappPartner: '221784785795',
  location: 'Dakar · Ziguinchor, Sénégal',
  hours: [
    { days: 'Lundi au Vendredi', time: '9h00 – 18h00' },
    { days: 'Samedi', time: '10h00 – 16h00' },
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
  caption: string;
}

export const GALLERY: GalleryImage[] = [
  { src: groupe, caption: 'La grande famille AEEOM réunie' },
  { src: gala, caption: 'Dîner de Gala · 2e édition' },
  { src: xawareTeam, caption: 'Tenue traditionnelle, fierté mandégane' },
  { src: galaTeam, caption: 'Les membres sur le tapis rouge du Gala' },
  { src: caravane, caption: 'Caravane Médicale à Mandégane' },
  { src: portraitA, caption: 'Élégance au Dîner de Gala' },
  { src: famille, caption: 'Moments de fraternité' },
  { src: galaGuests, caption: 'Invités du Dîner de Gala' },
  { src: ziguinchor, caption: 'Section Ziguinchor sur le terrain' },
  { src: portraitB, caption: 'Le Gala, rendez-vous de prestige' },
  { src: dakar, caption: 'Section Dakar en mission' },
];

export const HERO_SLIDES = [
  { src: groupe, label: 'Communauté' },
  { src: gala, label: 'Dîner de Gala' },
  { src: xawareTeam, label: 'Culture' },
  { src: caravane, label: 'Engagement' },
];
