/**
 * Traductions du site.
 *
 * Chaque texte s'écrit à côté de ses traductions : t({ fr: '…', en: '…', wo: '…', di: '…' }).
 * Une langue manquante retombe automatiquement sur le français : le site n'affiche
 * jamais de texte vide.
 *
 * Diola (joola du Blouf) : les champs `di` sont à remplir par les membres
 * (liste prioritaire : TRADUCTION-DIOLA.md). Passer DIOLA_READY à true pour
 * afficher la langue dans le sélecteur.
 */
export type Lang = 'fr' | 'en' | 'wo' | 'di';

export type Tr = string | { fr: string; en?: string; wo?: string; di?: string };

export const DIOLA_READY = false;

export const LANGUAGES: { code: Lang; short: string; name: string }[] = [
  { code: 'fr', short: 'FR', name: 'Français' },
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'wo', short: 'WO', name: 'Wolof' },
  ...(DIOLA_READY ? [{ code: 'di' as const, short: 'DI', name: 'Joola (Bluf)' }] : []),
];

/** Une traduction absente retombe sur le français ; une traduction vide ('') est respectée. */
export const resolve = (text: Tr, lang: Lang): string => {
  if (typeof text === 'string') return text;
  const value = text[lang];
  return value !== undefined ? value : text.fr;
};
