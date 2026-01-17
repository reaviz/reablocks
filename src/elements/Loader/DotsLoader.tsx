import { motion } from 'motion/react';
import type { FC } from 'react';
import React from 'react';

import { useComponentTheme } from '@/utils';
import { twMerge } from '@/utils';

import type { DotsLoaderSizeTheme, DotsLoaderTheme } from './DotsLoaderTheme';

export interface DotsLoaderProps {
  /**
   * Additional class names for the loader.
   */
  className?: string;

  /**
   * The speed of the animation.
   */
  speed?: number;

  /**
   * The size of the loader.
   */
  size?: keyof DotsLoaderSizeTheme;

  /**
   * Theme for the DotsLoader.
   */
  theme?: DotsLoaderTheme;
}

export const DotsLoader: FC<DotsLoaderProps> = ({
  className,
  size = 'medium',
  speed = 0.2,
  theme: customTheme
}) => {
  const theme: DotsLoaderTheme = useComponentTheme('dotsLoader', customTheme);

  const dotClasses = [theme.dot, theme.sizes?.[size]].filter(Boolean);

  return (
    <motion.div className={twMerge(theme.base, className)}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className={twMerge(...dotClasses)}
          initial={{ opacity: 0, scale: 1 }}
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
};
