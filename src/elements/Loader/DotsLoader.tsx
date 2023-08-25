import React, { FC } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import css from './DotsLoader.module.css';

export interface DotsLoaderProps {
  className?: string;
  speed?: number;
  size?: 'small' | 'medium' | 'large';
}

export const DotsLoader: FC<DotsLoaderProps> = ({ className, size, speed }) => (
  <motion.div
    className={classNames(className, css.container, {
      [css.small]: size === 'small',
      [css.medium]: size === 'medium',
      [css.large]: size === 'large'
    })}
  >
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          opacity: [0, 1, 0],
          scale: [1, 2, 2, 1, 1]
        }}
        transition={{
          duration: speed * 4,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: speed,
          delay: speed * i
        }}
      />
    ))}
  </motion.div>
);

DotsLoader.defaultProps = {
  speed: 0.2,
  size: 'medium'
};
