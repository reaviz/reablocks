import React, {
  FC,
  forwardRef,
  useImperativeHandle,
  RefObject,
  useEffect,
  useState,
  useCallback,
  LegacyRef
} from 'react';
import { useExitListener } from '../../ExitListener';
import { Placement, usePosition } from '../../Position';
import { OverlayPortal, portals } from '../OverlayPortal';
import { useId } from '../../../utils/useId';

export interface ConnectedOverlayContentRef {
  updatePosition: () => void;
}

export interface ConnectedOverlayContentProps {
  /**
   * Modifiers to adjust the behavior of the overlay content.
   */
  modifiers?: any;

  /**
   * If true, the overlay content will follow the cursor.
   */
  followCursor?: boolean;

  /**
   * The CSS class name to be applied to the portal of the overlay content.
   */
  portalClassName?: string;

  /**
   * The placement of the overlay content relative to the trigger.
   */
  placement?: Placement;

  /**
   * A reference to the trigger element.
   */
  triggerRef: any;

  /**
   * The children to be rendered within the overlay content.
   */
  children: any;

  /**
   * If true, the overlay content will close when a click is detected on the body.
   */
  closeOnBodyClick?: boolean;

  /**
   * If true, the overlay content will close when the escape key is pressed.
   */
  closeOnEscape?: boolean;

  /**
   * The type of element that will be used as the overlay content.
   */
  elementType?: any;

  /**
   * If true, the overlay content will be appended to the body.
   */
  appendToBody?: boolean;

  /**
   * A function that is called when the overlay content is closed. It receives an optional event object as an argument.
   */
  onClose?: (event?: any) => void;
}

export const ConnectedOverlayContent: FC<
  ConnectedOverlayContentProps & {
    ref?: LegacyRef<ConnectedOverlayContentRef>;
  }
> = forwardRef(
  (
    {
      triggerRef,
      children,
      portalClassName,
      closeOnBodyClick,
      closeOnEscape,
      elementType,
      appendToBody,
      followCursor,
      modifiers,
      placement,
      onClose
    },
    ref
  ) => {
    const id = useId();
    const [overlayIndex, setOverlayIndex] = useState<number | null>(null);
    const [positionRef, popperRef] = usePosition(triggerRef, {
      followCursor,
      modifiers,
      placement
    });

    useImperativeHandle(ref, () => ({
      updatePosition: () => {
        popperRef?.current?.scheduleUpdate();
      }
    }));

    const onClickOutside = useCallback(
      (event: any) => {
        if (closeOnBodyClick) {
          // don't fire if i click the clicker
          let ref: HTMLElement | null = null;
          if ((triggerRef as RefObject<HTMLElement>).current) {
            ref = (triggerRef as RefObject<HTMLElement>).current as HTMLElement;
          } else if ((triggerRef as HTMLElement).contains !== undefined) {
            ref = triggerRef as HTMLElement;
          }

          // Handle parent click containers
          const container = event.target.closest('.rdk-portal');

          // Only close the last one
          const isLast = portals.indexOf(id) === portals.length - 1;

          if (!ref?.contains(event.target) && (isLast || !container)) {
            onClose?.(event);
          }
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [closeOnBodyClick, onClose]
    );

    const onEscape = useCallback(() => {
      if (closeOnEscape) {
        onClose?.();
      }
    }, [closeOnEscape, onClose]);

    useExitListener({
      open: true,
      ref: positionRef,
      onClickOutside,
      onEscape
    });

    useEffect(() => {
      if (positionRef && overlayIndex) {
        positionRef.current.style.zIndex = overlayIndex;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [positionRef.current, overlayIndex]);

    return (
      <OverlayPortal
        id={id}
        ref={positionRef}
        className={portalClassName}
        elementType={elementType}
        appendToBody={appendToBody}
        onMount={event => setOverlayIndex(event.overlayIndex)}
        onUnmount={() => setOverlayIndex(null)}
      >
        {children}
      </OverlayPortal>
    );
  }
);

ConnectedOverlayContent.defaultProps = {
  closeOnBodyClick: true,
  closeOnEscape: true,
  appendToBody: true,
  placement: 'bottom'
};
