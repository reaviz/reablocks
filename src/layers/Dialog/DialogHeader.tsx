import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '../../utils';

export interface DialogHeaderProps {
  children?: any;
  className?: string;
  showCloseButton?: boolean;
  disablePadding?: boolean;
  onClose?: () => void;
}

export const DialogHeader: FC<Partial<DialogHeaderProps>> = ({
  children,
  className,
  showCloseButton,
  disablePadding,
  onClose
}) => {
  const theme = useComponentTheme('dialog');

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
        >
          ✕
        </button>
      )}
    </header>
  );
};
