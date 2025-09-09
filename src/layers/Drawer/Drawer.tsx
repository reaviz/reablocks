import React, { FC, ReactElement, useState } from 'react';
import FocusTrap from 'focus-trap-react';
import { useId, CloneElement } from '@/utils';
import { GlobalOverlay, GlobalOverlayProps } from '@/utils/Overlay';
import {
  motion,
  MotionNodeAnimationOptions,
  MotionProps,
  TargetAndTransition,
  Transition,
  VariantLabels
} from 'motion/react';
import { variants } from './variants';
import { DrawerHeader, DrawerHeaderProps } from './DrawerHeader';
import { twMerge } from '@/utils';
import { DrawerTheme } from './DrawerTheme';
import { useComponentTheme } from '@/utils';

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
   * Whether the drawer has a backdrop.
   */
  disablePadding?: boolean;

  /**
   * Whether the drawer has a backdrop.
   */
  header?: any;

  /**
   * Whether the drawer has a backdrop.
   */
  showCloseButton?: boolean;

  /**
   * The content of the drawer.
   */
  children?: any;

  /**
   * The React element for the drawer header.
   */
  headerElement: ReactElement<DrawerHeaderProps, typeof DrawerHeader> | null;

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
              {...(animation ? animation : rest)}
              onAnimationComplete={() => {
                // Force a resize event to recalculate the children
                // This is required for child components that are animated
                // like the RangeDouble component
                window.dispatchEvent(new Event('resize'));
              }}
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
