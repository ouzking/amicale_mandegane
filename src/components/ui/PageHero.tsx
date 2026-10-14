import type { ReactNode } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealLines, EASE } from './Reveal';

interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow: string;
  lines: ReactNode[];
  intro?: ReactNode;
  image?: string;
  imagePosition?: string;
  crumbs?: Crumb[];
  aside?: ReactNode;
  children?: ReactNode;
  tall?: boolean;
}

/** Hero des pages intérieures : image en parallaxe, fil d'Ariane, titre monumental. */
const PageHero = ({
  eyebrow,
  lines,
  intro,
  image,
  imagePosition = 'object-center',
  crumbs,
  aside,
  children,
  tall,
}: PageHeroProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className={`grain relative flex overflow-hidden bg-ink-950 text-ivory-50 ${tall ? 'min-h-[100svh]' : 'min-h-[78svh]'}`}
    >
      {image && (
        <motion.div style={{ y }} className="absolute inset-0">
          <motion.img
            src={image}
            alt=""
            initial={{ scale: 1.18, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 2.2, ease: EASE }}
            className={`h-full w-full object-cover ${imagePosition}`}
          />
        </motion.div>
      )}
      <div
        className={`absolute inset-0 ${image ? 'bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/40' : 'bg-[radial-gradient(ellipse_at_top_right,rgba(201,165,92,0.16),transparent_55%)]'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-transparent" />

      <motion.div
        style={{ opacity: fade }}
        className="container-lux relative z-10 flex flex-col justify-end pb-16 pt-40 sm:pb-20 lg:pb-24"
      >
        {crumbs && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mb-10 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory-100/50"
          >
            <Link to="/" className="link-lux transition-colors hover:text-gold-400">
              Accueil
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-3">
                <span className="h-px w-5 bg-gold-500/60" />
                {c.to ? (
                  <Link to={c.to} className="link-lux transition-colors hover:text-gold-400">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ivory-50">{c.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 1, ease: EASE }}
              className="eyebrow text-gold-400"
            >
              {eyebrow}
            </motion.span>
            <RevealLines
              as="h1"
              immediate
              delay={0.45}
              lines={lines}
              className="h-display mt-6 text-[2.4rem] sm:text-[3.5rem] lg:text-[5rem]"
            />
            {intro && (
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 1.1, ease: EASE }}
                className="mt-8 max-w-2xl text-base leading-relaxed text-ivory-100/75 sm:text-lg"
              >
                {intro}
              </motion.p>
            )}
            {children && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 1.1, ease: EASE }}
                className="mt-10"
              >
                {children}
              </motion.div>
            )}
          </div>
          {aside && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 1.1, ease: EASE }}
              className="lg:col-span-4 lg:justify-self-end"
            >
              {aside}
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default PageHero;
