import React, { FC, useMemo } from 'react';
import { Arrow } from '../../elements/Arrow';
import { TreeContext, TreeContextProps } from './TreeContext';
import { TreeTheme } from './TreeTheme';
import { useComponentTheme } from '../../utils/Theme/TW';
import { twMerge } from 'tailwind-merge';

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
  expandedIcon,
  collapsedIcon,
  ...rest
}) => {
  const theme: TreeTheme = useComponentTheme('tree');
  expandedIcon = expandedIcon ?? (
    <Arrow direction="down" className={theme.arrow} />
  );
  collapsedIcon = collapsedIcon ?? (
    <Arrow direction="right" className={theme.arrow} />
  );

  const values = useMemo(
    () => ({
      expandedIcon,
      collapsedIcon
    }),
    [collapsedIcon, expandedIcon]
  );

  return (
    <TreeContext.Provider value={values}>
      <div className={twMerge(theme.tree, className)} {...rest}>
        <ul className={theme.base}>{children}</ul>
      </div>
    </TreeContext.Provider>
  );
};
