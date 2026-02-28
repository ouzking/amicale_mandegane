import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Users, CheckCircle } from 'lucide-react';
import Button from '../../components/common/Button';

const JourneeIntegration = () => {
  const objectives = [
    'Accueillir chaleureusement les nouveaux membres de l\'AEEOM',
    'Présenter l\'organisation, sa vision et ses valeurs fondamentales',
    'Faciliter la création de liens entre anciens et nouveaux membres',
    'Partager les opportunités et ressources disponibles',
    'Intégrer les nouveaux dans notre culture d\'excellence et de solidarité',
  ];

  const impact = [
    '50+ nouveaux membres intégrés',
    'Activités de team building',
    'Mentorat et parrainage',
    'Cohésion renforcée',
  ];

  return (
    <div className="bg-white">
     <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden">

  {/* Background Image with Zoom & Parallax */}
  <img
    src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1600"
    alt="Journée d'Intégration"
    className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-[3000ms] hover:scale-110"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/70 to-emerald-950/30"></div>

  {/* Decorative Glows */}
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-400/25 rounded-full blur-[180px] animate-pulse-slow"></div>
  <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[140px] animate-pulse-slow"></div>

  {/* Floating Particles */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="w-2 h-2 bg-white rounded-full opacity-20 animate-float-slow absolute top-[10%] left-[15%]"></div>
    <div className="w-3 h-3 bg-emerald-200/30 rounded-full opacity-25 animate-float-slow absolute top-[60%] left-[70%]"></div>
    <div className="w-1.5 h-1.5 bg-emerald-100/20 rounded-full opacity-20 animate-float-slow absolute top-[40%] left-[35%]"></div>
  </div>

  {/* Content */}
  <div className="absolute inset-0 flex items-end">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 w-full">

      {/* Breadcrumb with Glow */}
      <Link
        to="/evenements"
        className="inline-flex items-center text-emerald-200 hover:text-white font-semibold mb-6 transition-colors text-sm sm:text-base tracking-wide"
      >
        <ArrowLeft className="w-5 h-5 mr-2 animate-bounce-slow" />
        Retour aux événements
      </Link>

      <div className="max-w-3xl">

        {/* Date Tag with Neon Glow */}
        <div className="inline-block px-6 py-2 bg-emerald-800 bg-opacity-60 rounded-full text-sm sm:text-base font-bold text-white mb-4 backdrop-blur-md shadow-[0_0_20px_rgba(0,128,0,0.6)] animate-pulse-fast">
          Section Dakar · Octobre 2026
        </div>

        {/* Ultra Premium Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-100 to-white drop-shadow-2xl mb-6 animate-gradient-text leading-tight">
          Journée d'Intégration
        </h1>

        {/* Dynamic Description with Glow */}
        <p className="text-lg sm:text-xl md:text-2xl text-emerald-100 leading-snug drop-shadow-md animate-fadeIn delay-200">
          Accueil chaleureux des nouveaux membres dans la grande famille AEEOM, un moment convivial, interactif et fédérateur. 
          Découvrez l'expérience immersive, les activités stratégiques et les connexions qui bâtissent notre communauté.
        </p>

        {/* Decorative Lines & Animated Shapes */}
        <div className="mt-8 flex items-center gap-3">
          <div className="w-16 h-1 bg-emerald-400 rounded-full animate-pulse-fast"></div>
          <div className="w-2 h-2 bg-emerald-300 rounded-full animate-bounce-slow"></div>
          <div className="w-16 h-1 bg-emerald-400 rounded-full animate-pulse-fast delay-200"></div>
        </div>

      </div>
    </div>
  </div>
</section>




    <section className="relative py-24 bg-gray-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid lg:grid-cols-3 gap-12">

      {/* Contenu principal */}
      <div className="lg:col-span-2">
        <div className="prose prose-lg max-w-none relative">

          {/* Decorative Particles */}
          <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-emerald-400/20 blur-3xl animate-pulse-slow pointer-events-none"></div>
          <div className="absolute -bottom-16 right-0 w-48 h-48 rounded-full bg-emerald-300/20 blur-3xl animate-pulse-slow pointer-events-none"></div>

          {/* Titre ultra premium avec gradient et shadow */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-white drop-shadow-2xl mb-8 animate-fadeIn">
            À Propos de l'Événement
          </h2>

          {/* Description principale */}
          <p className="text-gray-600 leading-relaxed mb-6 animate-fadeIn delay-100 text-lg sm:text-xl">
            La Journée d'Intégration est **l'événement phare** du calendrier AEEOM. Elle accueille les nouveaux membres dans une ambiance conviviale et hyper dynamique, leur permettant de découvrir notre organisation, nos valeurs et notre vision, tout en créant des liens solides avec la communauté.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6 animate-fadeIn delay-200 text-lg sm:text-xl">
            Au programme : présentations institutionnelles, activités de team building, témoignages inspirants, sessions interactives et moments conviviaux. Chaque membre se voit attribuer un **parrain ou une marraine** pour garantir un accompagnement personnalisé.
          </p>

          {/* Carte Impact */}
          <div className="bg-emerald-50 rounded-3xl p-8 my-10 border border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fadeIn delay-300 group relative overflow-hidden">
            {/* Glow Accent */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
            <div className="flex items-start space-x-4 relative z-10">
              <div className="w-16 h-16 bg-emerald-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Heart className="w-8 h-8 text-white animate-pulse-fast" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-2">
                  Impact sur la Cohésion
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg sm:text-base">
                  La Journée d'Intégration renforce la cohésion de notre communauté en créant des **liens durables** entre générations, tout en transmettant notre culture organisationnelle et nos valeurs d'excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Objectifs Stratégiques */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-900 mb-6 mt-12 animate-fadeIn delay-400">
            Objectifs Stratégiques
          </h3>
          <ul className="space-y-3 animate-fadeIn delay-500">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-1 animate-bounce-slow" />
                <span className="text-gray-700 leading-relaxed text-lg sm:text-base">{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sidebar Impact & CTA */}
      <div className="lg:col-span-1">
        <div className="sticky top-32 space-y-6">

          {/* Impact Prévu */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fadeIn">
            <h3 className="text-xl sm:text-2xl font-extrabold text-emerald-900 mb-6">
              Impact Prévu
            </h3>
            <ul className="space-y-4">
              {impact.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 flex-shrink-0 animate-pulse-slow"></div>
                  <span className="text-gray-700 text-lg sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 animate-fadeIn delay-200 group relative overflow-hidden">
            {/* Glow Accent */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
            <Users className="w-14 h-14 mb-4 animate-bounce-slow relative z-10" />
            <h3 className="text-xl sm:text-2xl font-extrabold mb-3 relative z-10">Nous Rejoindre</h3>
            <p className="text-emerald-100 mb-6 text-sm sm:text-base leading-relaxed relative z-10">
              Intégrez une **communauté d'étudiants ambitieux, solidaires et dynamiques** pour vivre une expérience unique et immersive.
            </p>
            <Link to="/contact" className="relative z-10">
              <Button className="w-full text-emerald-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-2xl shadow-lg transition-all duration-300">
                Nous Contacter
              </Button>
            </Link>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>



    </div>
  );
};

export default JourneeIntegration;
