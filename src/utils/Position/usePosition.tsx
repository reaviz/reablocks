import { useRef, useLayoutEffect, RefObject, useMemo } from 'react';
import PopperJS from 'popper.js';

export type Placement = PopperJS.Placement;

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
  placement?: Placement;
  modifiers?: PopperJS.Modifiers;
  followCursor?: boolean;
}

export const usePosition = (
  reference: ReferenceProp,
  { followCursor, placement, modifiers }: PositionOptions = {}
) => {
  const elementRef = useRef<any | null>(null);
  const popper = useRef<PopperJS | null>(null);
  const mouse = useRef<{ pageX: number; pageY: number }>({
    pageX: 0,
    pageY: 0
  });

  // Find the real reference pointer for updating
  const refPointer = (reference as RefObject<HTMLElement>).current;

  const popperRef = useMemo(() => {
    const refObj = reference as RefObject<HTMLElement>;
    if (refObj.current !== undefined) {
      return refObj.current;
    }

    const refElement = reference as HTMLElement;
    if (followCursor) {
      return {
        getBoundingClientRect: () => ({
          top: mouse.current.pageY,
          right: mouse.current.pageX,
          bottom: mouse.current.pageY,
          left: mouse.current.pageX,
          width: 0,
          height: 0
        }),
        clientWidth: 0,
        clientHeight: 0
      };
    } else if (refElement && !refElement.getBoundingClientRect) {
      const { top, left, width, height } = reference as ReferenceObject;

      return {
        getBoundingClientRect: () => ({
          top,
          left,
          width,
          bottom: top - height,
          right: left - width,
          height
        }),
        clientWidth: width,
        clientHeight: height
      };
    }

    return refElement;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followCursor, reference, refPointer, mouse]);

  useLayoutEffect(() => {
    let rqf;

    const onMouseMove = ({ pageX, pageY }: MouseEvent) => {
      mouse.current = { pageX, pageY };
      popper.current?.scheduleUpdate();
    };

    const onWindowScroll = () => {
      rqf = requestAnimationFrame(() => {
        popper.current?.scheduleUpdate();
      });
    };

    if (elementRef.current && popperRef) {
      //@ts-ignore
      popper.current = new PopperJS(popperRef, elementRef.current, {
        placement: placement || 'top',
        modifiers: modifiers || {},
        onCreate: () => {
          if (typeof window !== 'undefined') {
            window.addEventListener('scroll', onWindowScroll);

            if (followCursor) {
              window.addEventListener('mousemove', onMouseMove);
            }
          }
        }
      });
    }

    return () => {
      if (!elementRef.current) {
        popper.current?.destroy();

        cancelAnimationFrame(rqf);
        if (typeof window !== 'undefined') {
          window.removeEventListener('scroll', onWindowScroll);

          if (followCursor) {
            window.removeEventListener('mousemove', onMouseMove);
          }
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef.current]);

  useLayoutEffect(() => {
    if (popper.current) {
      popper.current.reference = popperRef as any;
      popper.current.scheduleUpdate();
    }
  }, [popperRef]);

  return [elementRef, popper];
};
