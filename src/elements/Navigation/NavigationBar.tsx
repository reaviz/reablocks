import { cn, useComponentTheme } from '@/utils';
import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { NavigationBarTheme } from './NavigationBarTheme';

export interface NavigationBarProps extends PropsWithChildren {
  className?: string;
  classNameTop?: string;
  classNameNavigation?: string;
  classNameBottom?: string;
  direction?: 'horizontal' | 'vertical';
  start?: ReactNode;
  end?: ReactNode;
  theme?: NavigationBarTheme;
}

export const NavigationBar: FC<NavigationBarProps> = ({
  className,
  classNameTop,
  classNameNavigation,
  classNameBottom,
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
    <div
      className={cn(barTheme.base, className, barTheme.direction?.[direction])}
    >
      <div className={cn(barTheme.start, classNameTop)}>{start}</div>
      <div
        className={cn(
          barTheme.navigation,
          classNameNavigation,
          barTheme.direction?.[direction]
        )}
      >
        {children}
      </div>
      <div className={cn(barTheme.end, classNameBottom)}>{end}</div>
    </div>
  );
};
