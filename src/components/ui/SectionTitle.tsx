import type { ReactNode } from 'react';
import { Reveal, RevealLines } from './Reveal';

interface SectionTitleProps {
  eyebrow: string;
  lines: ReactNode[];
  text?: ReactNode;
  dark?: boolean;
  center?: boolean;
  className?: string;
}

/** En-tête éditorial de section : surtitre, titre révélé, chapeau. */
const SectionTitle = ({ eyebrow, lines, text, dark, center, className = '' }: SectionTitleProps) => (
  <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
    <Reveal>
      <span className={`eyebrow ${dark ? 'text-gold-400' : 'text-gold-700'}`}>{eyebrow}</span>
    </Reveal>
    <RevealLines
      lines={lines}
      className={`h-display mt-6 text-[2.1rem] sm:text-5xl lg:text-[3.4rem] ${dark ? 'text-ivory-50' : 'text-ink-950'}`}
    />
    {text && (
      <Reveal delay={0.2}>
        <p
          className={`mt-7 text-base leading-relaxed sm:text-lg ${center ? 'mx-auto' : ''} max-w-2xl ${dark ? 'text-ivory-100/70' : 'text-ink-900/65'}`}
        >
          {text}
        </p>
      </Reveal>
    )}
  </div>
);

export default SectionTitle;
