import {
  addDays,
  format,
  getDay,
  getDaysInMonth,
  getDate,
  getISODay,
  isValid,
  isSameDay,
  isSameMonth,
  startOfMonth,
  subDays
} from 'date-fns';

/**
 * Get the month names for a given locale and format.
 *
 * Reference: https://www.abeautifulsite.net/posts/getting-localized-month-and-day-names-in-the-browser/
 */
export function getMonthNames(
  locale = 'en',
  format: 'long' | 'numeric' | '2-digit' | 'short' | 'narrow' = 'short'
) {
  const formatter = new Intl.DateTimeFormat(locale, {
    month: format,
    timeZone: 'UTC'
  });

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(month => {
    const mm = month < 10 ? `0${month}` : month;
    return new Date(`2017-${mm}-01T00:00:00+00:00`);
  });

  return months.map(date => formatter.format(date));
}

export const monthNames = getMonthNames();

export interface Day {
  date: Date;
  dayOfMonth: number;
  isWeekendDay: boolean;
  isPreviousMonth: boolean;
  isNextMonth: boolean;
  isToday: boolean;
  formattedDate: string;
}

export interface DayOptions {
  format: string;
}

export function getWeeks(
  date: Date,
  options: DayOptions = { format: 'MM/dd/yyyy' }
): Day[][] {
  if (!date) {
    throw new Error('A date is required');
  } else if (!isValid(date)) {
    console.warn('Invalid date - setting to today', date);
    date = new Date();
  }

  const daysInMonth = getDaysInMonth(date);
  let day = startOfMonth(date);
  let offset = getDay(day);
  const numOfWeeks = Math.ceil((daysInMonth + offset) / 7);

  // @ts-ignore
  const weeks: Day[][] = Array.apply(null, {
    length: numOfWeeks
  }).map(() => []);

  const current = new Date();

  const [firstWeek] = weeks;
  for (let i = offset; i > 0; i--) {
    const offsetDay = subDays(day, i);
    firstWeek.push({
      date: offsetDay,
      dayOfMonth: getDate(offsetDay),
      isWeekendDay: getISODay(offsetDay) > 5,
      isPreviousMonth: true,
      isNextMonth: false,
      isToday: false,
      formattedDate: format(offsetDay, options.format)
    });
  }

  for (let i = 0, week = weeks[i]; i < numOfWeeks; i++, week = weeks[i]) {
    for (let dayOfWeek = offset; dayOfWeek < 7; dayOfWeek++) {
      week.push({
        date: day,
        dayOfMonth: getDate(day),
        isPreviousMonth: false,
        isToday: isSameDay(day, current),
        isNextMonth: !isSameMonth(day, date),
        isWeekendDay: getISODay(day) > 5,
        formattedDate: format(day, options.format)
      });
      day = addDays(day, 1);
    }
    offset = 0;
  }

  return weeks;
}
