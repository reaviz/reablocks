import { createContext } from 'react';

export interface OverlayContextValue {
  /**
   * Closes current overlay.
   */
  close(): void;
}

export const OverlayContext = createContext<OverlayContextValue>({
  close: () => undefined,
});
