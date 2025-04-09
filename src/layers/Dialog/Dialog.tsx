import React, { FC, ReactElement } from 'react';
import { GlobalOverlay, GlobalOverlayProps } from '@/utils/Overlay';
import { useId, CloneElement, cn } from '@/utils';
import FocusTrap from 'focus-trap-react';
import { motion, MotionProps } from 'motion/react';
import { DialogHeader, DialogHeaderProps } from './DialogHeader';
import { useComponentTheme } from '@/utils';
import { DialogTheme } from './DialogTheme';

export interface DialogProps
  extends Omit<GlobalOverlayProps, 'children'>,
    MotionProps {
  /**
   * The CSS class name for the root element of the component.
   */
  className?: string;

  /**
   * The CSS class name for the inner content element of the component.
   */
  innerClassName?: string;

  /**
   * The CSS class name for the content of the component.
   */
  contentClassName?: string;

  /**
   * The size of the dialog. Can be a string or a number.
   */
  size?: string | number;

  /**
   * Whether to show the close button in the dialog header.
   */
  showCloseButton?: boolean;

  /**
   * The content of the dialog.
   */
  children?: any | (() => any);

  /**
   * Whether to disable padding for the dialog content.
   */
  disablePadding?: boolean;

  /**
   * The footer of the dialog.
   */
  footer?: any;

  /**
   * The header of the dialog.
   */
  header?: any;

  /**
   * The React element for the dialog header.
   */
  headerElement?: ReactElement<DialogHeaderProps, typeof DialogHeader> | null;

  /**
   * Theme for the Dialog.
   */
  theme?: DialogTheme;
}

export const Dialog: FC<DialogProps> = ({
  children,
  open,
  className,
  innerClassName,
  contentClassName,
  header,
  headerElement = <DialogHeader />,
  footer,
  onClose,
  size = '50%',
  disablePadding = false,
  hasBackdrop = true,
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  theme: customTheme,
  ...rest
}) => {
  const id = useId();
  const theme: DialogTheme = useComponentTheme('dialog', customTheme);

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
              className={cn(theme.base, className)}
              {...rest}
            >
              <div
                className={cn(theme.inner, innerClassName)}
                style={{ width: size }}
              >
                {(header || headerElement) && (
                  <CloneElement<DialogHeaderProps>
                    element={headerElement}
                    showCloseButton={showCloseButton}
                    disablePadding={disablePadding}
                    onClose={onClose}
                  >
                    {header}
                  </CloneElement>
                )}
                <section
                  id={`${id}-content`}
                  className={cn(theme.content, contentClassName, {
                    'p-[20px]': !header,
                    'pt-0 pb-0 pl-0 pr-0': disablePadding
                  })}
                >
                  {typeof children === 'function' ? children() : children}
                </section>
                {footer && <footer className={theme.footer}>{footer}</footer>}
              </div>
            </motion.div>
          </div>
        </FocusTrap>
      )}
    </GlobalOverlay>
  );
};
