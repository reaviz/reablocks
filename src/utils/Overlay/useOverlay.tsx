import { useContext } from 'react';
import { OverlayContext } from './OverlayContext';

/**
 * Hook for using the Overlay's context.
 */
export const useOverlay = () => {
  const context = useContext(OverlayContext);

  if (context === undefined) {
    throw new Error(
      '`useOverlay` hook can only be used inside a overlay component.'
    );
  }

  return context;
};
