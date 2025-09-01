import React, { FC } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CollapseTheme } from './CollapseTheme';
import { useComponentTheme } from '@/utils';
import { twMerge } from 'tailwind-merge';

const VARIANTS = {
  open: {
    opacity: 1,
    height: 'auto'
  },
  collapsed: {
    opacity: 0,
    height: 0
  }
};

const TRANSITION = {
  duration: 0.5,
  ease: [0.04, 0.62, 0.23, 0.98],
  when: 'beforeChildren'
};

export interface CollapseProps
  extends Omit<Partial<HTMLDivElement>, 'children'> {
  /**
   * Whether the collapse is expanded or not.
   */
  expanded?: boolean;

  /**
   * Whether the collapse is animated or not.
   */
  animated?: boolean;

  /**
   * Children to render.
   */
  children?: React.ReactNode | (() => React.ReactNode);

  /**
   * Theme for the Collapse.
   */
  theme?: CollapseTheme;
}

export const Collapse: FC<CollapseProps> = ({
  children,
  expanded,
  className,
  animated = true,
  theme: customTheme,
  ...rest
}) => {
  const theme: CollapseTheme = useComponentTheme('collapse', customTheme);

  return (
    <AnimatePresence initial={false}>
      {expanded && (
        <motion.section
          {...(rest as any)}
          className={twMerge(theme.base, className)}
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={VARIANTS}
          transition={animated ? TRANSITION : { duration: 0 }}
        >
          {typeof children === 'function' ? children() : children}
        </motion.section>
      )}
    </AnimatePresence>
  );
};
