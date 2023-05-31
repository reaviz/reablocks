import React, { FC, ReactElement } from 'react';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';
import { CloneElement, GlobalOverlay, GlobalOverlayProps, useId } from 'rdk';
import { motion } from 'framer-motion';
import { variants } from './variants';
import css from './Drawer.module.css';
import { DrawerHeader, DrawerHeaderProps } from './DrawerHeader';

export interface DrawerProps extends Omit<GlobalOverlayProps, 'children'> {
  position?: 'start' | 'end' | 'top' | 'bottom';
  size?: string | number;
  className?: string;
  backdropClassName?: string;
  disablePadding?: boolean;
  header?: any;
  showCloseButton?: boolean;
  children?: any;
  headerElement: ReactElement<DrawerHeaderProps, typeof DrawerHeader> | null;
}

export const Drawer: FC<Partial<DrawerProps>> = ({
  className,
  headerElement,
  children,
  open,
  backdropClassName,
  header,
  position,
  size,
  hasBackdrop,
  closeOnEscape,
  closeOnBackdropClick,
  disablePadding,
  showCloseButton,
  onClose
}) => {
  const id = useId();
  const variant = variants[position];

  const style = {
    width: position === 'start' || position === 'end' ? size : 'auto',
    height: position === 'top' || position === 'bottom' ? size : 'auto'
  };

  return (
    <GlobalOverlay
      open={open}
      hasBackdrop={hasBackdrop}
      closeOnEscape={closeOnEscape}
      closeOnBackdropClick={closeOnBackdropClick}
      onClose={onClose}
      backdropClassName={backdropClassName}
    >
      {({ overlayIndex }) => (
        <FocusTrap
          focusTrapOptions={{
            clickOutsideDeactivates: true,
            escapeDeactivates: true,
            fallbackFocus: `#${id}`
          }}
        >
          <div id={id} tabIndex={-1}>
            <motion.div
              initial="initial"
              animate="animate"
              exit="initial"
              variants={variant}
              transition={{
                duration: 0.5,
                ease: [0.04, 0.62, 0.23, 0.98],
                when: 'beforeChildren'
              }}
              style={{ ...style, zIndex: overlayIndex }}
              className={classNames(css.drawer, className, {
                [css.left]: position === 'start',
                [css.right]: position === 'end',
                [css.top]: position === 'top',
                [css.bottom]: position === 'bottom',
                [css.disablePadding]: disablePadding
              })}
            >
              {(header || headerElement) && (
                <CloneElement<DrawerHeaderProps>
                  element={headerElement}
                  showCloseButton={showCloseButton}
                  onClose={onClose}
                >
                  {header}
                </CloneElement>
              )}
              {!header && !headerElement && showCloseButton && (
                <button
                  type="button"
                  className={classNames(
                    css.closeButton,
                    css.headerlessCloseButton
                  )}
                  onClick={onClose}
                >
                  ✕
                </button>
              )}
              <div className={css.content}>
                {typeof children === 'function' ? children() : children}
              </div>
            </motion.div>
          </div>
        </FocusTrap>
      )}
    </GlobalOverlay>
  );
};

Drawer.defaultProps = {
  position: 'end',
  size: '80%',
  hasBackdrop: true,
  closeOnEscape: true,
  closeOnBackdropClick: true,
  disablePadding: false,
  showCloseButton: true,
  headerElement: <DrawerHeader />
};
