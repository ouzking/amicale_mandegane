import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Users, Target, CheckCircle } from 'lucide-react';
import Button from '../../components/common/Button';

const CaravaneMedicale = () => {
  const objectives = [
    'Offrir des consultations médicales gratuites aux habitants de Mandégane',
    'Sensibiliser la population aux bonnes pratiques de santé',
    'Distribuer des médicaments essentiels',
    'Dépister les maladies courantes',
    'Créer une base de données sanitaire communautaire',
  ];

  const impact = [
    'Plus de 500 consultations gratuites',
    '300+ personnes sensibilisées',
    'Distribution de kits médicaux',
    'Suivi médical post-caravane',
  ];

  return (
    <div className="bg-white">
      <section className="relative h-[85vh] overflow-hidden bg-black">

  {/* IMAGE CINÉMATIQUE */}
  <img
    src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1600"
    alt="Caravane Médicale"
    className="absolute inset-0 w-full h-full object-cover scale-105 animate-[slowZoom_20s_linear_infinite_alternate]"
  />

  {/* OVERLAY PROFONDEUR */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-emerald-950/80 to-emerald-950/40"></div>

  {/* HALO LUMINEUX */}
  <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[140px]"></div>

  {/* CONTENU */}
  <div className="absolute inset-0 flex items-end">
    <div className="max-w-7xl mx-auto px-6 pb-20 w-full">

      {/* RETOUR */}
      <Link
        to="/evenements"
        className="group inline-flex items-center text-emerald-300 hover:text-white mb-10 transition-all duration-300"
      >
        <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-2" />
        Retour aux événements
      </Link>

      <div className="max-w-4xl">

        {/* BADGE GLASS PREMIUM */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 backdrop-blur-xl rounded-full text-sm font-medium text-emerald-200 mb-8 tracking-wide">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          Section Dakar · Avril 2026
        </div>

        {/* TITRE ULTRA IMPACT */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
          Caravane
          <span className="block bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
            Médicale
          </span>
        </h1>

        {/* DESCRIPTION PREMIUM */}
        <p className="text-lg md:text-2xl text-emerald-100 leading-relaxed max-w-3xl">
          Initiative sanitaire d’envergure apportant soins médicaux,
          dépistage et sensibilisation à la communauté de Mandégane,
          renforçant notre engagement social et humanitaire.
        </p>

      </div>

      {/* LIGNE LUMINEUSE BAS HERO */}
      <div className="mt-16 w-32 h-[3px] bg-gradient-to-r from-emerald-400 to-transparent rounded-full"></div>

    </div>
  </div>
</section>


      <section className="relative py-28 bg-gradient-to-b from-white via-emerald-50/40 to-white overflow-hidden">

  {/* HALO SUBTIL */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[140px] pointer-events-none"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-3 gap-16">

      {/* ================= LEFT CONTENT ================= */}
      <div className="lg:col-span-2">

        <div className="max-w-none">

          {/* TITRE */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-10 leading-tight">
            À Propos de l’
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
              Événement
            </span>
          </h2>

          {/* PARAGRAPHES PREMIUM */}
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              La Caravane Médicale représente l’une des initiatives stratégiques majeures
              de l’AEEOM. Elle incarne notre engagement institutionnel en faveur du
              bien-être et de la santé durable de notre communauté d’origine.
            </p>

            <p>
              Cette mobilisation d’envergure rassemble professionnels de santé,
              étudiants en médecine et partenaires stratégiques afin d’offrir des
              services médicaux structurés, accessibles et de qualité aux habitants
              de Mandégane.
            </p>

            <p>
              Au-delà des consultations, nous déployons des programmes de
              sensibilisation à l’hygiène, à la prévention des maladies et à la
              nutrition, afin de créer un impact durable et mesurable.
            </p>
          </div>

          {/* CARD IMPACT GLASS PREMIUM */}
          <div className="relative mt-14 p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-emerald-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] transition-all duration-500">

            <div className="flex items-start gap-6">

              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                  Impact Communautaire
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  La Caravane Médicale améliore significativement l'accès aux soins
                  dans les zones rurales où les services de santé sont limités.
                  Elle favorise également la détection précoce de pathologies
                  et l’orientation vers des structures spécialisées.
                </p>
              </div>

            </div>
          </div>

          {/* OBJECTIFS */}
          <h3 className="text-3xl font-bold text-emerald-900 mt-20 mb-10">
            Objectifs Stratégiques
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-400"
              >
                <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">
                  {objective}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= RIGHT SIDEBAR ================= */}
      <div className="lg:col-span-1">
        <div className="sticky top-32 space-y-8">

          {/* IMPACT CARD PREMIUM */}
          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.06)]">
            <h3 className="text-2xl font-bold text-emerald-900 mb-8">
              Impact Prévu
            </h3>

            <ul className="space-y-5">
              {impact.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full mt-2"></div>
                  <span className="text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA PARTENAIRE ULTRA PREMIUM */}
          <div className="relative rounded-3xl p-10 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

            {/* Halo interne */}
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-emerald-400/20 rounded-full blur-[120px]"></div>

            <Users className="w-14 h-14 mb-6 text-emerald-300" />

            <h3 className="text-2xl font-bold mb-4">
              Devenez Partenaire
            </h3>

            <p className="text-emerald-100 mb-8 leading-relaxed">
              Soutenez cette initiative stratégique et contribuez activement
              à l’amélioration durable de la santé communautaire.
            </p>

            <Link
              to="/partenaires"
              className="group relative inline-flex items-center justify-center w-full px-8 py-4 font-semibold rounded-2xl overflow-hidden"
            >
              <span className="absolute inset-0 bg-white blur-[6px] opacity-20 group-hover:opacity-30 transition-all duration-500"></span>

              <span className="relative text-emerald-900 bg-white px-6 py-3 rounded-xl font-semibold group-hover:scale-105 transition-all duration-300">
                En Savoir Plus
              </span>
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

export default CaravaneMedicale;
