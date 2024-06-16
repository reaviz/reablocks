import { useEffect } from 'react';

/**
 * Hook to disable user selection on the body.
 */
export function useUserSelect(active: boolean) {
  useEffect(() => {
    if (active) {
      document.body.style.userSelect = 'none';
      return () => void (document.body.style.userSelect = 'initial');
    }
  }, [active]);
}
