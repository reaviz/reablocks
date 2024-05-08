import React, { FC, ReactElement } from 'react';
import FocusTrap from 'focus-trap-react';
import { useId, CloneElement } from '@/utils';
import { GlobalOverlay, GlobalOverlayProps } from '@/utils/Overlay';
import { motion } from 'framer-motion';
import { variants } from './variants';
import { DrawerHeader, DrawerHeaderProps } from './DrawerHeader';
import { twMerge } from 'tailwind-merge';
import { DrawerTheme } from './DrawerTheme';
import { useComponentTheme } from '@/utils';

export interface DrawerProps extends Omit<GlobalOverlayProps, 'children'> {
  position?: 'start' | 'end' | 'top' | 'bottom';
  size?: string | number;
  className?: string;
  contentClassName?: string;
  backdropClassName?: string;
  disablePadding?: boolean;
  header?: any;
  showCloseButton?: boolean;
  children?: any;
  headerElement: ReactElement<DrawerHeaderProps, typeof DrawerHeader> | null;
  theme?: DrawerTheme;
}

export const Drawer: FC<Partial<DrawerProps>> = ({
  className,
  contentClassName,
  headerElement = <DrawerHeader />,
  children,
  open,
  backdropClassName,
  header,
  position = 'end',
  size = '80%',
  hasBackdrop = true,
  closeOnEscape = true,
  closeOnBackdropClick = true,
  disablePadding = false,
  showCloseButton = true,
  onClose,
  theme: customTheme
}) => {
  const id = useId();
  const variant = variants[position];

  const style = {
    width: position === 'start' || position === 'end' ? size : 'auto',
    height: position === 'top' || position === 'bottom' ? size : 'auto'
  };

  const theme: DrawerTheme = useComponentTheme('drawer', customTheme);

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
              className={twMerge(
                theme.base,
                theme.positions[position],
                disablePadding && theme.disablePadding,
                className
              )}
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
                  className={twMerge(
                    theme.closeButton.base,
                    theme.closeButton.headerless
                  )}
                  onClick={onClose}
                >
                  ✕
                </button>
              )}
              <div className={twMerge(theme.content, contentClassName)}>
                {typeof children === 'function' ? children() : children}
              </div>
            </motion.div>
          </div>
        </FocusTrap>
      )}
    </GlobalOverlay>
  );
};
