'use client';

import React, { ReactNode, forwardRef, HTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { DrawerTheme } from './DrawerTheme';

export interface DrawerFooterProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content to display in the drawer footer.
   */
  children?: ReactNode;

  /**
   * Additional CSS class name for the footer container.
   */
  className?: string;

  /**
   * When true, the component will render its child directly, merging props.
   */
  asChild?: boolean;

  /**
   * Theme for the Drawer Footer.
   */
  theme?: DrawerTheme;
}

export const DrawerFooter = forwardRef<HTMLElement, DrawerFooterProps>(
  (
    { children, className, asChild = false, theme: customTheme, ...props },
    ref
  ) => {
    const theme = useComponentTheme<DrawerTheme>('drawer', customTheme);

    const Comp = asChild ? Slot : 'footer';

    return (
      <Comp
        ref={ref as any}
        className={twMerge(theme.footer, className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

// Mark this component as a Drawer slot for detection
DrawerFooter.displayName = 'DrawerFooter';
