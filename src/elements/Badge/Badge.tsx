import React, { FC, forwardRef, LegacyRef } from 'react';
import { motion } from 'framer-motion';
import { BadgeTheme } from './BadgeTheme';
import { useComponentTheme } from '../../utils';
import { twMerge } from 'tailwind-merge';

export type BadgeColor = 'default' | 'primary' | 'secondary' | 'error';

export type BadgePlacement =
  | 'top-start'
  | 'top-end'
  | 'bottom-end'
  | 'bottom-start';

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'content'> {
  content?: string | React.JSX.Element;

  color?: BadgeColor;

  disableMargins?: boolean;

  hidden?: boolean;

  placement?: BadgePlacement;

  /**
   * Theme for the Budge.
   */
  theme?: BadgeTheme;
}

export interface BadgeRef {
  ref?: LegacyRef<HTMLSpanElement>;
}

export const Badge: FC<BadgeProps & BadgeRef> = forwardRef(
  (
    {
      children,
      color,
      className,
      disableMargins,
      content,
      hidden,
      placement,
      theme: customTheme,
      ...rest
    }: BadgeProps,
    ref
  ) => {
    const theme: BadgeTheme = useComponentTheme('badge', customTheme);

    return (
      <span
        className={twMerge(theme.base, disableMargins && theme.disableMargins)}
      >
        {children}
        {!hidden && (
          <motion.span
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            aria-hidden="true"
          >
            <span
              {...rest}
              ref={ref}
              className={twMerge(
                theme.badge,
                theme.position,
                theme.colors[color],
                theme.positions[placement],
                className
              )}
            >
              {content}
            </span>
          </motion.span>
        )}
      </span>
    );
  }
);

Badge.defaultProps = {
  color: 'default',
  placement: 'top-end'
};
