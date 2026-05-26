'use client';

import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { DialogFooter } from '@/layers/Dialog';
import { cn } from '@/utils';

export interface ConfirmDialogActionsProps extends Omit<
  HTMLAttributes<HTMLElement>,
  'children'
> {
  /**
   * The action buttons. Read managed state (isLoading, onConfirm, etc.)
   * inside any child via `useConfirmDialogContext()`.
   */
  children?: ReactNode;

  /**
   * Additional CSS class name for the footer container.
   */
  className?: string;
}

export const ConfirmDialogActions = forwardRef<
  HTMLElement,
  ConfirmDialogActionsProps
>(({ children, className, ...props }, ref) => (
  <DialogFooter
    ref={ref}
    className={cn('flex justify-end space-x-4', className)}
    {...props}
  >
    {children}
  </DialogFooter>
));

// Mark this component as a ConfirmDialog slot for detection
ConfirmDialogActions.displayName = 'ConfirmDialogActions';
