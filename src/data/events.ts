import type { LucideIcon } from 'lucide-react';
import { HeartPulse, BookOpen, Sparkles, GraduationCap, HandHeart, Music } from 'lucide-react';
import type { Tr } from '../i18n/core';
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
  title: Tr;
  /** 0 = janvier … 11 = décembre */
  month: number;
  section: string;
  category: Tr;
  icon: LucideIcon;
  short: Tr;
  tagline: Tr;
  image: string;
  /** Alignement de l'image (affiches avec texte à droite, etc.) */
  imagePosition?: string;
  about: Tr[];
  impactTitle: Tr;
  impactText: Tr;
  objectives: Tr[];
  impact: Tr[];
  gallery?: string[];
  cta: { title: Tr; text: Tr; label: Tr; to: string };
}

export const MONTHS: Tr[] = [
  { fr: 'Janvier', en: 'January', wo: 'Samwiyee' },
  { fr: 'Février', en: 'February', wo: 'Fewriyee' },
  { fr: 'Mars', en: 'March', wo: 'Mars' },
  { fr: 'Avril', en: 'April', wo: 'Awril' },
  { fr: 'Mai', en: 'May', wo: 'Me' },
  { fr: 'Juin', en: 'June', wo: 'Suwe' },
  { fr: 'Juillet', en: 'July', wo: 'Sulet' },
  { fr: 'Août', en: 'August', wo: 'Ut' },
  { fr: 'Septembre', en: 'September', wo: 'Sàttumbar' },
  { fr: 'Octobre', en: 'October', wo: 'Oktoobar' },
  { fr: 'Novembre', en: 'November', wo: 'Nowàmbar' },
  { fr: 'Décembre', en: 'December', wo: 'Desàmbar' },
];

export const MONTHS_SHORT: Tr[] = [
  { fr: 'Janv.', en: 'Jan.', wo: 'Sam.' },
  { fr: 'Févr.', en: 'Feb.', wo: 'Few.' },
  { fr: 'Mars', en: 'Mar.', wo: 'Mars' },
  { fr: 'Avr.', en: 'Apr.', wo: 'Awr.' },
  { fr: 'Mai', en: 'May', wo: 'Me' },
  { fr: 'Juin', en: 'June', wo: 'Suwe' },
  { fr: 'Juil.', en: 'July', wo: 'Sul.' },
  { fr: 'Août', en: 'Aug.', wo: 'Ut' },
  { fr: 'Sept.', en: 'Sept.', wo: 'Sàt.' },
  { fr: 'Oct.', en: 'Oct.', wo: 'Okt.' },
  { fr: 'Nov.', en: 'Nov.', wo: 'Now.' },
  { fr: 'Déc.', en: 'Dec.', wo: 'Des.' },
];

const CONTACT_US: Tr = { fr: 'Nous Contacter', en: 'Contact Us', wo: 'Jokkoo ak nun' };

export const events: EventItem[] = [
  {
    slug: 'caravane-medicale',
    title: { fr: 'Caravane Médicale', en: 'Medical Caravan', wo: 'Karawaanu Paj' },
    month: 3,
    section: 'Dakar',
    category: { fr: 'Santé', en: 'Health', wo: 'Wér-gi-yaram' },
    icon: HeartPulse,
    short: {
      fr: 'Consultations gratuites et sensibilisation santé pour la communauté de Mandégane.',
      en: 'Free consultations and health awareness for the Mandégane community.',
      wo: 'Saytu wér-gi-yaram yu dul fey ak xamle ngir askanu Mandégane.',
    },
    tagline: {
      fr: "Initiative sanitaire d'envergure apportant soins médicaux, dépistage et sensibilisation à la communauté de Mandégane, renforçant notre engagement social et humanitaire.",
      en: 'A large-scale health initiative bringing medical care, screening and awareness to the Mandégane community, strengthening our social and humanitarian commitment.',
      wo: 'Jëf ju mag ci wàllu wér-gi-yaram, di indi faj, saytu jàngoro ak xamle ci askanu Mandégane, di dëgëral sunu yéene ci wàllu dimbalante.',
    },
    image: caravane,
    about: [
      {
        fr: "La Caravane Médicale représente l'une des initiatives stratégiques majeures de l'AEEOM. Elle incarne notre engagement institutionnel en faveur du bien-être et de la santé durable de notre communauté d'origine.",
        en: "The Medical Caravan is one of AEEOM's major strategic initiatives. It embodies our institutional commitment to the well-being and lasting health of our home community.",
        wo: 'Karawaanu Paj mi mooy benn ci jëf yu am solo yi AEEOM di def. Mu ngi wone sunu yéene ngir wér-gi-yaram ak jàmm ju yàgg ci sunu dëkk bu cosaan.',
      },
      {
        fr: 'Cette mobilisation d’envergure rassemble professionnels de santé, étudiants en médecine et partenaires stratégiques afin d’offrir des services médicaux structurés, accessibles et de qualité aux habitants de Mandégane.',
        en: 'This large-scale mobilisation brings together health professionals, medical students and strategic partners to provide structured, accessible, high-quality medical services to the people of Mandégane.',
        wo: 'Ndaje mu mag mii dafay boole ay doktoor, ay ndongo yuy jàng paj ak ay àndandoo, ngir jox waa Mandégane ay faj yu jaar yoon, yu yomb ci jot te baax.',
      },
      {
        fr: 'Au-delà des consultations, nous déployons des programmes de sensibilisation à l’hygiène, à la prévention des maladies et à la nutrition, afin de créer un impact durable et mesurable.',
        en: 'Beyond consultations, we run awareness programmes on hygiene, disease prevention and nutrition to create a lasting, measurable impact.',
        wo: 'Saytu yi rekk taxul : nu ngi def ay xamle ci set-setal, ci moytu jàngoro yi ak ci lekk gu baax, ngir am njeexital ju yàgg te ñu man koo natt.',
      },
    ],
    impactTitle: { fr: 'Impact Communautaire', en: 'Community Impact', wo: 'Njeexital ci Askan wi' },
    impactText: {
      fr: "La Caravane Médicale améliore significativement l'accès aux soins dans les zones rurales où les services de santé sont limités. Elle favorise également la détection précoce de pathologies et l’orientation vers des structures spécialisées.",
      en: 'The Medical Caravan significantly improves access to care in rural areas where health services are limited. It also enables early detection of illnesses and referral to specialised facilities.',
      wo: 'Karawaanu Paj mi dafay yombal lool jot ci faj ci àll bi, fu bërëbi faj yi néew. Day tax itam ñu xam jàngoro yi ci teel, te yónne aji-feebar yi ci lopitaan yu ñu soxla.',
    },
    objectives: [
      {
        fr: 'Offrir des consultations médicales gratuites aux habitants de Mandégane',
        en: 'Provide free medical consultations to the people of Mandégane',
        wo: 'Saytu waa Mandégane ci wér-gi-yaram te ñu dul fey',
      },
      {
        fr: 'Sensibiliser la population aux bonnes pratiques de santé',
        en: 'Raise awareness of good health practices',
        wo: 'Xamle askan wi ci jikko yu baax ci wér-gi-yaram',
      },
      { fr: 'Distribuer des médicaments essentiels', en: 'Distribute essential medicines', wo: 'Séddale garab yu am solo' },
      { fr: 'Dépister les maladies courantes', en: 'Screen for common diseases', wo: 'Saytu jàngoro yi gëna bari' },
      {
        fr: 'Créer une base de données sanitaire communautaire',
        en: 'Build a community health database',
        wo: 'Sos ab dénkukaay xibaar ci wér-gi-yaramu askan wi',
      },
    ],
    impact: [
      { fr: 'Plus de 500 consultations gratuites', en: 'Over 500 free consultations', wo: 'Lu ëpp 500 saytu yu dul fey' },
      { fr: '300+ personnes sensibilisées', en: '300+ people reached by awareness', wo: '300+ nit ñu xamle' },
      { fr: 'Distribution de kits médicaux', en: 'Distribution of medical kits', wo: 'Séddale ay kit yu faj' },
      { fr: 'Suivi médical post-caravane', en: 'Post-caravan medical follow-up', wo: 'Topp aji-feebar yi ginnaaw karawaan bi' },
    ],
    cta: {
      title: { fr: 'Devenez Partenaire', en: 'Become a Partner', wo: 'Nekkal sunu àndandoo' },
      text: {
        fr: 'Soutenez cette initiative stratégique et contribuez activement à l’amélioration durable de la santé communautaire.',
        en: 'Support this strategic initiative and actively contribute to the lasting improvement of community health.',
        wo: 'Dimbalil jëf jii te nga bokk ci yokk wér-gi-yaramu askan wi ba fàww.',
      },
      label: { fr: 'Soutenir la Caravane', en: 'Support the Caravan', wo: 'Dimbali Karawaan bi' },
      to: '/partenaires',
    },
  },
  {
    slug: 'conference-religieuse',
    title: { fr: 'Conférence Religieuse', en: 'Religious Conference', wo: 'Waxtaanu Diine' },
    month: 4,
    section: 'Dakar',
    category: { fr: 'Spiritualité', en: 'Spirituality', wo: 'Diine' },
    icon: BookOpen,
    short: {
      fr: 'Guidance spirituelle et renforcement des valeurs morales de notre communauté.',
      en: "Spiritual guidance and strengthening of our community's moral values.",
      wo: 'Gindi ci diine ak dëgëral jikko yu baax ci sunu askan.',
    },
    tagline: {
      fr: 'Un moment d’élévation spirituelle, de transmission du savoir et de renforcement des valeurs morales, réunissant érudits, leaders communautaires et fidèles dans un cadre d’excellence et de sérénité.',
      en: 'A moment of spiritual elevation, transmission of knowledge and strengthening of moral values, bringing together scholars, community leaders and the faithful in a setting of excellence and serenity.',
      wo: 'Ab diir bu ñuy yékkatee xol, jottali xam-xam te dëgëral jikko yu baax, di boole ay sëriñ, ay njiitu askan ak ay jullit ci bérab bu teey te dal.',
    },
    image: conference,
    imagePosition: 'object-left',
    about: [
      {
        fr: "La Conférence Religieuse de l'AEEOM constitue un rendez-vous spirituel d’envergure réunissant notre communauté autour des principes fondamentaux de foi, d’éthique et de responsabilité morale. Des guides religieux éminents y partagent leur sagesse afin d’apporter une guidance éclairée à la jeunesse et à l’ensemble de la communauté de Mandégane.",
        en: "AEEOM's Religious Conference is a major spiritual gathering that brings our community together around the core principles of faith, ethics and moral responsibility. Eminent religious guides share their wisdom to offer enlightened guidance to young people and the whole Mandégane community.",
        wo: 'Waxtaanu Diine bu AEEOM ab ndaje bu mag la, buy boole sunu askan ci ndigal yu mag yu ngëm, jikko ak warugar. Ay sëriñ yu siiw dañuy séddoo seen xam-xam ngir gindi ndaw ñi ak askanu Mandégane bépp.',
      },
      {
        fr: 'Dans un monde en constante mutation, cet espace d’échange et de réflexion favorise l’ancrage spirituel, la consolidation des valeurs d’intégrité, de respect et de solidarité, tout en offrant aux jeunes des repères solides pour leur avenir académique et professionnel.',
        en: 'In a constantly changing world, this space for exchange and reflection fosters spiritual grounding and strengthens the values of integrity, respect and solidarity, while giving young people solid bearings for their academic and professional future.',
        wo: 'Ci àddina suñuy dund, ndaje mii dafay jox ndaw ñi bérab bu ñuy waxtaanee te xalaat, di dëgëral ngëm, dëggu, teggin ak dimbalante, te di leen jox ay misaal yu dëgër ngir seen jàng ak seen liggéey ëllëg.',
      },
    ],
    impactTitle: { fr: 'Impact Spirituel Durable', en: 'Lasting Spiritual Impact', wo: 'Njeexital ci Diine bu Yàgg' },
    impactText: {
      fr: 'Un impact profond et structurant renforçant la cohésion communautaire et offrant aux jeunes des repères moraux solides pour évoluer avec confiance, équilibre et responsabilité.',
      en: 'A deep and structuring impact that strengthens community cohesion and gives young people solid moral bearings to grow with confidence, balance and responsibility.',
      wo: 'Njeexital bu xóot buy dëgëral booloo gi ci askan wi, te di jox ndaw ñi ay jikko yu baax ngir ñu yokku ak kóolute, dal ak warugar.',
    },
    objectives: [
      {
        fr: 'Renforcer les valeurs morales et spirituelles de la communauté',
        en: 'Strengthen the moral and spiritual values of the community',
        wo: 'Dëgëral jikko yu baax ak ngëm ci askan wi',
      },
      {
        fr: 'Inviter des guides religieux reconnus pour partager leur sagesse',
        en: 'Invite recognised religious guides to share their wisdom',
        wo: 'Woo ay sëriñ yu siiw ngir ñu séddoo seen xam-xam',
      },
      {
        fr: 'Créer un espace de dialogue et de réflexion spirituelle',
        en: 'Create a space for spiritual dialogue and reflection',
        wo: 'Sos bérab bu ñuy waxtaanee ak xalaat ci diine',
      },
      {
        fr: 'Promouvoir la cohésion sociale à travers les enseignements religieux',
        en: 'Promote social cohesion through religious teaching',
        wo: 'Yokk booloo gi ci askan wi jaare ko ci njàngale diine',
      },
      {
        fr: 'Guider la jeunesse dans leur parcours spirituel et moral',
        en: 'Guide young people in their spiritual and moral journey',
        wo: 'Gindi ndaw ñi ci seen yoonu diine ak jikko',
      },
    ],
    impact: [
      { fr: 'Plus de 300 participants attendus', en: 'Over 300 expected participants', wo: 'Lu ëpp 300 nit ñuy wóolu ñëw' },
      { fr: 'Guidance spirituelle collective', en: 'Collective spiritual guidance', wo: 'Gindi ci diine ngir ñépp' },
      { fr: 'Renforcement des liens communautaires', en: 'Stronger community ties', wo: 'Dëgëral lëkkalo gi ci askan wi' },
      { fr: 'Distribution de supports religieux', en: 'Distribution of religious materials', wo: 'Séddale ay téere diine' },
    ],
    cta: {
      title: { fr: 'Participer à la Conférence', en: 'Attend the Conference', wo: 'Bokk ci Waxtaan bi' },
      text: {
        fr: 'Rejoignez un moment d’élévation spirituelle et contribuez à renforcer les valeurs morales et religieuses de notre communauté.',
        en: 'Join a moment of spiritual elevation and help strengthen the moral and religious values of our community.',
        wo: 'Ñëwal bokk ci ab diir bu ñuy yékkatee xol, te dimbali ci dëgëral jikko yu baax ak diine ci sunu askan.',
      },
      label: CONTACT_US,
      to: '/contact',
    },
  },
  {
    slug: 'masterclass',
    title: 'Masterclass',
    month: 6,
    section: 'Dakar',
    category: { fr: 'Formation', en: 'Training', wo: 'Tàggatu' },
    icon: GraduationCap,
    short: {
      fr: 'Sessions de formation avec experts et professionnels de renom.',
      en: 'Training sessions with renowned experts and professionals.',
      wo: 'Ay tàggatu ak ay boroom xam-xam ak ay liggéeykat yu siiw.',
    },
    tagline: {
      fr: 'Des sessions de formation intensive animées par des experts et professionnels de renom, conçues pour transmettre des compétences stratégiques, renforcer le leadership et accélérer l’excellence académique et professionnelle.',
      en: 'Intensive training sessions led by renowned experts and professionals, designed to pass on strategic skills, strengthen leadership and accelerate academic and professional excellence.',
      wo: 'Ay tàggatu yu xóot yu ay boroom xam-xam ak ay liggéeykat yu siiw di jiite, ngir jottali ay mën-mën, dëgëral njiitlu ak gaawal xarañ ci jàng ak liggéey.',
    },
    image:
      'https://img.freepik.com/photos-premium/groupe-etudiants-dans-salle-conference-porteur-lunettes_783884-227046.jpg',
    about: [
      {
        fr: "Les Masterclass de l'AEEOM sont des expériences de formation stratégique conçues pour connecter savoir académique et exigences professionnelles. Animées par des experts reconnus, elles offrent un transfert de compétences direct, pragmatique et orienté résultats.",
        en: "AEEOM's Masterclasses are strategic training experiences designed to connect academic knowledge with professional requirements. Led by recognised experts, they offer a direct, pragmatic, results-oriented transfer of skills.",
        wo: 'Masterclass yu AEEOM ay tàggatu lañu yu ñu defar ngir lëkkale xam-xamu jàng ak soxlay liggéey. Ay boroom xam-xam yu siiw ñoo leen di jiite, te dañuy jottali ay mën-mën yu leer, yu jëm ci njariñ.',
      },
      {
        fr: 'Chaque session explore des thématiques clés telles que l’entrepreneuriat, le leadership, les technologies émergentes, la finance et la communication stratégique. Les formats interactifs incluent études de cas, ateliers pratiques et échanges personnalisés afin de garantir un apprentissage immersif et impactant.',
        en: 'Each session explores key themes such as entrepreneurship, leadership, emerging technologies, finance and strategic communication. Interactive formats include case studies, hands-on workshops and personalised exchanges to ensure immersive, impactful learning.',
        wo: 'Benn-benn ci ñoom dafay waxtaan ci ay mbir yu am solo : sos ay liggéey, njiitlu, xarala yu bees, koppar ak jokkoo. Dañuy jëfandikoo ay misaal, ay atelier ak ay waxtaan ak ku nekk, ngir jàng gu xóot te am njariñ.',
      },
    ],
    impactTitle: { fr: 'Impact sur l’Employabilité', en: 'Impact on Employability', wo: 'Njeexital ci Am Liggéey' },
    impactText: {
      fr: 'Les Masterclass renforcent significativement la valeur professionnelle de nos membres en développant des compétences immédiatement applicables et recherchées par les employeurs. Elles créent également un accès direct à un réseau stratégique de recruteurs et de décideurs.',
      en: "The Masterclasses significantly increase our members' professional value by developing skills that are immediately applicable and sought after by employers. They also open direct access to a strategic network of recruiters and decision-makers.",
      wo: 'Masterclass yi dañuy yokk lool njariñu sunuy way-bokk ci wàllu liggéey, ndax dañuy jàngal ay mën-mën yu ñu man a jëfandikoo léegi te patron yi di ko seet. Dañuy ubbi itam buntu ab mbooloo ay ñuy jël ay liggéeykat ak ay njiit.',
    },
    objectives: [
      {
        fr: 'Offrir des formations de haut niveau avec des experts reconnus',
        en: 'Offer high-level training with recognised experts',
        wo: 'Jox ay tàggatu yu kawe ak ay boroom xam-xam yu siiw',
      },
      {
        fr: 'Développer les compétences professionnelles de nos membres',
        en: "Develop our members' professional skills",
        wo: 'Yokk mën-mënu liggéey bu sunuy way-bokk',
      },
      {
        fr: "Faciliter l'insertion professionnelle par le transfert de connaissances",
        en: 'Ease professional integration through knowledge transfer',
        wo: 'Yombal dugg ci liggéey jaare ko ci jottali xam-xam',
      },
      {
        fr: 'Créer des opportunités de mentorat avec des professionnels établis',
        en: 'Create mentoring opportunities with established professionals',
        wo: 'Sos ay yoonu gindi ak ay liggéeykat yu xarañ',
      },
      {
        fr: "Renforcer l'employabilité de nos membres",
        en: "Strengthen our members' employability",
        wo: 'Dëgëral yoonu am liggéey bu sunuy way-bokk',
      },
    ],
    impact: [
      { fr: '150+ étudiants formés', en: '150+ students trained', wo: '150+ ndongo yu ñu tàggat' },
      { fr: 'Experts et professionnels de renom', en: 'Renowned experts and professionals', wo: 'Ay boroom xam-xam yu siiw' },
      { fr: 'Sessions pratiques et interactives', en: 'Practical, interactive sessions', wo: 'Ay tàggatu yu ñuy jëfe' },
      { fr: 'Certificats de participation', en: 'Certificates of participation', wo: 'Ay kayitu bokk (certificat)' },
    ],
    cta: {
      title: { fr: 'S’inscrire à la Masterclass', en: 'Register for the Masterclass', wo: 'Bindu ci Masterclass bi' },
      text: {
        fr: 'Réservez votre place pour une expérience de formation intensive et stratégique destinée à accélérer votre développement professionnel.',
        en: 'Book your place for an intensive, strategic training experience designed to accelerate your professional development.',
        wo: 'Jëlal sa palaas ci tàggatu bu xóot buy gaawal sa yokkute ci liggéey.',
      },
      label: { fr: 'Réserver ma place', en: 'Book my place', wo: 'Jël sama palaas' },
      to: '/contact',
    },
  },
  {
    slug: 'xaware',
    title: 'Xawaré',
    month: 8,
    section: 'Dakar',
    category: { fr: 'Culture', en: 'Culture', wo: 'Aada' },
    icon: Music,
    short: {
      fr: 'Célébration vibrante de la culture et des traditions de Mandégane.',
      en: 'A vibrant celebration of the culture and traditions of Mandégane.',
      wo: 'Màggal bu neex ci aada ak cosaanu Mandégane.',
    },
    tagline: {
      fr: 'Célébration vibrante de la culture et des traditions de Mandégane, un événement d’exception mêlant héritage, identité et excellence communautaire.',
      en: 'A vibrant celebration of the culture and traditions of Mandégane, an exceptional event blending heritage, identity and community excellence.',
      wo: 'Màggal bu neex ci aada ak cosaanu Mandégane, xew-xew bu amul moroom buy boole ndono, cosaan ak xarañu askan wi.',
    },
    image: xaware,
    imagePosition: 'object-left',
    about: [
      {
        fr: "Le Xawaré est l'événement culturel phare de l'AEEOM, une célébration vibrante de nos racines, traditions et identité mandégane. Il rassemble étudiants, familles et partenaires autour d’une immersion totale : danses traditionnelles, musique, gastronomie et artisanat.",
        en: "Xawaré is AEEOM's flagship cultural event, a vibrant celebration of our roots, traditions and Mandégane identity. It brings together students, families and partners for a total immersion: traditional dances, music, gastronomy and crafts.",
        wo: 'Xawaré mooy xew-xewu aada bi gëna mag ci AEEOM, màggal bu neex ci sunuy reen, sunu aada ak sunu cosaan bu Mandégane. Dafay boole ndongo yi, seeni njaboot ak seeni àndandoo ci ay fecc yu cosaan, ay woy, ay lekk ak ay liggéeyu loxo.',
      },
      {
        fr: 'Plus qu’une fête, c’est une affirmation identitaire forte. Dans un contexte urbain où les étudiants peuvent s’éloigner de leurs traditions, le Xawaré recrée un espace de reconnexion, de transmission et de fierté collective.',
        en: 'More than a party, it is a strong affirmation of identity. In an urban context where students can drift away from their traditions, Xawaré recreates a space for reconnection, transmission and collective pride.',
        wo: 'Du xew rekk : dafay wone ni nu bëgge sunu cosaan. Ci dëkk bu mag bi, fu ndongo yi man a sore seen aada, Xawaré dafay delloo bérab bu ñuy dellusee ci sunu reen, jottali ko te am ngor ci sunu cosaan.',
      },
    ],
    impactTitle: { fr: 'Impact Culturel', en: 'Cultural Impact', wo: 'Njeexital ci Aada' },
    impactText: {
      fr: 'Le Xawaré contribue activement à la préservation du patrimoine mandégane, renforce le sentiment d’appartenance et assure la transmission intergénérationnelle des savoirs.',
      en: 'Xawaré actively contributes to preserving the heritage of Mandégane, strengthens the sense of belonging and ensures the transmission of knowledge across generations.',
      wo: 'Xawaré dafay dimbali bu baax ci denc ndonoy Mandégane, dëgëral ni ñépp di bokke benn askan, te jottali xam-xam yi ci mag ak ndaw.',
    },
    objectives: [
      {
        fr: 'Célébrer et promouvoir la culture traditionnelle de Mandégane',
        en: 'Celebrate and promote the traditional culture of Mandégane',
        wo: 'Màggal te siiwal aada yu cosaanu Mandégane',
      },
      {
        fr: "Préserver l'identité culturelle de notre communauté d'origine",
        en: 'Preserve the cultural identity of our home community',
        wo: 'Denc sunu cosaan ak sunu aada',
      },
      {
        fr: 'Créer un moment de partage intergénérationnel',
        en: 'Create a moment of sharing between generations',
        wo: 'Sos ab diir bu mag ak ndaw di séddoo',
      },
      {
        fr: 'Valoriser les arts, danses et traditions mandéganes',
        en: 'Showcase the arts, dances and traditions of Mandégane',
        wo: 'Yékkati fecc yi, woy yi ak aada yu Mandégane',
      },
      {
        fr: "Renforcer le sentiment d'appartenance communautaire",
        en: 'Strengthen the sense of community belonging',
        wo: 'Dëgëral ni ñépp di bokke benn askan',
      },
    ],
    impact: [
      { fr: '400+ participants attendus', en: '400+ expected participants', wo: '400+ nit ñuy wóolu ñëw' },
      { fr: 'Spectacles culturels traditionnels', en: 'Traditional cultural performances', wo: 'Ay wone yu aada' },
      { fr: 'Exposition artisanale locale', en: 'Local crafts exhibition', wo: 'Wone liggéeyu loxo bu dëkk bi' },
      { fr: 'Moments de convivialité et partage', en: 'Moments of conviviality and sharing', wo: 'Ay diir yu neex ak séddoo' },
    ],
    gallery: [xawareTeam, groupe],
    cta: {
      title: { fr: 'Participer à l’Expérience', en: 'Join the Experience', wo: 'Bokk ci Xew-xew bi' },
      text: {
        fr: 'Rejoignez-nous pour une célébration immersive de notre culture, un moment d’élégance, de tradition et de transmission.',
        en: 'Join us for an immersive celebration of our culture, a moment of elegance, tradition and transmission.',
        wo: 'Ñëwal nu màggal sunu aada, ab diir bu rafet, bu cosaan te am jottali.',
      },
      label: CONTACT_US,
      to: '/contact',
    },
  },
  {
    slug: 'journee-integration',
    title: { fr: "Journée d'Intégration", en: 'Integration Day', wo: 'Bésub Dalal' },
    month: 9,
    section: 'Dakar',
    category: { fr: 'Intégration', en: 'Integration', wo: 'Dalal' },
    icon: HandHeart,
    short: {
      fr: 'Accueil chaleureux des nouveaux membres dans la famille AEEOM.',
      en: 'A warm welcome for new members into the AEEOM family.',
      wo: 'Dalal yu tàng ngir way-bokk yu bees yi ci njabootu AEEOM.',
    },
    tagline: {
      fr: 'Accueil chaleureux des nouveaux membres dans la grande famille AEEOM, un moment convivial, interactif et fédérateur qui bâtit notre communauté.',
      en: 'A warm welcome for new members into the great AEEOM family: a friendly, interactive and unifying moment that builds our community.',
      wo: 'Dalal yu tàng ngir way-bokk yu bees yi ci njaboot gu mag gu AEEOM : ab diir bu neex, bu ñépp bokk te di dëgëral sunu askan.',
    },
    image: famille,
    about: [
      {
        fr: "La Journée d'Intégration est l'événement phare de la rentrée AEEOM. Elle accueille les nouveaux membres dans une ambiance conviviale et dynamique, leur permettant de découvrir notre organisation, nos valeurs et notre vision, tout en créant des liens solides avec la communauté.",
        en: 'Integration Day is the flagship back-to-school event of AEEOM. It welcomes new members in a friendly, dynamic atmosphere, letting them discover our organisation, our values and our vision while building strong ties with the community.',
        wo: 'Bésub Dalal bi mooy xew-xewu ubbiteg jàng bi gëna mag ci AEEOM. Dafay dalal way-bokk yu bees yi ci ab diir bu neex, ngir ñu xam sunu mbootaay, sunuy jikko ak sunu gis-gis, te lëkkaloo ak askan wi.',
      },
      {
        fr: 'Au programme : présentations institutionnelles, activités de team building, témoignages inspirants, sessions interactives et moments conviviaux. Chaque membre se voit attribuer un parrain ou une marraine pour garantir un accompagnement personnalisé.',
        en: 'On the programme: institutional presentations, team-building activities, inspiring testimonies, interactive sessions and friendly moments. Each member is paired with a sponsor to ensure personalised support.',
        wo: 'Ci programme bi : ay wone ci mbootaay gi, ay po yu boole, ay seede yuy yee, ay waxtaan ak ay diir yu neex. Way-bokk bu nekk dañu koy jox ab parrain walla ab marraine ngir gindi ko.',
      },
    ],
    impactTitle: { fr: 'Impact sur la Cohésion', en: 'Impact on Cohesion', wo: 'Njeexital ci Booloo' },
    impactText: {
      fr: "La Journée d'Intégration renforce la cohésion de notre communauté en créant des liens durables entre générations, tout en transmettant notre culture organisationnelle et nos valeurs d'excellence.",
      en: "Integration Day strengthens our community's cohesion by creating lasting bonds between generations, while passing on our organisational culture and our values of excellence.",
      wo: 'Bésub Dalal bi dafay dëgëral booloo gi ci sunu askan, di sos ay lëkkalo yu yàgg ci digg mag ak ndaw, te di jottali sunu aada ak sunu jikkoy xarañ.',
    },
    objectives: [
      {
        fr: "Accueillir chaleureusement les nouveaux membres de l'AEEOM",
        en: 'Warmly welcome new AEEOM members',
        wo: 'Dalal ak xol bu tàng way-bokk yu bees yi',
      },
      {
        fr: "Présenter l'organisation, sa vision et ses valeurs fondamentales",
        en: 'Present the organisation, its vision and core values',
        wo: 'Wone mbootaay gi, gis-gisam ak jikko yi mu tënk',
      },
      {
        fr: 'Faciliter la création de liens entre anciens et nouveaux membres',
        en: 'Help build ties between former and new members',
        wo: 'Yombal lëkkalo ci digg way-bokk yu yàgg yi ak yu bees yi',
      },
      {
        fr: 'Partager les opportunités et ressources disponibles',
        en: 'Share available opportunities and resources',
        wo: 'Séddoo yoon yi ak jumtukaay yi am',
      },
      {
        fr: "Intégrer les nouveaux dans notre culture d'excellence et de solidarité",
        en: 'Integrate newcomers into our culture of excellence and solidarity',
        wo: 'Duggal ñu bees ñi ci sunu aadas xarañ ak dimbalante',
      },
    ],
    impact: [
      { fr: '50+ nouveaux membres intégrés', en: '50+ new members welcomed', wo: '50+ way-bokk yu bees' },
      { fr: 'Activités de team building', en: 'Team-building activities', wo: 'Ay po yu boole' },
      { fr: 'Mentorat et parrainage', en: 'Mentoring and sponsorship', wo: 'Gindi ak parrainage' },
      { fr: 'Cohésion renforcée', en: 'Stronger cohesion', wo: 'Booloo gu gëna dëgër' },
    ],
    cta: {
      title: { fr: 'Nous Rejoindre', en: 'Join Us', wo: 'Bokkal ci nun' },
      text: {
        fr: "Intégrez une communauté d'étudiants ambitieux, solidaires et dynamiques pour vivre une expérience unique et immersive.",
        en: 'Join a community of ambitious, supportive and dynamic students for a unique, immersive experience.',
        wo: 'Duggal ci askanu ndongo yu am yéene, di dimbalante te am kàttan, ngir dund lu amul moroom.',
      },
      label: CONTACT_US,
      to: '/contact',
    },
  },
  {
    slug: 'diner-de-gala',
    title: { fr: 'Dîner de Gala', en: 'Gala Dinner', wo: 'Reeru Gala' },
    month: 11,
    section: 'Dakar',
    category: { fr: 'Prestige', en: 'Prestige', wo: 'Tedd' },
    icon: Sparkles,
    short: {
      fr: 'Soirée prestigieuse de networking et célébration de nos réussites.',
      en: 'A prestigious evening of networking and celebration of our successes.',
      wo: 'Guddi gu tedd ngir jokkoo ak màggal sunuy ndam.',
    },
    tagline: {
      fr: 'Une soirée d’exception réunissant leaders, partenaires et membres distingués dans un cadre raffiné, célébrant l’excellence, la reconnaissance institutionnelle et le networking stratégique de haut niveau.',
      en: 'An exceptional evening bringing together leaders, partners and distinguished members in a refined setting, celebrating excellence, institutional recognition and high-level strategic networking.',
      wo: 'Guddi gu amul moroom guy boole ay njiit, ay àndandoo ak ay way-bokk yu tedd ci bérab bu rafet, di màggal xarañ, ngërëm ak jokkoo gu kawe.',
    },
    image: gala,
    about: [
      {
        fr: "Le Dîner de Gala de l'AEEOM constitue le sommet de notre calendrier annuel. Cette soirée d’exception réunit membres, partenaires stratégiques, sponsors et décideurs dans un environnement élégant et hautement institutionnel. Elle célèbre l’excellence académique, la réussite collective et la vision ambitieuse portée par notre organisation.",
        en: "AEEOM's Gala Dinner is the highlight of our annual calendar. This exceptional evening brings together members, strategic partners, sponsors and decision-makers in an elegant, highly institutional setting. It celebrates academic excellence, collective success and the ambitious vision of our organisation.",
        wo: 'Reeru Gala bu AEEOM mooy kaw-kawu sunu at mi. Guddi gu amul moroom gii dafay boole way-bokk yi, àndandoo yi, sponsor yi ak njiit yi ci bérab bu rafet te tedd. Dafay màggal xarañ ci jàng, ndamu ñépp ak gis-gis bu mag bu sunu mbootaay.',
      },
      {
        fr: 'Véritable plateforme de networking premium, le Gala favorise les connexions stratégiques, renforce les alliances institutionnelles et génère des ressources essentielles au financement de nos projets communautaires. C’est également un moment clé pour valoriser l’impact de nos actions et projeter notre ambition à l’échelle nationale et internationale.',
        en: 'A true premium networking platform, the Gala fosters strategic connections, strengthens institutional alliances and generates essential resources to fund our community projects. It is also a key moment to showcase the impact of our actions and project our ambition nationally and internationally.',
        wo: 'Gala bi bérab bu mag la ngir jokkoo : dafay sos ay lëkkalo yu am solo, dëgëral àndandoo yi te indi xaalis bu nu soxla ngir sunuy jëf ci askan wi. Mooy itam diir bu ñuy wone li sunuy jëf indi, te yékkati sunu yéene ci réew mi ak ci àddina.',
      },
    ],
    impactTitle: { fr: 'Impact Institutionnel', en: 'Institutional Impact', wo: 'Njeexital ci Mbootaay gi' },
    impactText: {
      fr: 'Le Gala consolide la crédibilité et la visibilité de l’AEEOM auprès des institutions, entreprises et décideurs. Il positionne notre organisation comme un acteur stratégique majeur de l’écosystème estudiantin et associatif national.',
      en: "The Gala strengthens AEEOM's credibility and visibility with institutions, companies and decision-makers. It positions our organisation as a major strategic player in the national student and community ecosystem.",
      wo: 'Gala bi dafay yokk wóolu ak siiwaayu AEEOM ci kanam ay mbootaay, ay entreprise ak ay njiit. Dafay teg sunu mbootaay ci boppu mbootaayi ndongo yi ci réew mi.',
    },
    objectives: [
      {
        fr: 'Célébrer les réussites académiques et professionnelles de nos membres',
        en: 'Celebrate the academic and professional successes of our members',
        wo: 'Màggal ndamu sunuy way-bokk ci jàng ak ci liggéey',
      },
      {
        fr: 'Créer un espace de networking premium entre membres et partenaires',
        en: 'Create a premium networking space for members and partners',
        wo: 'Sos bérab bu kawe ngir way-bokk yi ak àndandoo yi jokkoo',
      },
      {
        fr: 'Renforcer les liens institutionnels avec nos sponsors stratégiques',
        en: 'Strengthen institutional ties with our strategic sponsors',
        wo: 'Dëgëral lëkkalo gi ak sunuy sponsor',
      },
      {
        fr: 'Lever des fonds pour financer nos initiatives communautaires',
        en: 'Raise funds to finance our community initiatives',
        wo: 'Wut xaalis ngir sunuy jëf ci askan wi',
      },
      {
        fr: "Valoriser l'image et la crédibilité de l'AEEOM",
        en: "Enhance AEEOM's image and credibility",
        wo: 'Yokk teraanga ak wóolu bu AEEOM',
      },
    ],
    impact: [
      { fr: '200+ invités de prestige', en: '200+ distinguished guests', wo: '200+ gan yu tedd' },
      { fr: 'Networking de haut niveau', en: 'High-level networking', wo: 'Jokkoo gu kawe' },
      { fr: 'Levée de fonds significative', en: 'Significant fundraising', wo: 'Xaalis bu bari bu ñu wut' },
      { fr: 'Renforcement des partenariats', en: 'Stronger partnerships', wo: 'Àndandoo yu gëna dëgër' },
    ],
    gallery: [galaTeam, portraitA, galaGuests, portraitB, groupe, xawareTeam],
    cta: {
      title: { fr: 'Devenir Sponsor Officiel', en: 'Become an Official Sponsor', wo: 'Nekkal Sponsor bu Wóor' },
      text: {
        fr: 'Associez votre marque à un événement d’exception et bénéficiez d’une visibilité stratégique auprès d’un réseau institutionnel influent et qualifié.',
        en: 'Associate your brand with an exceptional event and gain strategic visibility with an influential, qualified institutional network.',
        wo: 'Boolel sa mark ak xew-xew bu amul moroom, te nga siiw ci kanam ab mbooloo bu am doole te xarañ.',
      },
      label: { fr: 'Devenir Sponsor', en: 'Become a Sponsor', wo: 'Nekk Sponsor' },
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

export const statusLabel = (month: number, now = new Date()): Tr => {
  const n = monthsUntil(month, now);
  if (n === 0) return { fr: 'Ce mois-ci', en: 'This month', wo: 'Ci weer wii' };
  if (n === 1) return { fr: 'Le mois prochain', en: 'Next month', wo: 'Weer wi ci topp' };
  return { fr: `Dans ${n} mois`, en: `In ${n} months`, wo: `Ci ${n} weer` };
};
