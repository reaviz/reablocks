import React, { forwardRef, ReactNode } from 'react';
import { motion, MotionNodeAnimationOptions } from 'motion/react';
import { cn, useComponentTheme } from '@/utils';
import { TableCell, TableCellProps } from './TableCell';
import { useTableContext } from './TableContext';
import { TableTheme } from './TableTheme';

const DefaultChevron = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <path
      d="M4 2L8 6L4 10"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export interface TableExpandCellProps extends Omit<TableCellProps, 'children'> {
  /**
   * Whether the associated row is currently expanded.
   */
  open: boolean;

  /**
   * Icon to render. Defaults to a 12px chevron-right that rotates `openRotation`
   * degrees when `open` is true.
   */
  icon?: ReactNode;

  /**
   * Rotation in degrees applied to the icon when `open` is true. Defaults to 90.
   */
  openRotation?: number;

  /**
   * Override the motion transition for the rotation. Defaults to
   * `{ duration: 0.2 }`.
   */
  transition?: MotionNodeAnimationOptions['transition'];

  /**
   * Optional className applied to the motion.span wrapping the icon.
   */
  iconClassName?: string;
}

const DEFAULT_TRANSITION: MotionNodeAnimationOptions['transition'] = {
  duration: 0.2
};

export const TableExpandCell = forwardRef<HTMLDivElement, TableExpandCellProps>(
  (
    {
      open,
      icon,
      openRotation = 90,
      transition,
      iconClassName,
      width = 40,
      ...cellProps
    },
    ref
  ) => {
    const ctx = useTableContext();
    const fallbackTheme: TableTheme = useComponentTheme(
      'table',
      cellProps.theme
    );
    const theme = ctx?.theme ?? fallbackTheme;

    return (
      <TableCell ref={ref} width={width} {...cellProps}>
        <motion.span
          className={cn(theme.body.expandCell.icon, iconClassName)}
          animate={{ rotate: open ? openRotation : 0 }}
          transition={transition ?? DEFAULT_TRANSITION}
        >
          {icon ?? <DefaultChevron />}
        </motion.span>
      </TableCell>
    );
  }
);

TableExpandCell.displayName = 'TableExpandCell';
