import { useLayoutEffect, RefObject, useCallback } from 'react';
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
  reference?: Element;
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
  const { refs, floatingStyles, update } = useFloating({
    open: true,
    placement,
    middleware: modifiers,
    elements: {
      reference: reference,
      floating: floating
    }
  });

  const onMouseMove = useCallback(
    ({ pageX, pageY }: MouseEvent) => {
      console.log('pageXY', pageX, pageY);
      refs.setPositionReference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: pageX,
            y: pageY,
            left: pageX,
            top: pageY,
            right: pageX,
            bottom: pageY
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
