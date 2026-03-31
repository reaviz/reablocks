import React, { FC, PropsWithChildren, useMemo } from 'react';
import ArrowDownIcon from '@/assets/icons/arrow-down.svg?react';
import ArrowUpIcon from '@/assets/icons/arrow-up.svg?react';
import { TreeContext, TreeContextProps } from './TreeContext';
import { TreeTheme } from './TreeTheme';
import { cn, useComponentTheme } from '@/utils';

export type TreeProps = {
  /**
   * CSS Classname to apply to the tree
   */
  className?: string;

  /**
   * Extra style attributes to apply to the tree
   */
  style?: React.CSSProperties;

  /**
   * Theme for the Tree
   */
  theme?: TreeTheme;
} & TreeContextProps &
  PropsWithChildren;

export const Tree: FC<TreeProps> = ({
  children,
  className,
  expandedIcon,
  collapsedIcon,
  theme: customTheme,
  ...rest
}) => {
  const theme: TreeTheme = useComponentTheme('tree', customTheme);

  expandedIcon = expandedIcon ?? <ArrowUpIcon className={theme.arrow} />;
  collapsedIcon = collapsedIcon ?? <ArrowDownIcon className={theme.arrow} />;

  const values = useMemo(
    () => ({
      expandedIcon,
      collapsedIcon
    }),
    [collapsedIcon, expandedIcon]
  );

  return (
    <TreeContext.Provider value={values}>
      <div className={cn(theme.tree, className)} {...rest}>
        <ul className={theme.base}>{children}</ul>
      </div>
    </TreeContext.Provider>
  );
};
