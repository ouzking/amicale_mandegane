import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import type { ContactMessage } from '../types';
import { CONTACT, telHref, whatsappHref } from '../data/site';
import logo from '../assets/LOGO.jpeg';
import famille from '../assets/AEEOM.jpeg';
import PageHero from '../components/ui/PageHero';
import { Reveal, RevealLines } from '../components/ui/Reveal';
import LuxButton from '../components/ui/LuxButton';
import Field from '../components/ui/Field';
import { useT } from '../i18n/context';

const SITE_URL = 'https://www.aeeom.com';

const EMPTY: ContactMessage = { name: '', email: '', phone: '', address: '', subject: '', message: '' };

const Contact = () => {
  const t = useT();
  const [form, setForm] = useState<ContactMessage>(EMPTY);
  const [sent, setSent] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const body = () =>
    [
      'Nouvelle demande de contact',
      '',
      `Nom : ${form.name}`,
      `Email : ${form.email}`,
      `Téléphone : ${form.phone}`,
      `Adresse : ${form.address}`,
      `Sujet : ${form.subject}`,
      '',
      form.message,
    ].join('\n');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(whatsappHref(CONTACT.whatsappContact, body()), '_blank');
    setSent(true);
  };

  const sendByEmail = () => {
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      form.subject || 'Contact via le site AEEOM',
    )}&body=${encodeURIComponent(body())}`;
  };

  const info = [
    {
      icon: Phone,
      title: t({ fr: 'Téléphone', en: 'Phone', wo: 'Telefon' }),
      lines: CONTACT.phones.map((p) => ({ label: p, href: telHref(p) })),
    },
    { icon: Mail, title: t({ fr: 'Email', en: 'Email', wo: 'Imeel' }), lines: [{ label: CONTACT.email, href: `mailto:${CONTACT.email}` }] },
    { icon: MapPin, title: t({ fr: 'Localisation', en: 'Location', wo: 'Fu nu nekk' }), lines: [{ label: CONTACT.location }] },
  ];

  return (
    <div className="bg-ivory-50">
      <PageHero
        image={famille}
        crumbs={[{ label: t({ fr: 'Contact', en: 'Contact', wo: 'Jokkoo' }) }]}
        eyebrow={t({ fr: 'Communication & Relations', en: 'Communication & Relations', wo: 'Jokkoo ak Lëkkalo' })}
        lines={[
          t({ fr: 'Parlons de', en: 'Let’s talk about', wo: 'Ñu waxtaan ci' }),
          <span className="text-gold-gradient">{t({ fr: 'votre projet.', en: 'your project.', wo: 'sa yéene.' })}</span>,
        ]}
        intro={t({
          fr: 'Une question, un projet ou une collaboration ? Notre équipe est à votre écoute pour vous accompagner avec professionnalisme et engagement.',
          en: 'A question, a project or a collaboration? Our team is here to support you with professionalism and commitment.',
          wo: 'Am nga laaj, ab yéene walla ab liggéey bu ñu man a àndal ? Sunu mbooloo dafa lay déglu ngir dimbali la ak xarañ ak yéene.',
        })}
      />

      <section className="container-lux py-24 sm:py-32">
        <div className="grid gap-20 lg:grid-cols-12">
          {/* Coordonnées */}
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow text-gold-700">{t({ fr: 'Restons connectés', en: 'Stay in touch', wo: 'Nanu jokkoo' })}</span>
            </Reveal>
            <div className="mt-10 divide-y divide-ink-900/10 border-y border-ink-900/10">
              {info.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={i * 0.08} className="flex gap-5 py-7">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/40 text-gold-700">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-900/45">{item.title}</p>
                      {item.lines.map((l) =>
                        'href' in l && l.href ? (
                          <a key={l.label} href={l.href} className="link-lux mt-1 block w-fit break-all font-display text-xl text-ink-950">
                            {l.label}
                          </a>
                        ) : (
                          <p key={l.label} className="mt-1 font-display text-xl text-ink-950">
                            {l.label}
                          </p>
                        ),
                      )}
                    </div>
                  </Reveal>
                );
              })}
              <Reveal delay={0.25} className="flex gap-5 py-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/40 text-gold-700">
                  <Clock className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-900/45">
                    {t({ fr: 'Horaires', en: 'Opening hours', wo: 'Waxtu yi' })}
                  </p>
                  {CONTACT.hours.map((h) => (
                    <div key={h.time} className="mt-2 flex justify-between gap-4 text-sm">
                      <span className="text-ink-900/60">{t(h.days)}</span>
                      <span className="font-semibold text-ink-950">{h.time}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-7 lg:col-start-6">
            <RevealLines
              lines={[
                t({ fr: 'Envoyez-nous', en: 'Send us', wo: 'Yónnee nu' }),
                t({ fr: 'un message.', en: 'a message.', wo: 'ab bataaxal.' }),
              ]} className="h-display text-4xl text-ink-950 sm:text-5xl" />
            <Reveal delay={0.15}>
              <p className="mt-5 text-ink-900/60">
                {t({
                  fr: 'Votre message nous parvient directement sur WhatsApp. Vous pouvez aussi l’envoyer par email.',
                  en: 'Your message reaches us directly on WhatsApp. You can also send it by email.',
                  wo: 'Sa bataaxal dafay agsi ci nun ci WhatsApp. Man nga koo yónne itam ci imeel.',
                })}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <form onSubmit={onSubmit} className="mt-12 space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field name="name" label={t({ fr: 'Nom complet', en: 'Full name', wo: 'Sa tur ak sa sant' })} value={form.name} onChange={onChange} />
                  <Field name="email" type="email" label={t({ fr: 'Email', en: 'Email', wo: 'Imeel' })} value={form.email} onChange={onChange} />
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field name="phone" type="tel" label={t({ fr: 'Téléphone', en: 'Phone', wo: 'Telefon' })} value={form.phone ?? ''} onChange={onChange} />
                  <Field name="address" label={t({ fr: 'Adresse', en: 'Address', wo: 'Fan nga dëkk' })} value={form.address ?? ''} onChange={onChange} required={false} />
                </div>
                <Field
                  name="subject"
                  label={t({ fr: 'Sujet', en: 'Subject', wo: 'Mbir mi' })}
                  value={form.subject}
                  onChange={onChange}
                  options={[
                    { value: "Demande d'information", label: t({ fr: "Demande d'information", en: 'Information request', wo: 'Laaj xibaar' }) },
                    { value: 'Adhésion', label: t({ fr: 'Adhésion à l’AEEOM', en: 'Joining AEEOM', wo: 'Bokk ci AEEOM' }) },
                    { value: 'Proposition de projet', label: t({ fr: 'Proposition de projet', en: 'Project proposal', wo: 'Indi ab yéene' }) },
                    { value: 'Partenariat', label: t({ fr: 'Partenariat', en: 'Partnership', wo: 'Àndandoo' }) },
                    { value: 'Autre', label: t({ fr: 'Autre', en: 'Other', wo: 'Leneen' }) },
                  ]}
                />
                <Field name="message" label={t({ fr: 'Votre message', en: 'Your message', wo: 'Sa bataaxal' })} value={form.message} onChange={onChange} textarea />
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
                      fr: 'Merci ! WhatsApp s’est ouvert avec votre message prérempli : il ne reste qu’à l’envoyer.',
                      en: 'Thank you! WhatsApp has opened with your message ready: just press send.',
                      wo: 'Jërëjëf ! WhatsApp ubbi na ak sa bataaxal : yónne ko rekk a des.',
                    })}
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Carte + QR */}
      <section className="grid lg:grid-cols-12">
        <div className="relative h-[60svh] min-h-[420px] lg:col-span-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31347.579250466247!2d-16.408355734331132!3d12.74825899549247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ0JzU0LjAiTiAxNsKwMjInNTUuMCJX!5e0!3m2!1sfr!2ssn!4v1709334470610"
            className="absolute inset-0 h-full w-full grayscale-[0.6] contrast-[1.05]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title={t({ fr: 'Localisation de Mandégane', en: 'Location of Mandégane', wo: 'Fu Mandégane nekk' })}
          />
        </div>
        <div className="grain relative flex flex-col items-center justify-center overflow-hidden bg-ink-950 px-8 py-20 text-center text-ivory-50 lg:col-span-4">
          <span className="eyebrow relative z-10 text-gold-400">{t({ fr: 'Partagez l’AEEOM', en: 'Share AEEOM', wo: 'Séddoo AEEOM' })}</span>
          <div className="relative z-10 mt-8 bg-ivory-50 p-4">
            <QRCodeSVG value={SITE_URL} size={180} level="H" bgColor="#FBF9F4" fgColor="#06140E" />
            <img
              src={logo}
              alt=""
              className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ivory-50 p-1"
            />
          </div>
          <p className="relative z-10 mt-6 font-display text-2xl">www.aeeom.com</p>
          <p className="relative z-10 mt-2 max-w-xs text-sm text-ivory-100/60">
            {t({
              fr: 'Scannez pour retrouver le site officiel et le partager autour de vous.',
              en: 'Scan to open the official website and share it with those around you.',
              wo: 'Scanne ko ngir gis site bi te séddoo ko ak say nit.',
            })}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
