import { motion } from 'framer-motion';
import Container from '../common/Container.jsx';
import SectionHeader from '../common/SectionHeader.jsx';
import { vision } from '../../data/about.js';
import { slideUp } from '../../animations/variants.js';

export default function VisionSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeader eyebrow="Vision" title="A just society strengthened by dignity before the law." className="mx-auto" />
          <motion.p
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 text-xl leading-9 text-clap-muted"
          >
            {vision}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
