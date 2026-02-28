import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Sparkles, Heart, BookOpen, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import SectionHeader from '../components/common/SectionHeader';
import groupe from '../assets/&&&.jpeg';
import carav from '../assets/caravane.jpeg';
import dine from '../assets/44.jpeg';
import aeeomm from '../assets/AEEOM.jpeg';
import photoSecondaire from '../assets/1.jpeg';




const MotionDiv = motion.div;

const Home = () => {
  const stats = [
    { label: 'Membres Actifs', value: '200+' },
    { label: 'Événements Annuels', value: '10+' },
    { label: 'Partenaires', value: '5+' },
    { label: 'Impact Communautaire', value: '1000+' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence Académique',
      description: 'Promouvoir la réussite scolaire et universitaire de tous nos membres',
    },
    {
      icon: Users,
      title: 'Solidarité Communautaire',
      description: 'Renforcer les liens entre étudiants et créer un réseau d\'entraide solide',
    },
    {
      icon: Heart,
      title: 'Engagement Social',
      description: 'Contribuer au développement de Mandégane et de ses habitants',
    },
    {
      icon: Sparkles,
      title: 'Leadership & Innovation',
      description: 'Former les leaders de demain à travers des initiatives innovantes',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Caravane Médicale',
      date: 'Avril',
      image: carav,
      slug: 'caravane-medicale',
    },
    {
      title: 'Masterclass',
      date: 'Juillet',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'masterclass',
    },
    {
      title: 'Dîner de Gala',
      date: 'Décembre',
      image: dine,
      slug: 'diner-de-gala',
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
     <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white pt-28 md:pt-32 lg:pt-36">

  {/* HALO LUMINEUX PREMIUM */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[140px]"></div>
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[120px]"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-32 z-10">
    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* ================= TEXTE HERO ================= */}
      <MotionDiv
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center lg:text-left"
      >

        {/* Badge */}
        <div className="inline-flex items-center px-6 py-2 rounded-full 
                        bg-white/10 backdrop-blur-xl border border-white/20 
                        text-xs uppercase tracking-[0.3em] font-semibold mb-8">
          AEEOM · Mandégane · Excellence Institutionnelle
        </div>

        {/* Titre */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8">
          Construire l’
          <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
            excellence
          </span>
          <br />
          Former les leaders
          <br />
          Créer l’impact.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-12">
          Une organisation estudiantine d’élite engagée dans la transformation
          académique et le développement communautaire durable de Mandégane.
        </p>

        {/* ================= BOUTONS PREMIUM ================= */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">

          {/* Bouton principal glow */}
          <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/membres"
              className="relative group inline-flex items-center justify-center px-10 py-5 font-semibold text-lg rounded-2xl overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-500 transition-all duration-700 group-hover:scale-110"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white blur-2xl transition-all duration-700"></span>

              <span className="relative flex items-center gap-3 text-white">
                Découvrir nos Membres
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </Link>
          </MotionDiv>

          {/* Bouton secondaire glass */}
          <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="relative group inline-flex items-center justify-center px-10 py-5 font-semibold text-lg rounded-2xl
                         border border-white/30 bg-white/10 backdrop-blur-xl
                         transition-all duration-500 hover:bg-white hover:text-emerald-900 hover:shadow-xl"
            >
              Nous Rejoindre
            </Link>
          </MotionDiv>

        </div>
      </MotionDiv>

      {/* ================= IMAGE HERO ================= */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative mt-14 lg:mt-0"
      >

        {/* IMAGE PRINCIPALE */}
        <div className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
          <img
            src={groupe}
            alt="Étudiants AEEOM"
            className="w-full h-[400px] sm:h-[500px] object-cover scale-105 hover:scale-110 transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent"></div>
        </div>

        {/* IMAGE FLOTTANTE EN HAUT À DROITE */}
        <MotionDiv
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hidden sm:block absolute -top-12 -right-10 w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl"
        >
          <img
            src={photoSecondaire}  // 👈 ajoute ton import ici
            alt="Photo Secondaire"
            className="w-full h-full object-cover"
          />
        </MotionDiv>

        {/* Carte flottante stats */}
        <div className="absolute -bottom-8 left-6 sm:left-10 bg-white/10 backdrop-blur-xl border border-white/20 
                        rounded-2xl px-6 py-4 shadow-xl">
          <div className="text-sm uppercase tracking-widest text-emerald-200">
            Communauté
          </div>
          <div className="text-2xl font-bold">
            +200 Membres Actifs
          </div>
        </div>

      </MotionDiv>

    </div>
  </div>

  {/* Transition douce */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

</section>

      {/* ================= STATS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <MotionDiv
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-white via-emerald-50/40 to-white">

  {/* Background décoratif premium */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-emerald-200/20 blur-[140px] rounded-full"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header amélioré */}
    <div className="text-center mb-20">
      <span className="inline-block px-6 py-2 text-xs tracking-[0.25em] uppercase bg-emerald-100 text-emerald-800 rounded-full mb-6 font-semibold">
        Vision & Engagement
      </span>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-emerald-950 mb-6">
        Notre Mission
      </h2>

      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
        L'AEEOM s'engage à bâtir un écosystème structuré d'excellence académique,
        de leadership responsable et de solidarité communautaire durable.
      </p>
    </div>

    {/* Cartes premium */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      {values.map((value, i) => {
        const Icon = value.icon;

        return (
          <MotionDiv
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative group"
          >

            {/* Glow dynamique */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400 
                            rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

            {/* Carte */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 
                            rounded-3xl p-10 shadow-xl transition-all duration-500 
                            group-hover:shadow-2xl">

              {/* Icône premium */}
              <div className="relative w-16 h-16 rounded-2xl 
                              bg-gradient-to-br from-emerald-600 to-emerald-800 
                              flex items-center justify-center mb-8 
                              shadow-lg group-hover:scale-110 transition-all duration-500">

                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Titre */}
              <h3 className="text-2xl font-bold text-emerald-950 mb-4 tracking-tight">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-base">
                {value.description}
              </p>

              {/* Ligne décorative animée */}
              <div className="mt-8 h-[2px] w-12 bg-gradient-to-r from-emerald-600 to-emerald-400 
                              group-hover:w-24 transition-all duration-500"></div>
            </div>
          </MotionDiv>
        );
      })}
    </div>

  </div>
</section>


      {/* ================= UPCOMING EVENTS ================= */}
     <section className="relative py-24 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 overflow-hidden">

  {/* HALO BACKGROUND PREMIUM */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-300/20 rounded-full blur-[100px]" />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

    {/* HEADER */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">

      <SectionHeader
        title="Événements à Venir"
        subtitle="Des initiatives stratégiques à fort impact académique et communautaire."
      />

      <Link to="/evenements" className="hidden md:block">
        <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <div className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-emerald-900 overflow-hidden border border-emerald-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">

            <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition duration-500" />

            <span className="relative">Tous les Événements</span>

            <ArrowRight className="relative w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </MotionDiv>
      </Link>

    </div>

    {/* GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {upcomingEvents.map((event, i) => (

        <Link key={i} to={`/evenements/${event.slug}`} className="block">

          <MotionDiv
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
            transition={{ duration: 0.4 }}
            className="group relative rounded-3xl overflow-hidden cursor-pointer"
          >

            <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_30px_60px_rgba(16,185,129,0.25)] transition-all duration-500">

              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[2000ms]"
                />

                {/* CINEMATIC OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80" />

                {/* DATE BADGE */}
                <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-lg border border-white/30 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg">
                  {event.date}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h3 className="text-2xl font-bold text-emerald-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  {event.title}
                </h3>

                <p className="text-emerald-700/80 text-sm mb-6 leading-relaxed line-clamp-3">
                  {event.description}
                </p>

                <div className="flex items-center text-emerald-800 font-semibold group-hover:text-emerald-600 transition-colors duration-300">
                  En savoir plus
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>

              </div>

            </div>

          </MotionDiv>

        </Link>

      ))}

    </div>

    {/* CTA MOBILE */}
    <div className="md:hidden mt-14 text-center">
      <Link to="/evenements">
        <MotionDiv whileHover={{ scale: 1.05 }}>
          <div className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-700 shadow-xl hover:shadow-2xl transition-all duration-500">
            Tous les Événements
            <ArrowRight className="w-5 h-5" />
          </div>
        </MotionDiv>
      </Link>
    </div>

  </div>
</section>



      {/* ================= ORGANISATION ================= */}
     <section className="relative py-28 overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-emerald-100">

  {/* HALOS PREMIUM */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-300/20 rounded-full blur-[100px]" />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* TEXTE */}
      <MotionDiv
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >

        {/* Badge */}
        <div className="inline-flex items-center px-6 py-2 rounded-full bg-emerald-900 text-white text-xs tracking-[0.25em] uppercase font-semibold mb-8 shadow-lg">
          Organisation Institutionnelle
        </div>

        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 leading-tight mb-8">
          Deux Sections.
          <br />
          <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
            Une Vision Stratégique.
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-emerald-900/80 leading-relaxed mb-12 max-w-xl">
          L’AEEOM structure son action à travers deux pôles stratégiques,
          unifiés par une ambition commune : excellence académique,
          leadership et impact communautaire durable.
        </p>

        {/* BLOCS SECTIONS */}
        <div className="space-y-6">

          {/* DAKAR */}
          <MotionDiv
            whileHover={{ x: 8 }}
            className="group flex items-start gap-5 p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>

            <div>
              <h4 className="text-xl font-bold text-emerald-900 mb-2 group-hover:text-emerald-700 transition-colors">
                Section Dakar
              </h4>
              <p className="text-emerald-800/80 text-sm leading-relaxed">
                Hub stratégique central regroupant la majorité des membres,
                moteur principal des initiatives académiques et institutionnelles.
              </p>
            </div>
          </MotionDiv>

          {/* ZIGUINCHOR */}
          <MotionDiv
            whileHover={{ x: 8 }}
            className="group flex items-start gap-5 p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>

            <div>
              <h4 className="text-xl font-bold text-emerald-900 mb-2 group-hover:text-emerald-700 transition-colors">
                Section Ziguinchor
              </h4>
              <p className="text-emerald-800/80 text-sm leading-relaxed">
                Antenne régionale assurant proximité, cohésion territoriale
                et expansion stratégique dans le sud du pays.
              </p>
            </div>
          </MotionDiv>

        </div>

        {/* CTA PREMIUM */}
        <div className="mt-12">
          <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/organisation"
              className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-2xl font-semibold text-white overflow-hidden shadow-2xl"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-600 group-hover:scale-110 transition-transform duration-500"></span>
              <span className="relative flex items-center gap-3 text-lg">
                Découvrir l’Organisation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </MotionDiv>
        </div>

      </MotionDiv>

      {/* IMAGE CINÉMATOGRAPHIQUE */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.25)]">

          <img
            src={aeeomm}
            alt="Étudiants AEEOM"
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-all duration-[2000ms]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-transparent" />

        </div>

        {/* Carte flottante premium */}
        <div className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl px-8 py-5 shadow-2xl">
          <div className="text-sm uppercase tracking-widest text-emerald-600 font-semibold">
            Structure
          </div>
          <div className="text-2xl font-bold text-emerald-900">
            2 Sections Stratégiques
          </div>
        </div>

      </MotionDiv>

    </div>
  </div>

</section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white">

  {/* HALOS DYNAMIQUES */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[140px]" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-300/20 rounded-full blur-[120px]" />
  </div>

  <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">

    {/* BADGE */}
    <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs uppercase tracking-[0.3em] font-semibold mb-8">
      Excellence · Leadership · Impact
    </div>

    {/* TITRE IMPACTANT */}
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
      Rejoignez une
      <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
        {" "}Communauté d’Excellence
      </span>
    </h2>

    {/* DESCRIPTION */}
    <p className="text-lg md:text-xl text-emerald-100/90 leading-relaxed max-w-3xl mx-auto mb-14">
      Intégrez un réseau d’étudiants ambitieux, structurés et engagés pour
      l’excellence académique, le leadership et le développement durable
      de Mandégane.
    </p>

    {/* BOUTONS ULTRA PREMIUM */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center">

      {/* Bouton principal premium */}
      <MotionDiv whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }}>
        <Link
          to="/contact"
          className="relative group inline-flex items-center justify-center px-12 py-6 text-lg font-semibold rounded-2xl overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-500 transition-all duration-700 group-hover:scale-110"></span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white blur-2xl transition-all duration-700"></span>

          <span className="relative text-white flex items-center gap-3">
            Nous Contacter
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </Link>
      </MotionDiv>

      {/* Bouton secondaire glass */}
      <MotionDiv whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }}>
        <Link
          to="/membres"
          className="relative inline-flex items-center justify-center px-12 py-6 text-lg font-semibold rounded-2xl
                     border border-white/30 bg-white/10 backdrop-blur-xl
                     transition-all duration-500 hover:bg-white hover:text-emerald-900 hover:shadow-2xl"
        >
          Voir nos Membres
        </Link>
      </MotionDiv>

    </div>

    {/* CARTE FLOTTANTE SIGNATURE */}
    <div className="mt-20 flex justify-center">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-10 py-6 shadow-2xl">
        <div className="text-sm uppercase tracking-widest text-emerald-200">
          Réseau Actif
        </div>
        <div className="text-3xl font-bold mt-2">
          +200 Membres Engagés
        </div>
      </div>
    </div>

  </div>

  {/* TRANSITION DOUCE BAS */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-950 to-transparent"></div>

</section>


    </div>
  );
};

export default Home;
