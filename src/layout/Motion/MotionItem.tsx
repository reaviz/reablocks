import React, { FC, ReactNode } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

export const verticalVariant = {
  initial: {
    y: -20,
    opacity: 0,
    transition: {
      when: 'beforeChildren'
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      when: 'beforeChildren'
    }
  },
  exit: {
    y: -20,
    opacity: 0
  }
};

const horizontalVariants = {
  initial: {
    x: '-100%',
    opacity: 0,
    transition: {
      when: 'beforeChildren',
      x: { stiffness: 10 }
    }
  },
  animate: {
    x: '0%',
    opacity: 1,
    transition: {
      x: { stiffness: 10, velocity: -100 },
      when: 'beforeChildren',
      opacity: { duration: 1 }
    }
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: {
      x: { stiffness: 10 }
    }
  }
};

export interface MotionItemProps extends HTMLMotionProps<'div'> {
  /**
   * Direction of the motion.
   */
  direction?: 'horizontal' | 'vertical';

  /**
   * Children to render.
   */
  children: ReactNode;
}

export const MotionItem: FC<MotionItemProps> = ({
  children,
  direction = 'vertical',
  ...rest
}) => (
  <motion.div
    variants={direction === 'vertical' ? verticalVariant : horizontalVariants}
    {...rest}
  >
    {children}
  </motion.div>
);
