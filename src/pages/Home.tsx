import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import { HERO_SLIDES, GALLERY } from '../data/site';
import { MONTHS, MONTHS_SHORT, statusLabel, upcomingEvents } from '../data/events';
import { members } from '../data/members';
import dakarImg from '../assets/12.jpeg';
import zigImg from '../assets/ziguinchor.jpeg';
import graphicTeranga from '../assets/graphicTérange.jpeg';
import kids from '../assets/kids_shop.jpeg';
import { Reveal, RevealLines, EASE } from '../components/ui/Reveal';
import LuxButton from '../components/ui/LuxButton';
import CountUp from '../components/ui/CountUp';
import Marquee from '../components/ui/Marquee';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollWords from '../components/ui/ScrollWords';
import Lightbox from '../components/ui/Lightbox';

const SLIDE_MS = 6500;

/* ============ HERO ============ */
const Hero = () => {
  const [slide, setSlide] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const next = upcomingEvents()[0];

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} className="grain relative h-[100svh] min-h-[680px] overflow-hidden bg-ink-950 text-ivory-50">
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={slide}
            src={HERO_SLIDES[slide].src}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full animate-kenburns object-cover"
          />
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/30 to-transparent" />

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="container-lux relative z-10 flex h-full flex-col justify-end pb-36 sm:pb-40"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: EASE }}
          className="eyebrow text-gold-400"
        >
          Amicale des Élèves et Étudiants Originaires de Mandégane
        </motion.span>
        <RevealLines
          as="h1"
          immediate
          delay={0.5}
          className="h-display mt-7 text-[2.5rem] sm:text-[4rem] lg:text-[5.6rem]"
          lines={[
            'Construire',
            <>
              l’<span className="text-gold-gradient">excellence</span>,
            </>,
            'former les leaders.',
          ]}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1.1, ease: EASE }}
          className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <p className="max-w-lg text-base leading-relaxed text-ivory-100/75 sm:text-lg">
            Une organisation estudiantine d’élite engagée dans la transformation académique et le développement
            communautaire durable de Mandégane.
          </p>
          <div className="flex flex-wrap gap-4">
            <LuxButton to="/organisation">Découvrir l’AEEOM</LuxButton>
            <LuxButton to="/membres" variant="outline-light">
              Nos membres
            </LuxButton>
          </div>
        </motion.div>
      </motion.div>

      {/* Barre basse : diapositives + prochain rendez-vous */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-ivory-50/10 bg-ink-950/30 backdrop-blur-md">
        <div className="container-lux flex items-stretch justify-between gap-6">
          <div className="hidden flex-1 grid-cols-4 sm:grid">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setSlide(i)}
                className="group relative py-6 pr-6 text-left"
                aria-label={`Afficher : ${s.label}`}
              >
                <span className="absolute left-0 right-6 top-0 h-px bg-ivory-50/15">
                  {i === slide && (
                    <motion.span
                      key={`bar-${slide}`}
                      className="absolute inset-y-0 left-0 bg-gold-400"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: SLIDE_MS / 1000, ease: 'linear' }}
                    />
                  )}
                </span>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-[0.3em] transition-colors ${i === slide ? 'text-ivory-50' : 'text-ivory-100/40 group-hover:text-ivory-100/70'}`}
                >
                  {String(i + 1).padStart(2, '0')} · {s.label}
                </span>
              </button>
            ))}
          </div>
          <Link
            to={`/evenements/${next.slug}`}
            className="group flex w-full items-center justify-between gap-6 py-5 sm:w-auto sm:border-l sm:border-ivory-50/10 sm:pl-8"
          >
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                Prochain rendez-vous · {statusLabel(next.month)}
              </span>
              <span className="mt-1 block font-display text-2xl text-ivory-50">{next.title}</span>
            </span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/50 text-gold-400 transition-all duration-500 group-hover:bg-gold-500 group-hover:text-ink-950">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ============ PAGE ============ */
const Home = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const agenda = upcomingEvents();
  const [featured, ...others] = agenda;
  const bureau = members.filter((m) => m.role === 'Bureau Exécutif' || m.position === 'Présidente');

  const stats = [
    { value: 200, suffix: '+', label: 'Membres actifs' },
    { value: 10, suffix: '+', label: 'Événements annuels' },
    { value: 5, suffix: '+', label: 'Partenaires' },
    { value: 1000, suffix: '+', label: 'Bénéficiaires' },
  ];

  const pillars = [
    {
      title: 'Excellence Académique',
      text: 'Promouvoir la réussite scolaire et universitaire de tous nos membres.',
    },
    {
      title: 'Solidarité Communautaire',
      text: 'Renforcer les liens entre étudiants et créer un réseau d’entraide solide.',
    },
    {
      title: 'Engagement Social',
      text: 'Contribuer au développement de Mandégane et de ses habitants.',
    },
    {
      title: 'Leadership & Innovation',
      text: 'Former les leaders de demain à travers des initiatives innovantes.',
    },
  ];

  return (
    <div className="bg-ivory-50">
      <Hero />

      {/* Bandeau des valeurs */}
      <section className="border-b border-ink-900/10 bg-ivory-50 py-10 sm:py-14">
        <Marquee
          items={['Excellence', 'Leadership', 'Solidarité', 'Transmission', 'Impact', 'Mandégane']}
          itemClassName="font-display text-5xl font-medium text-ink-950 sm:text-7xl"
        />
      </section>

      {/* Manifeste */}
      <section className="container-lux py-28 sm:py-40">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <span className="eyebrow text-gold-700">Notre manifeste</span>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <ScrollWords
              className="font-display text-[1.6rem] font-medium leading-[1.2] text-ink-950 sm:text-4xl lg:text-[2.7rem]"
              highlight={['excellence', 'leadership', 'solidarité', 'Mandégane']}
              text="L’AEEOM bâtit un écosystème structuré d’excellence académique, de leadership responsable et de solidarité durable, au service des étudiants et de Mandégane."
            />
            <Reveal delay={0.1} className="mt-14 flex flex-wrap items-center gap-8">
              <LuxButton to="/organisation" variant="dark">
                Notre organisation
              </LuxButton>
              <span className="text-sm text-ink-900/55">Sections Dakar et Ziguinchor</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="grain relative overflow-hidden bg-ink-950 text-ivory-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,165,92,0.1),transparent_65%)]" />
        <div className="container-lux relative z-10 grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`border-ivory-50/10 px-2 py-14 sm:px-8 sm:py-20 ${i % 2 === 1 ? 'border-l' : ''} ${i >= 2 ? 'border-t lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''}`}
            >
              <p className="font-display text-5xl font-medium text-gold-300 sm:text-6xl lg:text-[4.2rem]">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-ivory-100/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Piliers */}
      <section className="container-lux py-28 sm:py-36">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionTitle
            eyebrow="Vision & engagement"
            lines={['Quatre piliers,', 'une même exigence.']}
          />
          <Reveal delay={0.2} className="max-w-sm text-ink-900/65">
            Chaque action de l’AEEOM s’inscrit dans une ambition commune : faire de chaque membre un acteur de
            réussite et de transformation.
          </Reveal>
        </div>
        <div className="mt-20 grid border-t border-ink-900/10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.1}
              className={`group relative border-b border-ink-900/10 py-10 sm:px-8 ${i > 0 ? 'lg:border-l' : ''} ${i % 2 === 1 ? 'sm:border-l' : ''} lg:first:pl-0`}
            >
              <span className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-gold-500 transition-transform duration-700 ease-lux group-hover:scale-x-100" />
              <span className="font-display text-6xl text-gold-500/80">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-10 font-display text-3xl font-semibold leading-tight text-ink-950">{p.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-900/60">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Agenda */}
      <section className="grain relative overflow-hidden bg-ink-900 py-28 text-ivory-50 sm:py-36">
        <div className="container-lux relative z-10">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <SectionTitle
              dark
              eyebrow="L’agenda AEEOM"
              lines={['Les rendez-vous', <span className="text-gold-gradient">qui nous rassemblent.</span>]}
            />
            <Reveal delay={0.2}>
              <LuxButton to="/evenements" variant="outline-light">
                Calendrier complet
              </LuxButton>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Link to={`/evenements/${featured.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-sm lg:aspect-auto lg:h-full lg:min-h-[560px]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-lux group-hover:scale-105 ${featured.imagePosition ?? ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-ink-950">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-950" />
                  {statusLabel(featured.month)}
                </div>
                <div className="absolute inset-x-6 bottom-6 sm:inset-x-10 sm:bottom-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-300">
                    {MONTHS[featured.month]} · {featured.category}
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-medium sm:text-5xl">{featured.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory-100/75 sm:text-base">{featured.short}</p>
                </div>
              </Link>
            </Reveal>

            <div className="lg:col-span-5">
              {others.map((e, i) => (
                <Reveal key={e.slug} delay={i * 0.06}>
                  <Link
                    to={`/evenements/${e.slug}`}
                    className="group flex items-center gap-6 border-b border-ivory-50/10 py-6 first:pt-0"
                  >
                    <div className="w-16 shrink-0">
                      <p className="font-display text-3xl text-gold-300">{MONTHS_SHORT[e.month]}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-ivory-100/45">
                        {statusLabel(e.month)} · {e.category}
                      </p>
                      <h4 className="mt-1 font-display text-2xl text-ivory-50 transition-colors duration-500 group-hover:text-gold-300 sm:text-3xl">
                        {e.title}
                      </h4>
                    </div>
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20">
                      <img
                        src={e.image}
                        alt=""
                        className={`h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 ${e.imagePosition ?? ''}`}
                      />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organisation */}
      <section className="container-lux py-28 sm:py-36">
        <SectionTitle
          eyebrow="Organisation institutionnelle"
          lines={['Deux sections.', <span className="text-gold-700">Une vision stratégique.</span>]}
          text="L’AEEOM structure son action à travers deux pôles, unifiés par une ambition commune : excellence académique, leadership et impact communautaire durable."
        />
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {[
            {
              name: 'Section Dakar',
              meta: 'Hub national · 150+ membres',
              text: 'Hub stratégique central regroupant la majorité des membres, moteur principal des initiatives académiques et institutionnelles.',
              img: dakarImg,
              to: '/organisation/dakar',
            },
            {
              name: 'Section Ziguinchor',
              meta: 'Ancrage régional · 50+ membres',
              text: 'Antenne régionale assurant proximité, cohésion territoriale et expansion stratégique dans le sud du pays.',
              img: zigImg,
              to: '/organisation/ziguinchor',
            },
          ].map((s, i) => (
            <Reveal key={s.name} delay={i * 0.12} className={i === 1 ? 'md:mt-24' : ''}>
              <Link to={s.to} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="h-full w-full object-cover transition-transform duration-[1800ms] ease-lux group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink-950/20 transition-colors duration-700 group-hover:bg-ink-950/0" />
                  <span className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-ivory-50 text-ink-950 transition-all duration-500 group-hover:rotate-45 group-hover:bg-gold-500">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-700">{s.meta}</p>
                <h3 className="mt-2 font-display text-3xl font-medium text-ink-950 sm:text-4xl">{s.name}</h3>
                <p className="mt-4 max-w-md text-ink-900/60">{s.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Le Bureau */}
      <section className="overflow-hidden border-y border-ink-900/10 bg-ivory-100 py-28 sm:py-36">
        <div className="container-lux flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionTitle eyebrow="Gouvernance" lines={['Les visages', 'de l’engagement.']} />
          <Reveal delay={0.2}>
            <LuxButton to="/membres" variant="outline-dark">
              Tout le répertoire
            </LuxButton>
          </Reveal>
        </div>
        <div className="mt-16 flex gap-6 overflow-x-auto px-5 pb-6 [scrollbar-width:none] sm:px-8 lg:px-[max(3rem,calc((100vw-1320px)/2+3rem))] [&::-webkit-scrollbar]:hidden">
          {bureau.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.08} className="w-[260px] shrink-0 sm:w-[300px]">
              <Link to="/membres" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-ink-900">
                  <img
                    src={m.photo}
                    alt={m.fullName}
                    className="h-full w-full object-cover object-[center_20%] grayscale transition-all duration-1000 ease-lux group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-950/80 to-transparent" />
                  <p className="absolute bottom-5 left-5 right-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-300">
                    {m.position}
                  </p>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink-950">{m.fullName}</h3>
                <p className="mt-1 text-sm text-ink-900/55">{m.expertise}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Galerie */}
      <section className="container-lux py-28 sm:py-36">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionTitle eyebrow="Galerie" lines={['Nos moments,', <span className="text-gold-700">notre fierté.</span>]} />
          <Reveal delay={0.2} className="max-w-sm text-ink-900/65">
            Gala, culture, caravanes et rencontres : revivez les temps forts de la communauté AEEOM.
          </Reveal>
        </div>
        <div className="mt-16 columns-2 gap-4 sm:gap-6 lg:columns-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 0.08} className="mb-4 break-inside-avoid sm:mb-6">
              <button
                onClick={() => setLightbox(i)}
                className="group relative block w-full overflow-hidden rounded-sm"
                aria-label={`Agrandir : ${g.caption}`}
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="w-full transition-transform duration-[1400ms] ease-lux group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink-950/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex w-full items-center justify-between gap-3 text-left text-sm text-ivory-50">
                    {g.caption}
                    <Plus className="h-5 w-5 shrink-0 text-gold-400" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
        <Lightbox images={GALLERY} index={lightbox} onChange={setLightbox} />
      </section>

      {/* Partenaires */}
      <section className="border-t border-ink-900/10 bg-ivory-100">
        <div className="container-lux grid items-center gap-12 py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow text-gold-700">Ils nous font confiance</span>
            <p className="mt-5 font-display text-3xl leading-tight text-ink-950 sm:text-4xl">
              Des partenaires engagés à nos côtés.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:col-span-5">
            {[
              { name: 'Graphic Téranga', logo: graphicTeranga },
              { name: 'Kids Shop', logo: kids },
            ].map((p) => (
              <Link
                to="/partenaires"
                key={p.name}
                className="group flex items-center gap-4 rounded-sm border border-ink-900/10 bg-ivory-50 p-4 transition-colors duration-500 hover:border-gold-500"
              >
                <img src={p.logo} alt={p.name} className="h-14 w-14 rounded-full bg-white object-contain p-1" />
                <span className="font-display text-xl font-semibold text-ink-950">{p.name}</span>
              </Link>
            ))}
          </div>
          <div className="lg:col-span-3 lg:justify-self-end">
            <LuxButton to="/partenaires" variant="dark">
              Devenir partenaire
            </LuxButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
