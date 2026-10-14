import { useRef } from 'react';
import type { MotionValue } from 'framer-motion';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollWordsProps {
  text: string;
  /** Mots (sans ponctuation) mis en valeur en or. */
  highlight?: string[];
  className?: string;
}

const Word = ({
  word,
  progress,
  range,
  gold,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  gold: boolean;
}) => {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className={`mr-[0.25em] inline-block ${gold ? 'text-gold-600' : ''}`}>
      {word}
    </motion.span>
  );
};

/** Texte qui s'illumine mot après mot au fil du défilement. */
const ScrollWords = ({ text, highlight = [], className = '' }: ScrollWordsProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const words = text.split(' ');

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word
          key={i}
          word={w}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          gold={highlight.includes(w.replace(/[.,;:!?’']/g, ''))}
        />
      ))}
    </p>
  );
};

export default ScrollWords;
