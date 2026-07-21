import { motion } from 'framer-motion';
import { slideUp } from '../../animations/variants.js';
import { cn } from '../../utils/cn.js';

export default function SectionHeader({ eyebrow, title, description, className = '' }) {
  return (
    <motion.div
      className={cn('max-w-3xl', className)}
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-clap-sky">{eyebrow}</p>}
      <h2 className="font-serif text-3xl font-black leading-tight text-clap-text sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-clap-muted sm:text-lg">{description}</p>}
    </motion.div>
  );
}
