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

const SITE_URL = 'https://www.aeeom.com';

const EMPTY: ContactMessage = { name: '', email: '', phone: '', address: '', subject: '', message: '' };

const Contact = () => {
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
      title: 'Téléphone',
      lines: CONTACT.phones.map((p) => ({ label: p, href: telHref(p) })),
    },
    { icon: Mail, title: 'Email', lines: [{ label: CONTACT.email, href: `mailto:${CONTACT.email}` }] },
    { icon: MapPin, title: 'Localisation', lines: [{ label: CONTACT.location }] },
  ];

  return (
    <div className="bg-ivory-50">
      <PageHero
        image={famille}
        crumbs={[{ label: 'Contact' }]}
        eyebrow="Communication & Relations"
        lines={['Parlons de', <span className="text-gold-gradient">votre projet.</span>]}
        intro="Une question, un projet ou une collaboration ? Notre équipe est à votre écoute pour vous accompagner avec professionnalisme et engagement."
      />

      <section className="container-lux py-24 sm:py-32">
        <div className="grid gap-20 lg:grid-cols-12">
          {/* Coordonnées */}
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow text-gold-700">Restons connectés</span>
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
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-900/45">Horaires</p>
                  {CONTACT.hours.map((h) => (
                    <div key={h.days} className="mt-2 flex justify-between gap-4 text-sm">
                      <span className="text-ink-900/60">{h.days}</span>
                      <span className="font-semibold text-ink-950">{h.time}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-7 lg:col-start-6">
            <RevealLines lines={['Envoyez-nous', 'un message.']} className="h-display text-4xl text-ink-950 sm:text-5xl" />
            <Reveal delay={0.15}>
              <p className="mt-5 text-ink-900/60">
                Votre message nous parvient directement sur WhatsApp. Vous pouvez aussi l’envoyer par email.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <form onSubmit={onSubmit} className="mt-12 space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field name="name" label="Nom complet" value={form.name} onChange={onChange} />
                  <Field name="email" type="email" label="Email" value={form.email} onChange={onChange} />
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field name="phone" type="tel" label="Téléphone" value={form.phone ?? ''} onChange={onChange} />
                  <Field name="address" label="Adresse" value={form.address ?? ''} onChange={onChange} required={false} />
                </div>
                <Field
                  name="subject"
                  label="Sujet"
                  value={form.subject}
                  onChange={onChange}
                  options={[
                    { value: "Demande d'information", label: "Demande d'information" },
                    { value: 'Adhésion', label: 'Adhésion à l’AEEOM' },
                    { value: 'Proposition de projet', label: 'Proposition de projet' },
                    { value: 'Partenariat', label: 'Partenariat' },
                    { value: 'Autre', label: 'Autre' },
                  ]}
                />
                <Field name="message" label="Votre message" value={form.message} onChange={onChange} textarea />
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
                    Merci ! WhatsApp s’est ouvert avec votre message prérempli : il ne reste qu’à l’envoyer.
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
            title="Localisation de Mandégane"
          />
        </div>
        <div className="grain relative flex flex-col items-center justify-center overflow-hidden bg-ink-950 px-8 py-20 text-center text-ivory-50 lg:col-span-4">
          <span className="eyebrow relative z-10 text-gold-400">Partagez l’AEEOM</span>
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
            Scannez pour retrouver le site officiel et le partager autour de vous.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
