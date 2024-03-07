import React, { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import isFunction from 'lodash/isFunction';
import { CollapseTheme } from './CollapseTheme';
import { useComponentTheme } from '../../utils/Theme/TW';
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
   * Children to render.
   */
  children?: React.ReactNode | (() => React.ReactNode);
}

export const Collapse: FC<CollapseProps> = ({
  children,
  expanded,
  className,
  ...rest
}) => {
  const theme: CollapseTheme = useComponentTheme('collapse');

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
          {isFunction(children) ? children() : children}
        </motion.section>
      )}
    </AnimatePresence>
  );
};
