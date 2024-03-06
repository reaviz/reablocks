import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { useComponentTheme } from '../../../utils/Theme/TW';

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
  const theme = useComponentTheme('dialogHeader');

  return (
    <header
      className={twMerge(
        theme.base,
        className,
        disablePadding && 'pt-0 pb-0 pl-0 pr-0'
      )}
    >
      <div>
        {typeof children === 'string' ? (
          <h1 className={theme.text}>{children}</h1>
        ) : (
          children
        )}
      </div>
      {showCloseButton && (
        <button type="button" className={theme.closeButton} onClick={onClose}>
          ✕
        </button>
      )}
    </header>
  );
};