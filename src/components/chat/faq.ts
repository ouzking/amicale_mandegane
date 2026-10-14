/**
 * Moteur de réponses du chat (version gratuite, sans IA).
 *
 * Chaque sujet (intent) est reconnu par des mots-clés pondérés, en français, anglais
 * et wolof. Les réponses sont construites à partir des données du site (événements,
 * membres, contacts) : elles restent donc à jour automatiquement, dans la langue choisie.
 *
 * Évolution prévue : remplacer `reply()` par un appel à une fonction Netlify
 * branchée sur Claude, sans toucher à l'interface (ChatWidget).
 */
import { events, MONTHS, statusLabel, upcomingEvents } from '../../data/events';
import { members } from '../../data/members';
import { CONTACT, SOCIALS, telHref, whatsappHref } from '../../data/site';
import type { Lang, Tr } from '../../i18n/core';
import { resolve } from '../../i18n/core';
import { positionTr } from '../../i18n/positions';

export interface ChatLink {
  label: string;
  to?: string;
  href?: string;
}

export interface Reply {
  text: string;
  links?: ChatLink[];
}

type T = (text: Tr) => string;

interface Intent {
  id: string;
  /** Question proposée en suggestion (facultatif). */
  suggestion?: Tr;
  /** Mots-clés : un mot (préfixe accepté dès 4 lettres) ou une expression. Poids par défaut : 1. */
  keywords: (string | [string, number])[];
  answer: (t: T) => Reply;
}

const normalize = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[’']/g, ' ');

const WHATSAPP: Tr = { fr: 'Écrire sur WhatsApp', en: 'Message on WhatsApp', wo: 'Bind ci WhatsApp' };
const CONTACT_PAGE: Tr = { fr: 'Page contact', en: 'Contact page', wo: 'Xëtu jokkoo' };

// Les messages WhatsApp reçus par l'équipe restent en français
const whatsappLink = (t: T, text = "Bonjour, j'ai une question concernant l'AEEOM.") => ({
  label: t(WHATSAPP),
  href: whatsappHref(CONTACT.whatsappContact, text),
});

/* ============ Sujets ============ */
const BASE_INTENTS: Intent[] = [
  {
    id: 'salutation',
    keywords: [
      'bonjour', 'bonsoir', 'salut', 'hello', 'coucou', 'salam', 'hi', 'hey',
      ['good morning', 2], ['assalam', 2], ['asalaa', 2], ['nanga def', 2], ['na nga def', 2],
    ],
    answer: (t) => ({
      text: t({
        fr: 'Bonjour et bienvenue ! Je suis l’assistant de l’AEEOM. Posez-moi votre question ou choisissez un sujet ci-dessous.',
        en: 'Hello and welcome! I am the AEEOM assistant. Ask me your question or pick a topic below.',
        wo: 'Asalaa maalekum, dalal ak jàmm ! Maa di ndimbalu AEEOM. Laajal sa laaj walla nga tànn benn ci mbir yi ci suuf.',
      }),
    }),
  },
  {
    id: 'prochain',
    suggestion: { fr: 'Quel est le prochain événement ?', en: 'What is the next event?', wo: 'Ban xew-xew mooy ñëw ?' },
    keywords: [
      'prochain', 'agenda', 'calendrier', 'quand', 'date', ['evenement', 2], 'programme', 'activite',
      'next', 'upcoming', 'when', 'calendar', ['event', 2], ['xew-xew', 2], 'ndaje', ['ci kanam', 2],
    ],
    answer: (t) => {
      const [next, after] = upcomingEvents();
      return {
        text: t({
          fr: `Le prochain rendez-vous est « ${t(next.title)} » (${t(MONTHS[next.month])}, ${t(statusLabel(next.month)).toLowerCase()}).\n${t(next.short)}\n\nEnsuite : « ${t(after.title)} » en ${t(MONTHS[after.month])}.`,
          en: `The next event is “${t(next.title)}” (${t(MONTHS[next.month])}, ${t(statusLabel(next.month)).toLowerCase()}).\n${t(next.short)}\n\nThen: “${t(after.title)}” in ${t(MONTHS[after.month])}.`,
          wo: `Ndaje mi ci kanam mooy « ${t(next.title)} » (${t(MONTHS[next.month])}, ${t(statusLabel(next.month)).toLowerCase()}).\n${t(next.short)}\n\nGinnaaw ga : « ${t(after.title)} » ci ${t(MONTHS[after.month])}.`,
        }),
        links: [
          { label: t(next.title), to: `/evenements/${next.slug}` },
          { label: t({ fr: 'Tout le calendrier', en: 'Full calendar', wo: 'Arminaat bi yépp' }), to: '/evenements' },
        ],
      };
    },
  },
  {
    id: 'adhesion',
    suggestion: { fr: 'Comment devenir membre ?', en: 'How do I become a member?', wo: 'Naka laa man a bokk ?' },
    keywords: [
      ['adher', 3], ['rejoindre', 3], ['inscri', 3], ['devenir membre', 4], ['integrer', 2], 'adhesion', 'cotisation', 'membre',
      ['join', 3], ['membership', 3], ['register', 3], ['sign up', 3], ['become a member', 4], 'member',
      ['bokk', 3], ['dugg', 3], ['bindu', 3], 'way-bokk',
    ],
    answer: (t) => ({
      text: t({
        fr: 'Rejoindre l’AEEOM, c’est simple :\n1. Contactez-nous via le formulaire ou sur WhatsApp en précisant votre établissement.\n2. Vous êtes rattaché(e) à la Section Dakar ou à la Section Ziguinchor.\n3. Vous êtes accueilli(e) lors de la Journée d’Intégration, avec un parrain ou une marraine.\n\nL’AEEOM s’adresse aux élèves et étudiants originaires de Mandégane.',
        en: 'Joining AEEOM is simple:\n1. Contact us through the form or on WhatsApp, mentioning your school or university.\n2. You join either the Dakar Section or the Ziguinchor Section.\n3. You are welcomed at Integration Day, with a personal sponsor.\n\nAEEOM is open to pupils and students from Mandégane.',
        wo: 'Bokk ci AEEOM yomb na :\n1. Jokkool ak nun ci formulaire bi walla ci WhatsApp, te nga wax sa lekkool walla sa iniwérsite.\n2. Dinga bokk ci Pàccu Dakar walla ci Pàccu Ziguinchor.\n3. Dinañu la dalal ci Bésub Dalal bi, ak ab parrain walla ab marraine.\n\nAEEOM ngir ndongo yu juddoo Mandégane la.',
      }),
      links: [
        { label: t({ fr: 'Formulaire de contact', en: 'Contact form', wo: 'Formulaire bi' }), to: '/contact' },
        whatsappLink(t, "Bonjour, je souhaite adhérer à l'AEEOM."),
      ],
    }),
  },
  {
    id: 'contact',
    suggestion: { fr: 'Comment vous contacter ?', en: 'How can I contact you?', wo: 'Naka laa leen man a jokkoo ?' },
    keywords: [
      ['contact', 3], 'telephone', 'numero', 'email', 'mail', 'joindre', 'appeler', 'whatsapp', 'ecrire',
      'phone', 'number', 'call', 'reach', ['jokkoo', 3], 'telefon', 'nimero', 'woo',
    ],
    answer: (t) => ({
      text: t({
        fr: `Vous pouvez nous joindre :\n• Téléphone : ${CONTACT.phones.join(' / ')}\n• Email : ${CONTACT.email}\n• Horaires : ${CONTACT.hours.map((h) => `${t(h.days)} ${h.time}`).join(' · ')}`,
        en: `You can reach us:\n• Phone: ${CONTACT.phones.join(' / ')}\n• Email: ${CONTACT.email}\n• Hours: ${CONTACT.hours.map((h) => `${t(h.days)} ${h.time}`).join(' · ')}`,
        wo: `Man ngeen nu jokkoo :\n• Telefon : ${CONTACT.phones.join(' / ')}\n• Imeel : ${CONTACT.email}\n• Waxtu : ${CONTACT.hours.map((h) => `${t(h.days)} ${h.time}`).join(' · ')}`,
      }),
      links: [
        whatsappLink(t),
        { label: t({ fr: 'Appeler', en: 'Call', wo: 'Woo' }), href: telHref(CONTACT.phones[0]) },
        { label: t(CONTACT_PAGE), to: '/contact' },
      ],
    }),
  },
  {
    id: 'partenariat',
    suggestion: { fr: 'Devenir partenaire ou sponsor', en: 'Become a partner or sponsor', wo: 'Nekk àndandoo walla sponsor' },
    keywords: [
      ['partenai', 3], ['sponsor', 3], 'mecene', 'financer', 'soutenir', 'soutien', 'don', 'entreprise', 'collaboration',
      ['partner', 3], 'fund', 'donate', 'company', 'support', ['andandoo', 3], 'dimbali', 'xaalis',
    ],
    answer: (t) => ({
      text: t({
        fr: 'Un partenariat avec l’AEEOM vous offre : visibilité auprès d’une communauté d’étudiants, accès aux talents, impact social direct à Mandégane et valorisation de votre RSE.\n\nTrois formules : stratégique, sponsoring (Dîner de Gala, Caravane Médicale…) ou institutionnelle.',
        en: 'Partnering with AEEOM gives you: visibility with a student community, access to talent, direct social impact in Mandégane and a stronger CSR profile.\n\nThree formats: strategic, sponsorship (Gala Dinner, Medical Caravan…) or institutional.',
        wo: 'Àndandoo ak AEEOM dafay jox : siiw ci biir askanu ndongo, jot ci mën-mën yi, njeexital ci Mandégane ak yokk sa warugar ci askan wi.\n\nÑetti xeet : àndandoo bu mag, sponsoring (Reeru Gala, Karawaanu Paj…) walla liggéey ak mbootaay.',
      }),
      links: [
        { label: t({ fr: 'Devenir partenaire', en: 'Become a partner', wo: 'Nekk àndandoo' }), to: '/partenaires' },
        {
          label: t(WHATSAPP),
          href: whatsappHref(CONTACT.whatsappPartner, 'Bonjour, je souhaite discuter d’un partenariat avec l’AEEOM.'),
        },
      ],
    }),
  },
  {
    id: 'aeeom',
    suggestion: { fr: 'C’est quoi l’AEEOM ?', en: 'What is AEEOM?', wo: 'Lan mooy AEEOM ?' },
    keywords: [
      ['aeeom', 2], 'amicale', 'mission', 'vision', 'valeur', 'objectif', 'association', 'presentation', ['qui etes', 2],
      ['about', 2], ['who are', 2], 'values', ['mbootaay', 2],
    ],
    answer: (t) => ({
      text: t({
        fr: 'L’AEEOM est l’Amicale des Élèves et Étudiants Originaires de Mandégane. Elle fédère plus de 200 membres autour de l’excellence académique, de la solidarité, du leadership et du développement de Mandégane.\n\nDevise : « S’associer pour mieux servir l’avenir ».',
        en: 'AEEOM is the Association of Pupils and Students from Mandégane. It brings together more than 200 members around academic excellence, solidarity, leadership and the development of Mandégane.\n\nMotto: “Uniting to better serve the future”.',
        wo: 'AEEOM mooy Mbootaayu Ndongo yu Juddoo Mandégane. Dafay boole lu ëpp 200 way-bokk ci xarañ ci jàng, dimbalante, njiitlu ak yokkute Mandégane.\n\nWoowu : « Booloo ngir gëna jariñ ëllëg ».',
      }),
      links: [{ label: t({ fr: 'Notre organisation', en: 'Our organisation', wo: 'Sunu mbootaay' }), to: '/organisation' }],
    }),
  },
  {
    id: 'sections',
    keywords: [['section', 3], ['dakar', 2], ['ziguinchor', 2], 'antenne', 'casamance', 'branch', ['pacc', 3]],
    answer: (t) => ({
      text: t({
        fr: 'L’AEEOM compte deux sections :\n• Section Dakar : le hub national, 150+ membres, qui pilote les grands événements.\n• Section Ziguinchor : l’antenne régionale, 50+ membres, au plus près de Mandégane.',
        en: 'AEEOM has two sections:\n• Dakar Section: the national hub, 150+ members, leading the major events.\n• Ziguinchor Section: the regional branch, 50+ members, closest to Mandégane.',
        wo: 'AEEOM am na ñaari pàcc :\n• Pàccu Dakar : kër gu mag gi, 150+ way-bokk, moo jiite xew-xew yu mag yi.\n• Pàccu Ziguinchor : pàcc bi ci gox bi, 50+ way-bokk, moo gëna jege Mandégane.',
      }),
      links: [
        { label: t({ fr: 'Section Dakar', en: 'Dakar Section', wo: 'Pàccu Dakar' }), to: '/organisation/dakar' },
        { label: t({ fr: 'Section Ziguinchor', en: 'Ziguinchor Section', wo: 'Pàccu Ziguinchor' }), to: '/organisation/ziguinchor' },
      ],
    }),
  },
  {
    id: 'bureau',
    keywords: [
      ['presiden', 3], ['bureau', 3], 'dirige', 'responsable', 'tresorier', 'secretaire', 'equipe', 'gouvernance',
      ['board', 3], 'leader', 'team', 'treasurer', 'secretary', ['njiit', 3], ['biro', 3],
    ],
    answer: (t) => {
      const bureau = members.filter((m) => m.role === 'Bureau Exécutif');
      const p = members.find((m) => m.position === 'Présidente');
      const list = bureau.map((m) => `• ${t(positionTr(m.position))} : ${m.fullName}`).join('\n');
      return {
        text: p
          ? t({
              fr: `L’AEEOM est présidée par ${p.fullName}.\nBureau exécutif :\n${list}`,
              en: `AEEOM is led by its President, ${p.fullName}.\nExecutive board:\n${list}`,
              wo: `${p.fullName} mooy njiitu AEEOM.\nBiro bi :\n${list}`,
            })
          : list,
        links: [{ label: t({ fr: 'Voir tous les membres', en: 'See all members', wo: 'Xool way-bokk yépp' }), to: '/membres' }],
      };
    },
  },
  {
    id: 'lieu',
    keywords: [
      ['mandegane', 2], 'adresse', 'situe', 'localisation', 'trouver', 'carte', ['ou etes', 2], 'lieu', 'blouf', 'bignona',
      'where', 'location', 'address', 'map', ['fan', 2], 'fu',
    ],
    answer: (t) => ({
      text: t({
        fr: `Nos membres sont originaires de Mandégane, en Casamance. L’AEEOM est active à ${CONTACT.location}.`,
        en: `Our members come from Mandégane, in Casamance. AEEOM is active in ${CONTACT.location}.`,
        wo: `Sunuy way-bokk juddoo nañu Mandégane, ci Kaasamaas. AEEOM dafay jëf ci ${CONTACT.location}.`,
      }),
      links: [{ label: t({ fr: 'Voir la carte', en: 'See the map', wo: 'Xool kart bi' }), to: '/contact' }],
    }),
  },
  {
    id: 'reseaux',
    keywords: ['facebook', 'instagram', 'tiktok', ['reseaux', 2], 'suivre', 'abonner', 'social', 'follow'],
    answer: (t) => ({
      text: t({
        fr: 'Suivez l’AEEOM sur les réseaux sociaux pour ne rien manquer de nos activités.',
        en: 'Follow AEEOM on social media so you never miss our activities.',
        wo: 'Toppal AEEOM ci réseaux sociaux yi ngir bañ a ñàkk benn ci sunuy jëf.',
      }),
      links: [
        { label: 'Facebook', href: SOCIALS.facebook },
        { label: 'Instagram', href: SOCIALS.instagram },
        { label: 'TikTok', href: SOCIALS.tiktok },
      ],
    }),
  },
  {
    id: 'merci',
    keywords: ['merci', 'thanks', 'thank', 'jerejef', 'jaajef', 'super', 'parfait', 'genial'],
    answer: (t) => ({
      text: t({
        fr: 'Avec plaisir ! N’hésitez pas si vous avez une autre question.',
        en: 'You are welcome! Feel free to ask if you have another question.',
        wo: 'Ñoo ko bokk ! Bul tiit di laaj su la beneen laaj amee.',
      }),
    }),
  },
];

const EXTRA_EVENT_KEYWORDS: Record<string, string[]> = {
  'caravane-medicale': ['sante', 'medical', 'consultation', 'soin', 'docteur', 'medecin', 'health', 'doctor', 'paj', 'feebar'],
  'conference-religieuse': ['religion', 'religious', 'spirituel', 'islam', 'foi', 'priere', 'diine', 'waxtaan'],
  masterclass: ['formation', 'atelier', 'expert', 'cours', 'apprendre', 'training', 'workshop', 'taggatu'],
  xaware: ['culture', 'tradition', 'danse', 'dance', 'festival', 'musique', 'music', 'aada', 'cosaan'],
  'journee-integration': ['integration', 'accueil', 'nouveau', 'nouveaux', 'parrain', 'marraine', 'welcome', 'dalal'],
  'diner-de-gala': ['gala', 'soiree', 'diner', 'dinner', 'networking', 'ceremonie', 'reer'],
};

// Un sujet par événement, généré depuis les données (le nom de l'événement pèse plus lourd)
const EVENT_INTENTS: Intent[] = events.map((e) => {
  const titles = typeof e.title === 'string' ? [e.title] : Object.values(e.title).filter(Boolean);
  const names = [
    ...new Set(
      titles.flatMap((title) =>
        normalize(title as string)
          .split(/[^a-z0-9]+/)
          .filter((w) => w.length >= 4 && !['journee', 'diner', 'section'].includes(w)),
      ),
    ),
  ];
  return {
    id: `event-${e.slug}`,
    keywords: [
      ...names.map<[string, number]>((n) => [n, 4]),
      ...(EXTRA_EVENT_KEYWORDS[e.slug] ?? []).map<[string, number]>((k) => [k, 3]),
    ],
    answer: (t) => ({
      text: t({
        fr: `${t(e.title)} — ${t(MONTHS[e.month])} (${t(statusLabel(e.month)).toLowerCase()}), Section ${e.section}.\n${t(e.short)}\n\nImpact prévu : ${e.impact.slice(0, 2).map((i) => t(i)).join(', ').toLowerCase()}.`,
        en: `${t(e.title)} — ${t(MONTHS[e.month])} (${t(statusLabel(e.month)).toLowerCase()}), ${e.section} Section.\n${t(e.short)}\n\nExpected impact: ${e.impact.slice(0, 2).map((i) => t(i)).join(', ').toLowerCase()}.`,
        wo: `${t(e.title)} — ${t(MONTHS[e.month])} (${t(statusLabel(e.month)).toLowerCase()}), Pàccu ${e.section}.\n${t(e.short)}\n\nNjeexital li ñu xaar : ${e.impact.slice(0, 2).map((i) => t(i)).join(', ').toLowerCase()}.`,
      }),
      links: [
        { label: t({ fr: 'Découvrir l’événement', en: 'Discover the event', wo: 'Xam xew-xew bi' }), to: `/evenements/${e.slug}` },
        { label: t(e.cta.label), to: e.cta.to },
      ],
    }),
  };
});

const INTENTS = [...BASE_INTENTS, ...EVENT_INTENTS];

const scoreIntent = (intent: Intent, text: string, tokens: string[]) =>
  intent.keywords.reduce((total, k) => {
    const [kw, weight] = typeof k === 'string' ? [k, 1] : k;
    const hit = kw.includes(' ')
      ? text.includes(kw)
      : tokens.some((tok) => (kw.length >= 4 ? tok.startsWith(kw) : tok === kw));
    return hit ? total + weight : total;
  }, 0);

export const suggestions = (lang: Lang) =>
  INTENTS.filter((i) => i.suggestion).map((i) => resolve(i.suggestion as Tr, lang));

export const welcome = (lang: Lang): Reply => ({
  text: resolve(
    {
      fr: 'Bonjour ! Je suis l’assistant de l’AEEOM. Je peux vous renseigner sur nos événements, l’adhésion, les partenariats ou nos contacts.',
      en: 'Hello! I am the AEEOM assistant. I can tell you about our events, membership, partnerships or how to reach us.',
      wo: 'Asalaa maalekum ! Maa di ndimbalu AEEOM. Man naa la xamal sunuy xew-xew, naka ngay bokke, àndandoo yi walla naka ngay nu jokkoo.',
    },
    lang,
  ),
});

/** Trouve la meilleure réponse à une question libre, dans la langue choisie. */
export const reply = (question: string, lang: Lang): Reply => {
  const t: T = (text) => resolve(text, lang);
  const text = normalize(question);
  const tokens = text.split(/[^a-z0-9-]+/).filter(Boolean);
  let best: Intent | null = null;
  let bestScore = 0;
  for (const intent of INTENTS) {
    const s = scoreIntent(intent, text, tokens);
    if (s > bestScore) {
      best = intent;
      bestScore = s;
    }
  }
  if (best) return best.answer(t);
  return {
    text: t({
      fr: 'Je n’ai pas encore la réponse à cette question. Un membre de l’équipe peut vous répondre directement sur WhatsApp, ou vous pouvez choisir un des sujets proposés.',
      en: 'I do not have the answer to that yet. A team member can reply directly on WhatsApp, or you can pick one of the suggested topics.',
      wo: 'Xamuma ba tey tontu laaj boobu. Benn ci sunu mbooloo man na la tontu ci WhatsApp, walla nga tànn benn ci mbir yi ñu la won.',
    }),
    links: [whatsappLink(t, `Bonjour, j'ai une question : ${question}`), { label: t(CONTACT_PAGE), to: '/contact' }],
  };
};
