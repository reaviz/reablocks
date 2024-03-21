import React, { FC, PropsWithChildren, Children } from 'react';
import { Tab } from './Tab';
import { useComponentTheme } from '../../utils';
import { TabsTheme } from './TabsTheme';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

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
}

export const TabList: FC<TabListProps> = ({
  id,
  children,
  direction,
  className,
  selectedIndex,
  onSelect
}) => {
  const theme: TabsTheme = useComponentTheme('tabs');

  const childs = Children.toArray(children)
    .filter((child: any) => child.type?.name === 'Tab')
    .map((child: any) => child.props);

  return (
    <nav
      role="tablist"
      className={twMerge(
        classNames(className, theme.list.base, {
          'justify-end': direction === 'rtl'
        })
      )}
    >
      {childs.map(({ children, ...rest }, index) => (
        <Tab
          key={index}
          {...rest}
          id={id}
          selected={index === selectedIndex}
          onSelect={() => onSelect(index)}
        >
          {children}
        </Tab>
      ))}
    </nav>
  );
};
