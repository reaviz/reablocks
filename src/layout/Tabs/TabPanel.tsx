import React, { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { TabsTheme } from './TabsTheme';
import { useComponentTheme } from '../../utils/Theme';

export interface TabPanelProps extends PropsWithChildren {
  /**
   * The class name to be added to the tab panel.
   */
  className?: string;
}

export const TabPanel: FC<TabPanelProps> = ({ children, className }) => {
  const theme: TabsTheme = useComponentTheme('tabs');
  return (
    <section role="tabpanel" className={twMerge(theme.panel, className)}>
      {children}
    </section>
  );
};
