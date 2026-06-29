'use client';
import { motion } from 'framer-motion';

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1 },
  },
};

export function Reveal({ children, variant = 'fadeUp', delay = 0, duration = 0.55, className = '', once = true, as = 'div' }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

export function StaggerParent({ children, className = '', staggerChildren = 0.08, delayChildren = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ show: { transition: { staggerChildren, delayChildren } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({ children, className = '', variant = 'fadeUp' }) {
  return (
    <motion.div className={className} variants={variants[variant]}>
      {children}
    </motion.div>
  );
}
