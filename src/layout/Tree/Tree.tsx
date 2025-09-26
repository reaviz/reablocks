import type { FC, PropsWithChildren } from 'react';
import React, { useMemo } from 'react';

import { Arrow } from '@/elements/Arrow';
import { useComponentTheme } from '@/utils';
import { twMerge } from '@/utils';

import type { TreeContextProps } from './TreeContext';
import { TreeContext } from './TreeContext';
import type { TreeTheme } from './TreeTheme';

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

  expandedIcon = expandedIcon ?? (
    <Arrow direction="down" className={theme.arrow} />
  );
  collapsedIcon = collapsedIcon ?? (
    <Arrow direction="right" className={theme.arrow} />
  );

  const values = useMemo(
    () => ({
      expandedIcon,
      collapsedIcon,
    }),
    [collapsedIcon, expandedIcon],
  );

  return (
    <TreeContext.Provider value={values}>
      <div className={twMerge(theme.tree, className)} {...rest}>
        <ul className={theme.base}>{children}</ul>
      </div>
    </TreeContext.Provider>
  );
};
