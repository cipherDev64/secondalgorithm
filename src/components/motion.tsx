import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_FLUID } from './motionTokens';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/* Section-heading reveal: a masked wipe-up that echoes the hero's word reveal. Plays once.
   The outer element is observed; the inner one is clipped. Chrome's IntersectionObserver
   honours clip-path, so observing the clipped element itself would never trigger. */
export const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0 }) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        variants={{
          // Negative side insets keep italic serif overhangs from being clipped once revealed.
          hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28, clipPath: 'inset(-10% -10% 100% -10%)' },
          shown: reduce ? { opacity: 1 } : { opacity: 1, y: 0, clipPath: 'inset(-10% -10% -10% -10%)' }
        }}
        transition={{ duration: 0.9, ease: EASE_FLUID, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
