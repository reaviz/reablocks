'use client';

import React, { ReactNode, forwardRef, HTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
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
   * When true, the component will render its child directly, merging props.
   */
  asChild?: boolean;

  /**
   * Theme for the Dialog Footer.
   */
  theme?: DialogTheme;
}

export const DialogFooter = forwardRef<HTMLElement, DialogFooterProps>(
  (
    { children, className, asChild = false, theme: customTheme, ...props },
    ref
  ) => {
    const theme = useComponentTheme<DialogTheme>('dialog', customTheme);

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

// Mark this component as a Dialog slot for detection
DialogFooter.displayName = 'DialogFooter';
