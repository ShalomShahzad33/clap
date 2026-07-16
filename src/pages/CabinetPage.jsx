import PageHero from '../components/common/PageHero.jsx';
import Seo from '../components/common/Seo.jsx';
import CabinetSection from '../components/sections/CabinetSection.jsx';
import { pageSeo } from '../data/seo.js';

export default function CabinetPage() {
  return (
    <>
      <Seo {...pageSeo.cabinet} />
      <PageHero
        eyebrow="Our Cabinet"
        title="Leadership serving CLAP across Pakistan."
        description="Meet the CLAP cabinet and executive members serving across Pakistan."
      />
      <CabinetSection />
    </>
  );
}
