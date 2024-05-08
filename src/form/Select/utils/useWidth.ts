import { RefObject, useCallback, useEffect, useState } from 'react';
import { ConnectedOverlayContentRef } from '@/utils/Overlay';

export const useWidth = (
  ref: RefObject<HTMLDivElement>,
  overlayRef: RefObject<ConnectedOverlayContentRef>
) => {
  const [menuWidth, setMenuWidth] = useState<number>(0);

  const updateWidthInternal = useCallback(() => {
    if (ref?.current) {
      const { width } = ref.current.getBoundingClientRect();
      if (width !== menuWidth) {
        setMenuWidth(width);
        return true;
      }
    }
  }, [ref, menuWidth]);

  useEffect(() => {
    updateWidthInternal();
  }, [updateWidthInternal]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateWidthInternal);
      return () => window.removeEventListener('resize', updateWidthInternal);
    }
  }, [updateWidthInternal]);

  const updateWidth = useCallback(() => {
    if (updateWidthInternal()) {
      // trigger event so position is updated
      overlayRef.current?.updatePosition();
    }
  }, [updateWidthInternal, overlayRef]);

  return [menuWidth, updateWidth] as [number, () => void];
};
