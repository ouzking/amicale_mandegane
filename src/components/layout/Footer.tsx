import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import logo from '../../assets/LOGO.jpeg';
import { CONTACT, SOCIALS, telHref } from '../../data/site';
import { events } from '../../data/events';
import { scrollToTop } from '../../lib/smooth';
import { Reveal, RevealLines } from '../ui/Reveal';
import LuxButton from '../ui/LuxButton';

const Footer = () => {

  return (
    <footer className="grain relative overflow-hidden bg-ink-950 text-ivory-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,165,92,0.12),transparent_60%)]" />

      {/* Bandeau d'appel */}
      <div className="container-lux relative z-10 border-b border-ivory-50/10 py-24 sm:py-32">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <span className="eyebrow text-gold-400">Écrivons la suite ensemble</span>
            </Reveal>
            <RevealLines
              lines={[
                'Une communauté engagée',
                <span className="text-gold-gradient">pour l’excellence durable.</span>,
              ]}
              className="h-display mt-6 text-[2.1rem] text-ivory-50 sm:text-5xl lg:text-[3.4rem]"
            />
          </div>
          <Reveal delay={0.2} className="flex flex-wrap gap-4 lg:col-span-4 lg:justify-end">
            <LuxButton to="/contact">Rejoindre l’AEEOM</LuxButton>
          </Reveal>
        </div>
      </div>

      {/* Colonnes */}
      <div className="container-lux relative z-10 grid gap-14 py-20 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="Logo AEEOM" className="h-16 w-16 rounded-full object-cover ring-1 ring-gold-500/40" />
            <span>
              <span className="block font-display text-3xl font-semibold tracking-[0.12em] text-ivory-50">AEEOM</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gold-400">Mandégane</span>
            </span>
          </Link>
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-ivory-100/55">
            Amicale des Élèves et Étudiants Originaires de Mandégane. Une institution engagée pour la transmission
            du savoir, la solidarité et la transformation sociale.
          </p>
          <p className="mt-6 font-display text-xl text-gold-300">« S’associer pour mieux servir l’avenir »</p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-400">Institution</h3>
          <ul className="mt-7 space-y-3.5 text-sm">
            {[
              { name: 'Organisation', path: '/organisation' },
              { name: 'Section Dakar', path: '/organisation/dakar' },
              { name: 'Section Ziguinchor', path: '/organisation/ziguinchor' },
              { name: 'Membres', path: '/membres' },
              { name: 'Partenaires', path: '/partenaires' },
              { name: 'Contact', path: '/contact' },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="link-lux text-ivory-100/70 transition-colors hover:text-ivory-50">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-400">Événements</h3>
          <ul className="mt-7 space-y-3.5 text-sm">
            {events.map((e) => (
              <li key={e.slug}>
                <Link
                  to={`/evenements/${e.slug}`}
                  className="link-lux text-ivory-100/70 transition-colors hover:text-ivory-50"
                >
                  {e.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-400">Contact officiel</h3>
          <div className="mt-7 space-y-3 text-sm">
            {CONTACT.phones.map((p) => (
              <a key={p} href={telHref(p)} className="link-lux block w-fit text-ivory-100/70 hover:text-ivory-50">
                {p}
              </a>
            ))}
            <a
              href={`mailto:${CONTACT.email}`}
              className="link-lux block w-fit break-all text-ivory-100/70 hover:text-ivory-50"
            >
              {CONTACT.email}
            </a>
            <p className="text-ivory-100/50">{CONTACT.location}</p>
          </div>
          <div className="mt-8 flex gap-3">
            {[
              { Icon: FaFacebookF, href: SOCIALS.facebook, label: 'Facebook' },
              { Icon: FaInstagram, href: SOCIALS.instagram, label: 'Instagram' },
              { Icon: FaTiktok, href: SOCIALS.tiktok, label: 'TikTok' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory-50/15 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500 hover:bg-gold-500 hover:text-ink-950"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Signature monumentale */}
      <div className="relative z-10 overflow-hidden">
        <p
          aria-hidden
          className="select-none whitespace-nowrap text-center font-display text-[24vw] font-semibold leading-[0.8] tracking-[0.04em] text-transparent [-webkit-text-stroke:1px_rgba(201,165,92,0.28)]"
        >
          AEEOM
        </p>
      </div>

      <div className="container-lux relative z-10 flex flex-col items-center justify-between gap-6 border-t border-ivory-50/10 py-8 text-xs text-ivory-100/45 md:flex-row">
        <p>© AEEOM · Institution Académique & Communautaire. Tous droits réservés.</p>
        <div className="flex items-center gap-6 uppercase tracking-[0.25em]">
          <span>Excellence</span>
          <span className="text-gold-500">·</span>
          <span>Leadership</span>
          <span className="text-gold-500">·</span>
          <span>Impact</span>
        </div>
        <button
          onClick={() => scrollToTop()}
          className="group flex items-center gap-3 uppercase tracking-[0.25em] text-ivory-100/70 transition-colors hover:text-gold-400"
        >
          Haut de page
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory-50/20 transition-colors group-hover:border-gold-500">
            <ArrowUp className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5" />
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
