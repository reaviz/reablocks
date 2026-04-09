import { motion } from 'motion/react';
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import React, { Children, isValidElement, useMemo } from 'react';

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
  children,
  className
}) => {
  const theme: NavigationTheme = useComponentTheme('navigation');
  return <div className={cn(theme.bar.start, className)}>{children}</div>;
};

export const NavigationBarEnd: FC<NavigationBarSlotProps> = ({
  children,
  className
}) => {
  const theme: NavigationTheme = useComponentTheme('navigation');
  return <div className={cn(theme.bar.end, className)}>{children}</div>;
};

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

const defaultTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30
} as const;

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

  const { slots, bodyChildren } = useMemo(() => {
    const slots: ReactNode[] = [];
    const bodyChildren: ReactNode[] = [];

    Children.forEach(children, child => {
      if (
        isValidElement(child) &&
        (child.type === NavigationBarStart || child.type === NavigationBarEnd)
      ) {
        slots.push(child);
      } else {
        bodyChildren.push(child);
      }
    });

    return { slots, bodyChildren };
  }, [children]);

  const isCollapsible = collapsed !== undefined && direction === 'vertical';
  const resolvedAnimation = animation ?? {
    initial: false,
    animate: { width: collapsed ? 85 : 320 },
    transition: defaultTransition
  };

  return (
    <motion.div
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
        {slots.filter(s => isValidElement(s) && s.type === NavigationBarStart)}
        <div
          className={cn(
            navigationTheme.bar.navigation,
            navigationTheme.bar.direction?.[direction]
          )}
        >
          {bodyChildren}
        </div>
        {slots.filter(s => isValidElement(s) && s.type === NavigationBarEnd)}
      </nav>
    </motion.div>
  );
};
