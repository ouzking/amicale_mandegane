import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import { HERO_SLIDES, GALLERY } from '../data/site';
import { MONTHS, MONTHS_SHORT, statusLabel, upcomingEvents } from '../data/events';
import { members } from '../data/members';
import { useT } from '../i18n/context';
import { positionTr } from '../i18n/positions';
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
  const t = useT();
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
          {t({
            fr: 'Amicale des Élèves et Étudiants Originaires de Mandégane',
            en: 'Association of Pupils and Students from Mandégane',
            wo: 'Mbootaayu Ndongo yu Juddoo Mandégane',
          })}
        </motion.span>
        <RevealLines
          as="h1"
          immediate
          delay={0.5}
          className="h-display mt-7 text-[2.5rem] sm:text-[4rem] lg:text-[5.6rem]"
          lines={[
            t({ fr: 'Construire', en: 'Building', wo: 'Tabax' }),
            <>
              {t({ fr: 'l’', en: '', wo: '' })}
              <span className="text-gold-gradient">{t({ fr: 'excellence', en: 'excellence', wo: 'xarañ' })}</span>,
            </>,
            t({ fr: 'former les leaders.', en: 'shaping leaders.', wo: 'tàggat njiit yi.' }),
          ]}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1.1, ease: EASE }}
          className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <p className="max-w-lg text-base leading-relaxed text-ivory-100/75 sm:text-lg">
            {t({
              fr: 'Une organisation estudiantine d’élite engagée dans la transformation académique et le développement communautaire durable de Mandégane.',
              en: 'An elite student organisation committed to academic transformation and the lasting community development of Mandégane.',
              wo: 'Mbootaayu ndongo yu xarañ, yu am yéene ngir soppi jàng bi ak yokkute gu yàgg ci askanu Mandégane.',
            })}
          </p>
          <div className="flex flex-wrap gap-4">
            <LuxButton to="/organisation">{t({ fr: 'Découvrir l’AEEOM', en: 'Discover AEEOM', wo: 'Xam AEEOM' })}</LuxButton>
            <LuxButton to="/membres" variant="outline-light">
              {t({ fr: 'Nos membres', en: 'Our members', wo: 'Sunuy way-bokk' })}
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
                key={s.src}
                onClick={() => setSlide(i)}
                className="group relative py-6 pr-6 text-left"
                aria-label={t(s.label)}
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
                  {String(i + 1).padStart(2, '0')} · {t(s.label)}
                </span>
              </button>
            ))}
          </div>
          <Link
            to={`/evenements/${next.slug}`}
            className="group flex w-full items-center justify-between gap-6 py-5 pr-[4.5rem] sm:w-auto sm:border-l sm:border-ivory-50/10 sm:pl-8 lg:pr-0"
          >
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                {t({ fr: 'Prochain rendez-vous', en: 'Next event', wo: 'Ndaje mi ci kanam' })} · {t(statusLabel(next.month))}
              </span>
              <span className="mt-1 block font-display text-2xl text-ivory-50">{t(next.title)}</span>
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
  const t = useT();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const agenda = upcomingEvents();
  const [featured, ...others] = agenda;
  const bureau = members.filter((m) => m.role === 'Bureau Exécutif' || m.position === 'Présidente');

  const stats = [
    { value: 200, label: { fr: 'Membres actifs', en: 'Active members', wo: 'Way-bokk yuy jëf' } },
    { value: 10, label: { fr: 'Événements annuels', en: 'Events per year', wo: 'Xew-xew ci at mi' } },
    { value: 5, label: { fr: 'Partenaires', en: 'Partners', wo: 'Àndandoo' } },
    { value: 1000, label: { fr: 'Bénéficiaires', en: 'Beneficiaries', wo: 'Ñu ci jariñu' } },
  ];

  const pillars = [
    {
      title: { fr: 'Excellence Académique', en: 'Academic Excellence', wo: 'Xarañ ci Jàng' },
      text: {
        fr: 'Promouvoir la réussite scolaire et universitaire de tous nos membres.',
        en: 'Promoting the school and university success of all our members.',
        wo: 'Yokk ndam ci jàng ci lekkool ak iniwérsite ngir sunuy way-bokk yépp.',
      },
    },
    {
      title: { fr: 'Solidarité Communautaire', en: 'Community Solidarity', wo: 'Dimbalante ci Askan wi' },
      text: {
        fr: 'Renforcer les liens entre étudiants et créer un réseau d’entraide solide.',
        en: 'Strengthening ties between students and building a strong support network.',
        wo: 'Dëgëral lëkkalo gi ci ndongo yi te sos ab mbooloo bu dëgër ngir dimbalante.',
      },
    },
    {
      title: { fr: 'Engagement Social', en: 'Social Commitment', wo: 'Yéene ci Askan wi' },
      text: {
        fr: 'Contribuer au développement de Mandégane et de ses habitants.',
        en: 'Contributing to the development of Mandégane and its people.',
        wo: 'Bokk ci yokkute Mandégane ak waa dëkk ba.',
      },
    },
    {
      title: { fr: 'Leadership & Innovation', en: 'Leadership & Innovation', wo: 'Njiitlu ak Yees' },
      text: {
        fr: 'Former les leaders de demain à travers des initiatives innovantes.',
        en: 'Training tomorrow’s leaders through innovative initiatives.',
        wo: 'Tàggat njiiti ëllëg jaare ko ci ay jëf yu bees.',
      },
    },
  ];

  const sections = [
    {
      name: { fr: 'Section Dakar', en: 'Dakar Section', wo: 'Pàccu Dakar' },
      meta: { fr: 'Hub national · 150+ membres', en: 'National hub · 150+ members', wo: 'Kër gu mag · 150+ way-bokk' },
      text: {
        fr: 'Hub stratégique central regroupant la majorité des membres, moteur principal des initiatives académiques et institutionnelles.',
        en: 'The central strategic hub bringing together most members, main driver of academic and institutional initiatives.',
        wo: 'Fi ëpp way-bokk yi nekk, moo yor jëf yu mag yi ci wàllu jàng ak mbootaay gi.',
      },
      img: dakarImg,
      to: '/organisation/dakar',
    },
    {
      name: { fr: 'Section Ziguinchor', en: 'Ziguinchor Section', wo: 'Pàccu Ziguinchor' },
      meta: { fr: 'Ancrage régional · 50+ membres', en: 'Regional base · 50+ members', wo: 'Ci gox bi · 50+ way-bokk' },
      text: {
        fr: 'Antenne régionale assurant proximité, cohésion territoriale et expansion stratégique dans le sud du pays.',
        en: 'The regional branch ensuring proximity, territorial cohesion and strategic expansion in the south of the country.',
        wo: 'Pàcc bi ci gox bi, di jege askan wi, di boole gox yi te di yokk mbootaay gi ci bëj-saalumu réew mi.',
      },
      img: zigImg,
      to: '/organisation/ziguinchor',
    },
  ];

  return (
    <div className="bg-ivory-50">
      <Hero />

      {/* Bandeau des valeurs */}
      <section className="border-b border-ink-900/10 bg-ivory-50 py-10 sm:py-14">
        <Marquee
          items={[
            t({ fr: 'Excellence', en: 'Excellence', wo: 'Xarañ' }),
            t({ fr: 'Leadership', en: 'Leadership', wo: 'Njiitlu' }),
            t({ fr: 'Solidarité', en: 'Solidarity', wo: 'Dimbalante' }),
            t({ fr: 'Transmission', en: 'Transmission', wo: 'Jottali' }),
            t({ fr: 'Impact', en: 'Impact', wo: 'Njeexital' }),
            'Mandégane',
          ]}
          itemClassName="font-display text-5xl font-medium text-ink-950 sm:text-7xl"
        />
      </section>

      {/* Manifeste */}
      <section className="container-lux py-28 sm:py-40">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <span className="eyebrow text-gold-700">{t({ fr: 'Notre manifeste', en: 'Our manifesto', wo: 'Sunu yéene' })}</span>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <ScrollWords
              className="font-display text-[1.6rem] font-medium leading-[1.2] text-ink-950 sm:text-4xl lg:text-[2.7rem]"
              highlight={['excellence', 'leadership', 'solidarité', 'solidarity', 'xarañ', 'njiitlu', 'dimbalante', 'Mandégane']}
              text={t({
                fr: 'L’AEEOM bâtit un écosystème structuré d’excellence académique, de leadership responsable et de solidarité durable, au service des étudiants et de Mandégane.',
                en: 'AEEOM builds a structured ecosystem of academic excellence, responsible leadership and lasting solidarity, serving students and Mandégane.',
                wo: 'AEEOM mi ngi tabax ab mbootaay bu jaar yoon ci xarañ ci jàng, njiitlu gu am warugar ak dimbalante gu yàgg, ngir ndongo yi ak Mandégane.',
              })}
            />
            <Reveal delay={0.1} className="mt-14 flex flex-wrap items-center gap-8">
              <LuxButton to="/organisation" variant="dark">
                {t({ fr: 'Notre organisation', en: 'Our organisation', wo: 'Sunu mbootaay' })}
              </LuxButton>
              <span className="text-sm text-ink-900/55">
                {t({ fr: 'Sections Dakar et Ziguinchor', en: 'Dakar and Ziguinchor Sections', wo: 'Pàccu Dakar ak Ziguinchor' })}
              </span>
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
              key={s.value}
              delay={i * 0.08}
              className={`border-ivory-50/10 px-2 py-14 sm:px-8 sm:py-20 ${i % 2 === 1 ? 'border-l' : ''} ${i >= 2 ? 'border-t lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''}`}
            >
              <p className="font-display text-5xl font-medium text-gold-300 sm:text-6xl lg:text-[4.2rem]">
                <CountUp value={s.value} suffix="+" />
              </p>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-ivory-100/60">{t(s.label)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Piliers */}
      <section className="container-lux py-28 sm:py-36">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionTitle
            eyebrow={t({ fr: 'Vision & engagement', en: 'Vision & commitment', wo: 'Gis-gis ak yéene' })}
            lines={[
              t({ fr: 'Quatre piliers,', en: 'Four pillars,', wo: 'Ñeenti cëslaay,' }),
              t({ fr: 'une même exigence.', en: 'one standard.', wo: 'benn sas.' }),
            ]}
          />
          <Reveal delay={0.2} className="max-w-sm text-ink-900/65">
            {t({
              fr: 'Chaque action de l’AEEOM s’inscrit dans une ambition commune : faire de chaque membre un acteur de réussite et de transformation.',
              en: 'Every AEEOM action serves one shared ambition: making each member a driver of success and change.',
              wo: 'Jëf ju nekk ci AEEOM ab yéene bu ñu bokk la : def way-bokk bu nekk ku indi ndam ak coppite.',
            })}
          </Reveal>
        </div>
        <div className="mt-20 grid border-t border-ink-900/10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal
              key={i}
              delay={i * 0.1}
              className={`group relative border-b border-ink-900/10 py-10 sm:px-8 ${i > 0 ? 'lg:border-l' : ''} ${i % 2 === 1 ? 'sm:border-l' : ''} lg:first:pl-0`}
            >
              <span className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-gold-500 transition-transform duration-700 ease-lux group-hover:scale-x-100" />
              <span className="font-display text-6xl text-gold-500/80">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-10 font-display text-3xl font-semibold leading-tight text-ink-950">{t(p.title)}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-900/60">{t(p.text)}</p>
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
              eyebrow={t({ fr: 'L’agenda AEEOM', en: 'The AEEOM calendar', wo: 'Arminaatu AEEOM' })}
              lines={[
                t({ fr: 'Les rendez-vous', en: 'The gatherings', wo: 'Ndaje yi' }),
                <span className="text-gold-gradient">
                  {t({ fr: 'qui nous rassemblent.', en: 'that bring us together.', wo: 'yuy boole nu.' })}
                </span>,
              ]}
            />
            <Reveal delay={0.2}>
              <LuxButton to="/evenements" variant="outline-light">
                {t({ fr: 'Calendrier complet', en: 'Full calendar', wo: 'Arminaat bi yépp' })}
              </LuxButton>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Link
                to={`/evenements/${featured.slug}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-sm lg:aspect-auto lg:h-full lg:min-h-[560px]"
              >
                <img
                  src={featured.image}
                  alt={t(featured.title)}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-lux group-hover:scale-105 ${featured.imagePosition ?? ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-ink-950">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-950" />
                  {t(statusLabel(featured.month))}
                </div>
                <div className="absolute inset-x-6 bottom-6 sm:inset-x-10 sm:bottom-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-300">
                    {t(MONTHS[featured.month])} · {t(featured.category)}
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-medium sm:text-5xl">{t(featured.title)}</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory-100/75 sm:text-base">{t(featured.short)}</p>
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
                      <p className="font-display text-3xl text-gold-300">{t(MONTHS_SHORT[e.month])}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-ivory-100/45">
                        {t(statusLabel(e.month))} · {t(e.category)}
                      </p>
                      <h4 className="mt-1 font-display text-2xl text-ivory-50 transition-colors duration-500 group-hover:text-gold-300 sm:text-3xl">
                        {t(e.title)}
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
          eyebrow={t({ fr: 'Organisation institutionnelle', en: 'Institutional organisation', wo: 'Doxalinu mbootaay gi' })}
          lines={[
            t({ fr: 'Deux sections.', en: 'Two sections.', wo: 'Ñaari pàcc.' }),
            <span className="text-gold-700">
              {t({ fr: 'Une vision stratégique.', en: 'One strategic vision.', wo: 'Benn gis-gis.' })}
            </span>,
          ]}
          text={t({
            fr: 'L’AEEOM structure son action à travers deux pôles, unifiés par une ambition commune : excellence académique, leadership et impact communautaire durable.',
            en: 'AEEOM organises its work through two hubs, united by a shared ambition: academic excellence, leadership and lasting community impact.',
            wo: 'AEEOM dafay doxal ay jëfam jaare ko ci ñaari pàcc, yu benn yéene boole : xarañ ci jàng, njiitlu ak njeexital gu yàgg ci askan wi.',
          })}
        />
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {sections.map((s, i) => (
            <Reveal key={s.to} delay={i * 0.12} className={i === 1 ? 'md:mt-24' : ''}>
              <Link to={s.to} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src={s.img}
                    alt={t(s.name)}
                    className="h-full w-full object-cover transition-transform duration-[1800ms] ease-lux group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink-950/20 transition-colors duration-700 group-hover:bg-ink-950/0" />
                  <span className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-ivory-50 text-ink-950 transition-all duration-500 group-hover:rotate-45 group-hover:bg-gold-500">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-700">{t(s.meta)}</p>
                <h3 className="mt-2 font-display text-3xl font-medium text-ink-950 sm:text-4xl">{t(s.name)}</h3>
                <p className="mt-4 max-w-md text-ink-900/60">{t(s.text)}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Le Bureau */}
      <section className="overflow-hidden border-y border-ink-900/10 bg-ivory-100 py-28 sm:py-36">
        <div className="container-lux flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionTitle
            eyebrow={t({ fr: 'Gouvernance', en: 'Governance', wo: 'Njiitlu' })}
            lines={[
              t({ fr: 'Les visages', en: 'The faces', wo: 'Xar-kanam yi' }),
              t({ fr: 'de l’engagement.', en: 'of commitment.', wo: 'ci yéene gi.' }),
            ]}
          />
          <Reveal delay={0.2}>
            <LuxButton to="/membres" variant="outline-dark">
              {t({ fr: 'Tout le répertoire', en: 'Full directory', wo: 'Way-bokk yépp' })}
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
                    {t(positionTr(m.position))}
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
          <SectionTitle
            eyebrow={t({ fr: 'Galerie', en: 'Gallery', wo: 'Nataal yi' })}
            lines={[
              t({ fr: 'Nos moments,', en: 'Our moments,', wo: 'Sunuy diir,' }),
              <span className="text-gold-700">{t({ fr: 'notre fierté.', en: 'our pride.', wo: 'sunu ngor.' })}</span>,
            ]}
          />
          <Reveal delay={0.2} className="max-w-sm text-ink-900/65">
            {t({
              fr: 'Gala, culture, caravanes et rencontres : revivez les temps forts de la communauté AEEOM.',
              en: 'Gala, culture, caravans and gatherings: relive the highlights of the AEEOM community.',
              wo: 'Gala, aada, karawaan ak ndaje : gisaatal diir yu mag yu askanu AEEOM.',
            })}
          </Reveal>
        </div>
        <div className="mt-16 columns-2 gap-4 sm:gap-6 lg:columns-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 0.08} className="mb-4 break-inside-avoid sm:mb-6">
              <button
                onClick={() => setLightbox(i)}
                className="group relative block w-full overflow-hidden rounded-sm"
                aria-label={t(g.caption)}
              >
                <img
                  src={g.src}
                  alt={t(g.caption)}
                  loading="lazy"
                  className="w-full transition-transform duration-[1400ms] ease-lux group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink-950/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex w-full items-center justify-between gap-3 text-left text-sm text-ivory-50">
                    {t(g.caption)}
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
            <span className="eyebrow text-gold-700">
              {t({ fr: 'Ils nous font confiance', en: 'They trust us', wo: 'Ñoo nu wóolu' })}
            </span>
            <p className="mt-5 font-display text-3xl leading-tight text-ink-950 sm:text-4xl">
              {t({
                fr: 'Des partenaires engagés à nos côtés.',
                en: 'Committed partners by our side.',
                wo: 'Ay àndandoo yu nu taxawu.',
              })}
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
              {t({ fr: 'Devenir partenaire', en: 'Become a partner', wo: 'Nekk àndandoo' })}
            </LuxButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
