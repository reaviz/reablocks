import React, {
  Children,
  FC,
  Fragment,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState
} from 'react';
import { useId } from '../../utils';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence } from 'framer-motion';
import { useComponentTheme } from '../../utils/Theme/hooks';
import { TabsTheme } from './TabsTheme';
import { TabPanel } from './TabPanel';
import { TabList } from './TabList';

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
   * The default index of the tabs. Default is 0.
   */
  defaultIndex?: number;

  /**
   * The direction of the tabs. Default is 'ltr'.
   */
  direction?: 'ltr' | 'rtl';

  /**
   * The style to be added to the tabs.
   */
  style?: React.CSSProperties;

  /**
   * The variant of the tabs.
   */
  variant?: 'primary' | 'secondary';

  /**
   * The size of the tabs.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * The callback to be called when a tab is selected.
   */
  onSelect?: (index: number) => void;

  /**
   * Theme for the Tabs.
   */
  theme?: TabsTheme;
}

export const Tabs: FC<TabsProps> = ({
  children,
  className,
  style,
  variant = 'primary',
  size = 'medium',
  direction = 'ltr',
  defaultIndex = 0,
  selectedIndex,
  onSelect,
  theme: customTheme
}) => {
  const id = useId();
  const theme: TabsTheme = useComponentTheme('tabs', customTheme);
  const [internalActive, setInternalActive] = useState<number>(
    selectedIndex || defaultIndex
  );

  useEffect(() => {
    // Handle controlled scenarios
    if (selectedIndex !== undefined) {
      setInternalActive(selectedIndex);
    }
  }, [selectedIndex]);

  const [tabList, panels] = useMemo(() => {
    const childs = Children.toArray(children);

    const [tabList] = childs
      .filter((child: any) => child.type?.name === TabList.name)
      .map((child: any) => child.props);

    const panels = childs
      .filter((child: any) => child.type?.name === TabPanel.name)
      .map((child: any) => child.props);

    return [tabList, panels];
  }, [children]);

  return (
    <div className={twMerge(theme.base, className)} style={style}>
      <TabList
        {...tabList}
        variant={variant}
        size={size}
        direction={direction}
        id={id}
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
