import { NavigationButtonTheme } from '@/elements';
import { cn, useComponentTheme } from '@/utils';
import { motion } from 'motion/react';
import React, { FC, PropsWithChildren } from 'react';

interface NavigationButtonProps extends PropsWithChildren {
  className?: string;
  active?: boolean;
  theme?: NavigationButtonTheme;
  onClick?: () => void;
}

export const NavigationButton: FC<NavigationButtonProps> = ({
  className,
  active,
  children,
  theme,
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
          className={buttonTheme.selection}
        />
      )}
      <button
        className={cn(
          buttonTheme.content,
          { [buttonTheme.active]: active },
          className
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
