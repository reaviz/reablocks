import React, { FC, PropsWithChildren, Children } from 'react';
import { Tab } from './Tab';
import { useComponentTheme } from '../../utils/Theme';
import { TabsTheme } from './TabsTheme';
import { twMerge } from 'tailwind-merge';

export interface TabListProps extends PropsWithChildren {
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
   * The callback to be called when a tab is selected.
   * @private
   */
  onSelect?: (index: number) => void;
}

export const TabList: FC<TabListProps> = ({
  children,
  className,
  selectedIndex,
  onSelect
}) => {
  const theme: TabsTheme = useComponentTheme('tabs');

  const childs = Children.toArray(children)
    .filter((child: any) => child.type?.name === 'Tab')
    .map((child: any) => child.props);

  return (
    <nav role="tablist" className={twMerge(className, theme.list.base)}>
      {childs.map(({ children, ...rest }, index) => (
        <Tab
          key={index}
          {...rest}
          selected={index === selectedIndex}
          onSelect={() => onSelect(index)}
        >
          {children}
        </Tab>
      ))}
    </nav>
  );
};
