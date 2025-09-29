import type { FC } from 'react';
import React, { Fragment } from 'react';

import type { CalendarTheme } from '@/form/Calendar/CalendarTheme';
import { isPresetActive } from '@/form/Calendar/utils';
import { List, ListHeader, ListItem } from '@/layout';
import { cn, useComponentTheme } from '@/utils';

const DEFAULT_GROUP_NAME = 'Other';

export interface PresetOption {
  label: string;
  value: Date | [Date, Date] | (() => Date | [Date, Date]);
  group?: string;
}

interface CalendarPresetsProps {
  /**
   * Preset options to show
   */
  options: PresetOption[];

  /**
   * Whether to show time presets
   */
  showTime?: boolean;

  /**
   * Callback function for when a preset is selected
   */
  onChange: (value: Date | [Date, Date]) => void;

  /**
   * Theme for the preset panel
   */
  theme?: CalendarTheme;

  /**
   * Currently selected value
   */
  value?: Date | [Date, Date];

  /**
   * Optional className for the component
   */
  className?: string;
}

export const CalendarPresets: FC<CalendarPresetsProps> = ({
  options,
  showTime,
  theme: customTheme,
  value,
  className,
  onChange
}) => {
  const { presets: presetsTheme } = useComponentTheme<CalendarTheme>(
    'calendar',
    customTheme
  );

  const groupedPresets = options.reduce(
    (acc, preset) => {
      const group = preset.group || DEFAULT_GROUP_NAME;
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(preset);

      return acc;
    },
    {} as Record<string, PresetOption[]>
  );

  return (
    <List className={cn(presetsTheme?.base, className)}>
      {Object.entries(groupedPresets).map(([group, options]) => (
        <Fragment key={group}>
          {group !== DEFAULT_GROUP_NAME && (
            <ListHeader className={presetsTheme?.group}>{group}</ListHeader>
          )}
          {options.map(preset => {
            const presetValue =
              typeof preset.value === 'function'
                ? preset.value()
                : preset.value;
            const active = isPresetActive(presetValue, value, showTime);

            return (
              <ListItem
                key={preset.label}
                dense
                className={cn(presetsTheme?.item?.base, {
                  [presetsTheme?.item?.active]: active
                })}
                onClick={() => onChange(presetValue)}
                active={active}
              >
                {preset.label}
              </ListItem>
            );
          })}
        </Fragment>
      ))}
    </List>
  );
};
