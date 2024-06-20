import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { DialogTheme } from './DialogTheme';

export interface DialogHeaderProps {
  /**
   * The content of the dialog header.
   */
  children?: any;

  /**
   * The CSS class name for the root element of the component.
   */
  className?: string;

  /**
   * Whether to show the close button in the dialog header.
   */
  showCloseButton?: boolean;

  /**
   * Whether to disable padding for the dialog header.
   */
  disablePadding?: boolean;

  /**
   * Callback when the close button is clicked.
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
  showCloseButton,
  disablePadding,
  onClose,
  theme: customTheme
}) => {
  const theme = useComponentTheme('dialog', customTheme);

  return (
    <header
      className={twMerge(
        theme.header.base,
        className,
        disablePadding && 'pt-0 pb-0 pl-0 pr-0'
      )}
    >
      <div>
        {typeof children === 'string' ? (
          <h1 className={theme.header.text}>{children}</h1>
        ) : (
          children
        )}
      </div>
      {showCloseButton && (
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
