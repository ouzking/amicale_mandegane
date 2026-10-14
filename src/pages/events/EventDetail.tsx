import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, Plus } from 'lucide-react';
import { events, getEvent, MONTHS, statusLabel } from '../../data/events';
import PageHero from '../../components/ui/PageHero';
import { Reveal, RevealLines } from '../../components/ui/Reveal';
import LuxButton from '../../components/ui/LuxButton';
import Lightbox from '../../components/ui/Lightbox';
import NotFound from '../NotFound';

const EventDetail = () => {
  const { slug = '' } = useParams();
  const event = getEvent(slug);
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!event) return <NotFound />;

  const Icon = event.icon;
  const index = events.indexOf(event);
  const nextEvent = events[(index + 1) % events.length];
  const gallery = (event.gallery ?? []).map((src) => ({ src, caption: event.title }));

  // Premier mot en ivoire, la suite en or (ex. « Dîner » / « de Gala »)
  const [first, ...rest] = event.title.split(' ');
  const titleLines = rest.length
    ? [first, <span className="text-gold-gradient">{rest.join(' ')}</span>]
    : [<span className="text-gold-gradient">{first}</span>];

  return (
    <div className="bg-ivory-50">
      <PageHero
        tall
        image={event.image}
        imagePosition={event.imagePosition}
        crumbs={[{ label: 'Événements', to: '/evenements' }, { label: event.title }]}
        eyebrow={`Section ${event.section} · ${MONTHS[event.month]}`}
        lines={titleLines}
        intro={event.tagline}
        aside={
          <div className="grid w-full max-w-sm grid-cols-2 border border-ivory-50/15 bg-ink-950/40 backdrop-blur-md">
            {[
              { k: 'Période', v: MONTHS[event.month] },
              { k: 'Statut', v: statusLabel(event.month) },
              { k: 'Section', v: event.section },
              { k: 'Thème', v: event.category },
            ].map((d, i) => (
              <div key={d.k} className={`p-5 ${i % 2 ? 'border-l border-ivory-50/10' : ''} ${i > 1 ? 'border-t border-ivory-50/10' : ''}`}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-400">{d.k}</p>
                <p className="mt-1.5 font-display text-xl text-ivory-50">{d.v}</p>
              </div>
            ))}
          </div>
        }
      />

      {/* À propos */}
      <section className="container-lux py-28 sm:py-36">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-gold-700">À propos de l’événement</span>
            </Reveal>
            <RevealLines
              lines={['Une initiative', <span className="text-gold-700">porteuse de sens.</span>]}
              className="h-display mt-6 text-4xl text-ink-950 sm:text-5xl"
            />
            <div className="mt-12 space-y-6">
              {event.about.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p
                    className={`leading-relaxed text-ink-900/70 ${i === 0 ? 'font-display text-2xl leading-snug text-ink-950 sm:text-[1.7rem]' : 'text-lg'}`}
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="space-y-6 lg:sticky lg:top-32">
              <Reveal className="grain relative overflow-hidden bg-ink-950 p-10 text-ivory-50">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/15 blur-3xl" />
                <div className="relative z-10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/40 text-gold-400">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-8 font-display text-3xl">{event.impactTitle}</h3>
                  <p className="mt-4 leading-relaxed text-ivory-100/70">{event.impactText}</p>
                </div>
              </Reveal>
              <Reveal delay={0.1} className="border border-ink-900/10 bg-ivory-100 p-10">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-700">Impact prévu</h3>
                <ul className="mt-6 divide-y divide-ink-900/10">
                  {event.impact.map((item) => (
                    <li key={item} className="flex items-center gap-4 py-4 font-display text-xl text-ink-950">
                      <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      {/* Objectifs */}
      <section className="border-y border-ink-900/10 bg-ivory-100 py-28 sm:py-36">
        <div className="container-lux">
          <Reveal>
            <span className="eyebrow text-gold-700">Objectifs stratégiques</span>
          </Reveal>
          <RevealLines
            lines={['Ce que nous', 'voulons accomplir.']}
            className="h-display mt-6 text-4xl text-ink-950 sm:text-5xl"
          />
          <div className="mt-16 grid gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">
            {event.objectives.map((o, i) => (
              <Reveal key={o} delay={i * 0.06} className="group bg-ivory-50 p-8 transition-colors duration-500 hover:bg-ink-950 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl text-gold-500/80">{String(i + 1).padStart(2, '0')}</span>
                  <Check className="h-5 w-5 text-gold-600 transition-colors group-hover:text-gold-400" />
                </div>
                <p className="mt-10 text-lg leading-relaxed text-ink-950 transition-colors duration-500 group-hover:text-ivory-50">
                  {o}
                </p>
              </Reveal>
            ))}
            <Reveal className="flex flex-col justify-between bg-gold-500 p-8 sm:p-10">
              <p className="font-display text-3xl leading-tight text-ink-950">{event.cta.title}</p>
              <Link
                to={event.cta.to}
                className="group mt-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-ink-950"
              >
                {event.cta.label}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Galerie */}
      {gallery.length > 0 && (
        <section className="container-lux py-28 sm:py-36">
          <Reveal>
            <span className="eyebrow text-gold-700">En images</span>
          </Reveal>
          <RevealLines lines={['Souvenirs d’édition.']} className="h-display mt-6 text-4xl text-ink-950 sm:text-5xl" />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.src} delay={(i % 3) * 0.08}>
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative block aspect-[4/5] w-full overflow-hidden rounded-sm"
                  aria-label="Agrandir la photo"
                >
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-lux group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-ivory-50 text-ink-950 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
          <Lightbox images={gallery} index={lightbox} onChange={setLightbox} />
        </section>
      )}

      {/* Appel + événement suivant */}
      <section className="grain relative overflow-hidden bg-ink-950 text-ivory-50">
        <div className="container-lux relative z-10 grid gap-16 py-28 sm:py-32 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-gold-400">Rejoindre l’aventure</span>
            </Reveal>
            <RevealLines lines={[event.cta.title + '.']} className="h-display mt-6 text-4xl sm:text-5xl" />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory-100/70">{event.cta.text}</p>
            </Reveal>
            <Reveal delay={0.25} className="mt-10 flex flex-wrap gap-4">
              <LuxButton to={event.cta.to}>{event.cta.label}</LuxButton>
              <Link
                to="/evenements"
                className="group inline-flex items-center gap-3 px-2 text-xs font-semibold uppercase tracking-[0.22em] text-ivory-100/70 hover:text-gold-400"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1" />
                Tous les événements
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-5">
            <Link to={`/evenements/${nextEvent.slug}`} className="group block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ivory-100/50">Événement suivant</p>
              <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-sm">
                <img
                  src={nextEvent.image}
                  alt={nextEvent.title}
                  className={`h-full w-full object-cover transition-transform duration-[1600ms] ease-lux group-hover:scale-105 ${nextEvent.imagePosition ?? ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                      {MONTHS[nextEvent.month]}
                    </p>
                    <p className="mt-1 font-display text-3xl sm:text-4xl">{nextEvent.title}</p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500 text-ink-950 transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
