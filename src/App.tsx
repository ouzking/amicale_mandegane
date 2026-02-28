import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Organization from './pages/Organization';
import SectionDakar from './pages/SectionDakar';
import SectionZiguinchor from './pages/SectionZiguinchor';
import Events from './pages/Events';
import CaravaneMedicale from './pages/events/CaravaneMedicale';
import ConferenceReligieuse from './pages/events/ConferenceReligieuse';
import DinerGala from './pages/events/DinerGala';
import Masterclass from './pages/events/Masterclass';
import JourneeIntegration from './pages/events/JourneeIntegration';
import Xaware from './pages/events/Xaware';
import Members from './pages/Members';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/organisation" element={<Organization />} />
          <Route path="/organisation/dakar" element={<SectionDakar />} />
          <Route path="/organisation/ziguinchor" element={<SectionZiguinchor />} />
          <Route path="/evenements" element={<Events />} />
          <Route path="/evenements/caravane-medicale" element={<CaravaneMedicale />} />
          <Route path="/evenements/conference-religieuse" element={<ConferenceReligieuse />} />
          <Route path="/evenements/diner-de-gala" element={<DinerGala />} />
          <Route path="/evenements/masterclass" element={<Masterclass />} />
          <Route path="/evenements/journee-integration" element={<JourneeIntegration />} />
          <Route path="/evenements/xaware" element={<Xaware />} />
          <Route path="/membres" element={<Members />} />
          <Route path="/partenaires" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
