import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Seo from '../components/common/Seo.jsx';
import MissionSection from '../components/sections/MissionSection.jsx';
import ObjectivesOverview from '../components/sections/ObjectivesOverview.jsx';
import VisionSection from '../components/sections/VisionSection.jsx';
import { aboutOverview } from '../data/about.js';
import { pageSeo } from '../data/seo.js';

export default function AboutPage() {
  return (
    <>
      <Seo {...pageSeo.about} />
      <PageHero
        eyebrow="About"
        title="Christian legal professionals working for justice."
        description="CLAP is built for legal advocacy, civic service, professional fellowship, and responsible engagement with public institutions."
      />
      <section className="py-20">
        <Container className="grid gap-5 lg:grid-cols-2">
          {aboutOverview.map((paragraph) => (
            <p key={paragraph} className="rounded-lg border border-clap-border bg-white/[0.04] p-6 text-lg leading-8 text-clap-muted">
              {paragraph}
            </p>
          ))}
        </Container>
      </section>
      <MissionSection />
      <VisionSection />
      <ObjectivesOverview detailed />
    </>
  );
}
