import React, { FC, PropsWithChildren } from 'react';
import { Button } from '../../elements';
import { TabsTheme } from './TabsTheme';
import { useComponentTheme, cn } from '../../utils';
import { motion } from 'framer-motion';

export interface TabProps extends PropsWithChildren {
  /**
   * The id of the tab list.
   * @private
   */
  id?: string;

  /**
   * The class name to be added to the tab.
   */
  className?: string;

  /**
   * The disabled state of the tab.
   *
   * @private
   */
  disabled?: boolean;

  /**
   * The selected state of the tab.
   *
   * @private
   */
  selected?: boolean;

  /**
   * The callback to be called when the tab is selected.
   *
   * @private
   */
  onSelect?: () => void;

  /**
   * Theme for the Tabs.
   */
  theme?: TabsTheme;
}

export const Tab: FC<TabProps> = ({
  children,
  id,
  selected,
  className,
  disabled,
  onSelect,
  theme: customTheme
}) => {
  const theme: TabsTheme = useComponentTheme('tabs', customTheme);

  return (
    <span>
      <Button
        className={cn(theme.list.tab.base, className, {
          [theme.list.tab.disabled]: disabled,
          [theme.list.tab.selected]: selected
        })}
        disabled={disabled}
        role="tab"
        variant="text"
        aria-selected={selected ? 'true' : 'false'}
        aria-disabled={disabled ? 'true' : 'false'}
        onClick={() => {
          if (!disabled && onSelect) {
            onSelect();
          }
        }}
      >
        {children}
      </Button>
      {selected && (
        <motion.div
          className={cn(theme.list.indicator)}
          layoutId={`${id}-tabs-underline`}
        />
      )}
    </span>
  );
};
