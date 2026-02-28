import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Users, CheckCircle } from 'lucide-react';
import Button from '../../components/common/Button';

const DinerGala = () => {
  const objectives = [
    'Célébrer les réussites académiques et professionnelles de nos membres',
    'Créer un espace de networking premium entre membres et partenaires',
    'Renforcer les liens institutionnels avec nos sponsors stratégiques',
    'Lever des fonds pour financer nos initiatives communautaires',
    'Valoriser l\'image et la crédibilité de l\'AEEOM',
  ];

  const impact = [
    '200+ invités de prestige',
    'Networking de haut niveau',
    'Levée de fonds significative',
    'Renforcement des partenariats',
  ];

  return (
    <div className="bg-white">
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden group">

  {/* Background Image with slow cinematic zoom */}
  <img
    src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=1600"
    alt="Dîner de Gala"
    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[5000ms] ease-out"
  />

  {/* Luxury Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-black via-emerald-950/85 to-emerald-900/80"></div>

  {/* Soft Golden Glow Accent */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.15),transparent_60%)]"></div>

  {/* Subtle Noise Texture */}
  <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

  {/* Content */}
  <div className="absolute inset-0 flex items-end">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">

      {/* Back Button */}
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

          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
          Section Dakar · Juin 2026
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                       font-extrabold leading-tight mb-6 tracking-tight">

          <span className="bg-gradient-to-r 
                           from-white via-amber-200 to-amber-400 
                           bg-clip-text text-transparent">
            Dîner de Gala
          </span>

        </h1>

        {/* Decorative Line */}
        <div className="w-24 sm:w-32 h-[3px] 
                        bg-gradient-to-r from-amber-400 to-transparent 
                        mb-8"></div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl 
                      text-emerald-100/90 
                      leading-relaxed 
                      max-w-3xl font-light">

          Une soirée d’exception réunissant leaders, partenaires et membres 
          distingués dans un cadre raffiné, célébrant l’excellence, 
          la reconnaissance institutionnelle et le networking stratégique 
          de haut niveau.

        </p>

      </div>
    </div>
  </div>

</section>


      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-amber-50/30 to-white overflow-hidden">

  {/* Decorative Luxury Glow */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-amber-300/20 rounded-full blur-[120px]" />
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[120px]" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

    <div className="grid lg:grid-cols-3 gap-16">

      {/* LEFT CONTENT */}
      <div className="lg:col-span-2">

        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-950 leading-tight mb-6">
            À Propos de l’Événement
          </h2>
          <div className="w-28 h-[3px] bg-gradient-to-r from-amber-400 to-transparent"></div>
        </div>

        {/* Text Content */}
        <div className="space-y-8 text-gray-700 text-base sm:text-lg leading-relaxed">

          <p>
            Le Dîner de Gala de l'AEEOM constitue le sommet de notre calendrier annuel. 
            Cette soirée d’exception réunit membres, partenaires stratégiques, sponsors 
            et décideurs dans un environnement élégant et hautement institutionnel. 
            Elle célèbre l’excellence académique, la réussite collective et la vision 
            ambitieuse portée par notre organisation.
          </p>

          <p>
            Véritable plateforme de networking premium, le Gala favorise les connexions 
            stratégiques, renforce les alliances institutionnelles et génère des 
            ressources essentielles au financement de nos projets communautaires. 
            C’est également un moment clé pour valoriser l’impact de nos actions et 
            projeter notre ambition à l’échelle nationale et internationale.
          </p>

        </div>

        {/* Premium Institutional Card */}
        <div className="mt-16 relative group">

          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-emerald-400/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-xl">

            <div className="flex flex-col sm:flex-row gap-6">

              <div className="w-14 h-14 bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-950 mb-4">
                  Impact Institutionnel
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Le Gala consolide la crédibilité et la visibilité de l’AEEOM auprès 
                  des institutions, entreprises et décideurs. Il positionne notre 
                  organisation comme un acteur stratégique majeur de l’écosystème 
                  estudiantin et associatif national.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className="mt-20">

          <h3 className="text-2xl sm:text-3xl font-bold text-emerald-950 mb-10">
            Objectifs Stratégiques
          </h3>

          <ul className="grid sm:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <li
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
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
                  <div className="w-2.5 h-2.5 bg-amber-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>

          {/* Sponsor CTA Premium */}
          <div className="relative group">

            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-emerald-800 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-3xl p-8 sm:p-10 text-white shadow-2xl">

              <Users className="w-12 h-12 mb-6 text-amber-300" />

              <h3 className="text-2xl font-bold mb-4">
                Devenir Sponsor Officiel
              </h3>

              <p className="text-emerald-100 text-sm sm:text-base mb-8 leading-relaxed">
                Associez votre marque à un événement d’exception et bénéficiez 
                d’une visibilité stratégique auprès d’un réseau institutionnel 
                influent et qualifié.
              </p>

              <Link to="/partenaires">
                <Button className="w-full text-emerald-900 hover:bg-gray-100 font-semibold py-3 rounded-xl shadow-md transition duration-300">
                  En Savoir Plus
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

export default DinerGala;
