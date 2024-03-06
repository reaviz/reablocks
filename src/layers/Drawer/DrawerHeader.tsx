import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '../../utils/Theme/TW';
import { DrawerTheme } from './DrawerTheme';

export interface DrawerHeaderProps {
  children?: any;
  className?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
}

export const DrawerHeader: FC<Partial<DrawerHeaderProps>> = ({
  children,
  className,
  showCloseButton,
  onClose
}) => {
  const theme: DrawerTheme = useComponentTheme('drawer');

  return (
    <header className={twMerge(theme.header.base, className)}>
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
          className={theme.closeButton.base}
          onClick={onClose}
        >
          ✕
        </button>
      )}
    </header>
  );
};
