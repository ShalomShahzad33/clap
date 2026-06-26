import Seo from '../components/common/Seo.jsx';
import AboutPreview from '../components/sections/AboutPreview.jsx';
import CallToActionSection from '../components/sections/CallToActionSection.jsx';
import HomeHero from '../components/sections/HomeHero.jsx';
import MissionSection from '../components/sections/MissionSection.jsx';
import ObjectivesOverview from '../components/sections/ObjectivesOverview.jsx';
import PresidentMessageSection from '../components/sections/PresidentMessageSection.jsx';
import VisionSection from '../components/sections/VisionSection.jsx';
import { pageSeo } from '../data/seo.js';

export default function HomePage() {
  return (
    <>
      <Seo {...pageSeo.home} />
      <HomeHero />
      <AboutPreview />
      <MissionSection />
      <VisionSection />
      <ObjectivesOverview />
      <PresidentMessageSection />
      <CallToActionSection />
    </>
  );
}
