import FocusTrap from 'focus-trap-react';
import type {
  MotionNodeAnimationOptions,
  MotionProps,
  TargetAndTransition,
  Transition,
  VariantLabels
} from 'motion/react';
import { motion } from 'motion/react';
import type { FC, ReactElement, ReactNode } from 'react';
import { useMemo } from 'react';
import React from 'react';

import {
  CloneElement,
  extractSlots,
  hasSlotComponents,
  useComponentTheme,
  useId
} from '@/utils';
import { twMerge } from '@/utils';
import type { GlobalOverlayProps } from '@/utils/Overlay';
import { GlobalOverlay } from '@/utils/Overlay';

import type { DrawerContextValue } from './DrawerContext';
import { DrawerContext } from './DrawerContext';
import type { DrawerHeaderProps } from './DrawerHeader';
import { DrawerHeader } from './DrawerHeader';
import type { DrawerTheme } from './DrawerTheme';
import { variants } from './variants';

export interface DrawerProps
  extends Omit<GlobalOverlayProps, 'children'>,
    MotionProps {
  /**
   * Position of the drawer.
   */
  position?: 'start' | 'end' | 'top' | 'bottom';

  /**
   * Size of the drawer.
   */
  size?: string | number;

  /**
   * CSS class name for the drawer.
   */
  className?: string;

  /**
   * CSS class name for the content of the drawer.
   */
  contentClassName?: string;

  /**
   * CSS class name for the backdrop of the drawer.
   */
  backdropClassName?: string;

  /**
   * Whether to disable padding for the drawer content.
   */
  disablePadding?: boolean;

  /**
   * The header of the drawer.
   * @deprecated Use DrawerHeader slot component instead.
   * @example
   * // Instead of:
   * <Drawer header="My Title">...</Drawer>
   *
   * // Use:
   * <Drawer>
   *   <DrawerHeader>My Title</DrawerHeader>
   *   <DrawerContent>...</DrawerContent>
   * </Drawer>
   */
  header?: ReactNode;

  /**
   * Whether to show the close button.
   */
  showCloseButton?: boolean;

  /**
   * The content of the drawer.
   * Supports slot-based approach with DrawerHeader, DrawerContent, and DrawerFooter.
   */
  children?: ReactNode;

  /**
   * The React element for the drawer header.
   * @deprecated Use DrawerHeader slot component instead.
   */
  headerElement?: ReactElement<DrawerHeaderProps, typeof DrawerHeader> | null;

  /**
   * Theme for the Drawer.
   */
  theme?: DrawerTheme;

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
   * Animation configuration for the drawer.
   */
  animation?: MotionNodeAnimationOptions;
}

// Slot component display names for detection
const DRAWER_SLOT_NAMES = ['DrawerHeader', 'DrawerContent', 'DrawerFooter'];
const DRAWER_SLOT_MAP = {
  DrawerHeader: 'header',
  DrawerContent: 'content',
  DrawerFooter: 'footer'
} as const;

type DrawerSlots = {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
};

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
  theme: customTheme,
  animation,
  ...rest
}) => {
  const id = useId();
  const variant = variants[position];

  const style = {
    width: position === 'start' || position === 'end' ? size : 'auto',
    height: position === 'top' || position === 'bottom' ? size : 'auto'
  };

  const theme: DrawerTheme = useComponentTheme('drawer', customTheme);

  // Detect if using slot-based approach
  const useSlots = useMemo(
    () => hasSlotComponents(children, DRAWER_SLOT_NAMES),
    [children]
  );

  // Extract slots if using slot-based approach
  const slots = useMemo(
    () =>
      useSlots
        ? extractSlots<DrawerSlots>(
            children,
            DRAWER_SLOT_MAP as Record<string, keyof DrawerSlots>
          )
        : null,
    [useSlots, children]
  );

  // Context value for slot components
  const contextValue: DrawerContextValue = useMemo(
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
        {typeof children === 'function'
          ? (children as () => ReactNode)()
          : children}
      </div>
    </>
  );

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
                useSlots && 'flex flex-col',
                className
              )}
              {...(animation ? animation : rest)}
              onAnimationComplete={() => {
                // Force a resize event to recalculate the children
                // This is required for child components that are animated
                // like the RangeDouble component
                window.dispatchEvent(new Event('resize'));
              }}
            >
              <DrawerContext.Provider value={contextValue}>
                {useSlots ? renderSlotContent() : renderLegacyContent()}
              </DrawerContext.Provider>
            </motion.div>
          </div>
        </FocusTrap>
      )}
    </GlobalOverlay>
  );
};
