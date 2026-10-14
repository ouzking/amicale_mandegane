import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import logo from '../../assets/LOGO.jpeg';
import { NAVIGATION } from './navigation';
import { events } from '../../data/events';
import { CONTACT, SOCIALS } from '../../data/site';
import { lockScroll } from '../../lib/smooth';
import { EASE } from '../ui/Reveal';

const Header = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoverMenu, setHoverMenu] = useState<string | null>(null);
  const [previewEvent, setPreviewEvent] = useState(events[events.length - 1]);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 240 && y > prev && !open);
  });

  // Fermer les menus à chaque changement de page
  const [lastPath, setLastPath] = useState(location.pathname);
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname);
    setOpen(false);
    setHoverMenu(null);
  }

  useEffect(() => {
    lockScroll(open);
  }, [open]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const solid = scrolled || hoverMenu !== null;

  return (
    <>
      <motion.header
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.6, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50"
        onMouseLeave={() => setHoverMenu(null)}
      >
        <div
          className={`transition-[background-color,border-color,backdrop-filter] duration-700 ease-lux ${
            open
              ? 'border-b border-ivory-50/10 bg-ink-950'
              : solid
                ? 'border-b border-gold-500/15 bg-ink-950/85 backdrop-blur-xl'
                : 'border-b border-transparent bg-transparent'
          }`}
        >
          <nav className="container-lux flex h-20 items-center justify-between lg:h-24">
            {/* Logo */}
            <Link to="/" className="group relative z-[60] flex items-center gap-4" aria-label="AEEOM, accueil">
              <span className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-gold-500/50 transition-transform duration-700 ease-lux group-hover:rotate-[360deg] lg:h-14 lg:w-14">
                <img src={logo} alt="" className="h-full w-full object-cover" />
              </span>
              <span className="leading-none text-ivory-50">
                <span className="block font-display text-2xl font-semibold tracking-[0.12em] lg:text-[1.7rem]">AEEOM</span>
                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.42em] text-gold-400">
                  Mandégane
                </span>
              </span>
            </Link>

            {/* Navigation desktop */}
            <div className="hidden items-center gap-1 xl:flex">
              {NAVIGATION.filter((n) => n.path !== '/').map((item) => (
                <div key={item.name} onMouseEnter={() => setHoverMenu(item.submenu ? item.name : null)}>
                  <NavLink
                    to={item.path}
                    className={`relative px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                      isActive(item.path) ? 'text-gold-400' : 'text-ivory-100/80 hover:text-ivory-50'
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute inset-x-4 bottom-1 h-px origin-left bg-gold-500 transition-transform duration-500 ease-lux ${
                        isActive(item.path) || hoverMenu === item.name ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </NavLink>
                </div>
              ))}
            </div>

            <div className="relative z-[60] flex items-center gap-4">
              <Link
                to="/contact"
                className="group hidden items-center gap-3 rounded-full border border-gold-500/50 py-2 pl-5 pr-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory-50 transition-colors duration-500 hover:bg-gold-500 hover:text-ink-950 md:flex"
              >
                Nous rejoindre
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-ink-950 transition-colors duration-500 group-hover:bg-ink-950 group-hover:text-gold-400">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>

              {/* Burger */}
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={open}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-ivory-50/20 transition-colors hover:border-gold-500 xl:hidden"
              >
                <span className="relative block h-3 w-5">
                  <span
                    className={`absolute left-0 h-px w-5 bg-ivory-50 transition-all duration-500 ease-lux ${open ? 'top-1.5 rotate-45' : 'top-0'}`}
                  />
                  <span
                    className={`absolute left-0 h-px bg-ivory-50 transition-all duration-500 ease-lux ${open ? 'top-1.5 w-5 -rotate-45' : 'top-3 w-3'}`}
                  />
                </span>
              </button>
            </div>
          </nav>
        </div>

        {/* Méga-menu desktop */}
        <AnimatePresence>
          {hoverMenu && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="absolute inset-x-0 top-full hidden border-b border-gold-500/15 bg-ink-950/95 backdrop-blur-xl xl:block"
            >
              <div className="container-lux grid grid-cols-12 gap-10 py-12">
                <div className="col-span-3">
                  <span className="eyebrow text-gold-400">{hoverMenu}</span>
                  <p className="mt-5 font-display text-3xl leading-tight text-ivory-50">
                    {hoverMenu === 'Événements'
                      ? 'Six rendez-vous qui rythment notre année.'
                      : 'Deux sections, une seule vision.'}
                  </p>
                  <Link
                    to={hoverMenu === 'Événements' ? '/evenements' : '/organisation'}
                    className="link-lux mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400"
                  >
                    Tout découvrir <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <ul className="col-span-5 grid content-start gap-1">
                  {NAVIGATION.find((n) => n.name === hoverMenu)?.submenu?.map((sub, i) => (
                    <li key={sub.path}>
                      <Link
                        to={sub.path}
                        onMouseEnter={() => {
                          const ev = events.find((e) => sub.path.endsWith(e.slug));
                          if (ev) setPreviewEvent(ev);
                        }}
                        className="group flex items-baseline justify-between border-b border-ivory-50/10 py-3.5 transition-colors"
                      >
                        <span className="flex items-baseline gap-5">
                          <span className="text-[10px] font-semibold tracking-[0.2em] text-gold-500/70">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="font-display text-2xl text-ivory-100 transition-all duration-500 ease-lux group-hover:translate-x-2 group-hover:text-gold-300">
                            {sub.name}
                          </span>
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ivory-100/40">
                          {sub.meta}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="col-span-4">
                  {hoverMenu === 'Événements' ? (
                    <Link to={`/evenements/${previewEvent.slug}`} className="group relative block h-full min-h-[260px] overflow-hidden rounded-sm">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={previewEvent.slug}
                          src={previewEvent.image}
                          alt={previewEvent.title}
                          initial={{ opacity: 0, scale: 1.08 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.7, ease: EASE }}
                          className={`absolute inset-0 h-full w-full object-cover ${previewEvent.imagePosition ?? ''}`}
                        />
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                      <p className="absolute bottom-5 left-5 right-5 text-sm leading-relaxed text-ivory-100/85">
                        {previewEvent.short}
                      </p>
                    </Link>
                  ) : (
                    <div className="flex h-full flex-col justify-end rounded-sm border border-gold-500/20 p-8">
                      <p className="font-display text-5xl text-gold-300">200+</p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-ivory-100/60">
                        membres actifs entre Dakar et Ziguinchor
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Menu plein écran (mobile / tablette) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.9, ease: EASE }}
            data-lenis-prevent
            className="grain fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-ink-950 text-ivory-50"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,165,92,0.14),transparent_60%)]" />
            <div className="container-lux relative z-10 flex min-h-full flex-col pb-10 pt-32">
              <ul className="flex-1">
                {NAVIGATION.map((item, i) => (
                  <li key={item.name} className="overflow-hidden border-b border-ivory-50/10">
                    <motion.div
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.25 + i * 0.06, duration: 0.9, ease: EASE }}
                    >
                      <Link to={item.path} className="group flex items-baseline gap-5 py-4">
                        <span className="text-[11px] font-semibold tracking-[0.2em] text-gold-500">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`font-display text-[2.2rem] leading-none transition-colors sm:text-5xl ${
                            isActive(item.path) ? 'text-gold-300' : 'group-hover:text-gold-300'
                          }`}
                        >
                          {item.name}
                        </span>
                      </Link>
                      {item.submenu && (
                        <div className="-mt-1 flex flex-wrap gap-x-5 gap-y-2 pb-5 pl-10">
                          {item.submenu.map((s) => (
                            <Link
                              key={s.path}
                              to={s.path}
                              className="text-xs font-semibold uppercase tracking-[0.18em] text-ivory-100/50 transition-colors hover:text-gold-400"
                            >
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
              >
                <div className="text-sm text-ivory-100/60">
                  <a href={`mailto:${CONTACT.email}`} className="block text-ivory-50">
                    {CONTACT.email}
                  </a>
                  <span className="mt-1 block">{CONTACT.phones[0]}</span>
                </div>
                <div className="flex gap-3">
                  {[
                    { Icon: FaFacebookF, href: SOCIALS.facebook, label: 'Facebook' },
                    { Icon: FaInstagram, href: SOCIALS.instagram, label: 'Instagram' },
                    { Icon: FaTiktok, href: SOCIALS.tiktok, label: 'TikTok' },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory-50/20 transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-ink-950"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
