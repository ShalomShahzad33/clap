import Container from '../components/common/Container.jsx';
import MapPlaceholder from '../components/common/MapPlaceholder.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Seo from '../components/common/Seo.jsx';
import ContactFormSection from '../components/sections/ContactFormSection.jsx';
import ContactInfoSection from '../components/sections/ContactInfoSection.jsx';
import { pageSeo } from '../data/seo.js';

export default function ContactPage() {
  return (
    <>
      <Seo {...pageSeo.contact} />
      <PageHero
        eyebrow="Contact Us"
        title="Connect with Christian Lawyers Association Pakistan."
        description="Reach out for membership inquiries, collaboration, legal awareness programs, and community service coordination."
      />
      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <ContactInfoSection />
          <ContactFormSection />
        </Container>
        <Container className="mt-8">
          <MapPlaceholder />
        </Container>
      </section>
    </>
  );
}
