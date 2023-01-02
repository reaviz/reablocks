import React, { FC, PropsWithChildren } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import isFunction from 'lodash/isFunction';
import css from './Collapse.module.css';

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
}) => (
  <AnimatePresence initial={false}>
    {expanded && (
      <motion.section
        {...(rest as any)}
        className={classNames(className, css.section)}
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
