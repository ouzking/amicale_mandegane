import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import heroImg from '../assets/12.jpeg';
import dakarImg from '../assets/0000.jpeg';
import { events, MONTHS } from '../data/events';
import { members } from '../data/members';
import { useT } from '../i18n/context';
import { positionTr } from '../i18n/positions';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import { Reveal } from '../components/ui/Reveal';
import LuxButton from '../components/ui/LuxButton';
import CountUp from '../components/ui/CountUp';

const SectionDakar = () => {
  const t = useT();
  const bureau = members.filter((m) => m.section === 'dakar' && m.role === 'Bureau Exécutif');
  const seeMembers = t({ fr: 'Voir les membres', en: 'See the members', wo: 'Xool way-bokk yi' });

  return (
    <div className="bg-ivory-50">
      <PageHero
        image={heroImg}
        crumbs={[
          { label: t({ fr: 'Organisation', en: 'Organisation', wo: 'Mbootaay' }), to: '/organisation' },
          { label: t({ fr: 'Section Dakar', en: 'Dakar Section', wo: 'Pàccu Dakar' }) },
        ]}
        eyebrow={t({ fr: 'Hub stratégique national', en: 'National strategic hub', wo: 'Kër gu mag ci réew mi' })}
        lines={[
          t({ fr: 'Section', en: 'Dakar', wo: 'Pàccu' }),
          <span className="text-gold-gradient">{t({ fr: 'Dakar.', en: 'Section.', wo: 'Dakar.' })}</span>,
        ]}
        intro={t({
          fr: 'Cœur institutionnel de l’AEEOM, la Section Dakar fédère plus de 150 étudiants leaders engagés pour l’excellence académique, l’innovation et l’impact communautaire durable.',
          en: 'The institutional heart of AEEOM, the Dakar Section unites more than 150 student leaders committed to academic excellence, innovation and lasting community impact.',
          wo: 'Xolu AEEOM, Pàccu Dakar dafay boole lu ëpp 150 ndongo yu am yéene ngir xarañ ci jàng, yees ak njeexital gu yàgg ci askan wi.',
        })}
        aside={
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-ivory-100/70">
            <MapPin className="h-4 w-4 text-gold-400" /> {t({ fr: 'Dakar, Sénégal', en: 'Dakar, Senegal', wo: 'Dakar, Senegaal' })}
          </p>
        }
      >
        <div className="flex flex-wrap gap-4">
          <LuxButton to="/contact">{t({ fr: 'Rejoindre la section', en: 'Join the section', wo: 'Bokk ci pàcc bi' })}</LuxButton>
          <LuxButton to="/membres?section=dakar" variant="outline-light">
            {seeMembers}
          </LuxButton>
        </div>
      </PageHero>

      {/* Pôle d'excellence */}
      <section className="container-lux py-28 sm:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionTitle
              eyebrow={t({ fr: 'Pôle stratégique', en: 'Strategic hub', wo: 'Pàcc bu am solo' })}
              lines={[
                t({ fr: 'Le pôle', en: 'The hub', wo: 'Kër' }),
                <span className="text-gold-700">{t({ fr: 'd’excellence.', en: 'of excellence.', wo: 'xarañ.' })}</span>,
              ]}
              text={t({
                fr: 'Implantée dans la capitale sénégalaise, la Section Dakar incarne le cœur stratégique de l’AEEOM. Elle pilote les initiatives d’envergure, développe les synergies professionnelles et maintient un lien fort avec Mandégane à travers des actions concrètes.',
                en: 'Based in the Senegalese capital, the Dakar Section is the strategic heart of AEEOM. It leads major initiatives, builds professional synergies and keeps a strong link with Mandégane through concrete action.',
                wo: 'Pàccu Dakar, mi nekk ci péeyu Senegaal, mooy xolu AEEOM. Moo jiite jëf yu mag yi, di boole liggéeykat yi te di lëkkaloo ak Mandégane jaare ko ci ay jëf yu leer.',
              })}
            />
            <div className="mt-12 grid grid-cols-2 border-y border-ink-900/10">
              <Reveal className="py-8">
                <p className="font-display text-5xl text-ink-950">
                  <CountUp value={150} suffix="+" />
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-900/50">
                  {t({ fr: 'Membres actifs', en: 'Active members', wo: 'Way-bokk yuy jëf' })}
                </p>
              </Reveal>
              <Reveal delay={0.1} className="border-l border-ink-900/10 py-8 pl-8">
                <p className="font-display text-5xl text-ink-950">
                  <CountUp value={5} suffix="+" />
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-900/50">
                  {t({ fr: 'Événements / an', en: 'Events / year', wo: 'Xew-xew / at' })}
                </p>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.15} className="relative lg:col-span-6">
            <div className="overflow-hidden rounded-sm">
              <img
                src={dakarImg}
                alt={t({ fr: 'Section Dakar', en: 'Dakar Section', wo: 'Pàccu Dakar' })}
                className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
              />
            </div>
            <div className="absolute -bottom-8 left-6 bg-ink-950 px-8 py-6 text-ivory-50 sm:-left-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                {t({ fr: 'Leadership', en: 'Leadership', wo: 'Njiitlu' })}
              </p>
              <p className="mt-1 font-display text-3xl">{t({ fr: 'Hub national', en: 'National hub', wo: 'Kër gu mag' })}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bureau exécutif */}
      <section className="grain relative overflow-hidden bg-ink-950 py-28 text-ivory-50 sm:py-36">
        <div className="container-lux relative z-10">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <SectionTitle
              dark
              eyebrow={t({ fr: 'Gouvernance', en: 'Governance', wo: 'Njiitlu' })}
              lines={[
                t({ fr: 'Bureau', en: 'Executive', wo: 'Biro' }),
                <span className="text-gold-gradient">{t({ fr: 'Exécutif.', en: 'Board.', wo: 'bi.' })}</span>,
              ]}
            />
            <Reveal delay={0.2}>
              <LuxButton to="/membres?section=dakar" variant="outline-light">
                {t({ fr: 'Tous les membres', en: 'All members', wo: 'Way-bokk yépp' })}
              </LuxButton>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bureau.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.08}>
                <Link to="/membres?section=dakar" className="group block">
                  <div className="aspect-[3/4] overflow-hidden rounded-sm bg-ink-800">
                    <img
                      src={m.photo}
                      alt={m.fullName}
                      className="h-full w-full object-cover object-[center_20%] grayscale transition-all duration-1000 ease-lux group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-400">
                    {t(positionTr(m.position))}
                  </p>
                  <h3 className="mt-1 font-display text-2xl">{m.fullName}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Événements phares */}
      <section className="container-lux py-28 sm:py-36">
        <SectionTitle
          eyebrow={t({ fr: 'Programme annuel', en: 'Annual programme', wo: 'Programmu at mi' })}
          lines={[
            t({ fr: 'Événements', en: 'Flagship', wo: 'Xew-xew' }),
            <span className="text-gold-700">{t({ fr: 'phares.', en: 'events.', wo: 'yu mag yi.' })}</span>,
          ]}
        />
        <div className="mt-16 border-t border-ink-900/10">
          {events
            .filter((e) => e.section === 'Dakar')
            .map((e, i) => (
              <Reveal key={e.slug} delay={i * 0.05}>
                <Link
                  to={`/evenements/${e.slug}`}
                  className="group grid grid-cols-12 items-center gap-4 border-b border-ink-900/10 py-7 transition-colors duration-500 hover:bg-ivory-100 sm:px-4"
                >
                  <span className="col-span-2 text-[11px] font-semibold tracking-[0.2em] text-gold-700 sm:col-span-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="col-span-10 font-display text-3xl text-ink-950 transition-transform duration-500 ease-lux group-hover:translate-x-2 sm:col-span-5 sm:text-4xl">
                    {t(e.title)}
                  </h3>
                  <p className="col-span-10 col-start-3 text-sm text-ink-900/60 sm:col-span-4 sm:col-start-auto">{t(e.short)}</p>
                  <span className="col-span-12 flex items-center justify-between gap-4 sm:col-span-2 sm:justify-end">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-900/45">
                      {t(MONTHS[e.month])}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 transition-all duration-500 group-hover:border-gold-500 group-hover:bg-gold-500">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
        </div>
      </section>

      {/* Appel */}
      <section className="border-t border-ink-900/10 bg-ivory-100">
        <div className="container-lux py-28 text-center sm:py-36">
          <SectionTitle
            center
            eyebrow={t({
              fr: 'Capitale · Leadership · Excellence',
              en: 'Capital · Leadership · Excellence',
              wo: 'Péey · Njiitlu · Xarañ',
            })}
            lines={[
              t({ fr: 'Rejoignez la', en: 'Join the', wo: 'Bokkal ci' }),
              <span className="text-gold-700">{t({ fr: 'Section Dakar.', en: 'Dakar Section.', wo: 'Pàccu Dakar.' })}</span>,
            ]}
            text={t({
              fr: 'Intégrez la plus grande communauté d’étudiants originaires de Mandégane à Dakar, développez votre réseau académique et contribuez activement aux initiatives stratégiques de notre organisation.',
              en: 'Join the largest community of students from Mandégane in Dakar, grow your academic network and actively contribute to our organisation’s strategic initiatives.',
              wo: 'Duggal ci askanu ndongo yu juddoo Mandégane yi gëna bari ci Dakar, yokk sa mbooloo ci jàng te bokk bu baax ci jëf yu mag yu sunu mbootaay.',
            })}
          />
          <Reveal delay={0.3} className="mt-12 flex flex-wrap justify-center gap-4">
            <LuxButton to="/contact" variant="dark">
              {t({ fr: 'Nous contacter', en: 'Contact us', wo: 'Jokkoo ak nun' })}
            </LuxButton>
            <LuxButton to="/membres?section=dakar" variant="outline-dark">
              {seeMembers}
            </LuxButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default SectionDakar;
