import { useEffect } from 'react';

/**
 * Set the body select style to none.
 */
export function useUserSelect(active: boolean) {
  useEffect(() => {
    if (active) {
      document.body.style.userSelect = 'none';
      return () => void (document.body.style.userSelect = 'initial');
    }
  }, [active]);
}
