import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Users, CheckCircle } from 'lucide-react';
import Button from '../../components/common/Button';

const Masterclass = () => {
  const objectives = [
    'Offrir des formations de haut niveau avec des experts reconnus',
    'Développer les compétences professionnelles de nos membres',
    'Faciliter l\'insertion professionnelle par le transfert de connaissances',
    'Créer des opportunités de mentorat avec des professionnels établis',
    'Renforcer l\'employabilité de nos membres',
  ];

  const impact = [
    '150+ étudiants formés',
    'Experts et professionnels de renom',
    'Sessions pratiques et interactives',
    'Certificats de participation',
  ];

  return (
    <div className="bg-white">
     <section className="relative h-[85vh] min-h-[600px] overflow-hidden group">

  {/* Background Image - cinematic slow zoom */}
  <img
    src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1600"
    alt="Masterclass"
    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[5000ms] ease-out"
  />

  {/* Deep Professional Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/85 to-emerald-900/80"></div>

  {/* Accent Academic Light */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.15),transparent_60%)]"></div>

  {/* Subtle Noise Texture */}
  <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

  {/* Content */}
  <div className="absolute inset-0 flex items-end">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">

      {/* Back Link */}
      <Link
        to="/evenements"
        className="inline-flex items-center text-emerald-300 hover:text-white mb-8 transition-all duration-300 group/link"
      >
        <ArrowLeft className="w-5 h-5 mr-3 group-hover/link:-translate-x-1 transition-transform duration-300" />
        <span className="tracking-wide text-sm sm:text-base">
          Retour aux événements
        </span>
      </Link>

      <div className="max-w-4xl">

        {/* Premium Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 
                        bg-white/10 backdrop-blur-xl 
                        border border-white/20
                        rounded-full text-xs sm:text-sm font-semibold text-white 
                        shadow-lg mb-6
                        hover:bg-white/20 transition duration-300">

          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          Section Dakar · Mai 2026
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                       font-extrabold leading-tight mb-6 tracking-tight">

          <span className="bg-gradient-to-r 
                           from-white via-emerald-200 to-emerald-400 
                           bg-clip-text text-transparent">
            Masterclass
          </span>

        </h1>

        {/* Decorative Professional Line */}
        <div className="w-28 sm:w-36 h-[3px] 
                        bg-gradient-to-r from-emerald-400 to-transparent 
                        mb-8"></div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl 
                      text-emerald-100/90 
                      leading-relaxed 
                      max-w-3xl font-light">

          Des sessions de formation intensive animées par des experts 
          et professionnels de renom, conçues pour transmettre 
          des compétences stratégiques, renforcer le leadership 
          et accélérer l’excellence académique et professionnelle.

        </p>

      </div>
    </div>
  </div>

</section>


    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden">

  {/* Subtle Professional Glow */}
  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-emerald-200/20 rounded-full blur-[120px]" />
  <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-slate-300/20 rounded-full blur-[120px]" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

    <div className="grid lg:grid-cols-3 gap-16">

      {/* LEFT CONTENT */}
      <div className="lg:col-span-2">

        {/* Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 leading-tight mb-6">
            À Propos de la Masterclass
          </h2>
          <div className="w-32 h-[3px] bg-gradient-to-r from-emerald-600 to-transparent"></div>
        </div>

        {/* Main Text */}
        <div className="space-y-8 text-gray-700 text-base sm:text-lg leading-relaxed">

          <p>
            Les Masterclass de l'AEEOM sont des expériences de formation 
            stratégique conçues pour connecter savoir académique et exigences 
            professionnelles. Animées par des experts reconnus, elles offrent 
            un transfert de compétences direct, pragmatique et orienté résultats.
          </p>

          <p>
            Chaque session explore des thématiques clés telles que 
            l’entrepreneuriat, le leadership, les technologies émergentes, 
            la finance et la communication stratégique. Les formats interactifs 
            incluent études de cas, ateliers pratiques et échanges personnalisés 
            afin de garantir un apprentissage immersif et impactant.
          </p>

        </div>

        {/* Premium Impact Card */}
        <div className="mt-16 relative group">

          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-slate-600/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-xl">

            <div className="flex flex-col sm:flex-row gap-6">

              <div className="w-14 h-14 bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-4">
                  Impact sur l’Employabilité
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Les Masterclass renforcent significativement la valeur 
                  professionnelle de nos membres en développant des compétences 
                  immédiatement applicables et recherchées par les employeurs. 
                  Elles créent également un accès direct à un réseau stratégique 
                  de recruteurs et de décideurs.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className="mt-20">

          <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-10">
            Objectifs Stratégiques
          </h3>

          <ul className="grid sm:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <li
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
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

            <h3 className="text-xl font-bold text-slate-950 mb-6">
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

          {/* CTA Executive */}
          <div className="relative group">

            <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-slate-900 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative bg-gradient-to-br from-slate-900 to-emerald-800 rounded-3xl p-8 sm:p-10 text-white shadow-2xl">

              <Users className="w-12 h-12 mb-6 text-emerald-300" />

              <h3 className="text-2xl font-bold mb-4">
                S’inscrire à la Masterclass
              </h3>

              <p className="text-emerald-100 text-sm sm:text-base mb-8 leading-relaxed">
                Réservez votre place pour une expérience de formation 
                intensive et stratégique destinée à accélérer votre 
                développement professionnel.
              </p>

              <Link to="/contact">
                <Button className="w-full bg-white text-slate-900 hover:bg-gray-100 font-semibold py-3 rounded-xl shadow-md transition duration-300">
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

export default Masterclass;
