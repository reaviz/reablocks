import { cn, useComponentTheme } from '@/utils';
import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { NavigationBarTheme } from './NavigationBarTheme';

export interface NavigationBarProps extends PropsWithChildren {
  className?: string;
  classNameTop?: string;
  classNameNavigation?: string;
  classNameBottom?: string;
  top?: ReactNode;
  bottom?: ReactNode;
  theme?: NavigationBarTheme;
}

export const NavigationBar: FC<NavigationBarProps> = ({
  className,
  classNameTop,
  classNameNavigation,
  classNameBottom,
  top,
  bottom,
  children,
  theme
}) => {
  const barTheme: NavigationBarTheme = useComponentTheme(
    'navigationBar',
    theme
  );

  return (
    <div className={cn(barTheme.base, className)}>
      <div className={cn(barTheme.top, classNameTop)}>{top}</div>
      <div className={cn(barTheme.navigation, classNameNavigation)}>
        {children}
      </div>
      <div className={cn(barTheme.bottom, classNameBottom)}>{bottom}</div>
    </div>
  );
};
