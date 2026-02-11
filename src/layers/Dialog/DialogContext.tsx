'use client';

import { createContext, useContext } from 'react';

export interface DialogContextValue {
  /**
   * Callback to close the dialog.
   */
  onClose?: () => void;

  /**
   * Whether to show the close button.
   */
  showCloseButton?: boolean;

  /**
   * Whether padding is disabled.
   */
  disablePadding?: boolean;

  /**
   * ID for the heading element, used for aria-labelledby.
   */
  headingId?: string;
}

export const DialogContext = createContext<DialogContextValue | null>(null);

/**
 * Hook to access the Dialog context.
 * Must be used within a Dialog component.
 */
export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error(
      'Dialog compound components must be used within a Dialog component'
    );
  }
  return context;
};
