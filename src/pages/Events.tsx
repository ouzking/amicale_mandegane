import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';

const MotionDiv = motion.div;

const Events = () => {
  const events = [
    {
      title: 'Caravane Médicale',
      slug: 'caravane-medicale',
      description: 'Consultations gratuites et sensibilisation santé pour la communauté de Mandégane',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Avril',
      section: 'Dakar',
    },
    {
      title: 'Conférence Religieuse',
      slug: 'conference-religieuse',
      description: 'Guidance spirituelle et renforcement des valeurs morales de notre communauté',
      image: 'https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Mai',
      section: 'Dakar',
    },
    {
      title: 'Dîner de Gala',
      slug: 'diner-de-gala',
      description: 'Soirée prestigieuse de networking et célébration de nos réussites',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Decembre',
      section: 'Dakar',
    },
    {
      title: 'Masterclass',
      slug: 'masterclass',
      description: 'Sessions de formation avec experts et professionnels de renom',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Juillet',
      section: 'Dakar',
    },
    {
      title: 'Journée d\'Intégration',
      slug: 'journee-integration',
      description: 'Accueil chaleureux des nouveaux membres dans la famille AEEOM',
      image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Octobre',
      section: 'Dakar',
    },
    {
      title: 'Xawaré',
      slug: 'xaware',
      description: 'Célébration vibrante de la culture et des traditions de Mandégane',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Septembre',
      section: 'Dakar',
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white">

  {/* ===== Ambient Luxury Glow Effects ===== */}
  <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[160px] animate-pulse" />
  <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-teal-400/20 rounded-full blur-[160px] animate-pulse" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_40%)]" />

  <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    <div className="max-w-4xl">

      {/* ===== Premium Animated Title ===== */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
      >
        <span className="bg-gradient-to-r from-white via-emerald-200 to-teal-300 bg-clip-text text-transparent animate-gradient-x">
          Nos Événements
        </span>
      </motion.h1>

      {/* ===== Elegant Divider ===== */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="h-1 mt-8 mb-10 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full"
      />

      {/* ===== Subtitle Premium ===== */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-lg sm:text-xl md:text-2xl text-emerald-100 leading-relaxed max-w-3xl"
      >
        Des initiatives stratégiques, des rencontres d’impact et des expériences 
        immersives qui rythment notre année et incarnent notre vision d’excellence.
      </motion.p>

      {/* ===== Optional Premium Tagline ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 flex flex-wrap items-center gap-4"
      >
        <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm tracking-wide uppercase">
          Innovation
        </span>
        <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm tracking-wide uppercase">
          Leadership
        </span>
        <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm tracking-wide uppercase">
          Excellence
        </span>
      </motion.div>

    </div>
  </div>
</section>


      {/* Calendar Section */}
   <section className="relative py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white overflow-hidden">

  {/* Ambient luxury background */}
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-200/40 blur-[150px] rounded-full pointer-events-none" />
  <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-teal-200/40 blur-[150px] rounded-full pointer-events-none" />

  <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

    {/* ===== Header ===== */}
    <div className="text-center mb-20">
      <SectionHeader
        title="Calendrier Annuel"
        centered
      />
    </div>

    {/* ===== Premium Grid ===== */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {events.map((event, i) => (

        <Link
          key={i}
          to={`/evenements/${event.slug}`}
          className="block focus:outline-none focus:ring-4 focus:ring-emerald-300/40 rounded-3xl"
        >

          <MotionDiv
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -14 }}
            transition={{ duration: 0.45 }}
            className="group relative cursor-pointer bg-white/80 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl hover:shadow-[0_35px_70px_rgba(16,185,129,0.25)] transition-all duration-700 hover:scale-[1.02] overflow-hidden"
          >

            {/* ===== Image Block ===== */}
            <div className="relative h-60 overflow-hidden">

              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-[1800ms] group-hover:scale-110"
              />

              {/* Luxury Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500" />

              {/* Date Badge Premium */}
              <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-sm font-semibold text-emerald-900 shadow-lg border border-white/50">
                {event.date}
              </div>

              {/* Title + Section */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                  {event.title}
                </h3>
                <div className="flex items-center text-emerald-200 text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  Section {event.section}
                </div>
              </div>

            </div>

            {/* ===== Content ===== */}
            <div className="p-8">
              <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                {event.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-emerald-700 font-semibold tracking-wide group-hover:text-emerald-900 transition-all duration-300">
                  Savoir plus
                </span>

                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-900 transition-all duration-500 shadow-md">
                  <ArrowRight className="w-5 h-5 text-emerald-700 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Glow Border Effect */}
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-emerald-300/60 transition-all duration-500 pointer-events-none" />

          </MotionDiv>

        </Link>

      ))}

    </div>

  </div>
</section>


      {/* Call to Action Section */}
     <section className="relative py-28 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 overflow-hidden">

  {/* ===== Ambient Luxury Glow ===== */}
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-300/30 blur-[140px] rounded-full" />
  <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-teal-200/40 blur-[140px] rounded-full" />

  <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-10 md:p-16 shadow-2xl overflow-hidden"
    >

      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500" />

      <div className="max-w-3xl mx-auto text-center">

        {/* Icon with glow effect */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="absolute w-24 h-24 bg-emerald-400/20 rounded-full blur-2xl" />
          <Calendar className="relative w-16 h-16 text-emerald-900" />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-900 mb-6 leading-tight tracking-tight">
          Participez à Nos Événements
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          Chaque rencontre est une opportunité stratégique de contribuer à notre mission collective, 
          d’échanger avec des leaders engagés et de renforcer durablement les liens qui nous unissent.
        </p>

        {/* Premium CTA */}
        <Link
          to="/contact"
          className="group relative inline-flex items-center justify-center px-10 py-4 rounded-2xl font-semibold text-white bg-emerald-900 overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          {/* Glow animation */}
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-teal-500 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <span className="relative flex items-center">
            Contactez-Nous
            <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>

      </div>
    </motion.div>

  </div>
</section>

    </div>
  );
};

export default Events;
