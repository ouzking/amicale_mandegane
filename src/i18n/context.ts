import { createContext, useCallback, useContext } from 'react';
import type { Lang, Tr } from './core';
import { resolve } from './core';

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const LangContext = createContext<LangContextValue>({ lang: 'fr', setLang: () => {} });

export const useLang = () => useContext(LangContext);

/** Renvoie la fonction de traduction pour la langue active. */
export const useT = () => {
  const { lang } = useLang();
  return useCallback((text: Tr) => resolve(text, lang), [lang]);
};
