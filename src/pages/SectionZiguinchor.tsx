import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, MapPin, Award, ArrowRight, Heart } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import ziguinchorImg from '../assets/ziguinchor.jpeg';

const MotionDiv = motion.div; // maintenant MotionDiv fonctionne


const SectionZiguinchor = () => {
  const leadership = [
    { position: 'Coordinateur', name: 'À venir' },
    { position: 'Vice-Coordinateur', name: 'À venir' },
    { position: 'Secrétaire', name: 'À venir' },
  ];

  return (
    <div className="bg-white">
     <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white py-24 overflow-hidden">
  {/* FILIGRANE IMAGE EN BACKGROUND */}
  <div className="absolute inset-0 pointer-events-none">
    <img
      src={ziguinchorImg} // 📌 Remplace par ton image institutionnelle
      alt="Ziguinchor Filigrane"
      className="w-full h-full object-cover opacity-10 scale-110"
    />
    <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-[140px]" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[120px]" />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    {/* Breadcrumb */}
    <div className="flex flex-wrap items-center gap-3 text-emerald-200 mb-10 text-sm tracking-wide">
      <Link
        to="/organisation"
        className="hover:text-white transition-colors duration-300"
      >
        Organisation
      </Link>
      <span className="opacity-50">/</span>
      <span className="text-white font-medium">Section Ziguinchor</span>
    </div>

    <div className="max-w-3xl motion-safe:animate-fadeIn">
      {/* TITRE */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
        Section{" "}
        <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
          Ziguinchor
        </span>
      </h1>

      {/* DESCRIPTION */}
      <p className="text-xl sm:text-2xl text-emerald-100/90 leading-relaxed mb-8">
        Antenne régionale dynamique assurant une présence forte et un ancrage communautaire dans la région, favorisant l’engagement, l’excellence et le leadership local.
      </p>

      {/* LOCALISATION */}
      <div className="flex items-center gap-3 text-emerald-200 text-lg">
        <MapPin className="w-6 h-6" />
        <span>Ziguinchor, Sénégal</span>
      </div>

      {/* CTA PREMIUM */}
      <div className="mt-12">
        <Link
          to="/contact"
          className="relative inline-flex items-center justify-center px-10 py-4 font-semibold rounded-3xl overflow-hidden group"
        >
          {/* Halo lumineux */}
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-500 group-hover:scale-110 transition-transform duration-500 blur-[6px]"></span>
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-40 rounded-3xl transition-opacity duration-500"></span>
          <span className="relative flex items-center gap-3 text-white tracking-wide">
            Rejoindre la Section
            <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-3 group-hover:rotate-12 animate-pulse" />
          </span>
        </Link>
      </div>
    </div>
  </div>
</section>


   <section className="relative py-24 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white overflow-hidden">
  {/* HALOS LUMINEUX */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-[140px]" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[120px]" />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
      {/* IMAGE CINÉMATIQUE */}
      <div className="order-2 md:order-1 relative motion-safe:animate-fadeInLeft">
        <div className="aspect-square rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
          <img
            src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Section Ziguinchor"
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[2000ms]"
          />
        </div>
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-emerald-900 rounded-2xl -z-10 shadow-xl" />
      </div>

      {/* TEXTE + STATS */}
      <div className="order-1 md:order-2 motion-safe:animate-fadeInRight">
        <SectionHeader
          title="L'Ancrage Régional"
          subtitle="La section Ziguinchor représente notre présence stratégique dans la région de Casamance."
          classname="text-white"
        />
        <p className="text-gray-200 leading-relaxed mt-6 mb-8">
          Notre antenne régionale maintient un lien privilégié avec Mandégane, facilite l'accompagnement des étudiants locaux et coordonne des initiatives adaptées aux réalités du terrain. C'est le pont essentiel entre notre communauté d'origine et nos ambitions académiques.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
            <Users className="w-10 h-10 text-emerald-300 mx-auto mb-2" />
            <div className="text-3xl font-extrabold text-white mb-1">50+</div>
            <div className="text-sm uppercase tracking-widest text-emerald-200">Membres Actifs</div>
          </div>
          <div className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
            <Heart className="w-10 h-10 text-emerald-300 mx-auto mb-2" />
            <div className="text-3xl font-extrabold text-white mb-1">6+</div>
            <div className="text-sm uppercase tracking-widest text-emerald-200">Événements / An</div>
          </div>
        </div>
      </div>
    </div>

    {/* BUREAU EXÉCUTIF */}
    <div className="relative bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)]">
      {/* Halo interne */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-[120px]" />
      </div>

      <h3 className="text-3xl md:text-4xl font-extrabold mb-14 text-center">
        Coordination Locale
      </h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {leadership.map((leader, index) => (
          <div
            key={index}
            className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 hover:-translate-y-3 transition-all duration-500"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Award className="w-7 h-7 text-white" />
            </div>
            <div className="font-bold text-lg mb-2">{leader.position}</div>
            <div className="text-emerald-200 text-sm">{leader.name}</div>
          </div>
        ))}
      </div>

      {/* CTA PREMIUM */}
      <div className="mt-16 text-center">
        <Link
          to="/membres?section=ziguinchor"
          className="group relative inline-flex items-center justify-center px-12 py-5 font-semibold rounded-3xl overflow-hidden"
        >
          {/* Halo lumineux */}
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-500 transition-all duration-500 blur-[6px] group-hover:scale-110"></span>
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-40 rounded-3xl transition-opacity duration-500"></span>

          <span className="relative flex items-center gap-3 text-white tracking-wide">
            Voir Tous les Membres
            <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-3 group-hover:rotate-12 animate-pulse" />
          </span>

          {/* Effet lift */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>
      </div>
    </div>
  </div>
</section>


      <section className="py-24 bg-gray-50 relative overflow-hidden">
  {/* Halos décoratifs */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[140px]" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-300/20 rounded-full blur-[120px]" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Header */}
    <div className="text-center mb-20">
      <SectionHeader
        title="Nos Actions"
        centered
        titleClass="text-emerald-900 text-4xl md:text-5xl font-extrabold"
        subtitleClass="text-gray-600 text-lg md:text-xl"
      />
    </div>

    {/* Cartes d’actions */}
    <div className="grid md:grid-cols-3 gap-10">
      {/* Carte 1 */}
      <motion.div 
        whileHover={{ scale: 1.05, y: -5 }} 
        className="bg-white rounded-3xl p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
          <Users className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-emerald-900 mb-3">Accompagnement Étudiant</h3>
        <p className="text-gray-600 leading-relaxed">
          Soutien académique et orientation des étudiants de la région dans leurs parcours universitaires.
        </p>
      </motion.div>

      {/* Carte 2 */}
      <motion.div 
        whileHover={{ scale: 1.05, y: -5 }} 
        className="bg-white rounded-3xl p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
          <Heart className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-emerald-900 mb-3">Actions Solidaires</h3>
        <p className="text-gray-600 leading-relaxed">
          Organisation d'initiatives caritatives et de développement communautaire à Mandégane.
        </p>
      </motion.div>

      {/* Carte 3 */}
      <motion.div 
        whileHover={{ scale: 1.05, y: -5 }} 
        className="bg-white rounded-3xl p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
          <Award className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-emerald-900 mb-3">Coordination Régionale</h3>
        <p className="text-gray-600 leading-relaxed">
          Liaison entre la section Dakar et la communauté locale pour une synergie optimale.
        </p>
      </motion.div>
    </div>

    {/* CTA Premium */}
    <div className="mt-16 text-center">
      <Link
        to="/contact"
        className="relative inline-flex items-center justify-center px-12 py-5 font-semibold rounded-3xl overflow-hidden group"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-500 transition-transform duration-500 group-hover:scale-110 rounded-3xl blur-[6px]"></span>
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-40 rounded-3xl transition-opacity duration-500"></span>
        <span className="relative flex items-center gap-3 text-white text-lg tracking-wide">
          Découvrir Nos Actions
          <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-3 group-hover:rotate-12" />
        </span>
        <motion.div
          className="absolute inset-0 rounded-3xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </Link>
    </div>
  </div>
</section>


      <section className="relative py-28 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white overflow-hidden">
  
  {/* HALOS PREMIUM */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-300/20 rounded-full blur-[120px]" />
  </div>

  <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
    
    {/* TITRE */}
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
      Rejoignez la <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
        Section Ziguinchor
      </span>
    </h2>

    {/* DESCRIPTION */}
    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-12 leading-relaxed">
      Participez activement à nos initiatives locales, engagez-vous pour l’excellence académique
      et contribuez au développement durable de notre communauté.
    </p>

    {/* BOUTONS PREMIUM */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

      {/* BOUTON PRINCIPAL */}
      <Link
        to="/contact"
        className="group relative inline-flex items-center justify-center px-12 py-5 font-semibold rounded-3xl overflow-hidden"
      >
        {/* Halo animé */}
        <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-500 blur-[6px] transition-all duration-500 group-hover:scale-110"></span>
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-3xl"></span>

        <span className="relative flex items-center gap-3 text-white text-lg tracking-wide">
          Nous Contacter
          <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-3 group-hover:rotate-12" />
        </span>

        <motion.div
          className="absolute inset-0 rounded-3xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </Link>

      {/* BOUTON SECONDAIRE GLASS */}
      <Link
        to="/membres?section=ziguinchor"
        className="group relative inline-flex items-center justify-center px-12 py-5 font-semibold rounded-3xl border border-white/30 bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all duration-500"
      >
        <span className="flex items-center gap-3 text-white text-lg tracking-wide">
          Voir les Membres
        </span>
      </Link>

    </div>
  </div>
</section>

    </div>
  );
};

export default SectionZiguinchor;
