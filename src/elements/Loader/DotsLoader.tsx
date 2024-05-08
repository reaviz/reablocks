import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { DotsLoaderTheme } from './DotsLoaderTheme';
import { useComponentTheme } from '@/utils';
import { twMerge } from 'tailwind-merge';

export interface DotsLoaderProps {
  className?: string;
  speed?: number;
  size?: 'small' | 'medium' | 'large';
  theme?: DotsLoaderTheme;
}

export const DotsLoader: FC<DotsLoaderProps> = ({
  className,
  size,
  speed,
  theme: customTheme
}) => {
  const theme: DotsLoaderTheme = useComponentTheme('dotsLoader', customTheme);

  return (
    <motion.div className={twMerge(theme.base, className)}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className={twMerge(theme.dot, theme.sizes[size])}
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

DotsLoader.defaultProps = {
  speed: 0.2,
  size: 'medium'
};
