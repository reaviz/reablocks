import React, {
  Children,
  FC,
  Fragment,
  PropsWithChildren,
  useState
} from 'react';
import { useComponentTheme } from '../../utils/Theme';
import { TabsTheme } from './TabsTheme';
import { TabPanel } from './TabPanel';
import { twMerge } from 'tailwind-merge';
import { TabList } from './TabList';
import { AnimatePresence } from 'framer-motion';

export interface TabsProps extends PropsWithChildren {
  /**
   * The class name to be added to the tabs.
   */
  className?: string;

  /**
   * The active index of the tabs.
   */
  selectedIndex?: number;

  /**
   * The callback to be called when a tab is selected.
   */
  onSelect?: (index: number) => void;
}

export const Tabs: FC<TabsProps> = ({
  children,
  className,
  selectedIndex,
  onSelect
}) => {
  const theme: TabsTheme = useComponentTheme('tabs');
  const [internalActive, setInternalActive] = useState<number>(
    selectedIndex || 0
  );

  const childs = Children.toArray(children);

  const [tabList] = childs
    .filter((child: any) => child.type?.name === 'TabList')
    .map((child: any) => child.props);

  const panels = childs
    .filter((child: any) => child.type?.name === 'TabPanel')
    .map((child: any) => child.props);

  return (
    <div className={twMerge(theme.base, className)}>
      <TabList
        {...tabList}
        selectedIndex={internalActive}
        onSelect={idx => {
          setInternalActive(idx);
          onSelect?.(idx);
        }}
      />
      <AnimatePresence>
        {panels.map(({ children, ...rest }, index) => (
          <Fragment key={index}>
            {internalActive === index && (
              <TabPanel {...rest}>{children}</TabPanel>
            )}
          </Fragment>
        ))}
      </AnimatePresence>
    </div>
  );
};
