import { NavigationButtonTheme } from '@/elements';
import { cn, useComponentTheme } from '@/utils';
import { motion } from 'motion/react';
import React, { FC, PropsWithChildren } from 'react';

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
  theme?: NavigationButtonTheme;

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
  const buttonTheme: NavigationButtonTheme = useComponentTheme(
    'navigationButton',
    theme
  );

  return (
    <div className={buttonTheme.base}>
      {active && (
        <motion.div
          layoutId="selected-nav-button"
          className={buttonTheme.variant?.[variant]?.selection}
        />
      )}
      <button
        className={cn(
          buttonTheme?.variant?.[variant]?.content,
          { [buttonTheme?.variant?.[variant]?.active]: active },
          className
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
