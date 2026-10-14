import { LANGUAGES } from './core';
import { useLang } from './context';

/** Sélecteur de langue compact (FR · EN · WO). */
const LanguageSwitcher = ({ className = '' }: { className?: string }) => {
  const { lang, setLang } = useLang();
  return (
    <div className={`flex items-center gap-1 ${className}`} role="group" aria-label="Langue / Language">
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          title={l.name}
          className={`rounded-full px-2.5 py-1.5 text-[10px] font-bold tracking-[0.18em] transition-colors duration-300 ${
            lang === l.code ? 'bg-gold-500 text-ink-950' : 'text-ivory-100/60 hover:text-ivory-50'
          }`}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
