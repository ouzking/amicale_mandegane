import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Lang } from './core';
import { LANGUAGES } from './core';
import { LangContext } from './context';

const STORAGE_KEY = 'aeeom-lang';

const initialLang = (): Lang => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && LANGUAGES.some((l) => l.code === saved)) return saved;
  } catch {
    /* stockage indisponible : langue par défaut */
  }
  return 'fr';
};

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* préférence non mémorisée, sans gravité */
    }
  }, []);

  useEffect(() => {
    // Codes ISO 639 : wo = wolof, dyo = joola-fogny
    document.documentElement.lang = lang === 'di' ? 'dyo' : lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export default LanguageProvider;
