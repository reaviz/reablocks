import React, { FC, useMemo } from 'react';
import classNames from 'classnames';
import { Arrow } from '../../elements/Arrow';
import { TreeContext, TreeContextProps } from './TreeContext';
import css from './Tree.module.css';

export interface TreeProps extends TreeContextProps {
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

export const Tree: FC<TreeProps> = ({
  children,
  className,
  expandedIcon = <Arrow direction="down" className={css.arrow} />,
  collapsedIcon = <Arrow direction="right" className={css.arrow} />,
  ...rest
}) => {
  const values = useMemo(
    () => ({
      expandedIcon,
      collapsedIcon
    }),
    [collapsedIcon, expandedIcon]
  );

  return (
    <TreeContext.Provider value={values}>
      <div className={classNames(css.tree, className)} {...rest}>
        <ul className={css.container}>{children}</ul>
      </div>
    </TreeContext.Provider>
  );
};
