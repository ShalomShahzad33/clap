import { motion } from 'framer-motion';
import { cardHover } from '../../animations/variants.js';
import { cn } from '../../utils/cn.js';

export default function Card({ className = '', children, interactive = false }) {
  const Component = interactive ? motion.article : 'article';
  const motionProps = interactive ? { whileHover: cardHover } : {};

  return (
    <Component
      className={cn('rounded-lg border border-clap-border bg-white/[0.04] p-6 shadow-soft', className)}
      {...motionProps}
    >
      {children}
    </Component>
  );
}
