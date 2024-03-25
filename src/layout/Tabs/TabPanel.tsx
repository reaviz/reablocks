import React, { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { TabsTheme } from './TabsTheme';
import { useComponentTheme } from '../../utils';

export interface TabPanelProps extends PropsWithChildren {
  /**
   * The class name to be added to the tab panel.
   */
  className?: string;

  /**
   * Theme for the Tabs.
   */
  theme?: TabsTheme;
}

export const TabPanel: FC<TabPanelProps> = ({
  children,
  className,
  theme: customTheme
}) => {
  const theme: TabsTheme = useComponentTheme('tabs', customTheme);
  return (
    <section role="tabpanel" className={twMerge(theme.panel, className)}>
      {children}
    </section>
  );
};
