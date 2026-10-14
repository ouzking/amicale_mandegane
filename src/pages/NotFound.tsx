import PageHero from '../components/ui/PageHero';
import LuxButton from '../components/ui/LuxButton';

const NotFound = () => (
  <PageHero
    tall
    eyebrow="Erreur 404"
    lines={['Page', <span className="text-gold-gradient">introuvable.</span>]}
    intro="La page que vous recherchez n’existe pas ou a été déplacée. Poursuivez votre visite depuis l’accueil."
  >
    <div className="flex flex-wrap gap-4">
      <LuxButton to="/">Retour à l’accueil</LuxButton>
      <LuxButton to="/evenements" variant="outline-light">
        Nos événements
      </LuxButton>
    </div>
  </PageHero>
);

export default NotFound;
