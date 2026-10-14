import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export const EASE = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/** Apparition douce au défilement. */
export const Reveal = ({ children, delay = 0, y = 40, className = '' }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 1.1, ease: EASE, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

interface RevealLinesProps {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  /** Anime dès le montage (hero) plutôt qu'à l'entrée dans le viewport. */
  immediate?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'p';
}

/**
 * Titre révélé ligne par ligne derrière un masque.
 * Le déclenchement se fait sur le titre lui-même : les lignes masquées
 * (hors de leur conteneur overflow-hidden) ne sont jamais « visibles » pour l'observer.
 */
export const RevealLines = ({
  lines,
  className = '',
  lineClassName = '',
  delay = 0,
  immediate = false,
  as = 'h2',
}: RevealLinesProps) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      {...(immediate ? { animate: 'show' } : { whileInView: 'show', viewport: { once: true, margin: '-40px' } })}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${lineClassName}`}
            variants={{
              hidden: { y: '110%' },
              show: { y: '0%', transition: { duration: 1.2, ease: EASE, delay: delay + i * 0.09 } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};
