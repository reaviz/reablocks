'use client';

import React, { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { DialogTheme } from './DialogTheme';
import { useOptionalDialogContext } from './DialogContext';

export interface DialogHeaderProps {
  /**
   * The content of the dialog header.
   */
  children?: ReactNode;

  /**
   * The CSS class name for the root element of the component.
   */
  className?: string;

  /**
   * Whether to show the close button in the dialog header.
   * When used in context, defaults to Dialog's showCloseButton prop.
   */
  showCloseButton?: boolean;

  /**
   * Whether to disable padding for the dialog header.
   * When used in context, inherits from Dialog's disablePadding prop.
   */
  disablePadding?: boolean;

  /**
   * Callback when the close button is clicked.
   * When used in context, defaults to Dialog's onClose prop.
   */
  onClose?: () => void;

  /**
   * Theme for the Dialog Header.
   */
  theme?: DialogTheme;
}

export const DialogHeader: FC<DialogHeaderProps> = ({
  children,
  className,
  showCloseButton: showCloseButtonProp,
  disablePadding: disablePaddingProp,
  onClose: onCloseProp,
  theme: customTheme
}) => {
  const theme = useComponentTheme<DialogTheme>('dialog', customTheme);
  const context = useOptionalDialogContext();

  // Use props if provided, otherwise fall back to context values
  const showCloseButton =
    showCloseButtonProp ?? context?.showCloseButton ?? true;
  const disablePadding = disablePaddingProp ?? context?.disablePadding ?? false;
  const onClose = onCloseProp ?? context?.onClose;

  return (
    <header
      className={twMerge(theme.header.base, className, disablePadding && 'p-0')}
    >
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
          className={theme.header.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      )}
    </header>
  );
};

// Mark this component as a Dialog slot for detection
DialogHeader.displayName = 'DialogHeader';
