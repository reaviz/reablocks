import React, { FC, PropsWithChildren, Children } from 'react';
import { Tab } from './Tab';
import { cn, useComponentTheme } from '@/utils';
import { TabsTheme } from './TabsTheme';

export interface TabListProps extends PropsWithChildren {
  /**
   * The id of the tab list.
   * @private
   */
  id?: string;

  /**
   * The class name to be added to the tab list.
   */
  className?: string;

  /**
   * The active index of the tabs.
   * @private
   */
  selectedIndex?: number;

  /**
   * The direction of the tabs. Default is 'ltr'.
   * @private
   */
  direction?: 'ltr' | 'rtl';

  /**
   * The callback to be called when a tab is selected.
   * @private
   */
  onSelect?: (index: number) => void;

  /**
   * The variant of the tabs.
   * @private
   */
  variant?: 'primary' | 'secondary';

  /**
   * The size of the tabs.
   * @private
   */
  size?: 'small' | 'medium' | 'large' | string;

  /**
   * Theme for the Tabs.
   */
  theme?: TabsTheme;
}

export const TabList: FC<TabListProps> = ({
  id,
  children,
  direction,
  className,
  selectedIndex,
  onSelect,
  variant = 'primary',
  size = 'medium',
  theme: customTheme
}) => {
  const theme: TabsTheme = useComponentTheme('tabs', customTheme);

  const childs = Children.toArray(children)
    .filter((child: any) => child.type?.name === Tab.name)
    .map((child: any) => child.props);

  return (
    <nav
      role="tablist"
      className={cn(theme.list.base, className, {
        'justify-end': direction === 'rtl'
      })}
    >
      {childs.map(({ children, ...rest }, index) => (
        <Tab
          key={index}
          {...rest}
          id={id}
          selected={index === selectedIndex}
          onSelect={() => onSelect(index)}
          size={size}
        >
          {children}
        </Tab>
      ))}
      <hr
        className={cn(theme.list.divider, theme.list.variant[variant].divider)}
      />
    </nav>
  );
};
