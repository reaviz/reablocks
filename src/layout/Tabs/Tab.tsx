import React, { FC, PropsWithChildren } from 'react';
import { Button } from '../../elements/Button';
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
   * The class name to be added to the tab container.
   */
  containerClassName?: string;

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
   * The variant of the tabs.
   *
   * @private
   */
  variant?: 'primary' | 'secondary';

  /**
   * Theme for the Tabs.
   */
  theme?: TabsTheme;
}

export const Tab: FC<TabProps> = ({
  children,
  id,
  selected,
  containerClassName,
  className,
  disabled,
  onSelect,
  variant = 'primary',
  theme: customTheme
}) => {
  const theme: TabsTheme = useComponentTheme('tabs', customTheme);

  return (
    <span className={cn(theme.list.tab.base, containerClassName)}>
      <Button
        className={cn(
          theme.list.tab.button,
          className,
          {
            [theme.list.tab.disabled]: disabled,
            [theme.list.tab.selected]: selected
          },
          theme.list.tab.variant?.[variant]?.button
        )}
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
          className={cn(
            theme.list.indicator,
            theme.list.variant?.[variant]?.indicator
          )}
          layoutId={`${id}-tabs-underline`}
        />
      )}
    </span>
  );
};
