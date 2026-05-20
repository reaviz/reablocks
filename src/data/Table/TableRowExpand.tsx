import React, { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  MotionNodeAnimationOptions
} from 'motion/react';
import { cn, useComponentTheme } from '@/utils';
import { TableTheme } from './TableTheme';
import { useTableContext } from './TableContext';

const DEFAULT_ANIMATION: MotionNodeAnimationOptions = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: {
    duration: 0.25,
    ease: [0.04, 0.62, 0.23, 0.98]
  }
};

export interface TableRowExpandProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the expanded content is currently shown.
   */
  open: boolean;

  /**
   * Motion animation configuration. Any of `initial`, `animate`, `exit`,
   * `variants`, or `transition` can be overridden; unspecified keys fall
   * back to the defaults (height + opacity expand/collapse). When
   * `variants` is set, pass variant label strings to `initial` /
   * `animate` / `exit` instead of inline target objects.
   */
  animation?: MotionNodeAnimationOptions;

  /**
   * Theme override for this slot.
   */
  theme?: TableTheme;
}

export const TableRowExpand = forwardRef<
  HTMLDivElement,
  PropsWithChildren<TableRowExpandProps>
>(
  (
    { open, animation, className, theme: customTheme, children, ...rest },
    ref
  ) => {
    const ctx = useTableContext();
    const fallbackTheme: TableTheme = useComponentTheme('table', customTheme);
    const theme = ctx?.theme ?? fallbackTheme;

    const motionProps: MotionNodeAnimationOptions = {
      ...DEFAULT_ANIMATION,
      ...animation
    };

    return (
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            ref={ref}
            key="content"
            {...motionProps}
            className={cn(theme.body.expand.base, className, 'overflow-hidden')}
            {...(rest as unknown as HTMLMotionProps<'div'>)}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

TableRowExpand.displayName = 'TableRowExpand';
