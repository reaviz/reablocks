import React, { FC, Fragment, useCallback, useEffect, useRef } from 'react';
import {
  disableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock-upgrade';
import { OverlayContext } from '../OverlayContext';
import { AnimatePresence } from 'framer-motion';
import { OverlayPortal } from '../OverlayPortal';
import { useExitListener } from '../../ExitListener';
import { Backdrop } from '../../../layers/Backdrop';

export interface GlobalOverlayProps {
  children?: any;
  open: boolean;
  closeOnBackdropClick?: boolean;
  hasBackdrop?: boolean;
  backdropClassName?: string;
  closeOnEscape?: boolean;
  onClose?: () => void;
}

export const GlobalOverlay: FC<GlobalOverlayProps> = ({
  open,
  hasBackdrop = true,
  closeOnEscape = true,
  closeOnBackdropClick = true,
  backdropClassName,
  children,
  onClose
}) => {
  const overlayRef = useRef<any | null>(null);

  const onBackdropClick = useCallback(() => {
    if (closeOnBackdropClick) {
      onClose?.();
    }
  }, [closeOnBackdropClick, onClose]);

  useExitListener({
    ref: overlayRef,
    open,
    onEscape: () => closeOnEscape && onClose?.()
  });

  useEffect(() => {
    if (open && overlayRef.current !== undefined) {
      disableBodyScroll(overlayRef.current, {
        // allowTouchMove determines which elements to allow touchmove events for iOS https://github.com/rick-liruixin/body-scroll-lock-upgrade?tab=readme-ov-file#allowtouchmove
        //@ts-expect-error: allowTouchMove is typed wrong: https://github.com/rick-liruixin/body-scroll-lock-upgrade/issues/21
        allowTouchMove: (el: HTMLElement) => {
          while (el && el !== document.body) {
            if (el.getAttribute('body-scroll-lock-ignore') !== null) {
              return true;
            }
            if (el.parentElement !== null) {
              el = el.parentElement;
            }
          }
          return false;
        }
      });
    } else {
      clearAllBodyScrollLocks();
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [children, open]);

  return (
    <OverlayContext.Provider value={{ close: () => onClose?.() }}>
      <AnimatePresence>
        {open && (
          <OverlayPortal ref={overlayRef}>
            {({ overlayIndex, portalIndex }) => (
              <Fragment>
                {hasBackdrop && (
                  <Backdrop
                    zIndex={overlayIndex as number}
                    portalIndex={portalIndex as number}
                    onClick={onBackdropClick}
                    className={backdropClassName}
                  />
                )}
                <div body-scroll-lock-ignore="true">
                  {children({ overlayIndex, portalIndex })}
                </div>
              </Fragment>
            )}
          </OverlayPortal>
        )}
      </AnimatePresence>
    </OverlayContext.Provider>
  );
};
