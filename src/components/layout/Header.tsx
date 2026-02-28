import { useState } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/LOGO.jpeg';

// Motion Link pour animation
const MotionLink = motion(RouterLink);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Accueil', path: '/' },
    {
      name: 'Organisation',
      path: '/organisation',
      submenu: [
        { name: 'Section Dakar', path: '/organisation/dakar' },
        { name: 'Section Ziguinchor', path: '/organisation/ziguinchor' },
      ],
    },
    {
      name: 'Événements',
      path: '/evenements',
      submenu: [
        { name: 'Caravane Médicale', path: '/evenements/caravane-medicale' },
        { name: 'Conférence Religieuse', path: '/evenements/conference-religieuse' },
        { name: 'Dîner de Gala', path: '/evenements/diner-de-gala' },
        { name: 'Masterclass', path: '/evenements/masterclass' },
        { name: "Journée d'Intégration", path: '/evenements/journee-integration' },
        { name: 'Xawaré', path: '/evenements/xaware' },
      ],
    },
    { name: 'Membres', path: '/membres' },
    { name: 'Partenaires', path: '/partenaires' },
    { name: 'Contact', path: '/contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.25, ease: 'easeIn' } },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-emerald-50 to-emerald-100 shadow-lg border-b border-gray-200 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 relative">
          {/* Logo */}
          <MotionLink
            to="/"
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-xl 
                            bg-white flex items-center justify-center
                            transition-all duration-300
                            group-hover:shadow-2xl group-hover:scale-105">
              <img src={logo} alt="Logo AEEOM" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-all duration-300 rounded-xl"></div>
              {/* Halo lumineux subtil */}
              <div className="absolute -inset-2 bg-gradient-to-br from-emerald-400 to-emerald-600 blur-3xl opacity-20 pointer-events-none"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl md:text-2xl font-extrabold text-emerald-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                AEEOM
              </div>
              <div className="text-xs md:text-sm text-gray-600 -mt-1 tracking-wide uppercase">
                Mandégane
              </div>
            </div>
          </MotionLink>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <MotionLink
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all ${
                    isActive(item.path)
                      ? 'text-emerald-900 bg-emerald-50'
                      : 'text-gray-700 hover:text-emerald-900 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                >
                  {item.name}
                </MotionLink>
                {item.submenu && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {item.submenu.map((subitem) => (
                      <MotionLink
                        key={subitem.path}
                        to={subitem.path}
                        className="block px-4 py-2 text-sm md:text-base text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
                        whileHover={{ scale: 1.03 }}
                      >
                        {subitem.name}
                      </MotionLink>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-gray-100 bg-white shadow-lg rounded-b-xl mt-1"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navigation.map((item) => (
                <div key={item.name}>
                  <MotionLink
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                      isActive(item.path) ? 'text-emerald-900 bg-emerald-50' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </MotionLink>
                  {item.submenu && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((subitem) => (
                        <MotionLink
                          key={subitem.path}
                          to={subitem.path}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-emerald-900 hover:bg-emerald-50 rounded-lg transition-all"
                          onClick={() => setIsMenuOpen(false)}
                          whileTap={{ scale: 0.95 }}
                        >
                          {subitem.name}
                        </MotionLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
