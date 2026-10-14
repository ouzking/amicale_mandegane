import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/layout/Layout';
import { scrollToTop } from './lib/smooth';

const Home = lazy(() => import('./pages/Home'));
const Organization = lazy(() => import('./pages/Organization'));
const SectionDakar = lazy(() => import('./pages/SectionDakar'));
const SectionZiguinchor = lazy(() => import('./pages/SectionZiguinchor'));
const Events = lazy(() => import('./pages/Events'));
const EventDetail = lazy(() => import('./pages/events/EventDetail'));
const Members = lazy(() => import('./pages/Members'));
const Partners = lazy(() => import('./pages/Partners'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageFallback = () => <div className="min-h-screen bg-ink-950" />;

/** Transition entre pages : rideau qui se lève sur la nouvelle page. */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => scrollToTop(true)}>
      <motion.div key={location.pathname} className="relative">
        <motion.div
          className="pointer-events-none fixed inset-0 z-[80] origin-top bg-ink-950"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0, transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          exit={{ scaleY: 1, originY: 1, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
        />
        <Suspense fallback={<PageFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/organisation" element={<Organization />} />
            <Route path="/organisation/dakar" element={<SectionDakar />} />
            <Route path="/organisation/ziguinchor" element={<SectionZiguinchor />} />
            <Route path="/evenements" element={<Events />} />
            <Route path="/evenements/:slug" element={<EventDetail />} />
            <Route path="/membres" element={<Members />} />
            <Route path="/partenaires" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
