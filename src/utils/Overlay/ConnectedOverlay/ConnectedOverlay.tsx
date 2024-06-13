import React, {
  FC,
  useRef,
  useEffect,
  Fragment,
  forwardRef,
  LegacyRef,
  useImperativeHandle,
  useMemo
} from 'react';
import { TriggerTypes, OverlayTrigger } from '@/utils/Overlay/OverlayTrigger';
import { Modifiers, Placement, ReferenceProp } from '@/utils/Position';
import { AnimatePresence } from 'framer-motion';
import { OverlayContext } from '@/utils/Overlay/OverlayContext';
import {
  ConnectedOverlayContent,
  ConnectedOverlayContentRef
} from './ConnectedOverlayContent';

export interface OverlayEvent {
  /**
   * Type of the event.
   */
  type: TriggerTypes;

  /**
   * Native event object.
   */
  nativeEvent: any;
}

export interface ConnectedOverlayProps {
  /**
   * Whether the overlay should be visible.
   */
  open: boolean;

  /**
   * Reference of the overlay to align to.
   */
  reference?: ReferenceProp;

  /**
   * The content of the overlay.
   */
  children?: any;

  /**
   * Content to render in the overlay.
   */
  content: any;

  /**
   * Type of trigger to open the overlay.
   */
  trigger?: TriggerTypes[] | TriggerTypes;

  /**
   * Trigger element to open the overlay.
   */
  triggerElement?: any;

  /**
   * Trigger classname.
   */
  triggerClassName?: string;

  /**
   * Portal classname.
   */
  portalClassName?: string;

  /**
   * Close when the body is clicked or not.
   */
  closeOnBodyClick?: boolean;

  /**
   * Close when escape is pressed or not.
   */
  closeOnEscape?: boolean;

  /**
   * Append the overlay to the body. Almost always want this.
   */
  appendToBody?: boolean;

  /**
   * Overlay element type.
   */
  elementType?: string;

  /**
   * Position modifiers.
   */
  modifiers?: Modifiers;

  /**
   * Overlay should follow cursor or not.
   */
  followCursor?: boolean;

  /**
   * Placement of the overlay.
   */
  placement?: Placement;

  /**
   * Event called when the overlay is opened.
   */
  onOpen?: (event?: any) => void;

  /**
   * Event called when the overlay is closed.
   */
  onClose?: (event?: any) => void;
}

export const ConnectedOverlay: FC<
  ConnectedOverlayProps & {
    ref?: LegacyRef<ConnectedOverlayContentRef>;
  }
> = forwardRef(
  (
    {
      reference,
      children,
      open,
      content,
      triggerElement,
      triggerClassName,
      trigger = 'click' as TriggerTypes,
      onOpen,
      onClose,
      ...rest
    },
    ref
  ) => {
    const mounted = useRef<boolean>(false);
    const overlayTriggerRef = useRef<any | null>(null);
    const contentRef = useRef<any | null>(null);
    const triggerRef = reference || overlayTriggerRef;

    useImperativeHandle(ref, () => ({
      updatePosition: () => {
        contentRef.current?.updatePosition();
      }
    }));

    useEffect(() => {
      if (mounted.current) {
        if (!open) {
          onClose?.();
        } else {
          onOpen?.();
        }
      }
    }, [open]);

    useEffect(() => {
      if (!mounted.current) {
        mounted.current = true;
      }
    });

    const providerValue = useMemo(
      () => ({
        close: () => onClose?.()
      }),
      [onClose]
    );

    return (
      <OverlayContext.Provider value={providerValue}>
        {children && (
          <Fragment>
            {trigger ? (
              <OverlayTrigger
                elementType={triggerElement}
                ref={overlayTriggerRef}
                className={triggerClassName}
                trigger={trigger}
                onOpen={onOpen}
                onClose={onClose}
              >
                {children}
              </OverlayTrigger>
            ) : (
              children
            )}
          </Fragment>
        )}
        <AnimatePresence>
          {open && (
            <ConnectedOverlayContent
              {...rest}
              ref={contentRef}
              triggerRef={triggerRef}
              onClose={onClose}
            >
              {content}
            </ConnectedOverlayContent>
          )}
        </AnimatePresence>
      </OverlayContext.Provider>
    );
  }
);
