'use client';

import React, { ReactNode, forwardRef, HTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { DrawerTheme } from './DrawerTheme';
import { useOptionalDrawerContext } from './DrawerContext';

export interface DrawerHeaderProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content of the drawer header.
   */
  children?: ReactNode;

  /**
   * The CSS class name for the root element of the component.
   */
  className?: string;

  /**
   * Whether to show the close button in the drawer header.
   * When used in context, defaults to Drawer's showCloseButton prop.
   */
  showCloseButton?: boolean;

  /**
   * Callback when the close button is clicked.
   * When used in context, defaults to Drawer's onClose prop.
   */
  onClose?: () => void;

  /**
   * When true, the component will render its child directly, merging props.
   */
  asChild?: boolean;

  /**
   * Theme for the Drawer Header.
   */
  theme?: DrawerTheme;
}

export const DrawerHeader = forwardRef<HTMLElement, DrawerHeaderProps>(
  (
    {
      children,
      className,
      showCloseButton: showCloseButtonProp,
      onClose: onCloseProp,
      asChild = false,
      theme: customTheme,
      ...props
    },
    ref
  ) => {
    const theme: DrawerTheme = useComponentTheme('drawer', customTheme);
    const context = useOptionalDrawerContext();

    // Use props if provided, otherwise fall back to context values
    const showCloseButton =
      showCloseButtonProp ?? context?.showCloseButton ?? true;
    const onClose = onCloseProp ?? context?.onClose;

    const Comp = asChild ? Slot : 'header';

    return (
      <Comp
        ref={ref as any}
        className={twMerge(theme.header.base, className)}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            <div className="flex-1">
              {typeof children === 'string' ? (
                <h1 className={theme.header.text}>{children}</h1>
              ) : (
                children
              )}
            </div>
            {showCloseButton && onClose && (
              <button
                type="button"
                className={theme.closeButton.base}
                onClick={onClose}
                aria-label="Close"
              >
                ✕
              </button>
            )}
          </>
        )}
      </Comp>
    );
  }
);

// Mark this component as a Drawer slot for detection
DrawerHeader.displayName = 'DrawerHeader';
