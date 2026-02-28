import { useState } from 'react';
import { Handshake, Building2, Award, CheckCircle, ArrowRight, Users } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import type { PartnershipRequest } from '../types';

const Partners = () => {
  const [formData, setFormData] = useState<PartnershipRequest>({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const partners = [
    {
      name: 'Partenaire 1',
      logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'strategic' as const,
    },
    {
      name: 'Partenaire 2',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'sponsor' as const,
    },
    {
      name: 'Partenaire 3',
      logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'institutional' as const,
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Visibilité Accrue',
      description: 'Exposition de votre marque auprès d\'une communauté d\'étudiants d\'élite',
    },
    {
      icon: Users,
      title: 'Accès aux Talents',
      description: 'Recrutement privilégié parmi nos membres qualifiés et ambitieux',
    },
    {
      icon: Handshake,
      title: 'Impact Social',
      description: 'Contribution directe au développement communautaire de Mandégane',
    },
    {
      icon: Building2,
      title: 'RSE & Engagement',
      description: 'Renforcement de votre responsabilité sociétale d\'entreprise',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitSuccess(true);
    setIsSubmitting(false);

    setFormData({
      organizationName: '',
      contactPerson: '',
      email: '',
      phone: '',
      partnershipType: '',
      message: '',
    });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
     <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white py-32 relative overflow-hidden">
  {/* Halo lumineux animé à gauche */}
  <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px] animate-pulse mix-blend-overlay"></div>
  {/* Halo lumineux animé à droite */}
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-emerald-400/30 rounded-full blur-[130px] animate-pulse mix-blend-overlay"></div>
  {/* Particules animées subtiles */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className={`absolute w-2 h-2 bg-white/30 rounded-full animate-[float_6s_ease-in-out_infinite]`}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      ></div>
    ))}
  </div>

  <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight drop-shadow-lg animate-fadeInUp">
      Nos Partenaires
    </h1>
    <p className="mt-6 text-lg sm:text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-200">
      Ensemble pour l'excellence académique et le développement communautaire
    </p>

    <div className="mt-12 flex justify-center gap-4 flex-wrap animate-fadeInUp delay-400">
      <span className="px-4 py-2 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition-transform duration-300 cursor-default">
        Stratégique
      </span>
      <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition-transform duration-300 cursor-default">
        Sponsor
      </span>
      <span className="px-4 py-2 bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition-transform duration-300 cursor-default">
        Institutionnel
      </span>
    </div>
  </div>

  {/* Animations CSS */}
  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
      50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
    }

    .animate-fadeInUp {
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 1s forwards;
    }

    .animate-fadeInUp.delay-200 {
      animation-delay: 0.2s;
    }

    .animate-fadeInUp.delay-400 {
      animation-delay: 0.4s;
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</section>


      {/* Partners Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden">
  {/* Particules animées premium */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-white/20 rounded-full animate-[float_6s_ease-in-out_infinite]"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      />
    ))}
  </div>

  <div className="text-center mb-16 relative z-10">
    <SectionHeader
      title="Ils Nous Font Confiance"
      centered
    />
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
    {partners.map((partner, i) => (
      <div
        key={i}
        className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_35px_60px_rgba(0,128,0,0.35)] transition-all duration-500 hover:-translate-y-3"
      >
        {/* Halo lumineux animé derrière la carte */}
        <div className="absolute -inset-3 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-3xl blur-3xl opacity-30 pointer-events-none animate-pulse"></div>

        <div className="relative p-6 flex flex-col items-center">
          {/* Logo / Image */}
          <div className="aspect-video w-full max-h-40 overflow-hidden rounded-xl mb-6 transition-transform duration-1000 hover:scale-105">
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nom du partenaire */}
          <h3 className="text-lg md:text-xl font-bold text-emerald-900 text-center mb-2 transition-transform duration-500 group-hover:scale-105">
            {partner.name}
          </h3>

          {/* Badge premium */}
          <span className="inline-block mt-2 px-4 py-1 text-sm font-semibold bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 text-white rounded-full shadow-lg transition-all duration-500 hover:scale-105">
            {partner.category.charAt(0).toUpperCase() + partner.category.slice(1)}
          </span>
        </div>
      </div>
    ))}
  </div>

  {/* Animations CSS */}
  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
      50% { transform: translateY(-15px) translateX(8px); opacity: 0.6; }
    }
  `}</style>
</section>


      {/* Benefits */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-4">
              Pourquoi Devenir Partenaire ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un partenariat avec l'AEEOM vous offre des opportunités uniques de collaboration et d'impact
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-emerald-900" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
     <section className="py-20 bg-gray-50">
  <div className="max-w-3xl mx-auto px-6">
    <div className="text-center mb-12">
      <SectionHeader
        title="Demande de Partenariat"
        subtitle="Rejoignez notre écosystème de partenaires stratégiques"
        centered
      />
    </div>

    {submitSuccess && (
      <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start space-x-3">
        <CheckCircle className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-emerald-900 mb-1">Demande envoyée avec succès !</h4>
          <p className="text-sm text-emerald-700">
            Nous vous contacterons dans les plus brefs délais pour discuter des modalités de partenariat.
          </p>
        </div>
      </div>
    )}

    <form
      onSubmit={handleSubmit}
      className="relative bg-white rounded-3xl border border-gray-200 p-8 space-y-6 shadow-2xl hover:shadow-[0_30px_50px_rgba(0,128,0,0.2)] transition-all duration-500"
    >
      {/* Halo lumineux derrière le formulaire */}
      <div className="absolute -inset-2 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl blur-3xl opacity-20 pointer-events-none"></div>

      <div className="grid sm:grid-cols-2 gap-6 relative z-10">
        <div>
          <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-2">
            Nom de l'Organisation *
          </label>
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
            Personne de Contact *
          </label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 relative z-10">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="relative z-10">
        <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-2">
          Type de Partenariat *
        </label>
        <select
          id="partnershipType"
          name="partnershipType"
          value={formData.partnershipType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        >
          <option value="">Sélectionnez un type</option>
          <option value="strategic">Partenariat Stratégique</option>
          <option value="sponsor">Sponsoring</option>
          <option value="institutional">Collaboration Institutionnelle</option>
        </select>
      </div>

      <div className="relative z-10">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
          placeholder="Décrivez votre projet de partenariat..."
        />
      </div>

      {/* Boutons d'action */}
      <div className="flex flex-col sm:flex-row gap-4 relative z-10">
        {/* Bouton WhatsApp */}
        <button
          type="button"
          onClick={() => {
            const whatsappNumber = '221784785795';
            const whatsappMessage = `
Nom de l'Organisation: ${formData.organizationName}
Personne de Contact: ${formData.contactPerson}
Email: ${formData.email}
Téléphone: ${formData.phone}
Type de Partenariat: ${formData.partnershipType}
Message: ${formData.message}
            `.trim();
            const encodedMessage = encodeURIComponent(whatsappMessage);
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
            setSubmitSuccess(true);

            // Réinitialisation
            setFormData({
              organizationName: '',
              contactPerson: '',
              email: '',
              phone: '',
              partnershipType: '',
              message: '',
            });

            setTimeout(() => setSubmitSuccess(false), 5000);
          }}
          className="flex-1 py-3 px-6 bg-gradient-to-r from-emerald-900 to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:scale-[1.05] hover:shadow-2xl transition-all duration-300 text-center"
        >
          Envoyer via WhatsApp
        </button>

        {/* Bouton Email classique */}
        <Button
          type="submit"
          size="lg"
          className="flex-1"
          disabled={isSubmitting}
          icon={isSubmitting ? undefined : ArrowRight}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer par Email'}
        </Button>
      </div>
    </form>
  </div>
</section>

    </div>
  );
};

export default Partners;
