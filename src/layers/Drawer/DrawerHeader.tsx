import React, { FC } from 'react';
import { twMerge } from '@/utils';
import { useComponentTheme } from '@/utils';
import { DrawerTheme } from './DrawerTheme';

export interface DrawerHeaderProps {
  /**
   * The content of the drawer header.
   */
  children?: any;

  /**
   * The CSS class name for the root element of the component.
   */
  className?: string;

  /**
   * Whether to show the close button in the drawer header.
   */
  showCloseButton?: boolean;

  /**
   * Callback when the close button is clicked.
   */
  onClose?: () => void;

  /**
   * Theme for the Drawer Header.
   */
  theme?: DrawerTheme;
}

export const DrawerHeader: FC<DrawerHeaderProps> = ({
  children,
  className,
  showCloseButton,
  onClose,
  theme: customTheme
}) => {
  const theme: DrawerTheme = useComponentTheme('drawer', customTheme);

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
          aria-label="Close"
        >
          ✕
        </button>
      )}
    </header>
  );
};
