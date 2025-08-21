import React, { FC } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CollapseTheme } from './CollapseTheme';
import { useComponentTheme } from '@/utils';
import { twMerge } from '@/utils';

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
          transition={TRANSITION}
        >
          {typeof children === 'function' ? children() : children}
        </motion.section>
      )}
    </AnimatePresence>
  );
};
