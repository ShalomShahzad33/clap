import { motion } from 'framer-motion';
import Button from '../common/Button.jsx';
import Card from '../common/Card.jsx';
import Container from '../common/Container.jsx';
import SectionHeader from '../common/SectionHeader.jsx';
import { aboutOverview } from '../../data/about.js';
import { staggerContainer, slideUp } from '../../animations/variants.js';

export default function AboutPreview() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader eyebrow="About CLAP" title="Lawyers serving justice with professional responsibility." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4">
            {aboutOverview.map((paragraph) => (
              <motion.div key={paragraph} variants={slideUp}>
                <Card>
                  <p className="leading-7 text-clap-muted">{paragraph}</p>
                </Card>
              </motion.div>
            ))}
            <Button to="/about" variant="text" className="justify-start px-0">
              Read more about the association
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
