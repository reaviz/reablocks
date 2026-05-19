'use client';

import React, { FC, MouseEvent, ReactNode } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { Button } from '@/elements/Button';
import { Divider } from '@/layout/Divider';
import { EllipsisTheme } from './EllipsisTheme';
import { EllipsisContextValue, useEllipsisContext } from './EllipsisContext';

export interface EllipsisButtonProps {
  /**
   * Custom button content. Accepts either a ReactNode (replaces the default
   * label inside the default Button) or a function that receives the Ellipsis
   * state and returns the entire button block.
   */
  children?: ReactNode | ((args: EllipsisContextValue) => ReactNode);

  /**
   * Class name applied to the outer container.
   */
  className?: string;

  /**
   * Override the expand label. When omitted, inherits from the parent
   * Ellipsis component via context.
   */
  moreText?: string;

  /**
   * Override the collapse label. When omitted, inherits from the parent
   * Ellipsis component via context.
   */
  lessText?: string;

  /**
   * Override the toggle handler. When omitted, inherits from the parent
   * Ellipsis component via context.
   */
  onToggle?: (event: MouseEvent) => void;

  /**
   * Theme for the Ellipsis (used to style the default container).
   */
  theme?: EllipsisTheme;
}

/**
 * Slot component that overrides the default expand/collapse button block in
 * an Ellipsis. Detected via `displayName`; state is read from `EllipsisContext`
 * provided by the parent `Ellipsis` component.
 */
export const EllipsisButton: FC<EllipsisButtonProps> = ({
  children,
  className,
  moreText: moreTextProp,
  lessText: lessTextProp,
  onToggle: onToggleProp,
  theme: customTheme
}) => {
  const context = useEllipsisContext();
  const theme: EllipsisTheme = useComponentTheme('ellipsis', customTheme);

  // Prop → context → default. Matches DialogHeader's merge convention.
  const moreText = moreTextProp ?? context.moreText;
  const lessText = lessTextProp ?? context.lessText;
  const toggleExpand = onToggleProp ?? context.toggleExpand;
  const { showAll, isTruncated } = context;

  if (typeof children === 'function') {
    return (
      <>
        {children({ showAll, isTruncated, toggleExpand, moreText, lessText })}
      </>
    );
  }

  return (
    <div
      className={cn(
        theme.buttonContainer.base,
        !showAll
          ? theme.buttonContainer.collapsed
          : theme.buttonContainer.expanded,
        className
      )}
    >
      <Divider disableMargins className={theme.buttonContainer.divider} />
      <Button
        variant="text"
        size="small"
        disableMargins
        className={theme.buttonContainer.expandButton}
        onClick={toggleExpand}
      >
        {children ?? (showAll ? lessText : moreText)}
      </Button>
      <Divider disableMargins className={theme.buttonContainer.divider} />
    </div>
  );
};

EllipsisButton.displayName = 'EllipsisButton';
