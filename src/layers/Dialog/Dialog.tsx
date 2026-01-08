'use client';

import React, { FC, ReactElement, ReactNode, useMemo } from 'react';
import { GlobalOverlay, GlobalOverlayProps } from '@/utils/Overlay';
import {
  useId,
  CloneElement,
  cn,
  hasSlotComponents,
  extractSlots
} from '@/utils';
import FocusTrap from 'focus-trap-react';
import {
  motion,
  MotionNodeAnimationOptions,
  MotionProps,
  TargetAndTransition,
  Transition,
  VariantLabels
} from 'motion/react';
import { DialogHeader, DialogHeaderProps } from './DialogHeader';
import { DialogContext, DialogContextValue } from './DialogContext';
import { useComponentTheme } from '@/utils';
import { DialogTheme } from './DialogTheme';

export interface DialogProps
  extends Omit<GlobalOverlayProps, 'children'>,
    Omit<MotionProps, 'children'> {
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
   * Supports slot-based approach with DialogHeader, DialogContent, and DialogFooter.
   */
  children?: ReactNode | (() => ReactNode);

  /**
   * Whether to disable padding for the dialog content.
   */
  disablePadding?: boolean;

  /**
   * The footer of the dialog.
   * @deprecated Use DialogFooter slot component instead.
   * @example
   * // Instead of:
   * <Dialog footer={<Button>Save</Button>}>...</Dialog>
   *
   * // Use:
   * <Dialog>
   *   <DialogContent>...</DialogContent>
   *   <DialogFooter><Button>Save</Button></DialogFooter>
   * </Dialog>
   */
  footer?: ReactNode;

  /**
   * The header of the dialog.
   * @deprecated Use DialogHeader slot component instead.
   * @example
   * // Instead of:
   * <Dialog header="My Title">...</Dialog>
   *
   * // Use:
   * <Dialog>
   *   <DialogHeader>My Title</DialogHeader>
   *   <DialogContent>...</DialogContent>
   * </Dialog>
   */
  header?: ReactNode;

  /**
   * The React element for the dialog header.
   * @deprecated Use DialogHeader slot component instead.
   */
  headerElement?: ReactElement<DialogHeaderProps, typeof DialogHeader> | null;

  /**
   * Theme for the Dialog.
   */
  theme?: DialogTheme;

  /**
   * @deprecated Use animation configuration instead.
   */
  initial?: TargetAndTransition | VariantLabels | boolean;

  /**
   * @deprecated Use animation configuration instead.
   */
  animate?: TargetAndTransition | VariantLabels | boolean;

  /**
   * @deprecated Use animation configuration instead.
   */
  exit?: TargetAndTransition | VariantLabels;

  /**
   * @deprecated Use animation configuration instead.
   */
  transition?: Transition;

  /**
   * Animation configuration for the dialog.
   */
  animation?: MotionNodeAnimationOptions;
}

// Slot component display names for detection
const DIALOG_SLOT_NAMES = [DialogHeader.displayName, DialogContent.displayName, DialogFooter.displayName];
const DIALOG_SLOT_MAP = {
  DialogHeader: 'header',
  DialogContent: 'content',
  DialogFooter: 'footer'
} as const;

type DialogSlots = {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
};

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
  animation,
  theme: customTheme,
  ...rest
}) => {
  const id = useId();
  const theme: DialogTheme = useComponentTheme('dialog', customTheme);

  // Resolve children if it's a function
  const resolvedChildren =
    typeof children === 'function' ? children() : children;

  // Detect if using slot-based approach
  const useSlots = useMemo(
    () => hasSlotComponents(resolvedChildren, DIALOG_SLOT_NAMES),
    [resolvedChildren]
  );

  // Extract slots if using slot-based approach
  const slots = useMemo(
    () =>
      useSlots
        ? extractSlots<DialogSlots>(resolvedChildren, DIALOG_SLOT_MAP)
        : null,
    [useSlots, resolvedChildren]
  );

  // Context value for slot components
  const contextValue: DialogContextValue = useMemo(
    () => ({
      onClose,
      showCloseButton,
      disablePadding
    }),
    [onClose, showCloseButton, disablePadding]
  );

  // Render slot-based content
  const renderSlotContent = () => (
    <>
      {slots?.header}
      {slots?.content}
      {slots?.other.length > 0 && slots.other}
      {slots?.footer}
    </>
  );

  // Render legacy props-based content
  const renderLegacyContent = () => (
    <>
      {(header !== undefined || headerElement) && (
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
          'p-[20px]': header === undefined,
          'pt-0 pb-0 pl-0 pr-0': disablePadding
        })}
      >
        {resolvedChildren}
      </section>
      {footer && <footer className={theme.footer}>{footer}</footer>}
    </>
  );

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
              {...(animation ? animation : rest)}
            >
              <div
                className={cn(theme.inner, innerClassName)}
                style={{ width: size }}
              >
                <DialogContext.Provider value={contextValue}>
                  {useSlots ? renderSlotContent() : renderLegacyContent()}
                </DialogContext.Provider>
              </div>
            </motion.div>
          </div>
        </FocusTrap>
      )}
    </GlobalOverlay>
  );
};
