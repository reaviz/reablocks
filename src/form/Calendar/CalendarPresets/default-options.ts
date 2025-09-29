import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  endOfDay,
  endOfMonth,
  endOfWeek,
  endOfYear,
  setHours,
  setMinutes,
  setSeconds,
  startOfDay,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subDays,
  subMonths,
  subWeeks,
  subYears
} from 'date-fns';

import type { PresetOption } from './CalendarPresets';

export const TIME_PRESETS: PresetOption[] = [
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

export const PAST_PRESETS: PresetOption[] = [
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

export const FUTURE_PRESETS: PresetOption[] = [
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

export const COMBINED_PRESETS: PresetOption[] = [
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

export const PAST_RANGE_PRESETS: PresetOption[] = [
  {
    label: 'Yesterday',
    value: [
      startOfDay(subDays(new Date(), 1)),
      endOfDay(subDays(new Date(), 1))
    ]
  },
  {
    label: 'Last 3 Days',
    value: [startOfDay(subDays(new Date(), 2)), endOfDay(new Date())]
  },
  {
    label: 'Last 7 Days',
    value: [startOfDay(subDays(new Date(), 6)), endOfDay(new Date())]
  },
  {
    label: 'Last 14 Days',
    value: [startOfDay(subDays(new Date(), 13)), endOfDay(new Date())]
  },
  {
    label: 'Last 30 Days',
    value: [startOfDay(subDays(new Date(), 29)), endOfDay(new Date())]
  },
  {
    label: 'Previous Week',
    value: [
      startOfWeek(subWeeks(new Date(), 1)),
      endOfWeek(subWeeks(new Date(), 1))
    ]
  },
  {
    label: 'Last Week',
    value: [subWeeks(new Date(), 1), new Date()]
  },
  {
    label: 'Previous Month',
    value: [
      startOfMonth(subMonths(new Date(), 1)),
      endOfMonth(subMonths(new Date(), 1))
    ]
  },
  {
    label: 'Last Month',
    value: [subMonths(new Date(), 1), new Date()]
  },
  {
    label: 'Previous Year',
    value: [
      startOfYear(subYears(new Date(), 1)),
      endOfYear(subYears(new Date(), 1))
    ]
  },
  {
    label: 'Last Year',
    value: [subYears(new Date(), 1), new Date()]
  }
];

export const FUTURE_RANGE_PRESETS: PresetOption[] = [
  {
    label: 'Tomorrow',
    value: [
      startOfDay(addDays(new Date(), 1)),
      endOfDay(addDays(new Date(), 1))
    ]
  },
  {
    label: 'Next 3 Days',
    value: [startOfDay(new Date()), endOfDay(addDays(new Date(), 2))]
  },
  {
    label: 'Next 7 Days',
    value: [startOfDay(new Date()), endOfDay(addDays(new Date(), 6))]
  },
  {
    label: 'Next 14 Days',
    value: [startOfDay(new Date()), endOfDay(addDays(new Date(), 13))]
  },
  {
    label: 'Next 30 Days',
    value: [startOfDay(new Date()), endOfDay(addDays(new Date(), 29))]
  },
  {
    label: 'Next Week',
    value: [new Date(), addWeeks(new Date(), 1)]
  },
  {
    label: 'Upcoming Week',
    value: [
      startOfWeek(addWeeks(new Date(), 1)),
      endOfWeek(addWeeks(new Date(), 1))
    ]
  },
  {
    label: 'Next Month',
    value: [new Date(), addMonths(new Date(), 1)]
  },
  {
    label: 'Upcoming Month',
    value: [
      startOfMonth(addMonths(new Date(), 1)),
      endOfMonth(addMonths(new Date(), 1))
    ]
  },
  {
    label: 'Next Year',
    value: [new Date(), addYears(new Date(), 1)]
  },
  {
    label: 'Upcoming Year',
    value: [
      startOfYear(addYears(new Date(), 1)),
      endOfYear(addYears(new Date(), 1))
    ]
  }
];
