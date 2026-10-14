import type { LucideIcon } from 'lucide-react';
import { HeartPulse, BookOpen, Sparkles, GraduationCap, HandHeart, Music } from 'lucide-react';
import caravane from '../assets/caravane.jpeg';
import conference from '../assets/conference.jpeg';
import gala from '../assets/141.jpeg';
import galaTeam from '../assets/1.jpeg';
import galaGuests from '../assets/44.jpeg';
import portraitA from '../assets/3.jpeg';
import portraitB from '../assets/5.jpeg';
import groupe from '../assets/&&&.jpeg';
import famille from '../assets/AEEOM.jpeg';
import xaware from '../assets/xaware.jpeg';
import xawareTeam from '../assets/12.jpeg';

export interface EventItem {
  slug: string;
  title: string;
  /** 0 = janvier … 11 = décembre */
  month: number;
  section: string;
  category: string;
  icon: LucideIcon;
  short: string;
  tagline: string;
  image: string;
  /** Alignement de l'image (affiches avec texte à droite, etc.) */
  imagePosition?: string;
  about: string[];
  impactTitle: string;
  impactText: string;
  objectives: string[];
  impact: string[];
  gallery?: string[];
  cta: { title: string; text: string; label: string; to: string };
}

export const MONTHS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
];

export const MONTHS_SHORT = [
  'Janv.', 'Févr.', 'Mars', 'Avr.', 'Mai', 'Juin',
  'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.',
];

export const events: EventItem[] = [
  {
    slug: 'caravane-medicale',
    title: 'Caravane Médicale',
    month: 3,
    section: 'Dakar',
    category: 'Santé',
    icon: HeartPulse,
    short: 'Consultations gratuites et sensibilisation santé pour la communauté de Mandégane.',
    tagline:
      "Initiative sanitaire d'envergure apportant soins médicaux, dépistage et sensibilisation à la communauté de Mandégane, renforçant notre engagement social et humanitaire.",
    image: caravane,
    about: [
      "La Caravane Médicale représente l'une des initiatives stratégiques majeures de l'AEEOM. Elle incarne notre engagement institutionnel en faveur du bien-être et de la santé durable de notre communauté d'origine.",
      'Cette mobilisation d’envergure rassemble professionnels de santé, étudiants en médecine et partenaires stratégiques afin d’offrir des services médicaux structurés, accessibles et de qualité aux habitants de Mandégane.',
      'Au-delà des consultations, nous déployons des programmes de sensibilisation à l’hygiène, à la prévention des maladies et à la nutrition, afin de créer un impact durable et mesurable.',
    ],
    impactTitle: 'Impact Communautaire',
    impactText:
      "La Caravane Médicale améliore significativement l'accès aux soins dans les zones rurales où les services de santé sont limités. Elle favorise également la détection précoce de pathologies et l’orientation vers des structures spécialisées.",
    objectives: [
      'Offrir des consultations médicales gratuites aux habitants de Mandégane',
      'Sensibiliser la population aux bonnes pratiques de santé',
      'Distribuer des médicaments essentiels',
      'Dépister les maladies courantes',
      'Créer une base de données sanitaire communautaire',
    ],
    impact: [
      'Plus de 500 consultations gratuites',
      '300+ personnes sensibilisées',
      'Distribution de kits médicaux',
      'Suivi médical post-caravane',
    ],
    cta: {
      title: 'Devenez Partenaire',
      text: 'Soutenez cette initiative stratégique et contribuez activement à l’amélioration durable de la santé communautaire.',
      label: 'Soutenir la Caravane',
      to: '/partenaires',
    },
  },
  {
    slug: 'conference-religieuse',
    title: 'Conférence Religieuse',
    month: 4,
    section: 'Dakar',
    category: 'Spiritualité',
    icon: BookOpen,
    short: 'Guidance spirituelle et renforcement des valeurs morales de notre communauté.',
    tagline:
      'Un moment d’élévation spirituelle, de transmission du savoir et de renforcement des valeurs morales, réunissant érudits, leaders communautaires et fidèles dans un cadre d’excellence et de sérénité.',
    image: conference,
    imagePosition: 'object-left',
    about: [
      "La Conférence Religieuse de l'AEEOM constitue un rendez-vous spirituel d’envergure réunissant notre communauté autour des principes fondamentaux de foi, d’éthique et de responsabilité morale. Des guides religieux éminents y partagent leur sagesse afin d’apporter une guidance éclairée à la jeunesse et à l’ensemble de la communauté de Mandégane.",
      'Dans un monde en constante mutation, cet espace d’échange et de réflexion favorise l’ancrage spirituel, la consolidation des valeurs d’intégrité, de respect et de solidarité, tout en offrant aux jeunes des repères solides pour leur avenir académique et professionnel.',
    ],
    impactTitle: 'Impact Spirituel Durable',
    impactText:
      'Un impact profond et structurant renforçant la cohésion communautaire et offrant aux jeunes des repères moraux solides pour évoluer avec confiance, équilibre et responsabilité.',
    objectives: [
      'Renforcer les valeurs morales et spirituelles de la communauté',
      'Inviter des guides religieux reconnus pour partager leur sagesse',
      'Créer un espace de dialogue et de réflexion spirituelle',
      'Promouvoir la cohésion sociale à travers les enseignements religieux',
      'Guider la jeunesse dans leur parcours spirituel et moral',
    ],
    impact: [
      'Plus de 300 participants attendus',
      'Guidance spirituelle collective',
      'Renforcement des liens communautaires',
      'Distribution de supports religieux',
    ],
    cta: {
      title: 'Participer à la Conférence',
      text: 'Rejoignez un moment d’élévation spirituelle et contribuez à renforcer les valeurs morales et religieuses de notre communauté.',
      label: 'Nous Contacter',
      to: '/contact',
    },
  },
  {
    slug: 'masterclass',
    title: 'Masterclass',
    month: 6,
    section: 'Dakar',
    category: 'Formation',
    icon: GraduationCap,
    short: 'Sessions de formation avec experts et professionnels de renom.',
    tagline:
      'Des sessions de formation intensive animées par des experts et professionnels de renom, conçues pour transmettre des compétences stratégiques, renforcer le leadership et accélérer l’excellence académique et professionnelle.',
    image:
      'https://img.freepik.com/photos-premium/groupe-etudiants-dans-salle-conference-porteur-lunettes_783884-227046.jpg',
    about: [
      "Les Masterclass de l'AEEOM sont des expériences de formation stratégique conçues pour connecter savoir académique et exigences professionnelles. Animées par des experts reconnus, elles offrent un transfert de compétences direct, pragmatique et orienté résultats.",
      'Chaque session explore des thématiques clés telles que l’entrepreneuriat, le leadership, les technologies émergentes, la finance et la communication stratégique. Les formats interactifs incluent études de cas, ateliers pratiques et échanges personnalisés afin de garantir un apprentissage immersif et impactant.',
    ],
    impactTitle: 'Impact sur l’Employabilité',
    impactText:
      'Les Masterclass renforcent significativement la valeur professionnelle de nos membres en développant des compétences immédiatement applicables et recherchées par les employeurs. Elles créent également un accès direct à un réseau stratégique de recruteurs et de décideurs.',
    objectives: [
      'Offrir des formations de haut niveau avec des experts reconnus',
      'Développer les compétences professionnelles de nos membres',
      "Faciliter l'insertion professionnelle par le transfert de connaissances",
      'Créer des opportunités de mentorat avec des professionnels établis',
      "Renforcer l'employabilité de nos membres",
    ],
    impact: [
      '150+ étudiants formés',
      'Experts et professionnels de renom',
      'Sessions pratiques et interactives',
      'Certificats de participation',
    ],
    cta: {
      title: 'S’inscrire à la Masterclass',
      text: 'Réservez votre place pour une expérience de formation intensive et stratégique destinée à accélérer votre développement professionnel.',
      label: 'Réserver ma place',
      to: '/contact',
    },
  },
  {
    slug: 'xaware',
    title: 'Xawaré',
    month: 8,
    section: 'Dakar',
    category: 'Culture',
    icon: Music,
    short: 'Célébration vibrante de la culture et des traditions de Mandégane.',
    tagline:
      'Célébration vibrante de la culture et des traditions de Mandégane, un événement d’exception mêlant héritage, identité et excellence communautaire.',
    image: xaware,
    imagePosition: 'object-left',
    about: [
      "Le Xawaré est l'événement culturel phare de l'AEEOM, une célébration vibrante de nos racines, traditions et identité mandégane. Il rassemble étudiants, familles et partenaires autour d’une immersion totale : danses traditionnelles, musique, gastronomie et artisanat.",
      'Plus qu’une fête, c’est une affirmation identitaire forte. Dans un contexte urbain où les étudiants peuvent s’éloigner de leurs traditions, le Xawaré recrée un espace de reconnexion, de transmission et de fierté collective.',
    ],
    impactTitle: 'Impact Culturel',
    impactText:
      'Le Xawaré contribue activement à la préservation du patrimoine mandégane, renforce le sentiment d’appartenance et assure la transmission intergénérationnelle des savoirs.',
    objectives: [
      'Célébrer et promouvoir la culture traditionnelle de Mandégane',
      "Préserver l'identité culturelle de notre communauté d'origine",
      'Créer un moment de partage intergénérationnel',
      'Valoriser les arts, danses et traditions mandéganes',
      "Renforcer le sentiment d'appartenance communautaire",
    ],
    impact: [
      '400+ participants attendus',
      'Spectacles culturels traditionnels',
      'Exposition artisanale locale',
      'Moments de convivialité et partage',
    ],
    gallery: [xawareTeam, groupe],
    cta: {
      title: 'Participer à l’Expérience',
      text: 'Rejoignez-nous pour une célébration immersive de notre culture, un moment d’élégance, de tradition et de transmission.',
      label: 'Nous Contacter',
      to: '/contact',
    },
  },
  {
    slug: 'journee-integration',
    title: "Journée d'Intégration",
    month: 9,
    section: 'Dakar',
    category: 'Intégration',
    icon: HandHeart,
    short: 'Accueil chaleureux des nouveaux membres dans la famille AEEOM.',
    tagline:
      'Accueil chaleureux des nouveaux membres dans la grande famille AEEOM, un moment convivial, interactif et fédérateur qui bâtit notre communauté.',
    image: famille,
    about: [
      "La Journée d'Intégration est l'événement phare de la rentrée AEEOM. Elle accueille les nouveaux membres dans une ambiance conviviale et dynamique, leur permettant de découvrir notre organisation, nos valeurs et notre vision, tout en créant des liens solides avec la communauté.",
      'Au programme : présentations institutionnelles, activités de team building, témoignages inspirants, sessions interactives et moments conviviaux. Chaque membre se voit attribuer un parrain ou une marraine pour garantir un accompagnement personnalisé.',
    ],
    impactTitle: 'Impact sur la Cohésion',
    impactText:
      "La Journée d'Intégration renforce la cohésion de notre communauté en créant des liens durables entre générations, tout en transmettant notre culture organisationnelle et nos valeurs d'excellence.",
    objectives: [
      "Accueillir chaleureusement les nouveaux membres de l'AEEOM",
      "Présenter l'organisation, sa vision et ses valeurs fondamentales",
      'Faciliter la création de liens entre anciens et nouveaux membres',
      'Partager les opportunités et ressources disponibles',
      "Intégrer les nouveaux dans notre culture d'excellence et de solidarité",
    ],
    impact: [
      '50+ nouveaux membres intégrés',
      'Activités de team building',
      'Mentorat et parrainage',
      'Cohésion renforcée',
    ],
    cta: {
      title: 'Nous Rejoindre',
      text: "Intégrez une communauté d'étudiants ambitieux, solidaires et dynamiques pour vivre une expérience unique et immersive.",
      label: 'Nous Contacter',
      to: '/contact',
    },
  },
  {
    slug: 'diner-de-gala',
    title: 'Dîner de Gala',
    month: 11,
    section: 'Dakar',
    category: 'Prestige',
    icon: Sparkles,
    short: 'Soirée prestigieuse de networking et célébration de nos réussites.',
    tagline:
      'Une soirée d’exception réunissant leaders, partenaires et membres distingués dans un cadre raffiné, célébrant l’excellence, la reconnaissance institutionnelle et le networking stratégique de haut niveau.',
    image: gala,
    about: [
      "Le Dîner de Gala de l'AEEOM constitue le sommet de notre calendrier annuel. Cette soirée d’exception réunit membres, partenaires stratégiques, sponsors et décideurs dans un environnement élégant et hautement institutionnel. Elle célèbre l’excellence académique, la réussite collective et la vision ambitieuse portée par notre organisation.",
      'Véritable plateforme de networking premium, le Gala favorise les connexions stratégiques, renforce les alliances institutionnelles et génère des ressources essentielles au financement de nos projets communautaires. C’est également un moment clé pour valoriser l’impact de nos actions et projeter notre ambition à l’échelle nationale et internationale.',
    ],
    impactTitle: 'Impact Institutionnel',
    impactText:
      'Le Gala consolide la crédibilité et la visibilité de l’AEEOM auprès des institutions, entreprises et décideurs. Il positionne notre organisation comme un acteur stratégique majeur de l’écosystème estudiantin et associatif national.',
    objectives: [
      'Célébrer les réussites académiques et professionnelles de nos membres',
      'Créer un espace de networking premium entre membres et partenaires',
      'Renforcer les liens institutionnels avec nos sponsors stratégiques',
      'Lever des fonds pour financer nos initiatives communautaires',
      "Valoriser l'image et la crédibilité de l'AEEOM",
    ],
    impact: [
      '200+ invités de prestige',
      'Networking de haut niveau',
      'Levée de fonds significative',
      'Renforcement des partenariats',
    ],
    gallery: [galaTeam, portraitA, galaGuests, portraitB, groupe, xawareTeam],
    cta: {
      title: 'Devenir Sponsor Officiel',
      text: 'Associez votre marque à un événement d’exception et bénéficiez d’une visibilité stratégique auprès d’un réseau institutionnel influent et qualifié.',
      label: 'Devenir Sponsor',
      to: '/partenaires',
    },
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);

/** Nombre de mois avant la prochaine édition (0 = ce mois-ci). */
export const monthsUntil = (month: number, now = new Date()) => (month - now.getMonth() + 12) % 12;

/** Événements triés du plus proche au plus lointain, à partir du mois en cours. */
export const upcomingEvents = (now = new Date()) =>
  [...events].sort((a, b) => monthsUntil(a.month, now) - monthsUntil(b.month, now));

export const statusLabel = (month: number, now = new Date()) => {
  const n = monthsUntil(month, now);
  if (n === 0) return 'Ce mois-ci';
  if (n === 1) return 'Le mois prochain';
  return `Dans ${n} mois`;
};
