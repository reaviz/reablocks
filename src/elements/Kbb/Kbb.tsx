import React, { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { Chip } from '../Chip';
import css from './Kbb.module.css';

export interface KbbProps extends PropsWithChildren {
  /**
   * Additional class names.
   */
  className?: string;
}

export const Kbb: FC<KbbProps> = ({ className, children }) => (
  <Chip size="small" className={classNames(css.chip, className)}>
    <kbd>{children}</kbd>
  </Chip>
);
