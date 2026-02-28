import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Award, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import dakarImage from '../assets/12.jpeg';
import dakarImg from '../assets/0000.jpeg';

const MotionDiv = motion.div; // maintenant MotionDiv fonctionne


const SectionDakar = () => {
  
  const leadership = [
    { position: 'Président', name: 'À venir' },
    { position: 'Vice-Président', name: 'À venir' },
    { position: 'Secrétaire Général', name: 'À venir' },
    { position: 'Trésorier', name: 'À venir' },
  ];

  const events = [
    {
      name: 'Caravane Médicale',
      description: 'Consultations gratuites et sensibilisation santé',
      slug: 'caravane-medicale',
    },
    {
      name: 'Conférence Religieuse',
      description: 'Guidance spirituelle et valeurs morales',
      slug: 'conference-religieuse',
    },
    {
      name: 'Dîner de Gala',
      description: 'Événement de prestige et networking',
      slug: 'diner-de-gala',
    },
    {
      name: 'Masterclass',
      description: 'Formation avec experts et professionnels',
      slug: 'masterclass',
    },
    {
      name: 'Journée d\'Intégration',
      description: 'Accueil des nouveaux membres',
      slug: 'journee-integration',
    },
    {
      name: 'Xawaré',
      description: 'Célébration de la culture mandégane',
      slug: 'xaware',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden text-white">

  {/* IMAGE BACKGROUND */}
  <div className="absolute inset-0">
    <img
      src={dakarImage} // 👈 ajoute une belle photo institutionnelle ici
      alt="Section Dakar"
      className="w-full h-full object-cover scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-900/90 to-emerald-800/85"></div>
  </div>

  {/* HALOS PREMIUM */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-[140px]" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[120px]" />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">

    {/* BREADCRUMB PREMIUM */}
    <div className="flex flex-wrap items-center gap-3 text-emerald-200 mb-10 text-sm tracking-wide">
      <Link
        to="/organisation"
        className="hover:text-white transition-colors duration-300"
      >
        Organisation
      </Link>
      <span className="opacity-50">/</span>
      <span className="text-white font-medium">Section Dakar</span>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* TEXTE */}
      <div className="max-w-2xl">

        <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs uppercase tracking-[0.3em] font-semibold mb-8">
          Hub Stratégique National
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-8">
          Section
          <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
            {" "}Dakar
          </span>
        </h1>

        <p className="text-lg md:text-xl text-emerald-100/90 leading-relaxed mb-10">
          Cœur institutionnel de l’AEEOM, la Section Dakar fédère plus de
          150 étudiants leaders engagés pour l’excellence académique,
          l’innovation et l’impact communautaire durable.
        </p>

        {/* LOCALISATION */}
        <div className="flex items-center gap-3 text-emerald-200 text-lg">
          <MapPin className="w-6 h-6" />
          <span>Dakar, Sénégal</span>
        </div>

      </div>

      {/* CARTE FLOTTANTE STATS */}
      <div className="relative mt-16 lg:mt-0">

        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-10 shadow-[0_40px_80px_rgba(0,0,0,0.4)]">

          <div className="grid grid-cols-2 gap-8 text-center">

            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-white">
                150+
              </div>
              <div className="text-sm uppercase tracking-widest text-emerald-200 mt-2">
                Membres Actifs
              </div>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-white">
                5+
              </div>
              <div className="text-sm uppercase tracking-widest text-emerald-200 mt-2">
                Projets / An
              </div>
            </div>

          </div>

          {/* CTA INTERNE */}
          <div className="mt-10 flex justify-center">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold rounded-2xl overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-500 group-hover:scale-110 transition-transform duration-500"></span>
              <span className="relative flex items-center gap-3 text-white">
                Rejoindre la Section
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </div>

        </div>

      </div>

    </div>
  </div>

  {/* TRANSITION BAS */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-950 to-transparent"></div>

</section>


      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-emerald-100">

  {/* HALOS PREMIUM */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-300/20 rounded-full blur-[100px]" />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

    {/* ===================== TOP SECTION ===================== */}
    <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">

      {/* TEXTE */}
      <div>

        <div className="inline-flex items-center px-6 py-2 rounded-full bg-emerald-900 text-white text-xs tracking-[0.3em] uppercase font-semibold mb-8 shadow-lg">
          Pôle Stratégique
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 leading-tight mb-8">
          Le
          <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
            {" "}Pôle d’Excellence
          </span>
        </h2>

        <p className="text-lg md:text-xl text-emerald-900/80 leading-relaxed mb-10">
          Implantée dans la capitale sénégalaise, la Section Dakar incarne
          le cœur stratégique de l’AEEOM. Elle pilote les initiatives
          d’envergure, développe les synergies professionnelles et maintient
          un lien fort avec Mandégane à travers des actions concrètes.
        </p>

        {/* STATS PREMIUM */}
        <div className="grid grid-cols-2 gap-6">

          <div className="group bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <Users className="w-10 h-10 text-emerald-700 mx-auto mb-4" />
            <div className="text-4xl font-extrabold text-emerald-900 mb-2">
              150+
            </div>
            <div className="text-sm uppercase tracking-widest text-emerald-700">
              Membres Actifs
            </div>
          </div>

          <div className="group bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <Calendar className="w-10 h-10 text-emerald-700 mx-auto mb-4" />
            <div className="text-4xl font-extrabold text-emerald-900 mb-2">
              5+
            </div>
            <div className="text-sm uppercase tracking-widest text-emerald-700">
              Événements / An
            </div>
          </div>

        </div>

      </div>

      {/* IMAGE CINÉMATIQUE */}
      <div className="relative">

        <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.25)]">

          <img
            src={dakarImg}
            alt="Section Dakar"
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-all duration-[2000ms]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />

        </div>

        {/* CARTE FLOTTANTE */}
        <div className="absolute -bottom-10 -left-10 bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl px-8 py-5 shadow-2xl">
          <div className="text-sm uppercase tracking-widest text-emerald-600 font-semibold">
            Leadership
          </div>
          <div className="text-2xl font-bold text-emerald-900">
            Hub National
          </div>
        </div>

      </div>

    </div>

    {/* ===================== BUREAU EXECUTIF ===================== */}

    <div className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)]">

      {/* HALO INTERNE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-[120px]" />
      </div>

      <h3 className="relative text-3xl md:text-4xl font-extrabold mb-14 text-center">
        Bureau Exécutif
      </h3>

      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {leadership.map((leader, index) => (
          <div
            key={index}
            className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:-translate-y-3"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Award className="w-7 h-7 text-white" />
            </div>

            <div className="font-bold text-lg mb-2">
              {leader.position}
            </div>

            <div className="text-emerald-200 text-sm">
              {leader.name}
            </div>
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="relative mt-16 text-center">
       <Link
  to="/membres?section=dakar"
  className="relative group inline-flex items-center justify-center px-12 py-5 font-semibold rounded-3xl overflow-hidden"
>
  {/* Glow et gradient dynamique */}
  <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-500 
                   transition-transform duration-700 group-hover:scale-110 blur-[10px]"></span>

  {/* Halo lumineux flottant */}
  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-50 rounded-3xl transition-opacity duration-500"></span>

  {/* Contenu du bouton */}
  <span className="relative flex items-center gap-3 text-white tracking-wide text-lg font-bold">
    Voir Tous les Membres
    <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-3 group-hover:rotate-12 animate-pulse" />
  </span>

  {/* Effet de lift et scale au hover */}
  <motion.div
    className="absolute inset-0 rounded-3xl"
    whileHover={{ scale: 1.07, rotate: 1 }}
    whileTap={{ scale: 0.95 }}
  />
</Link>

      </div>

    </div>

  </div>
</section>


      <section className="py-20 bg-gray-50 relative overflow-hidden">
  {/* Halo subtil en background */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[140px]" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-300/10 rounded-full blur-[120px]" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <SectionHeader
        title="Événements Phares"
        centered
      />
    </div>

    {/* Grid événements */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event, index) => (
        <MotionDiv
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
          {/* Icon et arrow */}
          <div className="flex items-start justify-between p-6 pb-0">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-200 to-emerald-400 rounded-xl flex items-center justify-center shadow-inner transition-all group-hover:scale-110">
              <Calendar className="w-7 h-7 text-emerald-900" />
            </div>
            <ArrowRight className="w-6 h-6 text-emerald-700 transition-transform duration-500 group-hover:translate-x-2 group-hover:rotate-12" />
          </div>

          {/* Contenu */}
          <div className="p-6 pt-4">
            <h3 className="text-lg md:text-xl font-bold text-emerald-900 mb-2 group-hover:text-emerald-700 transition-colors">
              {event.name}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Overlay dynamique */}
          <span className="absolute inset-0 bg-gradient-to-t from-emerald-50/0 via-emerald-100/10 to-transparent pointer-events-none group-hover:opacity-50 transition-opacity duration-500"></span>
        </MotionDiv>
      ))}
    </div>

    {/* CTA premium */}
    <div className="mt-12 text-center">
      <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/evenements"
          className="relative inline-flex items-center justify-center px-12 py-5 font-bold text-lg rounded-3xl overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-500 group-hover:scale-110 transition-transform duration-500 blur-[6px]"></span>
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-40 rounded-3xl transition-opacity duration-500"></span>
          <span className="relative flex items-center gap-3 text-white tracking-wide">
            Tous les Événements
            <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-3 group-hover:rotate-12 animate-pulse" />
          </span>
        </Link>
      </MotionDiv>
    </div>
  </div>
</section>


      <section className="relative py-32 bg-gradient-to-br from-emerald-950 via-emerald-900 to-black text-white overflow-hidden">

  {/* HALOS CINÉMATIQUES */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[140px]" />
    <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-[140px]" />
  </div>

  {/* LIGNE LUMINEUSE CENTRALE */}
  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent"></div>

  <div className="relative max-w-5xl mx-auto px-6 text-center z-10">

    {/* BADGE PREMIUM */}
    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-xl px-6 py-2 rounded-full mb-10 text-sm tracking-widest uppercase text-emerald-300">
      Capitale • Leadership • Excellence
    </div>

    {/* TITRE IMPACT */}
    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
      Rejoignez la
      <span className="block bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-600 bg-clip-text text-transparent">
        Section Dakar
      </span>
    </h2>

    {/* DESCRIPTION */}
    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-14 leading-relaxed">
      Intégrez la plus grande communauté d'étudiants originaires de Mandégane à Dakar,
      développez votre réseau académique et contribuez activement aux initiatives
      stratégiques de notre organisation.
    </p>

    {/* BOUTONS ULTRA PREMIUM */}
    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">

      {/* BOUTON PRINCIPAL GLOW */}
      <Link
        to="/contact"
        className="group relative inline-flex items-center justify-center px-14 py-6 font-semibold rounded-[2rem] overflow-hidden"
      >
        {/* Glow animé */}
        <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-500 blur-[8px] transition-all duration-500 group-hover:scale-110"></span>

        {/* Overlay subtil */}
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-[2rem]"></span>

        {/* Contenu */}
        <span className="relative flex items-center gap-4 text-white text-lg tracking-wide">
          Nous Contacter
          <ArrowRight className="w-6 h-6 transition-all duration-500 group-hover:translate-x-4 group-hover:rotate-12" />
        </span>

        {/* Lift tactile */}
        <motion.div
          className="absolute inset-0 rounded-[2rem]"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
        />
      </Link>

      {/* BOUTON SECONDAIRE GLASS LUXE */}
      <Link
        to="/membres?section=dakar"
        className="group relative inline-flex items-center justify-center px-14 py-6 font-semibold rounded-[2rem] border border-white/30 bg-white/5 backdrop-blur-xl hover:bg-white/15 transition-all duration-500"
      >
        <span className="text-white text-lg tracking-wide group-hover:tracking-wider transition-all duration-300">
          Voir les Membres
        </span>
      </Link>

    </div>

  </div>
</section>

    </div>
  );
};

export default SectionDakar;
