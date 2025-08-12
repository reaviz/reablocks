import { NavigationButtonTheme } from '@/elements';
import { cn, useComponentTheme } from '@/utils';
import { motion } from 'motion/react';
import React, { FC, PropsWithChildren } from 'react';

interface NavigationButtonProps extends PropsWithChildren {
  className?: string;
  variant?: 'button' | 'underline';
  active?: boolean;
  theme?: NavigationButtonTheme;
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
