import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import groupe from '../assets/&&&.jpeg';
import dakarImg from '../assets/12.jpeg';
import zigImg from '../assets/ziguinchor.jpeg';
import famille from '../assets/AEEOM.jpeg';
import { useT } from '../i18n/context';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import { Reveal } from '../components/ui/Reveal';
import LuxButton from '../components/ui/LuxButton';

const Organization = () => {
  const t = useT();

  const foundations = [
    {
      title: { fr: 'Notre Vision', en: 'Our Vision', wo: 'Sunu Gis-gis' },
      text: {
        fr: 'Être la référence nationale en matière d’organisation estudiantine, alliant excellence académique et engagement communautaire exemplaire.',
        en: 'To be the national benchmark for student organisations, combining academic excellence with exemplary community commitment.',
        wo: 'Nekk royukaay ci réew mi ci wàllu mbootaayu ndongo, di boole xarañ ci jàng ak yéene gu baax ci askan wi.',
      },
    },
    {
      title: { fr: 'Notre Mission', en: 'Our Mission', wo: 'Sunu Liggéey' },
      text: {
        fr: 'Promouvoir la réussite scolaire, créer un réseau d’entraide solide et contribuer activement au développement de Mandégane.',
        en: 'To promote academic success, build a strong support network and actively contribute to the development of Mandégane.',
        wo: 'Yokk ndam ci jàng, sos ab mbooloo bu dëgër ngir dimbalante te bokk bu baax ci yokkute Mandégane.',
      },
    },
    {
      title: { fr: 'Nos Valeurs', en: 'Our Values', wo: 'Sunuy Jikko' },
      text: {
        fr: 'Excellence, solidarité, intégrité, leadership et engagement envers notre communauté d’origine.',
        en: 'Excellence, solidarity, integrity, leadership and commitment to our home community.',
        wo: 'Xarañ, dimbalante, dëggu, njiitlu ak yéene ngir sunu askanu cosaan.',
      },
    },
  ];

  const governance = [
    {
      title: { fr: 'Bureau Exécutif', en: 'Executive Board', wo: 'Biro bi' },
      text: {
        fr: 'Pilote la stratégie globale et coordonne les actions de l’association.',
        en: 'Steers the overall strategy and coordinates the association’s activities.',
        wo: 'Moo jiite pexe mi te saytu jëfi mbootaay gi.',
      },
    },
    {
      title: { fr: 'Commissions Thématiques', en: 'Thematic Committees', wo: 'Kurél yi' },
      text: {
        fr: 'Équipes spécialisées dédiées aux événements, à la communication et aux partenariats.',
        en: 'Specialised teams dedicated to events, communication and partnerships.',
        wo: 'Ay mbooloo yu xarañ ci xew-xew yi, jokkoo ak àndandoo yi.',
      },
    },
    {
      title: { fr: 'Délégations Régionales', en: 'Regional Delegations', wo: 'Ndawi Gox yi' },
      text: {
        fr: 'Représentants dans les différentes universités et institutions.',
        en: 'Representatives in the various universities and institutions.',
        wo: 'Ay ndaw ci iniwérsite yi ak ci mbootaay yi.',
      },
    },
  ];

  const sections = [
    {
      name: { fr: 'Section Dakar', en: 'Dakar Section', wo: 'Pàccu Dakar' },
      location: { fr: 'Dakar, Sénégal', en: 'Dakar, Senegal', wo: 'Dakar, Senegaal' },
      text: {
        fr: 'Hub principal de l’AEEOM regroupant la majorité des étudiants originaires de Mandégane poursuivant leurs études supérieures dans la capitale.',
        en: 'AEEOM’s main hub, bringing together most students from Mandégane pursuing higher education in the capital.',
        wo: 'Fi ëpp ndongo yu juddoo Mandégane yuy jàng ci iniwérsite ci Dakar dajaloo, mooy kër gu mag gu AEEOM.',
      },
      members: '150+',
      events: { fr: '5+ / an', en: '5+ / year', wo: '5+ / at' },
      image: dakarImg,
      to: '/organisation/dakar',
    },
    {
      name: { fr: 'Section Ziguinchor', en: 'Ziguinchor Section', wo: 'Pàccu Ziguinchor' },
      location: { fr: 'Ziguinchor, Sénégal', en: 'Ziguinchor, Senegal', wo: 'Ziguinchor, Senegaal' },
      text: {
        fr: 'Antenne régionale dynamique assurant une forte présence locale et un ancrage communautaire dans la région de Ziguinchor.',
        en: 'A dynamic regional branch ensuring a strong local presence and community roots in the Ziguinchor region.',
        wo: 'Pàcc bu am kàttan ci gox bi, di jege askan wi te di nekk fi ci diiwaanu Ziguinchor.',
      },
      members: '50+',
      events: { fr: '3+ / an', en: '3+ / year', wo: '3+ / at' },
      image: zigImg,
      to: '/organisation/ziguinchor',
    },
  ];

  return (
    <div className="bg-ivory-50">
      <PageHero
        image={groupe}
        crumbs={[{ label: t({ fr: 'Organisation', en: 'Organisation', wo: 'Mbootaay' }) }]}
        eyebrow={t({ fr: 'L’institution', en: 'The institution', wo: 'Mbootaay gi' })}
        lines={[
          t({ fr: 'Notre', en: 'Our', wo: 'Sunu' }),
          <span className="text-gold-gradient">{t({ fr: 'Organisation.', en: 'Organisation.', wo: 'Mbootaay.' })}</span>,
        ]}
        intro={t({
          fr: 'Une structure institutionnelle solide, portée par l’excellence académique et un impact communautaire fort à Mandégane et au-delà.',
          en: 'A solid institutional structure, driven by academic excellence and strong community impact in Mandégane and beyond.',
          wo: 'Ab mbootaay bu dëgër, buy dox ci xarañ ci jàng ak njeexital gu mag ci Mandégane ak fu sore.',
        })}
      >
        <div className="flex flex-wrap gap-4">
          <LuxButton to="/contact">{t({ fr: 'Nous contacter', en: 'Contact us', wo: 'Jokkoo ak nun' })}</LuxButton>
          <LuxButton to="/membres" variant="outline-light">
            {t({ fr: 'Voir nos membres', en: 'See our members', wo: 'Xool sunuy way-bokk' })}
          </LuxButton>
        </div>
      </PageHero>

      {/* À propos */}
      <section className="container-lux py-28 sm:py-36">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow={t({ fr: 'À propos de l’AEEOM', en: 'About AEEOM', wo: 'Ci mbirum AEEOM' })}
              lines={[
                t({ fr: 'Une amicale,', en: 'An association,', wo: 'Ab mbootaay,' }),
                <span className="text-gold-700">{t({ fr: 'une institution.', en: 'an institution.', wo: 'ab kër.' })}</span>,
              ]}
            />
          </div>
          <div className="lg:col-span-7 lg:pt-14">
            <Reveal>
              <p className="font-display text-3xl leading-snug text-ink-950 sm:text-4xl">
                {t({
                  fr: 'L’Amicale des Élèves et Étudiants Originaires de Mandégane est une organisation estudiantine d’élite fondée sur l’excellence, la solidarité et l’impact communautaire.',
                  en: 'The Association of Pupils and Students from Mandégane is an elite student organisation founded on excellence, solidarity and community impact.',
                  wo: 'Mbootaayu Ndongo yu Juddoo Mandégane ab mbootaayu ndongo yu xarañ la, bu sampu ci xarañ, dimbalante ak njeexital ci askan wi.',
                })}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 md:grid-cols-3">
          {foundations.map((f, i) => (
            <Reveal
              key={i}
              delay={i * 0.1}
              className="group relative bg-ivory-50 p-10 transition-colors duration-700 hover:bg-ink-950 sm:p-12"
            >
              <span className="font-display text-7xl text-gold-500/70">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-12 font-display text-3xl font-semibold text-ink-950 transition-colors duration-700 group-hover:text-gold-300">
                {t(f.title)}
              </h3>
              <p className="mt-4 leading-relaxed text-ink-900/65 transition-colors duration-700 group-hover:text-ivory-100/75">
                {t(f.text)}
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
              eyebrow={t({ fr: 'Gouvernance institutionnelle', en: 'Institutional governance', wo: 'Doxalinu mbootaay gi' })}
              lines={[
                t({ fr: 'Clarté,', en: 'Clarity,', wo: 'Leer,' }),
                <span className="text-gold-gradient">{t({ fr: 'transparence,', en: 'transparency,', wo: 'dëggu,' })}</span>,
                t({ fr: 'responsabilité.', en: 'accountability.', wo: 'warugar.' }),
              ]}
              text={t({
                fr: 'L’AEEOM est structurée autour d’une gouvernance claire et efficace, garantissant l’atteinte de nos objectifs stratégiques.',
                en: 'AEEOM is built around clear and effective governance, ensuring we achieve our strategic objectives.',
                wo: 'AEEOM dafa sampu ci doxalin bu leer te am njariñ, ngir àgg ci sunuy jubluwaay.',
              })}
            />
            <Reveal delay={0.3} className="mt-12 hidden overflow-hidden rounded-sm lg:block">
              <img
                src={famille}
                alt={t({ fr: 'Membres de l’AEEOM', en: 'AEEOM members', wo: 'Way-bokki AEEOM' })}
                className="aspect-[4/3] w-full object-cover opacity-80"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-20">
            {governance.map((g, i) => (
              <Reveal key={i} delay={i * 0.1} className="group border-t border-ivory-50/10 py-10 last:border-b">
                <div className="flex gap-8">
                  <span className="pt-2 text-[11px] font-semibold tracking-[0.2em] text-gold-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-4xl font-medium transition-colors duration-500 group-hover:text-gold-300">
                      {t(g.title)}
                    </h3>
                    <p className="mt-3 max-w-md leading-relaxed text-ivory-100/65">{t(g.text)}</p>
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
          eyebrow={t({ fr: 'Nos sections', en: 'Our sections', wo: 'Sunuy pàcc' })}
          lines={[
            t({ fr: 'Deux pôles,', en: 'Two hubs,', wo: 'Ñaari pàcc,' }),
            <span className="text-gold-700">{t({ fr: 'une seule famille.', en: 'one family.', wo: 'benn njaboot.' })}</span>,
          ]}
        />
        <div className="mt-20 space-y-8">
          {sections.map((s, i) => (
            <Reveal key={s.to} delay={i * 0.1}>
              <Link to={s.to} className="group grid overflow-hidden border border-ink-900/10 bg-ivory-100 lg:grid-cols-12">
                <div
                  className={`relative aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[460px] ${i % 2 ? 'lg:order-2' : ''}`}
                >
                  <img
                    src={s.image}
                    alt={t(s.name)}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-lux group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between p-8 sm:p-12 lg:col-span-5">
                  <div>
                    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-700">
                      <MapPin className="h-3.5 w-3.5" />
                      {t(s.location)}
                    </p>
                    <h3 className="mt-4 font-display text-5xl font-medium text-ink-950">{t(s.name)}</h3>
                    <p className="mt-5 leading-relaxed text-ink-900/65">{t(s.text)}</p>
                  </div>
                  <div className="mt-10">
                    <div className="grid grid-cols-2 border-y border-ink-900/10">
                      <div className="py-5">
                        <p className="font-display text-4xl text-ink-950">{s.members}</p>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-900/50">
                          {t({ fr: 'Membres', en: 'Members', wo: 'Way-bokk' })}
                        </p>
                      </div>
                      <div className="border-l border-ink-900/10 py-5 pl-6">
                        <p className="font-display text-4xl text-ink-950">{t(s.events)}</p>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-900/50">
                          {t({ fr: 'Événements', en: 'Events', wo: 'Xew-xew' })}
                        </p>
                      </div>
                    </div>
                    <span className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink-950">
                      <span className="link-lux">
                        {t({ fr: 'Découvrir la section', en: 'Discover the section', wo: 'Xam pàcc bi' })}
                      </span>
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
