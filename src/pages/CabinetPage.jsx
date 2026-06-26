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
        description="Cabinet records are data-driven and ready for official names, portraits, roles, and regional details."
      />
      <CabinetSection />
    </>
  );
}
