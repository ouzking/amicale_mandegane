import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { events, MONTHS, MONTHS_SHORT, statusLabel, upcomingEvents } from '../data/events';
import conference from '../assets/conference.jpeg';
import gala from '../assets/141.jpeg';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import { Reveal } from '../components/ui/Reveal';
import LuxButton from '../components/ui/LuxButton';

const Events = () => {
  const now = new Date();
  const current = now.getMonth();
  const next = upcomingEvents(now)[0];
  const byMonth = new Map(events.map((e) => [e.month, e]));

  return (
    <div className="bg-ivory-50">
      <PageHero
        image={gala}
        crumbs={[{ label: 'Événements' }]}
        eyebrow="Le calendrier AEEOM"
        lines={['Nos', <span className="text-gold-gradient">Événements.</span>]}
        intro="Des initiatives stratégiques, des rencontres d’impact et des expériences immersives qui rythment notre année et incarnent notre vision d’excellence."
        aside={
          <Link
            to={`/evenements/${next.slug}`}
            className="group block w-full max-w-sm border border-ivory-50/15 bg-ink-950/40 p-7 backdrop-blur-md transition-colors duration-500 hover:border-gold-500/60"
          >
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" />
              Prochain rendez-vous
            </p>
            <p className="mt-4 font-display text-4xl text-ivory-50">{next.title}</p>
            <p className="mt-2 text-sm text-ivory-100/60">
              {MONTHS[next.month]} · {statusLabel(next.month, now)}
            </p>
          </Link>
        }
      />

      {/* Frise annuelle */}
      <section className="border-b border-ink-900/10 bg-ivory-100">
        <div className="container-lux overflow-x-auto py-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="grid min-w-[880px] grid-cols-12">
            {MONTHS.map((m, i) => {
              const ev = byMonth.get(i);
              const isNow = i === current;
              return (
                <div key={m} className="relative border-l border-ink-900/10 px-3 first:border-l-0">
                  <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${isNow ? 'text-gold-700' : 'text-ink-900/40'}`}
                  >
                    {MONTHS_SHORT[i]}
                    {isNow && ' · En cours'}
                  </p>
                  <div className="mt-4 h-14">
                    {ev && (
                      <Link
                        to={`/evenements/${ev.slug}`}
                        className="group block border-t-2 border-gold-500 pt-2"
                      >
                        <span className="block font-display text-base font-semibold leading-tight text-ink-950 transition-colors group-hover:text-gold-700">
                          {ev.title}
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Liste éditoriale */}
      <section className="container-lux py-28 sm:py-36">
        <SectionTitle
          eyebrow="Six rendez-vous"
          lines={['Une année', <span className="text-gold-700">d’exception.</span>]}
          text="De la santé à la culture, de la formation au prestige : chaque événement porte une part de notre mission."
        />

        <div className="mt-20 space-y-24 sm:space-y-32">
          {events.map((e, i) => {
            const Icon = e.icon;
            const reverse = i % 2 === 1;
            return (
              <Reveal key={e.slug}>
                <Link
                  to={`/evenements/${e.slug}`}
                  className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
                >
                  <div className={`relative overflow-hidden rounded-sm lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[16/11]">
                      <img
                        src={e.image}
                        alt={e.title}
                        loading="lazy"
                        className={`h-full w-full object-cover transition-transform duration-[1800ms] ease-lux group-hover:scale-105 ${e.imagePosition ?? ''}`}
                      />
                    </div>
                    <div className="absolute inset-0 bg-ink-950/10 transition-colors duration-700 group-hover:bg-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-ivory-50/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-ink-950 backdrop-blur">
                      {statusLabel(e.month, now)}
                    </span>
                  </div>
                  <div className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-4 text-gold-700">
                      <span className="font-display text-6xl leading-none text-gold-500/80">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="h-px flex-1 bg-ink-900/10" />
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-700">
                      {MONTHS[e.month]} · Section {e.section} · {e.category}
                    </p>
                    <h3 className="mt-3 font-display text-4xl font-medium leading-none text-ink-950 sm:text-5xl">
                      {e.title}
                    </h3>
                    <p className="mt-6 text-lg leading-relaxed text-ink-900/65">{e.short}</p>
                    <span className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink-950">
                      <span className="link-lux">Découvrir l’événement</span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/20 transition-all duration-500 group-hover:border-gold-500 group-hover:bg-gold-500">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Appel */}
      <section className="grain relative overflow-hidden bg-ink-950 text-ivory-50">
        <img src={conference} alt="" className="absolute inset-0 h-full w-full object-cover object-left opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        <div className="container-lux relative z-10 py-28 sm:py-36">
          <SectionTitle
            dark
            eyebrow="Participer"
            lines={['Participez à', <span className="text-gold-gradient">nos événements.</span>]}
            text="Chaque rencontre est une opportunité de contribuer à notre mission collective, d’échanger avec des leaders engagés et de renforcer durablement les liens qui nous unissent."
          />
          <Reveal delay={0.3} className="mt-12 flex flex-wrap gap-4">
            <LuxButton to="/contact">Contactez-nous</LuxButton>
            <LuxButton to="/partenaires" variant="outline-light">
              Devenir sponsor
            </LuxButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Events;
