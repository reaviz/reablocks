import React, { FC, ReactElement } from 'react';
import classNames from 'classnames';
import { CloneElement, GlobalOverlay, GlobalOverlayProps, useId } from 'rdk';
import FocusTrap from 'focus-trap-react';
import { motion } from 'framer-motion';
import css from './Dialog.module.css';
import { DialogHeader, DialogHeaderProps } from './DialogHeader';

export interface DialogProps extends Omit<GlobalOverlayProps, 'children'> {
  className?: string;
  innerClassName?: string;
  size?: string | number;
  showCloseButton?: boolean;
  children?: any;
  disablePadding?: boolean;
  footer?: any;
  header?: any;
  headerElement: ReactElement<DialogHeaderProps, typeof DialogHeader> | null;
}

export const Dialog: FC<Partial<DialogProps>> = ({
  children,
  open,
  className,
  innerClassName,
  header,
  headerElement,
  footer,
  onClose,
  size,
  disablePadding,
  hasBackdrop,
  showCloseButton,
  closeOnBackdropClick,
  closeOnEscape
}) => {
  const id = useId();

  return (
    <GlobalOverlay
      open={open}
      hasBackdrop={hasBackdrop}
      closeOnEscape={closeOnEscape}
      closeOnBackdropClick={closeOnBackdropClick}
      onClose={onClose}
    >
      {({ overlayIndex }) => (
        <FocusTrap
          focusTrapOptions={{
            clickOutsideDeactivates: true,
            escapeDeactivates: true,
            fallbackFocus: `#${id}-content`
          }}
        >
          <div id={id} tabIndex={-1}>
            <motion.div
              initial={{ opacity: 0, y: '-20%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '20%' }}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              style={{ zIndex: overlayIndex }}
              className={classNames(css.dialog, className, {
                [css.disableHeader]: !header,
                [css.disablePadding]: disablePadding
              })}
            >
              <div
                className={classNames(css.inner, innerClassName)}
                style={{ width: size }}
              >
                {(header || headerElement) && (
                  <CloneElement<DialogHeaderProps>
                    element={headerElement}
                    showCloseButton={showCloseButton}
                    onClose={onClose}
                  >
                    {header}
                  </CloneElement>
                )}
                <section id={`${id}-content`} className={css.content}>
                  {typeof children === 'function' ? children() : children}
                </section>
                {footer && <footer className={css.footer}>{footer}</footer>}
              </div>
            </motion.div>
          </div>
        </FocusTrap>
      )}
    </GlobalOverlay>
  );
};

Dialog.defaultProps = {
  size: '50%',
  disablePadding: false,
  hasBackdrop: true,
  showCloseButton: true,
  closeOnBackdropClick: true,
  closeOnEscape: true,
  headerElement: <DialogHeader />
};
