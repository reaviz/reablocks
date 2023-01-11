import React, { FC } from 'react';
import classNames from 'classnames';
import css from './Drawer.module.css';

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
}) => (
  <header className={classNames(css.header, className)}>
    <h1>{children}</h1>
    {showCloseButton && (
      <button type="button" className={css.closeButton} onClick={onClose}>
        ✕
      </button>
    )}
  </header>
);
