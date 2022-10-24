import React from 'react';
import { motion } from 'framer-motion';

export const groupVariants = {
  initial: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1 as any
    }
  },
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  }
};

export const MotionGroup = ({ children, ...rest }) => (
  <motion.div
    variants={groupVariants}
    initial="initial"
    animate="animate"
    {...rest}
  >
    {children}
  </motion.div>
);
