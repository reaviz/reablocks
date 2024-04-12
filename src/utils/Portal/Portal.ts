import {
  useImperativeHandle,
  forwardRef,
  FC,
  PropsWithChildren,
  useLayoutEffect,
  useRef,
  Ref,
  useEffect
} from 'react';
import { createPortal } from 'react-dom';
import { useUnmount } from '../../helpers/useUnmount';

export interface PortalProps extends PropsWithChildren {
  element?: string;
  className?: string;
  onMount?: () => void;
  onUnmount?: () => void;
}

export const Portal: FC<PortalProps & { ref?: Ref<HTMLElement> }> = forwardRef(
  ({ children, className, element = 'div', onMount, onUnmount }, ref) => {
    const elementRef = useRef<HTMLElement | null>(null);
    const mounted = useRef<boolean>(false);

    useEffect(() => {
      if (className && elementRef.current) {
        elementRef.current.setAttribute('class', `${className} rdk-portal`);
      }
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
  }
);
