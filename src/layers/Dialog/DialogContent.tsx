'use client';

import React, { ReactNode, forwardRef, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { DialogTheme } from './DialogTheme';
import { useDialogContext } from './DialogContext';

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
      theme: customTheme,
      ...props
    },
    ref
  ) => {
    const theme = useComponentTheme<DialogTheme>('dialog', customTheme);
    const context = useDialogContext();

    // Use prop if provided, otherwise use context value
    const disablePadding =
      disablePaddingProp ?? context?.disablePadding ?? false;

    return (
      <div
        ref={ref}
        className={twMerge(theme.content, disablePadding && 'p-0', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

// Mark this component as a Dialog slot for detection
DialogContent.displayName = 'DialogContent';
