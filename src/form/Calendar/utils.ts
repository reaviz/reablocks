import {
  addDays,
  differenceInMinutes,
  differenceInSeconds,
  endOfDay,
  format,
  getDate,
  getDay,
  getDaysInMonth,
  getHours,
  getISODay,
  getMinutes,
  getSeconds,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isValid,
  isWithinInterval,
  max,
  min,
  setHours,
  setMinutes,
  setSeconds,
  startOfDay,
  startOfMonth,
  subDays,
} from 'date-fns';

/**
 * Get the month names for a given locale and format.
 *
 * Reference: https://www.abeautifulsite.net/posts/getting-localized-month-and-day-names-in-the-browser/
 */
export function getMonthNames(
  locale?: string,
  format: 'long' | 'numeric' | '2-digit' | 'short' | 'narrow' = 'short',
) {
  if (!locale && typeof window !== 'undefined') {
    locale = navigator.language;
  }

  const formatter = new Intl.DateTimeFormat(locale, {
    month: format,
    timeZone: 'UTC',
  });

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(month => {
    const mm = month < 10 ? `0${month}` : month;
    return new Date(`2017-${mm}-01T00:00:00+00:00`);
  });

  return months.map(date => formatter.format(date));
}

export const monthNames = getMonthNames();

export function getDayLabels(locale?: string) {
  return Array.from({ length: 7 }, (_, i) => {
    if (!locale && typeof window !== 'undefined') {
      locale = navigator.language;
    }

    return new Intl.DateTimeFormat(locale, {
      weekday: 'short',
    }).format(new Date(1970, 0, 4 + i)); // 1970/01/04 is a Sunday
  });
}

export const daysOfWeek = getDayLabels();

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
  options: DayOptions = { format: 'MM/dd/yyyy' },
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

  const weeks: Day[][] = Array.from({ length: numOfWeeks }, () => []);

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
      formattedDate: format(offsetDay, options.format),
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
        formattedDate: format(day, options.format),
      });
      day = addDays(day, 1);
    }
    offset = 0;
  }

  return weeks;
}

/**
 * Get attributes for the day:
 * - isActive: if the day is within the selected range
 * - isRangeStart: if the day is the start of the range
 * - isRangeEnd: if the day is the end of the range
 *
 * "Range" here refers to a selection OR a selected date to hovered date.
 */
export function getDayAttributes(
  day: Date,
  current:
    | Date
    | [Date, Date]
    | [Date, undefined]
    | [undefined, undefined]
    | undefined,
  hover: Date,
  isRange: boolean,
) {
  let isActive = false;
  let isRangeStart = false;
  let isRangeEnd = false;

  const isInRange = (date: Date, range: [Date, Date]) => {
    const startDate = min(range);
    const endDate = max(range);

    return isWithinInterval(date, { start: startDate, end: endDate });
  };

  const isSelectionStarted = Array.isArray(current) && isValid(current[0]);
  const isSelectionComplete = isSelectionStarted && isValid(current[1]);

  if (!isRange && isValid(current)) {
    // if not a range
    isActive = isSameDay(day, current as Date);
  } else if (!isSelectionStarted) {
    // if selection has not started
    isActive = isSameDay(day, hover);
    isRangeStart = isActive;
    isRangeEnd = isActive;
  } else if (isSelectionComplete) {
    // if a range has been selected
    const activeRange: [Date, Date] = [
      startOfDay(current[0]),
      endOfDay(current[1]),
    ];
    isActive = isInRange(day, activeRange);
    isRangeStart = isSameDay(day, current[0]);
    isRangeEnd = isSameDay(day, current[1]);
  } else {
    // if in the process of selecting a range
    const activeRange: [Date, Date] = [
      startOfDay(current[0]),
      endOfDay(hover ?? current[0]),
    ];
    isActive = isInRange(day, activeRange);
    isRangeStart = isSameDay(day, min(activeRange));
    isRangeEnd = isSameDay(day, max(activeRange));
  }

  return { isActive, isRangeStart, isRangeEnd };
}

/**
 * Get whether the space below the current day is empty or not
 */
export function isNextWeekEmpty(
  day: Date,
  range: [Date, Date],
  hideNextMonth: boolean,
) {
  const nextWeek = addDays(day, 7);
  const nextWeekInRange =
    isBefore(nextWeek, max(range)) || isSameDay(nextWeek, max(range));

  return !(nextWeekInRange && (isSameMonth(day, nextWeek) || !hideNextMonth));
}

/**
 * Get whether the space above the current day is empty or not
 */
export function isPreviousWeekEmpty(
  day: Date,
  range: [Date, Date],
  hidePrevMonth: boolean,
) {
  const prevWeek = addDays(day, -7);
  const prevWeekInRange =
    isAfter(prevWeek, min(range)) || isSameDay(prevWeek, min(range));

  return !(prevWeekInRange && (isSameMonth(day, prevWeek) || !hidePrevMonth));
}

/**
 * Update the time or date based on the current date and the range start.
 *
 * @param currentDate - The current date or range.
 * @param newDate - The new date to update.
 * @param isRange - Whether the current date is a range.
 * @param rangeStart - Whether the current date is the start of the range.
 * @returns The updated date.
 */
export function updateDateTime(
  currentDate: Date | [Date, Date],
  newDate: Date,
  isRange = false,
  rangeStart = false,
): Date {
  let finalDate = newDate;
  if (currentDate) {
    const hasTime =
      getHours(newDate) !== 0 ||
      getMinutes(newDate) !== 0 ||
      getSeconds(newDate) !== 0;

    if (!hasTime) {
      if (!isRange) {
        // For single date, inherit time from previous value
        const originalTimeSource = Array.isArray(currentDate)
          ? (currentDate[0] ?? new Date())
          : (currentDate ?? new Date());
        finalDate = setSeconds(
          setMinutes(
            setHours(newDate, getHours(originalTimeSource)),
            getMinutes(originalTimeSource),
          ),
          getSeconds(originalTimeSource),
        );
      } else {
        // For range, only inherit time for first date
        if (!rangeStart) {
          const originalTimeSource = Array.isArray(currentDate)
            ? (currentDate[0] ?? new Date())
            : (currentDate ?? new Date());
          finalDate = setSeconds(
            setMinutes(
              setHours(newDate, getHours(originalTimeSource)),
              getMinutes(originalTimeSource),
            ),
            getSeconds(originalTimeSource),
          );
        } else {
          // Reset time to start of day for second date
          finalDate = setSeconds(setMinutes(setHours(newDate, 0), 0), 0);
        }
      }
    }
  }

  return finalDate;
}

/**
 * Check if a preset is active
 * @param presetValue - The preset value to check
 * @param value - The value to check against
 * @returns True if the preset is active, false otherwise
 */
export const isPresetActive = (
  presetValue: Date | [Date, Date],
  value: Date | [Date, Date],
  includeTime = false,
): boolean => {
  if (!value) return false;

  if (Array.isArray(presetValue) && Array.isArray(value)) {
    if (includeTime) {
      const startMinutesDiff = Math.abs(
        differenceInMinutes(presetValue[0], value[0]),
      );
      const endMinutesDiff = Math.abs(
        differenceInMinutes(presetValue[1], value[1]),
      );

      return startMinutesDiff === 0 && endMinutesDiff === 0;
    }

    return (
      isSameDay(presetValue[0], value[0]) && isSameDay(presetValue[1], value[1])
    );
  }

  if (!Array.isArray(presetValue) && !Array.isArray(value)) {
    if (includeTime) {
      return Math.abs(differenceInSeconds(presetValue, value)) === 0;
    }

    return isSameDay(presetValue, value);
  }

  return false;
};
