import { motion } from 'framer-motion';
import Container from './Container.jsx';
import { slideUp } from '../../animations/variants.js';

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden border-b border-clap-border py-20 sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.18),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.36),rgba(0,0,0,0.86))]" />
      <Container className="relative">
        <motion.div variants={slideUp} initial="hidden" animate="visible" className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-clap-sky">{eyebrow}</p>
          <h1 className="font-serif text-4xl font-black leading-tight text-clap-text sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-clap-muted">{description}</p>
        </motion.div>
      </Container>
    </section>
  );
}
