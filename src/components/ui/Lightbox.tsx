import { useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { lockScroll } from '../../lib/smooth';
import type { GalleryImage } from '../../data/site';
import { EASE } from './Reveal';
import { useT } from '../../i18n/context';

interface LightboxProps {
  images: GalleryImage[];
  index: number | null;
  onChange: (index: number | null) => void;
}

const Lightbox = ({ images, index, onChange }: LightboxProps) => {
  const t = useT();
  const open = index !== null;
  const go = useCallback(
    (dir: number) => {
      if (index === null) return;
      onChange((index + dir + images.length) % images.length);
    },
    [index, images.length, onChange],
  );

  useEffect(() => {
    if (!open) return;
    lockScroll(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onChange(null);
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      lockScroll(false);
    };
  }, [open, go, onChange]);

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col bg-ink-950/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => onChange(null)}
        >
          <div className="container-lux flex items-center justify-between py-6 text-ivory-100">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
              {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
            <button
              aria-label={t({ fr: 'Fermer', en: 'Close', wo: 'Tëj' })}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory-50/20 transition-colors hover:bg-ivory-50 hover:text-ink-950"
              onClick={() => onChange(null)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-20">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="flex max-h-full flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[index].src}
                  alt={t(images[index].caption)}
                  className="max-h-[72vh] w-auto rounded-sm object-contain shadow-2xl"
                />
                <figcaption className="mt-5 font-display text-xl text-ivory-100 sm:text-2xl">
                  {t(images[index].caption)}
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button
                  aria-label={t({ fr: 'Précédente', en: 'Previous', wo: 'Ginnaaw' })}
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory-50/20 text-ivory-50 transition-colors hover:bg-gold-500 hover:text-ink-950 sm:left-6"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  aria-label={t({ fr: 'Suivante', en: 'Next', wo: 'Topp' })}
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory-50/20 text-ivory-50 transition-colors hover:bg-gold-500 hover:text-ink-950 sm:right-6"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
