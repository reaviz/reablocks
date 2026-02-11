'use client';

import { createContext, useContext } from 'react';

export interface DrawerContextValue {
  /**
   * Callback to close the drawer.
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

export const DrawerContext = createContext<DrawerContextValue | null>(null);

/**
 * Hook to access the Drawer context.
 * Must be used within a Drawer component.
 */
export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error(
      'Drawer compound components must be used within a Drawer component'
    );
  }
  return context;
};
