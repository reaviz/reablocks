import { cn, useComponentTheme } from '@/utils';
import { motion } from 'motion/react';
import React, { FC, PropsWithChildren } from 'react';
import { NavigationTheme } from './NavigationTheme';

interface NavigationButtonProps extends PropsWithChildren {
  /**
   * Custom class names for the navigation button.
   */
  className?: string;

  /**
   * Variant of the navigation button.
   */
  variant?: keyof NavigationTheme['button']['variant'];

  /**
   * Indicates if the button is active.
   */
  active?: boolean;

  /**
   * Custom theme for the navigation button.
   */
  theme?: NavigationTheme;

  /**
   * Disables the button, preventing interaction.
   */
  disabled?: boolean;

  /**
   * Disables the animation on click.
   */
  disableAnimation?: boolean;

  /**
   * Callback function to handle click events on the button.
   */
  onClick?: () => void;
}

export const NavigationButton: FC<NavigationButtonProps> = ({
  className,
  active,
  children,
  theme,
  disabled,
  disableAnimation,
  variant = 'button',
  onClick
}) => {
  const navigationTheme: NavigationTheme = useComponentTheme(
    'navigation',
    theme
  );

  return (
    <div className={navigationTheme.button.base}>
      {active && (
        <motion.div
          layoutId={disableAnimation ? undefined : 'selected-nav-button'}
          className={navigationTheme.button.variant?.[variant]?.selection}
        />
      )}
      <motion.button
        disabled={disabled}
        whileTap={{ scale: disabled || disableAnimation || active ? 1 : 0.9 }}
        className={cn(
          navigationTheme.button?.variant?.[variant]?.content,
          { [navigationTheme.button?.variant?.[variant]?.active]: active },
          { [navigationTheme.button?.variant?.[variant]?.disabled]: disabled },
          className
        )}
        onClick={onClick}
      >
        {children}
      </motion.button>
    </div>
  );
};
