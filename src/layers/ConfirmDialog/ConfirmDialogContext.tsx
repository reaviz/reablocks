'use client';

import { createContext, useContext } from 'react';

export interface ConfirmDialogContextValue {
  /**
   * Whether the confirm action is currently pending.
   */
  isLoading: boolean;

  /**
   * Wrapped confirm handler. Awaits the user's `onConfirm` and toggles
   * the loading state automatically when it returns a Promise.
   */
  onConfirm: () => void;

  /**
   * Wrapped cancel handler. Suppressed while the confirm action is pending.
   */
  onCancel: () => void;

  /**
   * The visual variant of the dialog.
   */
  variant: 'default' | 'destructive';

  /**
   * Whether the confirm button should be disabled (separate from loading).
   */
  confirmDisabled: boolean;

  /**
   * The label for the confirm button.
   */
  confirmLabel: string;

  /**
   * The label for the cancel button.
   */
  cancelLabel: string;
}

export const ConfirmDialogContext =
  createContext<ConfirmDialogContextValue | null>(null);

/**
 * Hook to access the ConfirmDialog context.
 * Must be used within a ConfirmDialog component.
 */
export const useConfirmDialogContext = () => {
  const context = useContext(ConfirmDialogContext);
  if (!context) {
    throw new Error(
      'ConfirmDialog compound components must be used within a ConfirmDialog component'
    );
  }
  return context;
};
