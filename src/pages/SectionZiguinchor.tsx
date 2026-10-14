import { HandHeart, Landmark, MapPin, Users } from 'lucide-react';
import heroImg from '../assets/ziguinchor.jpeg';
import terrain from '../assets/caravane.jpeg';
import { useT } from '../i18n/context';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import { Reveal } from '../components/ui/Reveal';
import LuxButton from '../components/ui/LuxButton';
import CountUp from '../components/ui/CountUp';

const SectionZiguinchor = () => {
  const t = useT();

  const coordination = [
    { fr: 'Coordinateur', en: 'Coordinator', wo: 'Saytukat' },
    { fr: 'Vice-Coordinateur', en: 'Deputy Coordinator', wo: 'Ndimbalu Saytukat' },
    { fr: 'Secrétaire', en: 'Secretary', wo: 'Bindkat' },
  ];

  const actions = [
    {
      icon: Users,
      title: { fr: 'Accompagnement Étudiant', en: 'Student Support', wo: 'Gindi Ndongo yi' },
      text: {
        fr: 'Soutien académique et orientation des étudiants de la région dans leurs parcours universitaires.',
        en: 'Academic support and guidance for students from the region throughout their university studies.',
        wo: 'Dimbali ak gindi ndongo yu gox bi ci seen yoonu iniwérsite.',
      },
    },
    {
      icon: HandHeart,
      title: { fr: 'Actions Solidaires', en: 'Solidarity Actions', wo: 'Jëfi Dimbalante' },
      text: {
        fr: 'Organisation d’initiatives caritatives et de développement communautaire à Mandégane.',
        en: 'Charitable and community development initiatives in Mandégane.',
        wo: 'Def ay jëfi sarax ak yokkute askan wi ca Mandégane.',
      },
    },
    {
      icon: Landmark,
      title: { fr: 'Coordination Régionale', en: 'Regional Coordination', wo: 'Saytu Gox bi' },
      text: {
        fr: 'Liaison entre la section Dakar et la communauté locale pour une synergie optimale.',
        en: 'The link between the Dakar Section and the local community for the best possible synergy.',
        wo: 'Lëkkale Pàccu Dakar ak askanu gox bi ngir ñu ànd liggéey bu baax.',
      },
    },
  ];

  return (
    <div className="bg-ivory-50">
      <PageHero
        image={heroImg}
        crumbs={[
          { label: t({ fr: 'Organisation', en: 'Organisation', wo: 'Mbootaay' }), to: '/organisation' },
          { label: t({ fr: 'Section Ziguinchor', en: 'Ziguinchor Section', wo: 'Pàccu Ziguinchor' }) },
        ]}
        eyebrow={t({ fr: 'Ancrage régional', en: 'Regional base', wo: 'Ci gox bi' })}
        lines={[
          t({ fr: 'Section', en: 'Ziguinchor', wo: 'Pàccu' }),
          <span className="text-gold-gradient">{t({ fr: 'Ziguinchor.', en: 'Section.', wo: 'Ziguinchor.' })}</span>,
        ]}
        intro={t({
          fr: 'Antenne régionale dynamique assurant une présence forte et un ancrage communautaire dans la région, favorisant l’engagement, l’excellence et le leadership local.',
          en: 'A dynamic regional branch ensuring a strong presence and community roots in the region, fostering commitment, excellence and local leadership.',
          wo: 'Pàcc bu am kàttan ci gox bi, di jege askan wi, di yokk yéene, xarañ ak njiitlu ci dëkk yi.',
        })}
        aside={
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-ivory-100/70">
            <MapPin className="h-4 w-4 text-gold-400" />{' '}
            {t({ fr: 'Ziguinchor, Sénégal', en: 'Ziguinchor, Senegal', wo: 'Ziguinchor, Senegaal' })}
          </p>
        }
      >
        <LuxButton to="/contact">{t({ fr: 'Rejoindre la section', en: 'Join the section', wo: 'Bokk ci pàcc bi' })}</LuxButton>
      </PageHero>

      {/* Ancrage régional */}
      <section className="container-lux py-28 sm:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="overflow-hidden rounded-sm">
              <img
                src={terrain}
                alt={t({ fr: 'Action de terrain à Mandégane', en: 'Field action in Mandégane', wo: 'Jëf ca Mandégane' })}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-6">
            <SectionTitle
              eyebrow={t({ fr: 'Présence en Casamance', en: 'Presence in Casamance', wo: 'Ci Kaasamaas' })}
              lines={[
                t({ fr: 'L’ancrage', en: 'Our regional', wo: 'Sunu' }),
                <span className="text-gold-700">{t({ fr: 'régional.', en: 'roots.', wo: 'gox.' })}</span>,
              ]}
              text={t({
                fr: 'La section Ziguinchor représente notre présence stratégique dans la région de Casamance. Notre antenne maintient un lien privilégié avec Mandégane, facilite l’accompagnement des étudiants locaux et coordonne des initiatives adaptées aux réalités du terrain. C’est le pont essentiel entre notre communauté d’origine et nos ambitions académiques.',
                en: 'The Ziguinchor Section is our strategic presence in the Casamance region. It keeps a privileged link with Mandégane, supports local students and coordinates initiatives suited to realities on the ground. It is the essential bridge between our home community and our academic ambitions.',
                wo: 'Pàccu Ziguinchor mooy sunu teewaay ci diiwaanu Kaasamaas. Dafay lëkkaloo bu baax ak Mandégane, di gindi ndongo yu gox bi te di saytu ay jëf yu méngoo ak dund gu dëkk yi. Mooy pont bi lëkkale sunu askanu cosaan ak sunuy yéene ci jàng.',
              })}
            />
            <div className="mt-12 grid grid-cols-2 border-y border-ink-900/10">
              <Reveal className="py-8">
                <p className="font-display text-5xl text-ink-950">
                  <CountUp value={50} suffix="+" />
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-900/50">
                  {t({ fr: 'Membres actifs', en: 'Active members', wo: 'Way-bokk yuy jëf' })}
                </p>
              </Reveal>
              <Reveal delay={0.1} className="border-l border-ink-900/10 py-8 pl-8">
                <p className="font-display text-5xl text-ink-950">
                  <CountUp value={6} suffix="+" />
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-900/50">
                  {t({ fr: 'Événements / an', en: 'Events / year', wo: 'Xew-xew / at' })}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Nos actions */}
      <section className="grain relative overflow-hidden bg-ink-950 py-28 text-ivory-50 sm:py-36">
        <div className="container-lux relative z-10">
          <SectionTitle
            dark
            eyebrow={t({ fr: 'Sur le terrain', en: 'In the field', wo: 'Ci jëf' })}
            lines={[
              t({ fr: 'Nos', en: 'Our', wo: 'Sunuy' }),
              <span className="text-gold-gradient">{t({ fr: 'actions.', en: 'actions.', wo: 'jëf.' })}</span>,
            ]}
          />
          <div className="mt-16 grid gap-px overflow-hidden border border-ivory-50/10 bg-ivory-50/10 md:grid-cols-3">
            {actions.map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal
                  key={i}
                  delay={i * 0.1}
                  className="group bg-ink-950 p-10 transition-colors duration-700 hover:bg-ink-800 sm:p-12"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/40 text-gold-400 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-ink-950">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-10 font-display text-3xl">{t(a.title)}</h3>
                  <p className="mt-4 leading-relaxed text-ivory-100/65">{t(a.text)}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coordination locale */}
      <section className="container-lux py-28 sm:py-36">
        <SectionTitle
          eyebrow={t({ fr: 'Coordination locale', en: 'Local coordination', wo: 'Saytu gox bi' })}
          lines={[
            t({ fr: 'Une équipe', en: 'A team', wo: 'Ab mbooloo' }),
            <span className="text-gold-700">{t({ fr: 'en constitution.', en: 'in the making.', wo: 'buñuy sos.' })}</span>,
          ]}
          text={t({
            fr: 'Le bureau de coordination de la Section Ziguinchor sera bientôt présenté. Revenez découvrir les visages qui porteront l’action régionale.',
            en: 'The coordination team of the Ziguinchor Section will be announced soon. Come back to meet the faces who will lead our regional work.',
            wo: 'Dinañu wone ci lu gaaw biro bu Pàccu Ziguinchor. Dellusil ngir xam ñi ñuy jiite liggéey bi ci gox bi.',
          })}
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {coordination.map((role, i) => (
            <Reveal key={i} delay={i * 0.08} className="border border-dashed border-ink-900/20 p-10">
              <span className="font-display text-5xl text-gold-500/70">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-8 font-display text-3xl text-ink-950">{t(role)}</h3>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-900/45">
                {t({ fr: 'Nomination à venir', en: 'Appointment coming soon', wo: 'Dinañu ko tudd' })}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Appel */}
      <section className="border-t border-ink-900/10 bg-ivory-100">
        <div className="container-lux py-28 text-center sm:py-36">
          <SectionTitle
            center
            eyebrow={t({ fr: 'Engagement local', en: 'Local commitment', wo: 'Yéene ci gox bi' })}
            lines={[
              t({ fr: 'Rejoignez la', en: 'Join the', wo: 'Bokkal ci' }),
              <span className="text-gold-700">
                {t({ fr: 'Section Ziguinchor.', en: 'Ziguinchor Section.', wo: 'Pàccu Ziguinchor.' })}
              </span>,
            ]}
            text={t({
              fr: 'Participez activement à nos initiatives locales, engagez-vous pour l’excellence académique et contribuez au développement durable de notre communauté.',
              en: 'Take an active part in our local initiatives, commit to academic excellence and contribute to the lasting development of our community.',
              wo: 'Bokkal bu baax ci sunuy jëf ci gox bi, am yéene ngir xarañ ci jàng te dimbali ci yokkute gu yàgg ci sunu askan.',
            })}
          />
          <Reveal delay={0.3} className="mt-12 flex flex-wrap justify-center gap-4">
            <LuxButton to="/contact" variant="dark">
              {t({ fr: 'Nous contacter', en: 'Contact us', wo: 'Jokkoo ak nun' })}
            </LuxButton>
            <LuxButton to="/membres?section=ziguinchor" variant="outline-dark">
              {t({ fr: 'Voir les membres', en: 'See the members', wo: 'Xool way-bokk yi' })}
            </LuxButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default SectionZiguinchor;
