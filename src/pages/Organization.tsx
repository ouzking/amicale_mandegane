import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import groupe from '../assets/&&&.jpeg';
import dakarImg from '../assets/12.jpeg';
import zigImg from '../assets/ziguinchor.jpeg';
import famille from '../assets/AEEOM.jpeg';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import { Reveal } from '../components/ui/Reveal';
import LuxButton from '../components/ui/LuxButton';

const Organization = () => {
  const foundations = [
    {
      title: 'Notre Vision',
      text: 'Être la référence nationale en matière d’organisation estudiantine, alliant excellence académique et engagement communautaire exemplaire.',
    },
    {
      title: 'Notre Mission',
      text: 'Promouvoir la réussite scolaire, créer un réseau d’entraide solide et contribuer activement au développement de Mandégane.',
    },
    {
      title: 'Nos Valeurs',
      text: 'Excellence, solidarité, intégrité, leadership et engagement envers notre communauté d’origine.',
    },
  ];

  const governance = [
    {
      title: 'Bureau Exécutif',
      text: 'Pilote la stratégie globale et coordonne les actions de l’association.',
    },
    {
      title: 'Commissions Thématiques',
      text: 'Équipes spécialisées dédiées aux événements, à la communication et aux partenariats.',
    },
    {
      title: 'Délégations Régionales',
      text: 'Représentants dans les différentes universités et institutions.',
    },
  ];

  const sections = [
    {
      name: 'Section Dakar',
      location: 'Dakar, Sénégal',
      text: 'Hub principal de l’AEEOM regroupant la majorité des étudiants originaires de Mandégane poursuivant leurs études supérieures dans la capitale.',
      members: '150+',
      events: '5+ / an',
      image: dakarImg,
      to: '/organisation/dakar',
    },
    {
      name: 'Section Ziguinchor',
      location: 'Ziguinchor, Sénégal',
      text: 'Antenne régionale dynamique assurant une forte présence locale et un ancrage communautaire dans la région de Ziguinchor.',
      members: '50+',
      events: '3+ / an',
      image: zigImg,
      to: '/organisation/ziguinchor',
    },
  ];

  return (
    <div className="bg-ivory-50">
      <PageHero
        image={groupe}
        crumbs={[{ label: 'Organisation' }]}
        eyebrow="L’institution"
        lines={['Notre', <span className="text-gold-gradient">Organisation.</span>]}
        intro="Une structure institutionnelle solide, portée par l’excellence académique et un impact communautaire fort à Mandégane et au-delà."
      >
        <div className="flex flex-wrap gap-4">
          <LuxButton to="/contact">Nous contacter</LuxButton>
          <LuxButton to="/membres" variant="outline-light">
            Voir nos membres
          </LuxButton>
        </div>
      </PageHero>

      {/* À propos */}
      <section className="container-lux py-28 sm:py-36">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="À propos de l’AEEOM"
              lines={['Une amicale,', <span className="text-gold-700">une institution.</span>]}
            />
          </div>
          <div className="lg:col-span-7 lg:pt-14">
            <Reveal>
              <p className="font-display text-3xl leading-snug text-ink-950 sm:text-4xl">
                L’Amicale des Élèves et Étudiants Originaires de Mandégane est une organisation estudiantine d’élite
                fondée sur l’excellence, la solidarité et l’impact communautaire.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 md:grid-cols-3">
          {foundations.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1} className="group relative bg-ivory-50 p-10 transition-colors duration-700 hover:bg-ink-950 sm:p-12">
              <span className="font-display text-7xl text-gold-500/70">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-12 font-display text-3xl font-semibold text-ink-950 transition-colors duration-700 group-hover:text-gold-300">
                {f.title}
              </h3>
              <p className="mt-4 leading-relaxed text-ink-900/65 transition-colors duration-700 group-hover:text-ivory-100/75">
                {f.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gouvernance */}
      <section className="grain relative overflow-hidden bg-ink-950 text-ivory-50">
        <div className="container-lux relative z-10 grid gap-16 py-28 sm:py-36 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle
              dark
              eyebrow="Gouvernance institutionnelle"
              lines={['Clarté,', <span className="text-gold-gradient">transparence,</span>, 'responsabilité.']}
              text="L’AEEOM est structurée autour d’une gouvernance claire et efficace, garantissant l’atteinte de nos objectifs stratégiques."
            />
            <Reveal delay={0.3} className="mt-12 hidden overflow-hidden rounded-sm lg:block">
              <img src={famille} alt="Membres de l’AEEOM" className="aspect-[4/3] w-full object-cover opacity-80" />
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-20">
            {governance.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.1} className="group border-t border-ivory-50/10 py-10 last:border-b">
                <div className="flex gap-8">
                  <span className="pt-2 text-[11px] font-semibold tracking-[0.2em] text-gold-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-4xl font-medium transition-colors duration-500 group-hover:text-gold-300">
                      {g.title}
                    </h3>
                    <p className="mt-3 max-w-md leading-relaxed text-ivory-100/65">{g.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="container-lux py-28 sm:py-36">
        <SectionTitle
          eyebrow="Nos sections"
          lines={['Deux pôles,', <span className="text-gold-700">une seule famille.</span>]}
        />
        <div className="mt-20 space-y-8">
          {sections.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.1}>
              <Link to={s.to} className="group grid overflow-hidden border border-ink-900/10 bg-ivory-100 lg:grid-cols-12">
                <div className={`relative aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[460px] ${i % 2 ? 'lg:order-2' : ''}`}>
                  <img
                    src={s.image}
                    alt={s.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-lux group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between p-8 sm:p-12 lg:col-span-5">
                  <div>
                    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-700">
                      <MapPin className="h-3.5 w-3.5" />
                      {s.location}
                    </p>
                    <h3 className="mt-4 font-display text-5xl font-medium text-ink-950">{s.name}</h3>
                    <p className="mt-5 leading-relaxed text-ink-900/65">{s.text}</p>
                  </div>
                  <div className="mt-10">
                    <div className="grid grid-cols-2 border-y border-ink-900/10">
                      <div className="py-5">
                        <p className="font-display text-4xl text-ink-950">{s.members}</p>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-900/50">Membres</p>
                      </div>
                      <div className="border-l border-ink-900/10 py-5 pl-6">
                        <p className="font-display text-4xl text-ink-950">{s.events}</p>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-900/50">Événements</p>
                      </div>
                    </div>
                    <span className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink-950">
                      <span className="link-lux">Découvrir la section</span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/20 transition-all duration-500 group-hover:border-gold-500 group-hover:bg-gold-500">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Organization;
