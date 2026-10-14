import type { Tr } from './core';

/**
 * Traduction des postes et instances des membres (les intitulés restent en français
 * dans src/data/members.ts). Un poste absent de cette liste s'affiche en français.
 */
const POSITIONS: Record<string, Omit<Exclude<Tr, string>, 'fr'>> = {
  Présidente: { en: 'President', wo: 'Njiit' },
  'Conseillère de la Présidente': { en: 'Adviser to the President', wo: 'Ndigalkatu Njiit li' },
  'Secrétaire Général': { en: 'Secretary General', wo: 'Bindkat bu Mag' },
  'Trésorier Général': { en: 'Treasurer General', wo: 'Denckatu Xaalis bu Mag' },
  'Responsable Événementiel': { en: 'Head of Events', wo: 'Kilifay Xew-xew yi' },
  'Responsable Communication': { en: 'Head of Communication', wo: 'Kilifay Jokkoo' },
  'Responsable Relations Extérieures': { en: 'Head of External Relations', wo: 'Kilifay Lëkkalo ak Biti' },
  'Responsable Pédagogique': { en: 'Head of Academic Affairs', wo: 'Kilifay Jàng' },
  'Responsable des Activités Sportives': { en: 'Head of Sports', wo: 'Kilifay Tàggat-yaram' },
  'Adjointe au Secrétaire Général': { en: 'Deputy Secretary General', wo: 'Ndimbalu Bindkat bu Mag' },
  'Adjointe Trésorière': { en: 'Deputy Treasurer', wo: 'Ndimbalu Denckatu Xaalis' },
  'Adjoint Responsable Événementiel': { en: 'Deputy Head of Events', wo: 'Ndimbalu Kilifay Xew-xew yi' },
  'Adjointe Responsable Organisation': { en: 'Deputy Head of Organisation', wo: 'Ndimbalu Kilifay Mbootaay' },
  'Adjoint Chargé de la Communication': { en: 'Deputy Communication Officer', wo: 'Ndimbalu Kilifay Jokkoo' },
  'Adjointe Relations Extérieures': { en: 'Deputy Head of External Relations', wo: 'Ndimbalu Kilifay Lëkkalo ak Biti' },
  'Adjointe Responsable Tech & Innovation': { en: 'Deputy Head of Tech & Innovation', wo: 'Ndimbalu Kilifay Xarala ak Yees' },
  'Adjointe Responsable Pédagogique': { en: 'Deputy Head of Academic Affairs', wo: 'Ndimbalu Kilifay Jàng' },
  'Adjointe à la Coordination Pédagogique': { en: 'Deputy Academic Coordinator', wo: 'Ndimbalu Saytukatu Jàng' },
  'Adjoint Chargé du Sport': { en: 'Deputy Sports Officer', wo: 'Ndimbalu Kilifay Tàggat-yaram' },
  'Adjointe Chargée Médicale': { en: 'Deputy Medical Officer', wo: 'Ndimbalu Kilifay Wér-gi-yaram' },
  'Membre Simple': { en: 'Member', wo: 'Way-bokk' },
};

const ROLES: Record<string, Omit<Exclude<Tr, string>, 'fr'>> = {
  'Bureau Exécutif': { en: 'Executive Board', wo: 'Biro bi' },
  'Commissions Thématiques': { en: 'Thematic Committees', wo: 'Kurél yi' },
};

/** Intitulé de poste traduisible ; « Membre Simple » s'affiche « Membre » en français. */
export const positionTr = (position: string): Tr => ({
  fr: position === 'Membre Simple' ? 'Membre' : position,
  ...POSITIONS[position],
});

export const roleTr = (role: string): Tr =>
  role.startsWith('Commissions Simple') ? { fr: 'Membre', en: 'Member', wo: 'Way-bokk' } : { fr: role, ...ROLES[role] };
