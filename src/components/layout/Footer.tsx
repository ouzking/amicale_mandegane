import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white overflow-hidden">

      {/* Light Atmosphere */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24"
      >

        {/* SIGNATURE FONDATION */}
        <motion.div variants={item} className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Une communauté engagée pour l’excellence et l’impact durable
          </h2>
          <p className="text-emerald-200 leading-relaxed">
            L’AEEOM s’inscrit dans une dynamique institutionnelle ambitieuse,
            visant à connecter les talents, renforcer le leadership
            et promouvoir le développement socio-éducatif de Mandégane
            à l’échelle nationale et internationale.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* BRAND */}
          <motion.div variants={item}>
            <Link to="/" className="flex items-center space-x-4 mb-6 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                <GraduationCap className="w-8 h-8 text-emerald-900" />
              </div>
              <div>
                <div className="text-2xl font-bold tracking-wide">AEEOM</div>
                <div className="text-xs text-emerald-300 uppercase tracking-[0.3em]">
                  Mandégane
                </div>
              </div>
            </Link>

            <p className="text-emerald-200 text-sm leading-relaxed">
              Amicale des Élèves et Étudiants Originaires de Mandégane.
              Une institution engagée pour la transmission du savoir,
              la solidarité et la transformation sociale.
            </p>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              Institution
            </h3>
            <ul className="space-y-4 text-sm">
              {[
                { name: 'Organisation', path: '/organisation' },
                { name: 'Événements', path: '/evenements' },
                { name: 'Membres', path: '/membres' },
                { name: 'Partenaires', path: '/partenaires' },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="flex justify-between items-center text-emerald-200 hover:text-white transition-all group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              Contact Officiel
            </h3>

            <div className="space-y-5 text-sm text-emerald-200">
              <div className="flex gap-3">
                <Phone className="w-4 h-4 mt-1 text-emerald-300" />
                <div>
                  <div>+221 77 179 09 61</div>
                  <div>+221 77 437 85 58</div>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="w-4 h-4 mt-1 text-emerald-300" />
                <a
                  href="mailto:aeeomsectiondakar@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  aeeomsectiondakar@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* SOCIAL + CTA */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">
              Réseau & Engagement
            </h3>

            <div className="flex gap-4 mb-8">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-emerald-900 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full px-6 py-4 bg-white text-emerald-900 font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Rejoindre l’Institution
            </Link>
          </motion.div>
        </motion.div>

        {/* BOTTOM BAR */}
        <motion.div
          variants={item}
          className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-emerald-300"
        >
          <p>
            © {currentYear} AEEOM – Institution Académique & Communautaire.
          </p>

          <div className="flex gap-6">
            <span>Excellence</span>
            <span>Leadership</span>
            <span>Impact</span>
            <span>Transmission</span>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default Footer;
