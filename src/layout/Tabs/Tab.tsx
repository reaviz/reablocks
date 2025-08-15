import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { Button } from '@/elements/Button';
import { TabSizeTheme, TabsTheme, TabVariantTheme } from './TabsTheme';
import { useComponentTheme, cn } from '@/utils';
import { motion } from 'motion/react';

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
   * The size of the tabs.
   *
   * @private
   */
  size?: keyof TabSizeTheme;

  /**
   * The variant of the tab.
   * @private
   */
  variant?: keyof TabVariantTheme;

  /**
   * Element to display before the Button content.
   */
  start?: ReactElement;

  /**
   * Element to display after the Button content.
   */
  end?: ReactElement;

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
  size = 'medium',
  variant = 'primary',
  start,
  end,
  onSelect,
  theme: customTheme
}) => {
  const tabTheme: TabsTheme = useComponentTheme('tabs', customTheme);

  return (
    <span className={cn(tabTheme.list.tab.base, containerClassName)}>
      <Button
        startAdornment={start}
        endAdornment={end}
        className={cn(
          tabTheme.list.tab.button,
          tabTheme.list.variant?.[variant]?.button,
          className,
          {
            [tabTheme.list.tab.disabled]: disabled,
            [tabTheme.list.tab.selected]: selected,
            [tabTheme.list.variant?.[variant]?.selected]: selected,
            [tabTheme.list.variant?.[variant]?.disabled]: disabled
          },
          tabTheme.list.tab.size?.[size]
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
            tabTheme.list.indicator?.base,
            tabTheme.list.indicator?.size?.[size],
            tabTheme.list.variant?.[variant]?.indicator
          )}
          layoutId={`${id}-tabs-underline`}
        />
      )}
    </span>
  );
};
