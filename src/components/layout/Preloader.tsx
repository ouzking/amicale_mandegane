import { useEffect, useState } from 'react';
import { AnimatePresence, animate, motion } from 'framer-motion';
import logo from '../../assets/LOGO.jpeg';
import { EASE } from '../ui/Reveal';
import { useT } from '../../i18n/context';

const KEY = 'aeeom-intro-seen';

const alreadySeen = () => {
  try {
    return sessionStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
};

/** Écran d'introduction, joué une fois par session. */
const Preloader = () => {
  const t = useT();
  const [visible, setVisible] = useState(() => !alreadySeen());
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const controls = animate(0, 100, {
      duration: 2,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => {
        try {
          sessionStorage.setItem(KEY, '1');
        } catch {
          /* stockage indisponible : on rejouera l'intro, sans gravité */
        }
        setTimeout(() => setVisible(false), 250);
      },
    });
    return () => controls.stop();
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="grain fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950 text-ivory-50"
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          initial={{ clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          <motion.img
            src={logo}
            alt=""
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE }}
            className="h-24 w-24 rounded-full object-cover ring-1 ring-gold-500/60"
          />
          <div className="mt-8 overflow-hidden">
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: EASE }}
              className="font-display text-5xl font-semibold tracking-[0.3em] sm:text-6xl"
            >
              AEEOM
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-3 text-[10px] font-semibold uppercase tracking-[0.5em] text-gold-400"
          >
            {t({ fr: 'S’associer pour mieux servir l’avenir', en: 'Uniting to better serve the future', wo: 'Booloo ngir gëna jariñ ëllëg' })}
          </motion.p>

          <div className="absolute bottom-10 left-1/2 w-[min(320px,70vw)] -translate-x-1/2">
            <div className="flex justify-between text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory-100/50">
              <span>Mandégane</span>
              <span className="tabular-nums text-gold-400">{count}%</span>
            </div>
            <div className="mt-3 h-px w-full bg-ivory-50/10">
              <div className="h-px bg-gold-500" style={{ width: `${count}%` }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
