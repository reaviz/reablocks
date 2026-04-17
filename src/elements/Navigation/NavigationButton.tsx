import { HTMLMotionProps, motion } from 'motion/react';
import type { FC } from 'react';
import React from 'react';

import { cn, useComponentTheme } from '@/utils';

import type {
  NavigationButtonVariantTheme,
  NavigationTheme
} from './NavigationTheme';

export interface NavigationButtonProps extends HTMLMotionProps<'button'> {
  /**
   * Variant of the navigation button.
   */
  variant?: keyof NavigationButtonVariantTheme;

  /**
   * Indicates if the button is active.
   */
  active?: boolean;

  /**
   * Custom theme for the navigation button.
   */
  theme?: NavigationTheme;

  /**
   * If false, the animation of the button will be disabled.
   */
  animated?: boolean;
}

export const NavigationButton: FC<NavigationButtonProps> = ({
  className,
  active,
  children,
  theme,
  disabled,
  animated = true,
  variant = 'ghost',
  layoutId,
  whileTap,
  ...rest
}) => {
  const navigationTheme: NavigationTheme = useComponentTheme(
    'navigation',
    theme
  );

  return (
    <div className={navigationTheme.button.base}>
      {active && (
        <motion.div
          layoutId={!animated ? undefined : (layoutId ?? 'selected-nav-button')}
          className={navigationTheme.button.variant?.[variant]?.selection}
        />
      )}
      <motion.button
        type="button"
        {...rest}
        disabled={disabled}
        whileTap={
          whileTap ?? { scale: disabled || !animated || active ? 1 : 0.9 }
        }
        className={cn(
          navigationTheme.button?.variant?.[variant]?.content,
          active && navigationTheme.button?.variant?.[variant]?.active,
          disabled && navigationTheme.button?.variant?.[variant]?.disabled,
          className
        )}
      >
        {children}
      </motion.button>
    </div>
  );
};
