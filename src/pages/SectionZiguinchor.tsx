import { HandHeart, Landmark, MapPin, Users } from 'lucide-react';
import heroImg from '../assets/ziguinchor.jpeg';
import terrain from '../assets/caravane.jpeg';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import { Reveal } from '../components/ui/Reveal';
import LuxButton from '../components/ui/LuxButton';
import CountUp from '../components/ui/CountUp';

const SectionZiguinchor = () => {
  const coordination = ['Coordinateur', 'Vice-Coordinateur', 'Secrétaire'];

  const actions = [
    {
      icon: Users,
      title: 'Accompagnement Étudiant',
      text: 'Soutien académique et orientation des étudiants de la région dans leurs parcours universitaires.',
    },
    {
      icon: HandHeart,
      title: 'Actions Solidaires',
      text: 'Organisation d’initiatives caritatives et de développement communautaire à Mandégane.',
    },
    {
      icon: Landmark,
      title: 'Coordination Régionale',
      text: 'Liaison entre la section Dakar et la communauté locale pour une synergie optimale.',
    },
  ];

  return (
    <div className="bg-ivory-50">
      <PageHero
        image={heroImg}
        crumbs={[{ label: 'Organisation', to: '/organisation' }, { label: 'Section Ziguinchor' }]}
        eyebrow="Ancrage régional"
        lines={['Section', <span className="text-gold-gradient">Ziguinchor.</span>]}
        intro="Antenne régionale dynamique assurant une présence forte et un ancrage communautaire dans la région, favorisant l’engagement, l’excellence et le leadership local."
        aside={
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-ivory-100/70">
            <MapPin className="h-4 w-4 text-gold-400" /> Ziguinchor, Sénégal
          </p>
        }
      >
        <LuxButton to="/contact">Rejoindre la section</LuxButton>
      </PageHero>

      {/* Ancrage régional */}
      <section className="container-lux py-28 sm:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="overflow-hidden rounded-sm">
              <img src={terrain} alt="Action de terrain à Mandégane" className="aspect-[4/3] w-full object-cover" />
            </div>
          </Reveal>
          <div className="lg:col-span-6">
            <SectionTitle
              eyebrow="Présence en Casamance"
              lines={['L’ancrage', <span className="text-gold-700">régional.</span>]}
              text="La section Ziguinchor représente notre présence stratégique dans la région de Casamance. Notre antenne maintient un lien privilégié avec Mandégane, facilite l’accompagnement des étudiants locaux et coordonne des initiatives adaptées aux réalités du terrain. C’est le pont essentiel entre notre communauté d’origine et nos ambitions académiques."
            />
            <div className="mt-12 grid grid-cols-2 border-y border-ink-900/10">
              <Reveal className="py-8">
                <p className="font-display text-5xl text-ink-950">
                  <CountUp value={50} suffix="+" />
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-900/50">Membres actifs</p>
              </Reveal>
              <Reveal delay={0.1} className="border-l border-ink-900/10 py-8 pl-8">
                <p className="font-display text-5xl text-ink-950">
                  <CountUp value={6} suffix="+" />
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-900/50">Événements / an</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Nos actions */}
      <section className="grain relative overflow-hidden bg-ink-950 py-28 text-ivory-50 sm:py-36">
        <div className="container-lux relative z-10">
          <SectionTitle dark eyebrow="Sur le terrain" lines={['Nos', <span className="text-gold-gradient">actions.</span>]} />
          <div className="mt-16 grid gap-px overflow-hidden border border-ivory-50/10 bg-ivory-50/10 md:grid-cols-3">
            {actions.map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal key={a.title} delay={i * 0.1} className="group bg-ink-950 p-10 transition-colors duration-700 hover:bg-ink-800 sm:p-12">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/40 text-gold-400 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-ink-950">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-10 font-display text-3xl">{a.title}</h3>
                  <p className="mt-4 leading-relaxed text-ivory-100/65">{a.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coordination locale */}
      <section className="container-lux py-28 sm:py-36">
        <SectionTitle
          eyebrow="Coordination locale"
          lines={['Une équipe', <span className="text-gold-700">en constitution.</span>]}
          text="Le bureau de coordination de la Section Ziguinchor sera bientôt présenté. Revenez découvrir les visages qui porteront l’action régionale."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {coordination.map((role, i) => (
            <Reveal key={role} delay={i * 0.08} className="border border-dashed border-ink-900/20 p-10">
              <span className="font-display text-5xl text-gold-500/70">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-8 font-display text-3xl text-ink-950">{role}</h3>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-900/45">Nomination à venir</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Appel */}
      <section className="border-t border-ink-900/10 bg-ivory-100">
        <div className="container-lux py-28 text-center sm:py-36">
          <SectionTitle
            center
            eyebrow="Engagement local"
            lines={['Rejoignez la', <span className="text-gold-700">Section Ziguinchor.</span>]}
            text="Participez activement à nos initiatives locales, engagez-vous pour l’excellence académique et contribuez au développement durable de notre communauté."
          />
          <Reveal delay={0.3} className="mt-12 flex flex-wrap justify-center gap-4">
            <LuxButton to="/contact" variant="dark">
              Nous contacter
            </LuxButton>
            <LuxButton to="/membres?section=ziguinchor" variant="outline-dark">
              Voir les membres
            </LuxButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default SectionZiguinchor;
