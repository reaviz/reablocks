import type { FC, PropsWithChildren, ReactNode } from 'react';
import React from 'react';

import { cn, useComponentTheme } from '@/utils';

import type {
  NavigationBarDirectionTheme,
  NavigationTheme,
} from './NavigationTheme';

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
  direction?: keyof NavigationBarDirectionTheme;

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
  theme?: NavigationTheme;
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
  theme,
}) => {
  const navigationTheme: NavigationTheme = useComponentTheme(
    'navigation',
    theme,
  );

  return (
    <nav
      role="navigation"
      className={cn(
        navigationTheme.bar.base,
        className,
        navigationTheme.bar.direction?.[direction],
      )}
    >
      <div className={cn(navigationTheme.bar.start, classNameStart)}>
        {start}
      </div>
      <div
        className={cn(
          navigationTheme.bar.navigation,
          classNameNavigation,
          navigationTheme.bar.direction?.[direction],
        )}
      >
        {children}
      </div>
      <div className={cn(navigationTheme.bar.end, classNameEnd)}>{end}</div>
    </nav>
  );
};
