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
    <div>
      {typeof children === 'string' ? (
        <h1 className={css.headerText}>{children}</h1>
      ) : (
        children
      )}
    </div>
    {showCloseButton && (
      <button type="button" className={css.closeButton} onClick={onClose}>
        ✕
      </button>
    )}
  </header>
);
