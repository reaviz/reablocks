import {
  useLayoutEffect,
  RefObject,
  useCallback,
  useEffect,
  useMemo
} from 'react';
import {
  useFloating,
  Placement as FloatingUIPlacement,
  Middleware,
  flip,
  limitShift,
  shift
} from '@floating-ui/react';

export type Placement = FloatingUIPlacement;
export type Modifiers = Middleware[];

export type ReferenceProp =
  | ReferenceObject
  | HTMLElement
  | RefObject<HTMLElement>;

export interface ReferenceObject {
  top: number;
  left: number;
  height: number;
  width: number;
}

export interface PositionOptions {
  reference?: Element | ReferenceObject;
  floating?: HTMLElement;
  placement?: Placement;
  modifiers?: Modifiers;
  followCursor?: boolean;
}
/**
 * Hook for positioning an element relative to another.
 */
export const usePosition = ({
  reference,
  floating,
  followCursor,
  placement = 'top',
  modifiers = [flip(), shift({ limiter: limitShift() })]
}: PositionOptions = {}) => {
  const isVirtualElement = useMemo(
    () => !(reference as Element)?.nodeType,
    [reference]
  );

  const { refs, floatingStyles, update } = useFloating({
    open: true,
    placement,
    middleware: modifiers,
    elements: {
      reference: isVirtualElement ? null : (reference as Element),
      floating: floating
    }
  });

  useEffect(() => {
    if (isVirtualElement && reference && !followCursor) {
      const refObject = reference as ReferenceObject;
      refs.setPositionReference({
        getBoundingClientRect() {
          return {
            width: refObject.width,
            height: refObject.height,
            x: refObject.left,
            y: refObject.top,
            left: refObject.left,
            top: refObject.top,
            right: refObject.left + refObject.width,
            bottom: refObject.top + refObject.height
          };
        }
      });
    }
  }, [reference, refs, isVirtualElement, followCursor]);

  const onMouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent) => {
      // Virtual reference object for cursor position.
      refs.setPositionReference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: clientX,
            y: clientY,
            left: clientX,
            top: clientY,
            right: clientX,
            bottom: clientY
          };
        }
      });
    },
    [refs]
  );

  useLayoutEffect(() => {
    if (followCursor) {
      window.addEventListener('mousemove', onMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [followCursor, onMouseMove]);

  return {
    refs,
    anchorRef: refs.reference,
    floatingRef: refs.floating,
    floatingStyles,
    update
  };
};
