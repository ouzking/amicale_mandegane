import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Award, Building2, Handshake, Plus, Users } from 'lucide-react';
import type { PartnershipRequest } from '../types';
import { CONTACT, whatsappHref } from '../data/site';
import graphicTeranga from '../assets/graphicTérange.jpeg';
import kids from '../assets/kids_shop.jpeg';
import galaTeam from '../assets/1.jpeg';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import { Reveal, RevealLines } from '../components/ui/Reveal';
import LuxButton from '../components/ui/LuxButton';
import Field from '../components/ui/Field';

const EMPTY: PartnershipRequest = {
  organizationName: '',
  contactPerson: '',
  email: '',
  phone: '',
  partnershipType: '',
  message: '',
};

const TYPES = [
  { value: 'Partenariat Stratégique', label: 'Partenariat Stratégique' },
  { value: 'Sponsoring', label: 'Sponsoring' },
  { value: 'Collaboration Institutionnelle', label: 'Collaboration Institutionnelle' },
];

const Partners = () => {
  const [form, setForm] = useState<PartnershipRequest>(EMPTY);
  const [sent, setSent] = useState(false);

  const partners = [
    { name: 'Graphic Téranga', logo: graphicTeranga, category: 'Partenaire stratégique', text: 'Production graphique et audiovisuelle.' },
    { name: 'Kids Shop', logo: kids, category: 'Partenaire stratégique', text: 'Commerce et distribution.' },
  ];

  const benefits = [
    { icon: Award, title: 'Visibilité accrue', text: 'Exposition de votre marque auprès d’une communauté d’étudiants d’élite.' },
    { icon: Users, title: 'Accès aux talents', text: 'Recrutement privilégié parmi nos membres qualifiés et ambitieux.' },
    { icon: Handshake, title: 'Impact social', text: 'Contribution directe au développement communautaire de Mandégane.' },
    { icon: Building2, title: 'RSE & engagement', text: 'Renforcement de votre responsabilité sociétale d’entreprise.' },
  ];

  const tiers = [
    { name: 'Stratégique', text: 'Une alliance durable, co-construite autour de projets structurants et d’objectifs partagés.' },
    { name: 'Sponsor', text: 'Associez votre marque à nos événements phares, du Dîner de Gala à la Caravane Médicale.' },
    { name: 'Institutionnel', text: 'Collaborations avec universités, collectivités et organismes publics ou associatifs.' },
  ];

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const body = () =>
    [
      'Demande de partenariat',
      '',
      `Organisation : ${form.organizationName}`,
      `Personne de contact : ${form.contactPerson}`,
      `Email : ${form.email}`,
      `Téléphone : ${form.phone}`,
      `Type de partenariat : ${form.partnershipType}`,
      '',
      form.message,
    ].join('\n');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(whatsappHref(CONTACT.whatsappPartner, body()), '_blank');
    setSent(true);
    setForm(EMPTY);
  };

  const sendByEmail = () => {
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Partenariat · ${form.organizationName || 'Nouvelle demande'}`,
    )}&body=${encodeURIComponent(body())}`;
  };

  return (
    <div className="bg-ivory-50">
      <PageHero
        image={galaTeam}
        crumbs={[{ label: 'Partenaires' }]}
        eyebrow="Stratégique · Sponsor · Institutionnel"
        lines={['Nos', <span className="text-gold-gradient">Partenaires.</span>]}
        intro="Ensemble pour l’excellence académique et le développement communautaire."
      >
        <LuxButton href="#demande">Devenir partenaire</LuxButton>
      </PageHero>

      {/* Ils nous font confiance */}
      <section className="container-lux py-28 sm:py-36">
        <SectionTitle eyebrow="Ils nous font confiance" lines={['Des alliés', <span className="text-gold-700">de premier rang.</span>]} />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="group border border-ink-900/10 bg-ivory-100 p-8 transition-colors duration-700 hover:border-gold-500">
              <div className="aspect-[16/10] overflow-hidden rounded-sm bg-ivory-50">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-lux group-hover:scale-105"
                />
              </div>
              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-700">{p.category}</p>
              <h3 className="mt-2 font-display text-3xl font-semibold text-ink-950">{p.name}</h3>
              <p className="mt-2 text-sm text-ink-900/60">{p.text}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <a
              href="#demande"
              className="group flex h-full min-h-[320px] flex-col items-center justify-center border border-dashed border-ink-900/25 p-8 text-center transition-colors duration-500 hover:border-gold-500 hover:bg-ink-950"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ink-900/20 text-ink-950 transition-all duration-500 group-hover:rotate-90 group-hover:border-gold-500 group-hover:text-gold-400">
                <Plus className="h-6 w-6" />
              </span>
              <p className="mt-6 font-display text-3xl text-ink-950 transition-colors duration-500 group-hover:text-ivory-50">
                Votre organisation ici
              </p>
              <p className="mt-2 text-sm text-ink-900/55 transition-colors duration-500 group-hover:text-ivory-100/60">
                Rejoignez notre écosystème de partenaires.
              </p>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Pourquoi */}
      <section className="grain relative overflow-hidden bg-ink-950 py-28 text-ivory-50 sm:py-36">
        <div className="container-lux relative z-10">
          <SectionTitle
            dark
            eyebrow="Pourquoi devenir partenaire"
            lines={['Une alliance', <span className="text-gold-gradient">qui a du sens.</span>]}
            text="Un partenariat avec l’AEEOM vous offre des opportunités uniques de collaboration et d’impact."
          />
          <div className="mt-16 grid gap-px overflow-hidden border border-ivory-50/10 bg-ivory-50/10 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={i * 0.08} className="group bg-ink-950 p-10 transition-colors duration-700 hover:bg-ink-800">
                  <Icon className="h-6 w-6 text-gold-400" />
                  <h3 className="mt-12 font-display text-3xl">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory-100/60">{b.text}</p>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-24 grid gap-10 md:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1} className="border-t border-gold-500/40 pt-8">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-500">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-4 font-display text-4xl">{t.name}</h3>
                <p className="mt-3 leading-relaxed text-ivory-100/60">{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section id="demande" className="container-lux scroll-mt-24 py-28 sm:py-36">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow text-gold-700">Demande de partenariat</span>
            </Reveal>
            <RevealLines
              lines={['Construisons', <span className="text-gold-700">ensemble.</span>]}
              className="h-display mt-6 text-4xl text-ink-950 sm:text-5xl"
            />
            <Reveal delay={0.15}>
              <p className="mt-6 leading-relaxed text-ink-900/60">
                Rejoignez notre écosystème de partenaires stratégiques. Nous revenons vers vous dans les plus brefs
                délais pour discuter des modalités.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <Field name="organizationName" label="Organisation" value={form.organizationName} onChange={onChange} />
                <Field name="contactPerson" label="Personne de contact" value={form.contactPerson} onChange={onChange} />
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <Field name="email" type="email" label="Email" value={form.email} onChange={onChange} />
                <Field name="phone" type="tel" label="Téléphone" value={form.phone} onChange={onChange} />
              </div>
              <Field name="partnershipType" label="Type de partenariat" value={form.partnershipType} onChange={onChange} options={TYPES} />
              <Field name="message" label="Décrivez votre projet de partenariat" value={form.message} onChange={onChange} textarea />
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <LuxButton type="submit" variant="dark">
                  Envoyer via WhatsApp
                </LuxButton>
                <button
                  type="button"
                  onClick={sendByEmail}
                  className="link-lux text-xs font-semibold uppercase tracking-[0.22em] text-ink-950"
                >
                  Envoyer par email
                </button>
              </div>
              {sent && (
                <p className="border-l-2 border-gold-500 pl-4 text-sm text-ink-900/70">
                  Merci ! WhatsApp s’est ouvert avec votre demande préremplie. Nous vous recontactons très vite.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Partners;
