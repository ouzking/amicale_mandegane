import { Link } from 'react-router-dom';
import { ArrowLeft, Music, Users, CheckCircle } from 'lucide-react';
import Button from '../../components/common/Button';

const Xaware = () => {
  const objectives = [
    'Célébrer et promouvoir la culture traditionnelle de Mandégane',
    'Préserver l\'identité culturelle de notre communauté d\'origine',
    'Créer un moment de partage intergénérationnel',
    'Valoriser les arts, danses et traditions mandéganes',
    'Renforcer le sentiment d\'appartenance communautaire',
  ];

  const impact = [
    '400+ participants attendus',
    'Spectacles culturels traditionnels',
    'Exposition artisanale locale',
    'Moments de convivialité et partage',
  ];

  return (
    <div className="bg-white">
      <section className="relative h-[75vh] sm:h-[85vh] md:h-[95vh] overflow-hidden">

  {/* Background Image avec effet cinématique */}
  <img
    src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1600"
    alt="Xawaré"
    className="w-full h-full object-cover object-center scale-110 animate-slowZoom"
  />

  {/* Overlay Premium Multilayer */}
  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/75 to-black/40"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.25),transparent_40%)]"></div>

  {/* Glows décoratifs dynamiques */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[180px] animate-pulse-slow"></div>
  <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-emerald-300/20 rounded-full blur-[160px] animate-pulse-slow"></div>

  {/* Contenu */}
  <div className="absolute inset-0 flex items-end">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 w-full">

      {/* Retour */}
      <Link
        to="/evenements"
        className="inline-flex items-center text-emerald-200 hover:text-white font-semibold tracking-wide mb-6 transition-all duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
        Retour aux événements
      </Link>

      <div className="max-w-4xl">

        {/* Badge date ultra premium */}
        <div className="inline-block px-6 py-2 rounded-full text-sm sm:text-base font-semibold text-white mb-5 backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
          Section Dakar · Décembre 2026
        </div>

        {/* Titre monumental */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-emerald-200 drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)] leading-tight mb-6">
          Xawaré
        </h1>

        {/* Sous-titre premium */}
        <p className="text-lg sm:text-xl md:text-2xl text-emerald-100 max-w-2xl leading-relaxed tracking-wide">
          Célébration vibrante de la culture et des traditions de Mandégane, 
          un événement d’exception mêlant héritage, identité et excellence communautaire.
        </p>

        {/* Ligne décorative dynamique */}
        <div className="mt-8 flex items-center gap-4">
          <div className="h-[2px] w-24 bg-emerald-400"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-300 animate-pulse"></div>
          <div className="h-[2px] w-16 bg-emerald-400/70"></div>
        </div>

      </div>
    </div>
  </div>
</section>


    <section className="relative py-24 sm:py-28 lg:py-32 bg-gradient-to-b from-white via-emerald-50/30 to-white overflow-hidden">

  {/* Background decorative glow */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[160px]" />
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-emerald-300/10 rounded-full blur-[160px]" />

  <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    
    <div className="grid lg:grid-cols-3 gap-16">

      {/* ================= LEFT CONTENT ================= */}
      <div className="lg:col-span-2 space-y-10">

        {/* Title */}
        <div className="space-y-6">
          <span className="inline-block text-sm tracking-widest uppercase text-emerald-700 font-semibold">
            Événement Culturel Majeur
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-950 leading-tight">
            À Propos du <span className="text-emerald-700">Xawaré</span>
          </h2>

          <div className="w-24 h-1 bg-emerald-700 rounded-full" />
        </div>

        {/* Paragraphs */}
        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <p>
            Le Xawaré est l'événement culturel phare de l'AEEOM, une célébration vibrante de nos racines, traditions et identité mandégane. Il rassemble étudiants, familles et partenaires autour d’une immersion totale : danses traditionnelles, musique, gastronomie et artisanat.
          </p>

          <p>
            Plus qu’une fête, c’est une affirmation identitaire forte. Dans un contexte urbain où les étudiants peuvent s’éloigner de leurs traditions, le Xawaré recrée un espace de reconnexion, de transmission et de fierté collective.
          </p>
        </div>

        {/* Impact Card Premium */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-emerald-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>

          <div className="relative bg-white/70 backdrop-blur-xl border border-emerald-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition duration-500">
            <div className="flex items-start gap-6">
              
              <div className="w-14 h-14 bg-emerald-900 rounded-2xl flex items-center justify-center shadow-lg">
                <Music className="w-7 h-7 text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-emerald-950 mb-3">
                  Impact Culturel
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Le Xawaré contribue activement à la préservation du patrimoine mandégane, renforce le sentiment d’appartenance et assure la transmission intergénérationnelle des savoirs.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className="pt-8">
          <h3 className="text-3xl font-bold text-emerald-950 mb-10">
            Objectifs Stratégiques
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-500"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-700 mt-1 flex-shrink-0 group-hover:scale-110 transition duration-300" />
                  <span className="text-gray-700 leading-relaxed">
                    {objective}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ================= RIGHT SIDEBAR ================= */}
      <div className="lg:col-span-1">

        <div className="lg:sticky lg:top-32 space-y-8">

          {/* Impact Preview Card */}
          <div className="bg-white rounded-3xl border border-gray-200 p-10 shadow-lg hover:shadow-2xl transition duration-500">
            <h3 className="text-2xl font-bold text-emerald-950 mb-8">
              Impact Prévu
            </h3>

            <ul className="space-y-5">
              {impact.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-emerald-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Participation Premium Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>

            <div className="relative bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-3xl p-10 text-white shadow-2xl hover:scale-[1.02] transition duration-500">
              <Users className="w-14 h-14 mb-6 text-emerald-200" />
              
              <h3 className="text-2xl font-bold mb-4">
                Participer à l’Expérience
              </h3>

              <p className="text-emerald-100 mb-8 leading-relaxed">
                Rejoignez-nous pour une célébration immersive de notre culture, un moment d’élégance, de tradition et de transmission.
              </p>

              <Link to="/contact">
                <Button className="w-full text-emerald-900 hover:bg-gray-100 font-semibold py-3 rounded-2xl transition duration-300">
                  Nous Contacter
                </Button>
              </Link>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

    </div>
  );
};

export default Xaware;
