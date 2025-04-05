import { FC, ReactNode } from 'react';
import { Button } from '@/elements/Button';
import { Stack } from '@/layout/Stack';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  endOfDay,
  endOfMonth,
  endOfQuarter,
  endOfWeek,
  endOfYear,
  startOfDay,
  startOfMonth,
  startOfQuarter,
  startOfWeek,
  startOfYear,
  subDays,
  subMonths,
  subWeeks,
  subYears,
  setHours,
  setMinutes,
  setSeconds
} from 'date-fns';
import { CalendarTheme } from '../CalendarTheme';

export type PresetType = 'past' | 'future' | 'combined';

interface PresetOption {
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

const getTimePresets = (): PresetOption[] => [
  {
    label: 'Start of Day (12:00 AM)',
    value: setHours(setMinutes(setSeconds(new Date(), 0), 0), 0),
    group: 'Today'
  },
  {
    label: 'Morning (9:00 AM)',
    value: setHours(setMinutes(setSeconds(new Date(), 0), 0), 9),
    group: 'Today'
  },
  {
    label: 'Noon (12:00 PM)',
    value: setHours(setMinutes(setSeconds(new Date(), 0), 0), 12),
    group: 'Today'
  },
  {
    label: 'Afternoon (3:00 PM)',
    value: setHours(setMinutes(setSeconds(new Date(), 0), 0), 15),
    group: 'Today'
  },
  {
    label: 'Evening (6:00 PM)',
    value: setHours(setMinutes(setSeconds(new Date(), 0), 0), 18),
    group: 'Today'
  },
  {
    label: 'Night (9:00 PM)',
    value: setHours(setMinutes(setSeconds(new Date(), 0), 0), 21),
    group: 'Today'
  },
  {
    label: 'Tomorrow Morning',
    value: setHours(setMinutes(setSeconds(addDays(new Date(), 1), 0), 0), 9),
    group: 'Tomorrow'
  },
  {
    label: 'Tomorrow Noon',
    value: setHours(setMinutes(setSeconds(addDays(new Date(), 1), 0), 0), 12),
    group: 'Tomorrow'
  },
  {
    label: 'Tomorrow Evening',
    value: setHours(setMinutes(setSeconds(addDays(new Date(), 1), 0), 0), 18),
    group: 'Tomorrow'
  }
];

const getPastPresets = (
  isRange: boolean,
  showTime: boolean
): PresetOption[] => {
  if (isRange) {
    return [
      {
        label: 'Yesterday',
        value: [
          startOfDay(subDays(new Date(), 1)),
          endOfDay(subDays(new Date(), 1))
        ],
        group: 'Days'
      },
      {
        label: 'Last 3 Days',
        value: [startOfDay(subDays(new Date(), 3)), endOfDay(new Date())],
        group: 'Days'
      },
      {
        label: 'Last 7 Days',
        value: [startOfDay(subDays(new Date(), 7)), endOfDay(new Date())],
        group: 'Days'
      },
      {
        label: 'Last 14 Days',
        value: [startOfDay(subDays(new Date(), 14)), endOfDay(new Date())],
        group: 'Days'
      },
      {
        label: 'Last 30 Days',
        value: [startOfDay(subDays(new Date(), 30)), endOfDay(new Date())],
        group: 'Days'
      },
      {
        label: 'Last Week',
        value: [
          startOfWeek(subWeeks(new Date(), 1)),
          endOfWeek(subWeeks(new Date(), 1))
        ],
        group: 'Weeks'
      },
      {
        label: 'Last 2 Weeks',
        value: [startOfWeek(subWeeks(new Date(), 2)), endOfWeek(new Date())],
        group: 'Weeks'
      },
      {
        label: 'Last Month',
        value: [
          startOfMonth(subMonths(new Date(), 1)),
          endOfMonth(subMonths(new Date(), 1))
        ],
        group: 'Months'
      },
      {
        label: 'Last 2 Months',
        value: [startOfMonth(subMonths(new Date(), 2)), endOfMonth(new Date())],
        group: 'Months'
      },
      {
        label: 'Last Quarter',
        value: [
          startOfQuarter(subMonths(new Date(), 3)),
          endOfQuarter(subMonths(new Date(), 3))
        ],
        group: 'Quarters'
      },
      {
        label: 'Last 2 Quarters',
        value: [
          startOfQuarter(subMonths(new Date(), 6)),
          endOfQuarter(new Date())
        ],
        group: 'Quarters'
      },
      {
        label: 'Last Year',
        value: [
          startOfYear(subYears(new Date(), 1)),
          endOfYear(subYears(new Date(), 1))
        ],
        group: 'Years'
      }
    ];
  }

  if (showTime) {
    return [
      {
        label: 'Yesterday Start',
        value: startOfDay(subDays(new Date(), 1)),
        group: 'Yesterday'
      },
      {
        label: 'Yesterday Morning',
        value: setHours(startOfDay(subDays(new Date(), 1)), 9),
        group: 'Yesterday'
      },
      {
        label: 'Yesterday Noon',
        value: setHours(startOfDay(subDays(new Date(), 1)), 12),
        group: 'Yesterday'
      },
      {
        label: 'Yesterday Evening',
        value: setHours(startOfDay(subDays(new Date(), 1)), 18),
        group: 'Yesterday'
      },
      ...getTimePresets()
    ];
  }

  return [
    {
      label: 'Yesterday',
      value: subDays(new Date(), 1),
      group: 'Recent'
    },
    {
      label: 'Last Week',
      value: subWeeks(new Date(), 1),
      group: 'Recent'
    },
    {
      label: '2 Weeks Ago',
      value: subWeeks(new Date(), 2),
      group: 'Recent'
    },
    {
      label: 'Last Month',
      value: subMonths(new Date(), 1),
      group: 'Past'
    },
    {
      label: '3 Months Ago',
      value: subMonths(new Date(), 3),
      group: 'Past'
    },
    {
      label: '6 Months Ago',
      value: subMonths(new Date(), 6),
      group: 'Past'
    },
    {
      label: 'Last Year',
      value: subYears(new Date(), 1),
      group: 'Past'
    }
  ];
};

const getFuturePresets = (
  isRange: boolean,
  showTime: boolean
): PresetOption[] => {
  if (isRange) {
    return [
      {
        label: 'Tomorrow',
        value: [
          startOfDay(addDays(new Date(), 1)),
          endOfDay(addDays(new Date(), 1))
        ],
        group: 'Days'
      },
      {
        label: 'Next 3 Days',
        value: [startOfDay(new Date()), endOfDay(addDays(new Date(), 3))],
        group: 'Days'
      },
      {
        label: 'Next 7 Days',
        value: [startOfDay(new Date()), endOfDay(addDays(new Date(), 7))],
        group: 'Days'
      },
      {
        label: 'Next 14 Days',
        value: [startOfDay(new Date()), endOfDay(addDays(new Date(), 14))],
        group: 'Days'
      },
      {
        label: 'Next 30 Days',
        value: [startOfDay(new Date()), endOfDay(addDays(new Date(), 30))],
        group: 'Days'
      },
      {
        label: 'Next Week',
        value: [
          startOfWeek(addWeeks(new Date(), 1)),
          endOfWeek(addWeeks(new Date(), 1))
        ],
        group: 'Weeks'
      },
      {
        label: 'Next 2 Weeks',
        value: [startOfDay(new Date()), endOfWeek(addWeeks(new Date(), 2))],
        group: 'Weeks'
      },
      {
        label: 'Next Month',
        value: [
          startOfMonth(addMonths(new Date(), 1)),
          endOfMonth(addMonths(new Date(), 1))
        ],
        group: 'Months'
      },
      {
        label: 'Next 2 Months',
        value: [startOfDay(new Date()), endOfMonth(addMonths(new Date(), 2))],
        group: 'Months'
      },
      {
        label: 'Next Quarter',
        value: [
          startOfQuarter(addMonths(new Date(), 3)),
          endOfQuarter(addMonths(new Date(), 3))
        ],
        group: 'Quarters'
      },
      {
        label: 'Next 2 Quarters',
        value: [startOfDay(new Date()), endOfQuarter(addMonths(new Date(), 6))],
        group: 'Quarters'
      },
      {
        label: 'Next Year',
        value: [
          startOfYear(addYears(new Date(), 1)),
          endOfYear(addYears(new Date(), 1))
        ],
        group: 'Years'
      }
    ];
  }

  if (showTime) {
    return [
      ...getTimePresets(),
      {
        label: 'Tomorrow Start',
        value: startOfDay(addDays(new Date(), 1)),
        group: 'Tomorrow'
      },
      {
        label: 'Tomorrow Morning',
        value: setHours(startOfDay(addDays(new Date(), 1)), 9),
        group: 'Tomorrow'
      },
      {
        label: 'Tomorrow Noon',
        value: setHours(startOfDay(addDays(new Date(), 1)), 12),
        group: 'Tomorrow'
      },
      {
        label: 'Tomorrow Evening',
        value: setHours(startOfDay(addDays(new Date(), 1)), 18),
        group: 'Tomorrow'
      }
    ];
  }

  return [
    {
      label: 'Tomorrow',
      value: addDays(new Date(), 1),
      group: 'Soon'
    },
    {
      label: 'Next Week',
      value: addWeeks(new Date(), 1),
      group: 'Soon'
    },
    {
      label: 'In 2 Weeks',
      value: addWeeks(new Date(), 2),
      group: 'Soon'
    },
    {
      label: 'Next Month',
      value: addMonths(new Date(), 1),
      group: 'Future'
    },
    {
      label: 'In 3 Months',
      value: addMonths(new Date(), 3),
      group: 'Future'
    },
    {
      label: 'In 6 Months',
      value: addMonths(new Date(), 6),
      group: 'Future'
    },
    {
      label: 'Next Year',
      value: addYears(new Date(), 1),
      group: 'Future'
    }
  ];
};

const getCombinedPresets = (
  isRange: boolean,
  showTime: boolean
): PresetOption[] => {
  if (isRange) {
    return [
      {
        label: 'Today',
        value: [startOfDay(new Date()), endOfDay(new Date())],
        group: 'Current'
      },
      {
        label: 'This Week',
        value: [startOfWeek(new Date()), endOfWeek(new Date())],
        group: 'Current'
      },
      {
        label: 'This Month',
        value: [startOfMonth(new Date()), endOfMonth(new Date())],
        group: 'Current'
      },
      {
        label: 'This Quarter',
        value: [startOfQuarter(new Date()), endOfQuarter(new Date())],
        group: 'Current'
      },
      {
        label: 'This Year',
        value: [startOfYear(new Date()), endOfYear(new Date())],
        group: 'Current'
      },
      {
        label: 'Last 30 Days',
        value: [startOfDay(subDays(new Date(), 30)), endOfDay(new Date())],
        group: 'Past'
      },
      {
        label: 'Last Quarter',
        value: [
          startOfQuarter(subMonths(new Date(), 3)),
          endOfQuarter(subMonths(new Date(), 3))
        ],
        group: 'Past'
      },
      {
        label: 'Next 30 Days',
        value: [startOfDay(new Date()), endOfDay(addDays(new Date(), 30))],
        group: 'Future'
      },
      {
        label: 'Next Quarter',
        value: [
          startOfQuarter(addMonths(new Date(), 3)),
          endOfQuarter(addMonths(new Date(), 3))
        ],
        group: 'Future'
      }
    ];
  }

  if (showTime) {
    return getTimePresets();
  }

  return [
    {
      label: 'Today',
      value: new Date(),
      group: 'Current'
    },
    {
      label: 'Yesterday',
      value: subDays(new Date(), 1),
      group: 'Past'
    },
    {
      label: 'Tomorrow',
      value: addDays(new Date(), 1),
      group: 'Future'
    },
    {
      label: 'Start of Week',
      value: startOfWeek(new Date()),
      group: 'Current'
    },
    {
      label: 'End of Week',
      value: endOfWeek(new Date()),
      group: 'Current'
    },
    {
      label: 'Start of Month',
      value: startOfMonth(new Date()),
      group: 'Current'
    },
    {
      label: 'End of Month',
      value: endOfMonth(new Date()),
      group: 'Current'
    }
  ];
};

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

  // Check if a preset is active based on the current value
  const isPresetActive = (presetValue: Date | [Date, Date]): boolean => {
    if (!value) return false;

    // For range presets
    if (Array.isArray(presetValue) && Array.isArray(value)) {
      return (
        presetValue[0].getTime() === value[0]?.getTime() &&
        presetValue[1].getTime() === value[1]?.getTime()
      );
    }

    // For single date presets
    if (!Array.isArray(presetValue) && !Array.isArray(value)) {
      return presetValue.getTime() === value.getTime();
    }

    return false;
  };

  if (children) {
    return (
      <div className={twMerge(presetsTheme?.base, className)}>{children}</div>
    );
  }

  return (
    <div className={twMerge(presetsTheme?.base, className)}>
      <Stack
        direction="column"
        alignItems="start"
        className={twMerge(
          'h-full overflow-y-auto space-y-0',
          presetsTheme?.content
        )}
      >
        {Object.entries(groupedPresets).map(([group, options]) => (
          <div
            key={group}
            className={twMerge('mb-4 last:mb-0', presetsTheme?.group?.base)}
          >
            <div className={twMerge(presetsTheme?.group?.title)}>{group}</div>
            <Stack direction="column" className="space-y-0">
              {options.map(preset => {
                const active = isPresetActive(preset.value);
                return (
                  <Button
                    key={preset.label}
                    variant="text"
                    size="small"
                    className={twMerge(
                      active &&
                        'bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400',
                      presetsTheme?.button?.base,
                      active && presetsTheme?.button?.active
                    )}
                    onClick={() => onChange(preset.value)}
                  >
                    {preset.label}
                  </Button>
                );
              })}
            </Stack>
          </div>
        ))}
      </Stack>
    </div>
  );
};
