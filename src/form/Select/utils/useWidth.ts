import {
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState
} from 'react';
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

  useLayoutEffect(() => {
    if (!ref?.current) {
      return;
    }
    const resizeObserver = new ResizeObserver(() => {
      const { width } = ref.current.getBoundingClientRect();
      setMenuWidth(width);
    });
    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [ref]);

  const updateWidth = useCallback(() => {
    if (updateWidthInternal()) {
      // trigger event so position is updated
      overlayRef.current?.updatePosition();
    }
  }, [updateWidthInternal, overlayRef]);

  return [menuWidth, updateWidth] as [number, () => void];
};
