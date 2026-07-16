import { motion } from 'framer-motion';
import Container from '../common/Container.jsx';
import ObjectiveCard from '../common/ObjectiveCard.jsx';
import SectionHeader from '../common/SectionHeader.jsx';
import { objectives } from '../../data/objectives.js';
import { staggerContainer, slideUp } from '../../animations/variants.js';

export default function ObjectivesOverview({ detailed = false }) {
  const items = detailed ? objectives : objectives.slice(0, 3);

  return (
    <section className="bg-clap-slate py-20">
      <Container>
        <SectionHeader
          eyebrow="Objectives"
          title={detailed ? 'Detailed objectives' : 'Focused areas of service'}
          description="CLAP organizes its work around human rights, legal assistance, reform, capacity building, unity, and collaboration."
        />
        <motion.div
          className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((objective) => (
            <motion.div key={objective.title} variants={slideUp}>
              <ObjectiveCard objective={objective} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
