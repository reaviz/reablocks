'use client';

import React, { ReactNode, forwardRef, HTMLAttributes } from 'react';
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
   * Theme for the Drawer Footer.
   */
  theme?: DrawerTheme;
}

export const DrawerFooter = forwardRef<HTMLElement, DrawerFooterProps>(
  ({ children, className, theme: customTheme, ...props }, ref) => {
    const theme = useComponentTheme<DrawerTheme>('drawer', customTheme);

    return (
      <footer ref={ref} className={twMerge(theme.footer, className)} {...props}>
        {children}
      </footer>
    );
  }
);

// Mark this component as a Drawer slot for detection
DrawerFooter.displayName = 'DrawerFooter';
