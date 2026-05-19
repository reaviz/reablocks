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

const DEFAULT_TRANSITION: MotionNodeAnimationOptions['transition'] = {
  duration: 0.25,
  ease: [0.04, 0.62, 0.23, 0.98]
};

export interface TableRowExpandProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the expanded content is currently shown.
   */
  open: boolean;

  /**
   * Optional override for the motion transition.
   */
  transition?: MotionNodeAnimationOptions['transition'];

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
    { open, transition, className, theme: customTheme, children, ...rest },
    ref
  ) => {
    const ctx = useTableContext();
    const fallbackTheme: TableTheme = useComponentTheme('table', customTheme);
    const theme = ctx?.theme ?? fallbackTheme;

    return (
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            ref={ref}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={transition ?? DEFAULT_TRANSITION}
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
