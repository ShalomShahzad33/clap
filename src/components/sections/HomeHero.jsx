import { motion } from 'framer-motion';
import { ArrowRight, Scale } from 'lucide-react';
import Button from '../common/Button.jsx';
import Container from '../common/Container.jsx';
import { organization } from '../../constants/organization.js';
import { fadeIn, slideUp } from '../../animations/variants.js';

export default function HomeHero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden border-b border-clap-border">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.82),rgba(0,0,0,0.58)),linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.72)),url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
      <Container className="relative flex min-h-[calc(100vh-5rem)] items-center py-16">
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-clap-border bg-white/5 px-4 py-2 text-sm font-semibold text-clap-sky">
            <Scale className="h-4 w-4" aria-hidden="true" />
            {organization.shortName}
          </div>
          <motion.h1
            variants={slideUp}
            className="font-serif text-4xl font-black leading-tight text-clap-text sm:text-5xl lg:text-6xl"
          >
            {organization.name}
          </motion.h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{organization.tagline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/about">
              Learn About CLAP <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
