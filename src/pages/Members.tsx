import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, Mail, Search, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { members } from '../data/members';
import type { Member } from '../data/members';
import groupe from '../assets/&&&.jpeg';
import PageHero from '../components/ui/PageHero';
import { EASE, Reveal } from '../components/ui/Reveal';
import LuxButton from '../components/ui/LuxButton';
import { lockScroll } from '../lib/smooth';

type Instance = 'all' | 'bureau' | 'commissions' | 'membres';

const instanceOf = (m: Member): Exclude<Instance, 'all'> => {
  if (m.role === 'Bureau Exécutif') return 'bureau';
  if (m.position === 'Membre Simple') return 'membres';
  return 'commissions';
};

const displayPosition = (m: Member) => (m.position === 'Membre Simple' ? 'Membre' : m.position);

const memberWhatsapp = (m: Member) =>
  `https://wa.me/221${m.phone?.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Bonjour ${m.fullName}, je vous contacte via le site officiel de l'AEEOM.`,
  )}`;

/* ============ Fiche membre ============ */
const MemberModal = ({ member, onClose }: { member: Member | null; onClose: () => void }) => {
  useEffect(() => {
    if (!member) return;
    lockScroll(true);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      lockScroll(false);
    };
  }, [member, onClose]);

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-ink-950/80 backdrop-blur-md sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={member.fullName}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid max-h-[92svh] w-full max-w-5xl overflow-y-auto bg-ivory-50 md:grid-cols-5"
            data-lenis-prevent
          >
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-ink-950 text-ivory-50 transition-colors hover:bg-gold-500 hover:text-ink-950"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative md:col-span-2">
              <img
                src={member.photo}
                alt={member.fullName}
                className="h-[42svh] w-full object-cover object-[center_20%] md:h-full md:min-h-[560px]"
              />
            </div>
            <div className="flex flex-col p-8 sm:p-12 md:col-span-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-700">
                Section {member.section === 'dakar' ? 'Dakar' : 'Ziguinchor'} · {member.role}
              </p>
              <h2 className="mt-4 font-display text-5xl font-medium leading-none text-ink-950">{member.fullName}</h2>
              <p className="mt-3 font-display text-2xl text-gold-700">{displayPosition(member)}</p>
              <div className="hairline my-8" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-900/45">Expertise</p>
              <p className="mt-2 text-ink-950">{member.expertise}</p>
              <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-900/45">Parcours</p>
              <p className="mt-2 leading-relaxed text-ink-900/70">{member.bio}</p>
              <div className="mt-auto flex flex-wrap gap-3 pt-10">
                {member.phone && (
                  <a
                    href={memberWhatsapp(member)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-ink-950 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ivory-50 transition-colors duration-500 hover:bg-gold-500 hover:text-ink-950"
                  >
                    <FaWhatsapp className="h-4 w-4" /> WhatsApp
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-3 rounded-full border border-ink-900/20 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-950 transition-colors duration-500 hover:border-ink-950 hover:bg-ink-950 hover:text-ivory-50"
                  >
                    <Mail className="h-4 w-4" /> Email
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ============ Carte membre ============ */
// Traitement unifié des portraits (photos d'origines très diverses) :
// noir & blanc teinté vert sur les écrans à souris ([@media(hover:hover)]), couleur révélée au survol.

const MemberCard = ({ member, index, onOpen }: { member: Member; index: number; onOpen: (m: Member) => void }) => {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const rotateX = useSpring(rx, { stiffness: 160, damping: 18 });
  const rotateY = useSpring(ry, { stiffness: 160, damping: 18 });
  const glare = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.35), transparent 55%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia('(hover: hover)').matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 12);
    rx.set((0.5 - py) * 12);
    gx.set(px * 100);
    gy.set(py * 100);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.8, ease: EASE, delay: Math.min(index % 8, 7) * 0.05 }}
      onClick={() => onOpen(member)}
      className="group text-left [perspective:1100px]"
      aria-label={`Voir le profil de ${member.fullName}`}
    >
      <div className="relative">
        {/* Cadre doré décalé */}
        <span className="pointer-events-none absolute inset-0 border border-gold-500/0 transition-all duration-700 ease-lux group-hover:translate-x-2.5 group-hover:translate-y-2.5 group-hover:border-gold-500/70" />

        <motion.div
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="relative aspect-[3/4] overflow-hidden rounded-sm bg-ink-900 shadow-[0_10px_30px_-15px_rgba(6,20,14,0.35)] transition-shadow duration-700 group-hover:shadow-[0_35px_60px_-20px_rgba(6,20,14,0.55)]"
        >
          <img
            src={member.photo}
            alt={member.fullName}
            loading="lazy"
            className={`h-full w-full object-cover object-[center_20%] transition-[filter,transform] duration-1000 ease-lux group-hover:scale-[1.06] [@media(hover:hover)]:brightness-95 [@media(hover:hover)]:contrast-[1.08] [@media(hover:hover)]:grayscale [@media(hover:hover)]:group-hover:brightness-100 [@media(hover:hover)]:group-hover:grayscale-0`}
          />
          {/* Teinte vert forêt (duotone) */}
          <div
            className={`pointer-events-none absolute inset-0 hidden bg-ink-700 opacity-50 mix-blend-color transition-opacity duration-700 group-hover:opacity-0 [@media(hover:hover)]:block`}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/25" />

          {/* Numéro + statut */}
          <span className="absolute left-4 top-4 font-display text-lg text-ivory-50/85">
            {String(index + 1).padStart(2, '0')}
          </span>
          {instanceOf(member) === 'bureau' && (
            <span className="absolute right-3 top-3 rounded-full border border-gold-400/60 bg-ink-950/40 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-gold-300 backdrop-blur">
              Bureau
            </span>
          )}

          {/* Panneau d'informations au survol */}
          <div
            className={`absolute inset-x-0 bottom-0 hidden translate-y-full bg-gradient-to-t from-ink-950 via-ink-950/90 to-transparent p-5 pt-16 transition-transform duration-700 ease-lux group-hover:translate-y-0 [@media(hover:hover)]:block`}
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-gold-400">Expertise</p>
            <p className="mt-1.5 line-clamp-2 text-sm leading-snug text-ivory-100">{member.expertise}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-300">
              Voir le profil <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>

          {/* Reflet lumineux qui suit la souris */}
          <motion.div
            style={{ background: glare }}
            className="pointer-events-none absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-100"
          />
        </motion.div>
      </div>

      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-700">{displayPosition(member)}</p>
      <h3 className="mt-1 font-display text-xl leading-tight text-ink-950 sm:text-2xl">{member.fullName}</h3>
      <span className="mt-3 block h-px w-8 bg-gold-500 transition-all duration-700 ease-lux group-hover:w-full" />
      <p className={`mt-3 line-clamp-1 text-xs text-ink-900/55 sm:text-sm [@media(hover:hover)]:hidden`}>{member.expertise}</p>
    </motion.button>
  );
};

const MemberGrid = ({ list, offset, onOpen }: { list: Member[]; offset: number; onOpen: (m: Member) => void }) => (
  <motion.div layout className="grid grid-cols-2 gap-x-4 gap-y-14 sm:gap-x-7 md:grid-cols-3 lg:grid-cols-4">
    <AnimatePresence mode="popLayout">
      {list.map((m, i) => (
        <MemberCard key={m.id} member={m} index={offset + i} onOpen={onOpen} />
      ))}
    </AnimatePresence>
  </motion.div>
);

/* ============ Présidence ============ */
const PresidentSpotlight = ({ member, onOpen }: { member: Member; onOpen: (m: Member) => void }) => (
  <Reveal className="mb-28">
    <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
        <span className="absolute -bottom-4 -right-4 left-4 top-4 border border-gold-500/60 sm:-bottom-6 sm:-right-6 sm:left-6 sm:top-6" />
        <button onClick={() => onOpen(member)} className="group relative block w-full overflow-hidden rounded-sm bg-ink-900">
          <img
            src={member.photo}
            alt={member.fullName}
            className="aspect-[4/5] w-full object-cover object-[center_20%] transition-transform duration-[1600ms] ease-lux group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
          <span className="absolute bottom-5 left-5 font-display text-lg text-ivory-50/90">01</span>
        </button>
      </div>
      <div className="lg:col-span-7">
        <span className="eyebrow text-gold-700">La Présidence</span>
        <h2 className="h-display mt-6 text-[2.6rem] text-ink-950 sm:text-6xl lg:text-[4.2rem]">{member.fullName}</h2>
        <p className="mt-3 font-display text-2xl text-gold-700">
          {member.position} · Section {member.section === 'dakar' ? 'Dakar' : 'Ziguinchor'}
        </p>
        <div className="hairline my-8" />
        <p className="max-w-2xl text-lg leading-relaxed text-ink-900/70">{member.bio}</p>
        <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-900/45">
          Expertise · <span className="text-ink-950">{member.expertise}</span>
        </p>
        <div className="mt-10">
          <LuxButton onClick={() => onOpen(member)} variant="dark">
            Voir le profil
          </LuxButton>
        </div>
      </div>
    </div>
  </Reveal>
);

/* ============ Page ============ */
const Members = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [instance, setInstance] = useState<Instance>('all');
  const [selected, setSelected] = useState<Member | null>(null);
  const section = searchParams.get('section') ?? 'all';
  const closeModal = useCallback(() => setSelected(null), []);

  const setSection = (value: string) => {
    const next = new URLSearchParams(searchParams);
    if (value === 'all') next.delete('section');
    else next.set('section', value);
    setSearchParams(next, { replace: true, preventScrollReset: true });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return members.filter(
      (m) =>
        (section === 'all' || m.section === section) &&
        (instance === 'all' || instanceOf(m) === instance) &&
        (!q || [m.fullName, m.expertise, m.position].some((v) => v.toLowerCase().includes(q))),
    );
  }, [query, section, instance]);

  // Vue d'ensemble (aucun filtre d'instance ni recherche) : Présidence mise en avant + groupes titrés
  const president = filtered.find((m) => m.position === 'Présidente');
  const grouped = instance === 'all' && !query.trim() && filtered.length > 0;
  const groups = useMemo(() => {
    const rest = filtered.filter((m) => m !== president);
    const defs = [
      { key: 'bureau', eyebrow: 'Gouvernance', title: 'Bureau exécutif' },
      { key: 'commissions', eyebrow: 'Pôles d’action', title: 'Commissions thématiques' },
      { key: 'membres', eyebrow: 'La communauté', title: 'Membres' },
    ] as const;
    let offset = president ? 1 : 0;
    return defs
      .map((d) => {
        const list = rest.filter((m) => instanceOf(m) === d.key);
        const g = { ...d, list, offset };
        offset += list.length;
        return g;
      })
      .filter((g) => g.list.length > 0);
  }, [filtered, president]);

  const chip = (active: boolean) =>
    `rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
      active ? 'bg-ink-950 text-ivory-50' : 'text-ink-900/60 hover:bg-ink-900/5 hover:text-ink-950'
    }`;

  return (
    <div className="bg-ivory-50">
      <PageHero
        image={groupe}
        crumbs={[{ label: 'Membres' }]}
        eyebrow="Communauté d’excellence"
        lines={['Répertoire des', <span className="text-gold-gradient">Membres.</span>]}
        intro="Découvrez les talents, les parcours et les expertises qui composent notre réseau d’exception. Une communauté engagée, ambitieuse et tournée vers l’impact."
        aside={
          <div className="text-right">
            <p className="font-display text-7xl text-gold-300">{members.length}</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory-100/60">profils publiés</p>
          </div>
        }
      />

      {/* Filtres */}
      <section className="sticky top-0 z-30 border-b border-ink-900/10 bg-ivory-50/90 backdrop-blur-xl">
        <div className="container-lux flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-900/40" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un nom, un poste, une expertise"
              className="w-full border-0 border-b border-ink-900/15 bg-transparent py-3 pl-8 pr-2 text-sm text-ink-950 placeholder:text-ink-900/40 focus:border-gold-600 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="-mx-1 flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[
              { v: 'all', l: 'Toutes sections' },
              { v: 'dakar', l: 'Dakar' },
              { v: 'ziguinchor', l: 'Ziguinchor' },
            ].map((s) => (
              <button key={s.v} onClick={() => setSection(s.v)} className={`shrink-0 ${chip(section === s.v)}`}>
                {s.l}
              </button>
            ))}
            <span className="mx-2 my-2 w-px shrink-0 bg-ink-900/15" />
            {(
              [
                { v: 'all', l: 'Tous' },
                { v: 'bureau', l: 'Bureau' },
                { v: 'commissions', l: 'Commissions' },
                { v: 'membres', l: 'Membres' },
              ] as { v: Instance; l: string }[]
            ).map((s) => (
              <button key={s.v} onClick={() => setInstance(s.v)} className={`shrink-0 ${chip(instance === s.v)}`}>
                {s.l}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille */}
      <section className="container-lux min-h-[60vh] py-16 sm:py-24">
        <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-900/45">
          {filtered.length} {filtered.length > 1 ? 'profils' : 'profil'}
        </p>

        {grouped && president && <PresidentSpotlight member={president} onOpen={setSelected} />}

        {filtered.length === 0 ? (
          <div className="border border-dashed border-ink-900/20 px-8 py-24 text-center">
            <p className="font-display text-4xl text-ink-950">Aucun profil ne correspond.</p>
            <p className="mt-3 text-ink-900/60">
              {section === 'ziguinchor'
                ? 'Les profils de la Section Ziguinchor seront publiés prochainement.'
                : 'Essayez un autre mot-clé ou réinitialisez les filtres.'}
            </p>
            <button
              onClick={() => {
                setQuery('');
                setInstance('all');
                setSection('all');
              }}
              className="link-lux mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-gold-700"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : grouped ? (
          <div className="space-y-28">
            {groups.map((g) => (
              <div key={g.key}>
                <div className="mb-12 flex items-end justify-between gap-6 border-b border-ink-900/10 pb-6">
                  <div>
                    <span className="eyebrow text-gold-700">{g.eyebrow}</span>
                    <h2 className="mt-4 font-display text-3xl text-ink-950 sm:text-4xl">{g.title}</h2>
                  </div>
                  <span className="font-display text-4xl text-gold-500/70 sm:text-5xl">
                    {String(g.list.length).padStart(2, '0')}
                  </span>
                </div>
                <MemberGrid list={g.list} offset={g.offset} onOpen={setSelected} />
              </div>
            ))}
          </div>
        ) : (
          <MemberGrid list={filtered} offset={0} onOpen={setSelected} />
        )}
      </section>

      <MemberModal member={selected} onClose={closeModal} />
    </div>
  );
};

export default Members;
