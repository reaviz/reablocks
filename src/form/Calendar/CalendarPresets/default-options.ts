import {
  setHours,
  setMinutes,
  setSeconds,
  addDays,
  startOfDay,
  subDays,
  endOfDay,
  startOfWeek,
  subWeeks,
  endOfWeek,
  startOfMonth,
  subMonths,
  endOfMonth,
  startOfQuarter,
  endOfQuarter,
  startOfYear,
  subYears,
  endOfYear,
  addWeeks,
  addMonths,
  addYears
} from 'date-fns';
import { PresetOption } from './CalendarPresets';

export const getTimePresets = (): PresetOption[] => [
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

export const getPastPresets = (
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
        value: [startOfDay(subDays(new Date(), 2)), endOfDay(new Date())],
        group: 'Days'
      },
      {
        label: 'Last 7 Days',
        value: [startOfDay(subDays(new Date(), 6)), endOfDay(new Date())],
        group: 'Days'
      },
      {
        label: 'Last 14 Days',
        value: [startOfDay(subDays(new Date(), 13)), endOfDay(new Date())],
        group: 'Days'
      },
      {
        label: 'Last 30 Days',
        value: [startOfDay(subDays(new Date(), 29)), endOfDay(new Date())],
        group: 'Days'
      },
      {
        label: 'Last 60 Days',
        value: [startOfDay(subDays(new Date(), 59)), endOfDay(new Date())],
        group: 'Days'
      },
      {
        label: 'Last 90 Days',
        value: [startOfDay(subDays(new Date(), 89)), endOfDay(new Date())],
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
        value: [startOfWeek(subWeeks(new Date(), 1)), endOfWeek(new Date())],
        group: 'Weeks'
      },
      {
        label: 'Last 4 Weeks',
        value: [startOfWeek(subWeeks(new Date(), 3)), endOfWeek(new Date())],
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
        label: 'Last 3 Months',
        value: [startOfMonth(subMonths(new Date(), 2)), endOfMonth(new Date())],
        group: 'Months'
      },
      {
        label: 'Last 6 Months',
        value: [startOfMonth(subMonths(new Date(), 5)), endOfMonth(new Date())],
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
        label: 'Last 4 Quarters',
        value: [
          startOfQuarter(subMonths(new Date(), 12)),
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
      },
      {
        label: 'Last 2 Years',
        value: [startOfYear(subYears(new Date(), 1)), endOfYear(new Date())],
        group: 'Years'
      },
      {
        label: 'Last 3 Years',
        value: [startOfYear(subYears(new Date(), 2)), endOfYear(new Date())],
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
      label: '2 Days Ago',
      value: subDays(new Date(), 2),
      group: 'Recent'
    },
    {
      label: '3 Days Ago',
      value: subDays(new Date(), 3),
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
      label: '3 Weeks Ago',
      value: subWeeks(new Date(), 3),
      group: 'Recent'
    },
    {
      label: 'Last Month',
      value: subMonths(new Date(), 1),
      group: 'Past'
    },
    {
      label: '2 Months Ago',
      value: subMonths(new Date(), 2),
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
    },
    {
      label: '2 Years Ago',
      value: subYears(new Date(), 2),
      group: 'Past'
    },
    {
      label: '3 Years Ago',
      value: subYears(new Date(), 3),
      group: 'Past'
    }
  ];
};

export const getFuturePresets = (
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
        value: [startOfDay(new Date()), endOfDay(addDays(new Date(), 2))],
        group: 'Days'
      },
      {
        label: 'Next 7 Days',
        value: [startOfDay(new Date()), endOfDay(addDays(new Date(), 6))],
        group: 'Days'
      },
      {
        label: 'Next 14 Days',
        value: [startOfDay(new Date()), endOfDay(addDays(new Date(), 13))],
        group: 'Days'
      },
      {
        label: 'Next 30 Days',
        value: [startOfDay(new Date()), endOfDay(addDays(new Date(), 29))],
        group: 'Days'
      },
      {
        label: 'Next 60 Days',
        value: [startOfDay(new Date()), endOfDay(addDays(new Date(), 59))],
        group: 'Days'
      },
      {
        label: 'Next 90 Days',
        value: [startOfDay(new Date()), endOfDay(addDays(new Date(), 89))],
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
        value: [startOfWeek(new Date()), endOfWeek(addWeeks(new Date(), 1))],
        group: 'Weeks'
      },
      {
        label: 'Next 4 Weeks',
        value: [startOfWeek(new Date()), endOfWeek(addWeeks(new Date(), 3))],
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
        value: [startOfMonth(new Date()), endOfMonth(addMonths(new Date(), 2))],
        group: 'Months'
      },
      {
        label: 'Next 3 Months',
        value: [startOfMonth(new Date()), endOfMonth(addMonths(new Date(), 3))],
        group: 'Months'
      },
      {
        label: 'Next 6 Months',
        value: [startOfMonth(new Date()), endOfMonth(addMonths(new Date(), 6))],
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
        value: [
          startOfQuarter(new Date()),
          endOfQuarter(addMonths(new Date(), 6))
        ],
        group: 'Quarters'
      },
      {
        label: 'Next 4 Quarters',
        value: [
          startOfQuarter(new Date()),
          endOfQuarter(addMonths(new Date(), 12))
        ],
        group: 'Quarters'
      },
      {
        label: 'Next Year',
        value: [
          startOfYear(addYears(new Date(), 1)),
          endOfYear(addYears(new Date(), 1))
        ],
        group: 'Years'
      },
      {
        label: 'Next 2 Years',
        value: [startOfYear(new Date()), endOfYear(addYears(new Date(), 2))],
        group: 'Years'
      },
      {
        label: 'Next 3 Years',
        value: [startOfYear(new Date()), endOfYear(addYears(new Date(), 3))],
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
      label: 'In 2 Days',
      value: addDays(new Date(), 2),
      group: 'Soon'
    },
    {
      label: 'In 3 Days',
      value: addDays(new Date(), 3),
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
      label: 'In 3 Weeks',
      value: addWeeks(new Date(), 3),
      group: 'Soon'
    },
    {
      label: 'Next Month',
      value: addMonths(new Date(), 1),
      group: 'Future'
    },
    {
      label: 'In 2 Months',
      value: addMonths(new Date(), 2),
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
    },
    {
      label: 'In 2 Years',
      value: addYears(new Date(), 2),
      group: 'Future'
    },
    {
      label: 'In 3 Years',
      value: addYears(new Date(), 3),
      group: 'Future'
    }
  ];
};

export const getCombinedPresets = (
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
        value: [
          showTime ? new Date() : startOfDay(new Date()),
          endOfDay(addDays(new Date(), 6))
        ],
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
