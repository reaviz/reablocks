'use client';

import React, { ReactNode, forwardRef, HTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { DialogTheme } from './DialogTheme';
import { useOptionalDialogContext } from './DialogContext';

export interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content to display in the dialog body.
   */
  children?: ReactNode;

  /**
   * Additional CSS class name for the content container.
   */
  className?: string;

  /**
   * Whether to disable padding for the content.
   * When used in context, inherits from Dialog's disablePadding prop.
   */
  disablePadding?: boolean;

  /**
   * When true, the component will render its child directly, merging props.
   */
  asChild?: boolean;

  /**
   * Theme for the Dialog Content.
   */
  theme?: DialogTheme;
}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  (
    {
      children,
      className,
      disablePadding: disablePaddingProp,
      asChild = false,
      theme: customTheme,
      ...props
    },
    ref
  ) => {
    const theme = useComponentTheme<DialogTheme>('dialog', customTheme);
    const context = useOptionalDialogContext();

    // Use prop if provided, otherwise use context value
    const disablePadding =
      disablePaddingProp ?? context?.disablePadding ?? false;

    const Comp = asChild ? Slot : 'div';

    return (
      <Comp
        ref={ref as any}
        className={twMerge(theme.content, disablePadding && 'p-0', className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

// Mark this component as a Dialog slot for detection
DialogContent.displayName = 'DialogContent';
