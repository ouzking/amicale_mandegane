import { Link } from 'react-router-dom';
import { Users, MapPin, Target, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';

const MotionDiv = motion.div;

const Organization = () => {
  const sections = [
    {
      name: 'Section Dakar',
      location: 'Dakar, Sénégal',
      description: 'Hub principal de l\'AEEOM regroupant la majorité des étudiants originaires de Mandégane poursuivant leurs études supérieures dans la capitale.',
      members: '150+',
      events: '5+ par an',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/organisation/dakar',
    },
    {
      name: 'Section Ziguinchor',
      location: 'Ziguinchor, Sénégal',
      description: 'Antenne régionale dynamique assurant une forte présence locale et un ancrage communautaire dans la région de Ziguinchor.',
      members: '50+',
      events: '3+ par an',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/organisation/ziguinchor',
    },
  ];

  const governance = [
    {
      title: 'Bureau Exécutif',
      description: 'Pilote la stratégie globale et coordonne les actions de l\'association',
    },
    {
      title: 'Commissions Thématiques',
      description: 'Équipes spécialisées dédiées aux événements, communication, partenariats',
    },
    {
      title: 'Délégations Régionales',
      description: 'Représentants dans les différentes universités et institutions',
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' } }),
  };

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white py-28 md:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Texte Hero */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Notre Organisation <span className="text-emerald-300">AEEOM</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-8 leading-relaxed tracking-wide">
              Une structure institutionnelle solide, portée par l'excellence académique et un impact communautaire fort à Mandégane et au-delà.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-700 shadow-xl text-white font-semibold px-8 py-4 hover:from-emerald-600 hover:to-emerald-800 transition-all">
                    Nous Contacter
                  </Button>
                </Link>
              </MotionDiv>
              <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/membres">
                  <Button size="lg" variant="outline" className="border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-emerald-900 shadow-lg transition-all">
                    Voir nos Membres
                  </Button>
                </Link>
              </MotionDiv>
            </div>
          </MotionDiv>

          {/* Image Hero */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Étudiants AEEOM"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
          </MotionDiv>
        </div>
      </section>

      {/* À PROPOS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeader
              title="À Propos de l'AEEOM"
              subtitle="L'Amicale des Élèves et Étudiants Originaires de Mandégane est une organisation estudiantine d'élite fondée sur l'excellence, la solidarité et l'impact communautaire."
              centered
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { Icon: Target, title: 'Notre Vision', text: 'Être la référence nationale en matière d\'organisation estudiantine, alliant excellence académique et engagement communautaire exemplaire.' },
              { Icon: Users, title: 'Notre Mission', text: 'Promouvoir la réussite scolaire, créer un réseau d\'entraide solide et contribuer activement au développement de Mandégane.' },
              { Icon: Award, title: 'Nos Valeurs', text: 'Excellence, solidarité, intégrité, leadership et engagement envers notre communauté d\'origine.' },
            ].map((item, i) => (
              <MotionDiv key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-emerald-900 rounded-xl flex items-center justify-center mb-6">
                  <item.Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">{item.text}</p>
              </MotionDiv>
            ))}
          </div>

          {/* Gouvernance */}
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Gouvernance Institutionnelle</h3>
            <p className="text-emerald-100 mb-8 leading-relaxed text-lg">
              L'AEEOM est structurée autour d'une gouvernance claire et efficace, garantissant la transparence, la responsabilité et l'atteinte de nos objectifs stratégiques.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {governance.map((item, index) => (
                <div key={index} className="bg-emerald-800 bg-opacity-50 rounded-2xl p-6 backdrop-blur-sm shadow-inner hover:shadow-xl transition-all duration-300">
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-emerald-100 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeader
              title="Nos Sections"
              centered
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {sections.map((section, index) => (
              <MotionDiv
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-72 md:h-80">
                  <img src={section.image} alt={section.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{section.name}</h3>
                    <div className="flex items-center text-emerald-100 text-sm">
                      <MapPin className="w-4 h-4 mr-1" /> {section.location}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">{section.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-emerald-50 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all">
                      <div className="text-2xl font-bold text-emerald-900">{section.members}</div>
                      <div className="text-sm text-gray-600 mt-1">Membres</div>
                    </div>
                    <div className="bg-emerald-50 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all">
                      <div className="text-2xl font-bold text-emerald-900">{section.events}</div>
                      <div className="text-sm text-gray-600 mt-1">Événements</div>
                    </div>
                  </div>
                  <Link to={section.link}>
                    <Button variant="outline" icon={ArrowRight} className="w-full font-semibold">
                      Découvrir la Section
                    </Button>
                  </Link>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Organization;
