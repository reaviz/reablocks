import {
  useImperativeHandle,
  forwardRef,
  FC,
  PropsWithChildren,
  useLayoutEffect,
  useRef,
  useEffect,
  LegacyRef
} from 'react';
import { createPortal } from 'react-dom';
import { useUnmount } from '@/utils/useUnmount';

export interface PortalProps extends PropsWithChildren {
  /**
   * Element to create for the portal.
   */
  element?: string;

  /**
   * Class name to apply to the portal element.
   */
  className?: string;

  /**
   * Callback for portal mounts.
   */
  onMount?: () => void;

  /**
   * Callback for portal unmounts.
   */
  onUnmount?: () => void;
}

export interface PortalRef {
  /**
   * Reference to the portal element.
   */
  ref?: LegacyRef<HTMLElement>;
}

export const Portal: FC<PortalProps & PortalRef> = forwardRef<
  HTMLElement,
  PortalProps
>(({ children, className, element = 'div', onMount, onUnmount }, ref) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (className && elementRef.current) {
      elementRef.current.setAttribute('class', `${className} rdk-portal`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [className, elementRef.current]);

  useLayoutEffect(() => {
    // Create ref to created element once, on mount
    elementRef.current = document.createElement(element);
    onMount?.();
  }, []);

  useUnmount(() => {
    onUnmount?.();
    const ref = elementRef.current;
    if (ref && document.body.contains(ref)) {
      document.body.removeChild(ref);
    }
  });

  useImperativeHandle(ref, () => elementRef.current!);

  if (!elementRef.current) {
    return null;
  }

  if (!mounted.current) {
    mounted.current = true;
    elementRef.current.classList.add('rdk-portal');
    document.body.appendChild(elementRef.current);
  }

  return createPortal(children, elementRef.current) as JSX.Element;
});
