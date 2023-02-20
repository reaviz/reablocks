import React, { FC } from 'react';
import classNames from 'classnames';
import css from './Tree.module.css';

export interface TreeProps {
  /**
   * CSS Classname to apply to the tree
   */
  className?: string;

  /**
   * Extra style attributes to apply to the tree
   */
  style?: React.CSSProperties;

  /**
   * Children to render inside the tree
   */
  children?: any;
}

export const Tree: FC<TreeProps> = ({ children, className, ...rest }) => (
  <div className={classNames(css.tree, className)} {...rest}>
    <ul className={css.container}>{children}</ul>
  </div>
);
