import PageHero from '../components/ui/PageHero';
import LuxButton from '../components/ui/LuxButton';
import { useT } from '../i18n/context';

const NotFound = () => {
  const t = useT();
  return (
  <PageHero
    tall
    eyebrow={t({ fr: 'Erreur 404', en: 'Error 404', wo: 'Njuumte 404' })}
    lines={[
      t({ fr: 'Page', en: 'Page', wo: 'Xët wi' }),
      <span className="text-gold-gradient">{t({ fr: 'introuvable.', en: 'not found.', wo: 'gisuñu ko.' })}</span>,
    ]}
    intro={t({
      fr: 'La page que vous recherchez n’existe pas ou a été déplacée. Poursuivez votre visite depuis l’accueil.',
      en: 'The page you are looking for does not exist or has been moved. Continue your visit from the home page.',
      wo: 'Xët wi ngay seet amul walla dañu ko toxal. Dellul ci kër gi ngir wéy sa tukki.',
    })}
  >
    <div className="flex flex-wrap gap-4">
      <LuxButton to="/">{t({ fr: 'Retour à l’accueil', en: 'Back to home', wo: 'Dellu ci kër gi' })}</LuxButton>
      <LuxButton to="/evenements" variant="outline-light">
        {t({ fr: 'Nos événements', en: 'Our events', wo: 'Sunuy xew-xew' })}
      </LuxButton>
    </div>
  </PageHero>
  );
};

export default NotFound;
