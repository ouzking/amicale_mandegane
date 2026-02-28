import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Users, CheckCircle } from 'lucide-react';
import Button from '../../components/common/Button';

const ConferenceReligieuse = () => {
  const objectives = [
    'Renforcer les valeurs morales et spirituelles de la communauté',
    'Inviter des guides religieux reconnus pour partager leur sagesse',
    'Créer un espace de dialogue et de réflexion spirituelle',
    'Promouvoir la cohésion sociale à travers les enseignements religieux',
    'Guider la jeunesse dans leur parcours spirituel et moral',
  ];

  const impact = [
    'Plus de 300 participants attendus',
    'Guidance spirituelle collective',
    'Renforcement des liens communautaires',
    'Distribution de supports religieux',
  ];

  return (
    <div className="bg-white">
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden group">

  {/* Background Image */}
  <img
    src="https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1600"
    alt="Conférence Religieuse"
    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[4000ms] ease-out"
  />

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-950/80 to-black/70"></div>

  {/* Subtle Radial Light */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.15),transparent_60%)]"></div>

  {/* Grain Texture */}
  <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

  {/* Content */}
  <div className="absolute inset-0 flex items-end">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">

      {/* Back Link */}
      <Link
        to="/evenements"
        className="inline-flex items-center text-emerald-300 hover:text-white mb-8 transition-all duration-300 group/link"
      >
        <ArrowLeft className="w-5 h-5 mr-3 group-hover/link:-translate-x-1 transition-transform duration-300" />
        <span className="tracking-wide">Retour aux événements</span>
      </Link>

      <div className="max-w-4xl">

        {/* Premium Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 
                        bg-white/10 backdrop-blur-xl 
                        border border-white/20
                        rounded-full text-sm font-semibold text-white 
                        shadow-lg shadow-emerald-900/20 mb-6
                        hover:bg-white/20 transition-all duration-300">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          Section Dakar · Mars 2026
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white via-emerald-200 to-emerald-400 
                           bg-clip-text text-transparent">
            Conférence Religieuse
          </span>
        </h1>

        {/* Decorative Line */}
        <div className="w-24 h-[3px] bg-gradient-to-r from-emerald-400 to-transparent mb-8"></div>

        {/* Description */}
        <p className="text-lg md:text-2xl text-emerald-100/90 leading-relaxed max-w-3xl font-light">
          Un moment d’élévation spirituelle, de transmission du savoir et de 
          renforcement des valeurs morales, réunissant érudits, leaders communautaires 
          et fidèles dans un cadre d’excellence et de sérénité.
        </p>

      </div>
    </div>
  </div>

</section>

    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-emerald-50/40 to-white overflow-hidden">

  {/* Decorative Background Glow */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-200/20 rounded-full blur-[120px]" />
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[120px]" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

    <div className="grid lg:grid-cols-3 gap-16">

      {/* LEFT CONTENT */}
      <div className="lg:col-span-2">

        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-950 leading-tight mb-6">
            À Propos de l’Événement
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-emerald-600 to-transparent"></div>
        </div>

        {/* Text Content */}
        <div className="space-y-8 text-gray-700 text-base sm:text-lg leading-relaxed">

          <p>
            La Conférence Religieuse de l'AEEOM constitue un rendez-vous spirituel 
            d’envergure réunissant notre communauté autour des principes fondamentaux 
            de foi, d’éthique et de responsabilité morale. Des guides religieux 
            éminents y partagent leur sagesse afin d’apporter une guidance éclairée 
            à la jeunesse et à l’ensemble de la communauté de Mandégane.
          </p>

          <p>
            Dans un monde en constante mutation, cet espace d’échange et de réflexion 
            favorise l’ancrage spirituel, la consolidation des valeurs d’intégrité, 
            de respect et de solidarité, tout en offrant aux jeunes des repères 
            solides pour leur avenir académique et professionnel.
          </p>

        </div>

        {/* Premium Highlight Card */}
        <div className="mt-14 relative group">

          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-emerald-400/10 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative bg-white/80 backdrop-blur-xl border border-emerald-100 rounded-3xl p-8 sm:p-10 shadow-xl">

            <div className="flex flex-col sm:flex-row sm:items-start gap-6">

              <div className="w-14 h-14 bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-7 h-7 text-white" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-950 mb-4">
                  Impact Spirituel Durable
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Un impact profond et structurant renforçant la cohésion communautaire 
                  et offrant aux jeunes des repères moraux solides pour évoluer avec 
                  confiance, équilibre et responsabilité.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className="mt-16">

          <h3 className="text-2xl sm:text-3xl font-bold text-emerald-950 mb-8">
            Objectifs Stratégiques
          </h3>

          <ul className="grid sm:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <li
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition duration-300"
              >
                <CheckCircle className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {objective}
                </span>
              </li>
            ))}
          </ul>

        </div>

      </div>

      {/* RIGHT SIDEBAR */}
      <div className="lg:col-span-1">

        <div className="lg:sticky lg:top-32 space-y-8">

          {/* Impact Card */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-lg">

            <h3 className="text-xl font-bold text-emerald-950 mb-6">
              Impact Prévu
            </h3>

            <ul className="space-y-4">
              {impact.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>

          {/* CTA Premium */}
          <div className="relative group">

            <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-3xl p-8 sm:p-10 text-white shadow-2xl">

              <Users className="w-12 h-12 mb-6 text-emerald-800" />

              <h3 className="text-2xl font-bold mb-4">
                Participer à la Conférence
              </h3>

              <p className="text-emerald-100 text-sm sm:text-base mb-8 leading-relaxed">
                Rejoignez un moment d’élévation spirituelle et contribuez à 
                renforcer les valeurs morales et religieuses de notre communauté.
              </p>

              <Link to="/contact">
                <Button className="w-full  text-emerald-900 hover:bg-gray-100 transition duration-300 font-semibold py-3 rounded-xl shadow-md">
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

export default ConferenceReligieuse;
