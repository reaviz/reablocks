import { motion } from 'motion/react';
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
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

export type NavigationBarAnimation = Pick<
  ComponentProps<typeof motion.div>,
  'animate' | 'initial' | 'transition'
>;

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
   * Whether the navigation bar is collapsed. Only applies to vertical direction.
   */
  collapsed?: boolean;

  /**
   * Custom animation configuration for the collapse/expand transition.
   * Overrides the default collapsed/expanded animations.
   */
  animation?: NavigationBarAnimation;

  /**
   * Theme overrides for the navigation bar.
   */
  theme?: NavigationTheme;
}

export const NavigationBar: FC<NavigationBarProps> = ({
  className,
  direction = 'vertical',
  collapsed,
  animation,
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

  const isCollapsible = collapsed !== undefined && direction === 'vertical';
  const defaultAnimation: NavigationBarAnimation = {
    initial: false,
    animate: { width: collapsed ? 85 : 320 },
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  };
  const resolvedAnimation = animation ?? defaultAnimation;

  return (
    <motion.div
      className="h-full shrink-0 overflow-hidden"
      initial={isCollapsible ? (resolvedAnimation.initial ?? false) : false}
      animate={isCollapsible ? resolvedAnimation.animate : undefined}
      transition={isCollapsible ? resolvedAnimation.transition : undefined}
    >
      <nav
        role="navigation"
        className={cn(
          navigationTheme.bar.base,
          className,
          navigationTheme.bar.direction?.[direction],
          isCollapsible && 'overflow-hidden'
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
    </motion.div>
  );
};
