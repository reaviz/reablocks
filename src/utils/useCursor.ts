import { useEffect } from 'react';

/**
 * Hook for setting body cursors.
 *
 * Credits: https://github.com/pmndrs/drei#usecursor
 */
export function useCursor(
  hovered: boolean,
  onPointerOver = 'pointer',
  onPointerOut = 'auto'
) {
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = onPointerOver;
      return () => void (document.body.style.cursor = onPointerOut);
    }
  }, [hovered, onPointerOut, onPointerOver]);
}
