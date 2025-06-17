import React, { FC, Fragment, ReactNode } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { CalendarTheme } from '@/form/Calendar/CalendarTheme';
import {
  getCombinedPresets,
  getFuturePresets,
  getPastPresets
} from './default-options';
import { List, ListHeader, ListItem } from '@/layout';
import { differenceInSeconds } from 'date-fns';

export type PresetType = 'past' | 'future' | 'combined';

export interface PresetOption {
  label: string;
  value: Date | [Date, Date];
  group?: string;
}

interface CalendarPresetsProps {
  /**
   * Type of presets to show
   */
  type?: PresetType;

  /**
   * Whether the calendar is a range picker
   */
  isRange?: boolean;

  /**
   * Whether to show time presets
   */
  showTime?: boolean;

  /**
   * Callback function for when a preset is selected
   */
  onChange: (value: Date | [Date, Date]) => void;

  /**
   * Custom preset content
   */
  children?: ReactNode;

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
  type = 'past',
  isRange = false,
  showTime = false,
  onChange,
  children,
  theme: customTheme,
  value,
  className
}) => {
  const { presets: presetsTheme } = useComponentTheme<CalendarTheme>(
    'calendar',
    customTheme
  );

  const getPresets = () => {
    switch (type) {
      case 'future':
        return getFuturePresets(isRange, showTime);
      case 'combined':
        return getCombinedPresets(isRange, showTime);
      default:
        return getPastPresets(isRange, showTime);
    }
  };

  const presetOptions = getPresets();
  const groupedPresets = presetOptions.reduce(
    (acc, preset) => {
      const group = preset.group || 'Other';
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(preset);
      return acc;
    },
    {} as Record<string, PresetOption[]>
  );

  const isPresetActive = (presetValue: Date | [Date, Date]): boolean => {
    if (!value) return false;

    if (Array.isArray(presetValue) && Array.isArray(value)) {
      return (
        presetValue[0].getTime() === value[0]?.getTime() &&
        presetValue[1].getTime() === value[1]?.getTime()
      );
    }

    if (!Array.isArray(presetValue) && !Array.isArray(value)) {
      return Math.abs(differenceInSeconds(presetValue, value)) === 0;
    }

    return false;
  };

  if (children) {
    return <div className={cn(presetsTheme?.base, className)}>{children}</div>;
  }

  return (
    <List className={cn(presetsTheme?.base, className)}>
      {Object.entries(groupedPresets).map(([group, options]) => (
        <Fragment key={group}>
          <ListHeader className={presetsTheme?.group}>{group}</ListHeader>
          {options.map(preset => {
            const active = isPresetActive(preset.value);

            return (
              <ListItem
                key={preset.label}
                dense
                className={cn(presetsTheme?.item?.base, {
                  [presetsTheme?.item?.active]: active
                })}
                onClick={() => onChange(preset.value)}
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
