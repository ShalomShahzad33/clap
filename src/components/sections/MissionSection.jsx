import { motion } from 'framer-motion';
import Card from '../common/Card.jsx';
import Container from '../common/Container.jsx';
import SectionHeader from '../common/SectionHeader.jsx';
import { mission } from '../../data/about.js';
import { slideUp } from '../../animations/variants.js';

export default function MissionSection() {
  return (
    <section className="bg-clap-slate py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader eyebrow="Mission" title="Defending rights and widening access to justice." />
          <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="border-clap-sky/30">
              <p className="font-serif text-2xl leading-10 text-clap-text">{mission}</p>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
