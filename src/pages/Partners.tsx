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
import { useT } from '../i18n/context';

const EMPTY: PartnershipRequest = {
  organizationName: '',
  contactPerson: '',
  email: '',
  phone: '',
  partnershipType: '',
  message: '',
};

const Partners = () => {
  const t = useT();

  const types = [
    { value: 'Partenariat Stratégique', label: t({ fr: 'Partenariat Stratégique', en: 'Strategic Partnership', wo: 'Àndandoo bu Mag' }) },
    { value: 'Sponsoring', label: t({ fr: 'Sponsoring', en: 'Sponsorship', wo: 'Sponsoring' }) },
    { value: 'Collaboration Institutionnelle', label: t({ fr: 'Collaboration Institutionnelle', en: 'Institutional Collaboration', wo: 'Liggéey ak Mbootaay' }) },
  ];
  const [form, setForm] = useState<PartnershipRequest>(EMPTY);
  const [sent, setSent] = useState(false);

  const partners = [
    {
      name: 'Graphic Téranga',
      logo: graphicTeranga,
      category: t({ fr: 'Partenaire stratégique', en: 'Strategic partner', wo: 'Àndandoo bu mag' }),
      text: t({ fr: 'Production graphique et audiovisuelle.', en: 'Graphic and audiovisual production.', wo: 'Defar nataal ak widewoo.' }),
    },
    {
      name: 'Kids Shop',
      logo: kids,
      category: t({ fr: 'Partenaire stratégique', en: 'Strategic partner', wo: 'Àndandoo bu mag' }),
      text: t({ fr: 'Commerce et distribution.', en: 'Retail and distribution.', wo: 'Njaay ak séddale.' }),
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: t({ fr: 'Visibilité accrue', en: 'Greater visibility', wo: 'Siiw gu gëna mag' }),
      text: t({
        fr: 'Exposition de votre marque auprès d’une communauté d’étudiants d’élite.',
        en: 'Exposure for your brand among a community of elite students.',
        wo: 'Sa mark dina siiw ci biir askanu ndongo yu xarañ.',
      }),
    },
    {
      icon: Users,
      title: t({ fr: 'Accès aux talents', en: 'Access to talent', wo: 'Jot ci mën-mën yi' }),
      text: t({
        fr: 'Recrutement privilégié parmi nos membres qualifiés et ambitieux.',
        en: 'Priority recruitment among our qualified and ambitious members.',
        wo: 'Man ngaa jël ay liggéeykat ci sunuy way-bokk yu xarañ te am yéene.',
      }),
    },
    {
      icon: Handshake,
      title: t({ fr: 'Impact social', en: 'Social impact', wo: 'Njeexital ci askan' }),
      text: t({
        fr: 'Contribution directe au développement communautaire de Mandégane.',
        en: 'Direct contribution to the community development of Mandégane.',
        wo: 'Bokk ci yokkute askanu Mandégane.',
      }),
    },
    {
      icon: Building2,
      title: t({ fr: 'RSE & engagement', en: 'CSR & commitment', wo: 'Warugar ak yéene' }),
      text: t({
        fr: 'Renforcement de votre responsabilité sociétale d’entreprise.',
        en: 'Strengthening your corporate social responsibility.',
        wo: 'Dëgëral sa warugar ci askan wi.',
      }),
    },
  ];

  const tiers = [
    {
      name: t({ fr: 'Stratégique', en: 'Strategic', wo: 'Bu mag' }),
      text: t({
        fr: 'Une alliance durable, co-construite autour de projets structurants et d’objectifs partagés.',
        en: 'A lasting alliance, built together around structuring projects and shared goals.',
        wo: 'Àndandoo bu yàgg, bu ñu tabax ànd ci ay yéene yu mag ak jubluwaay yu ñu bokk.',
      }),
    },
    {
      name: t({ fr: 'Sponsor', en: 'Sponsor', wo: 'Sponsor' }),
      text: t({
        fr: 'Associez votre marque à nos événements phares, du Dîner de Gala à la Caravane Médicale.',
        en: 'Associate your brand with our flagship events, from the Gala Dinner to the Medical Caravan.',
        wo: 'Boolel sa mark ak sunuy xew-xew yu mag, ci Reeru Gala ba ci Karawaanu Paj.',
      }),
    },
    {
      name: t({ fr: 'Institutionnel', en: 'Institutional', wo: 'Mbootaay' }),
      text: t({
        fr: 'Collaborations avec universités, collectivités et organismes publics ou associatifs.',
        en: 'Collaborations with universities, local authorities and public or non-profit bodies.',
        wo: 'Liggéey ak iniwérsite yi, meeri yi ak mbootaay yu nguur walla yu askan.',
      }),
    },
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
        crumbs={[{ label: t({ fr: 'Partenaires', en: 'Partners', wo: 'Àndandoo' }) }]}
        eyebrow={t({ fr: 'Stratégique · Sponsor · Institutionnel', en: 'Strategic · Sponsor · Institutional', wo: 'Bu mag · Sponsor · Mbootaay' })}
        lines={[
          t({ fr: 'Nos', en: 'Our', wo: 'Sunuy' }),
          <span className="text-gold-gradient">{t({ fr: 'Partenaires.', en: 'Partners.', wo: 'Àndandoo.' })}</span>,
        ]}
        intro={t({
          fr: 'Ensemble pour l’excellence académique et le développement communautaire.',
          en: 'Together for academic excellence and community development.',
          wo: 'Ànd ngir xarañ ci jàng ak yokkute askan wi.',
        })}
      >
        <LuxButton href="#demande">{t({ fr: 'Devenir partenaire', en: 'Become a partner', wo: 'Nekk àndandoo' })}</LuxButton>
      </PageHero>

      {/* Ils nous font confiance */}
      <section className="container-lux py-28 sm:py-36">
        <SectionTitle
          eyebrow={t({ fr: 'Ils nous font confiance', en: 'They trust us', wo: 'Ñoo nu wóolu' })}
          lines={[
            t({ fr: 'Des alliés', en: 'First-class', wo: 'Ay àndandoo' }),
            <span className="text-gold-700">{t({ fr: 'de premier rang.', en: 'allies.', wo: 'yu tedd.' })}</span>,
          ]}
        />
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
                {t({ fr: 'Votre organisation ici', en: 'Your organisation here', wo: 'Sa mbootaay fii' })}
              </p>
              <p className="mt-2 text-sm text-ink-900/55 transition-colors duration-500 group-hover:text-ivory-100/60">
                {t({ fr: 'Rejoignez notre écosystème de partenaires.', en: 'Join our partner ecosystem.', wo: 'Bokkal ci sunuy àndandoo.' })}
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
            eyebrow={t({ fr: 'Pourquoi devenir partenaire', en: 'Why become a partner', wo: 'Lu tax nga nekk àndandoo' })}
            lines={[
              t({ fr: 'Une alliance', en: 'A partnership', wo: 'Àndandoo' }),
              <span className="text-gold-gradient">{t({ fr: 'qui a du sens.', en: 'with meaning.', wo: 'bu am solo.' })}</span>,
            ]}
            text={t({
              fr: 'Un partenariat avec l’AEEOM vous offre des opportunités uniques de collaboration et d’impact.',
              en: 'A partnership with AEEOM offers unique opportunities for collaboration and impact.',
              wo: 'Àndandoo ak AEEOM dafay ubbi ay yoon yu amul moroom ngir liggéey ànd ak am njeexital.',
            })}
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
              <span className="eyebrow text-gold-700">{t({ fr: 'Demande de partenariat', en: 'Partnership request', wo: 'Laaj àndandoo' })}</span>
            </Reveal>
            <RevealLines
              lines={[
                t({ fr: 'Construisons', en: 'Let’s build', wo: 'Nanu tabax' }),
                <span className="text-gold-700">{t({ fr: 'ensemble.', en: 'together.', wo: 'ànd.' })}</span>,
              ]}
              className="h-display mt-6 text-4xl text-ink-950 sm:text-5xl"
            />
            <Reveal delay={0.15}>
              <p className="mt-6 leading-relaxed text-ink-900/60">
                {t({
                  fr: 'Rejoignez notre écosystème de partenaires stratégiques. Nous revenons vers vous dans les plus brefs délais pour discuter des modalités.',
                  en: 'Join our ecosystem of strategic partners. We will get back to you shortly to discuss the details.',
                  wo: 'Bokkal ci sunuy àndandoo. Dinañu la delloo kàddu ci lu gaaw ngir waxtaan ci mbir mi.',
                })}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <Field name="organizationName" label={t({ fr: 'Organisation', en: 'Organisation', wo: 'Mbootaay' })} value={form.organizationName} onChange={onChange} />
                <Field name="contactPerson" label={t({ fr: 'Personne de contact', en: 'Contact person', wo: 'Ki ñuy jokkoo' })} value={form.contactPerson} onChange={onChange} />
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <Field name="email" type="email" label={t({ fr: 'Email', en: 'Email', wo: 'Imeel' })} value={form.email} onChange={onChange} />
                <Field name="phone" type="tel" label={t({ fr: 'Téléphone', en: 'Phone', wo: 'Telefon' })} value={form.phone} onChange={onChange} />
              </div>
              <Field name="partnershipType" label={t({ fr: 'Type de partenariat', en: 'Partnership type', wo: 'Xeetu àndandoo' })} value={form.partnershipType} onChange={onChange} options={types} />
              <Field name="message" label={t({ fr: 'Décrivez votre projet de partenariat', en: 'Describe your partnership project', wo: 'Waxal sa yéene ci àndandoo' })} value={form.message} onChange={onChange} textarea />
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <LuxButton type="submit" variant="dark">
                  {t({ fr: 'Envoyer via WhatsApp', en: 'Send via WhatsApp', wo: 'Yónne ci WhatsApp' })}
                </LuxButton>
                <button
                  type="button"
                  onClick={sendByEmail}
                  className="link-lux text-xs font-semibold uppercase tracking-[0.22em] text-ink-950"
                >
                  {t({ fr: 'Envoyer par email', en: 'Send by email', wo: 'Yónne ci imeel' })}
                </button>
              </div>
              {sent && (
                <p className="border-l-2 border-gold-500 pl-4 text-sm text-ink-900/70">
                  {t({
                    fr: 'Merci ! WhatsApp s’est ouvert avec votre demande préremplie. Nous vous recontactons très vite.',
                    en: 'Thank you! WhatsApp has opened with your request ready. We will get back to you very soon.',
                    wo: 'Jërëjëf ! WhatsApp ubbi na ak sa laaj. Dinañu la jokkoo ci lu gaaw.',
                  })}
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
