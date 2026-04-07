import type { FC, PropsWithChildren, ReactNode } from 'react';
import React, { Children, isValidElement } from 'react';

import { cn, useComponentTheme } from '@/utils';

import type {
  NavigationBarDirectionTheme,
  NavigationTheme
} from './NavigationTheme';

export interface NavigationBarSlotProps extends PropsWithChildren {
  /**
   * Additional class name for the slot.
   */
  className?: string;
}

export const NavigationBarStart: FC<NavigationBarSlotProps> = ({
  children
}) => <>{children}</>;

export const NavigationBarEnd: FC<NavigationBarSlotProps> = ({ children }) => (
  <>{children}</>
);

export interface NavigationBarProps extends PropsWithChildren {
  /**
   * Custom class names for the navigation bar.
   */
  className?: string;

  /**
   * Direction of the navigation bar layout.
   */
  direction?: keyof NavigationBarDirectionTheme;

  /**
   * Theme overrides for the navigation bar.
   */
  theme?: NavigationTheme;
}

export const NavigationBar: FC<NavigationBarProps> = ({
  className,
  direction = 'vertical',
  children,
  theme
}) => {
  const navigationTheme: NavigationTheme = useComponentTheme(
    'navigation',
    theme
  );

  let startContent: ReactNode = null;
  let startClassName: string | undefined;
  let endContent: ReactNode = null;
  let endClassName: string | undefined;
  const bodyChildren: ReactNode[] = [];

  Children.forEach(children, child => {
    if (isValidElement<NavigationBarSlotProps>(child)) {
      if (child.type === NavigationBarStart) {
        startContent = child.props.children;
        startClassName = child.props.className;
        return;
      }
      if (child.type === NavigationBarEnd) {
        endContent = child.props.children;
        endClassName = child.props.className;
        return;
      }
    }
    bodyChildren.push(child);
  });

  return (
    <nav
      role="navigation"
      className={cn(
        navigationTheme.bar.base,
        className,
        navigationTheme.bar.direction?.[direction]
      )}
    >
      <div className={cn(navigationTheme.bar.start, startClassName)}>
        {startContent}
      </div>
      <div
        className={cn(
          navigationTheme.bar.navigation,
          navigationTheme.bar.direction?.[direction]
        )}
      >
        {bodyChildren}
      </div>
      <div className={cn(navigationTheme.bar.end, endClassName)}>
        {endContent}
      </div>
    </nav>
  );
};
