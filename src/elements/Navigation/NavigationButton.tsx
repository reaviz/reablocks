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
  variant?: 'button' | 'underline';

  /**
   * Indicates if the button is active.
   */
  active?: boolean;

  /**
   * Custom theme for the navigation button.
   */
  theme?: NavigationTheme;

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
          layoutId="selected-nav-button"
          className={navigationTheme.button.variant?.[variant]?.selection}
        />
      )}
      <button
        className={cn(
          navigationTheme.button?.variant?.[variant]?.content,
          { [navigationTheme.button?.variant?.[variant]?.active]: active },
          className
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
