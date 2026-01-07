'use client';

import React, { ReactNode, forwardRef, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { DialogTheme } from './DialogTheme';

export interface DialogFooterProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content to display in the dialog footer.
   */
  children?: ReactNode;

  /**
   * Additional CSS class name for the footer container.
   */
  className?: string;

  /**
   * Theme for the Dialog Footer.
   */
  theme?: DialogTheme;
}

export const DialogFooter = forwardRef<HTMLElement, DialogFooterProps>(
  ({ children, className, theme: customTheme, ...props }, ref) => {
    const theme = useComponentTheme<DialogTheme>('dialog', customTheme);

    return (
      <footer ref={ref} className={twMerge(theme.footer, className)} {...props}>
        {children}
      </footer>
    );
  }
);

// Mark this component as a Dialog slot for detection
DialogFooter.displayName = 'DialogFooter';
