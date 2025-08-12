import { cn, useComponentTheme } from '@/utils';
import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { NavigationBarTheme } from './NavigationBarTheme';

export interface NavigationBarProps extends PropsWithChildren {
  /**
   * Custom class names for the navigation bar and its sections.
   */
  className?: string;

  /**
   * Custom class names for the top section of the navigation bar.
   */
  classNameStart?: string;

  /**
   * Custom class names for the navigation section.
   */
  classNameNavigation?: string;

  /**
   * Custom class names for the bottom section of the navigation bar.
   */
  classNameEnd?: string;

  /**
   * Direction of the navigation bar layout.
   */
  direction?: 'horizontal' | 'vertical';

  /**
   * Content to be displayed at the start of the navigation bar.
   */
  start?: ReactNode;

  /**
   * Content to be displayed at the end of the navigation bar.
   */
  end?: ReactNode;

  /**
   * Theme overrides for the navigation bar.
   */
  theme?: NavigationBarTheme;
}

export const NavigationBar: FC<NavigationBarProps> = ({
  className,
  classNameStart,
  classNameNavigation,
  classNameEnd,
  direction = 'vertical',
  start,
  end,
  children,
  theme
}) => {
  const barTheme: NavigationBarTheme = useComponentTheme(
    'navigationBar',
    theme
  );

  return (
    <nav
      role="navigation"
      className={cn(barTheme.base, className, barTheme.direction?.[direction])}
    >
      <div className={cn(barTheme.start, classNameStart)}>{start}</div>
      <div
        className={cn(
          barTheme.navigation,
          classNameNavigation,
          barTheme.direction?.[direction]
        )}
      >
        {children}
      </div>
      <div className={cn(barTheme.end, classNameEnd)}>{end}</div>
    </nav>
  );
};
