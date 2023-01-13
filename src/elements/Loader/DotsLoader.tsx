import React, { FC } from 'react';
import { motion } from 'framer-motion';

const SPEED = 0.2;

export const DotsLoader: FC = () => (
  <>
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          opacity: [0, 1, 0],
          scale: [1, 2, 2, 1, 1]
        }}
        transition={{
          duration: SPEED * 4,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: SPEED,
          delay: SPEED * i
        }}
      />
    ))}
  </>
);
