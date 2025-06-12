import { AnimatePresence, motion } from 'motion/react';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { Button } from '@/elements/Button';
import {
  add,
  addYears,
  endOfDecade,
  getMonth,
  getYear,
  min as minDate,
  max as maxDate,
  setMonth,
  setYear,
  startOfDecade,
  sub,
  subYears,
  format,
  setSeconds,
  setMinutes,
  setHours,
  getMinutes,
  getSeconds,
  getHours
} from 'date-fns';
import { CalendarDays } from './CalendarDays';
import { CalendarMonths } from './CalendarMonths';
import { CalendarYears } from './CalendarYears';
import { SmallHeading } from '@/typography';
import { twMerge } from 'tailwind-merge';
import { cn, useComponentTheme } from '@/utils';
import { CalendarTheme } from './CalendarTheme';
import { Divider } from '@/layout/Divider';
import { CalendarTimes } from './CalendarTimes';
import { updateDateTime } from './utils';

export type CalendarViewType = 'days' | 'months' | 'years';

export interface CalendarProps {
  /**
   * The selected date(s) for the calendar.
   */
  value?:
    | Date
    | [Date, Date]
    | [Date, undefined]
    | [undefined, undefined]
    | undefined;

  /**
   * The minimum selectable date for the calendar.
   */
  min?: Date;

  /**
   * The maximum selectable date for the calendar.
   * Can also be set to 'now' to use the current date.
   */
  max?: Date | 'now';

  /**
   * Whether the calendar is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the calendar is a range picker.
   */
  isRange?: boolean;

  /**
   * The text or icon to use for next.
   */
  nextArrow?: React.ReactNode | string;

  /**
   * The text or icon to use for previous.
   */
  previousArrow?: React.ReactNode | string;

  /**
   * Whether to display day of week labels
   */
  showDayOfWeek?: boolean;

  /**
   * Whether to highlight the today.
   */
  showToday?: boolean;

  /**
   * Whether to show the time picker.
   */
  showTime?: boolean;

  /**
   * Whether to use 12-hour cycle for the time picker.
   */
  is12HourCycle?: boolean;

  /**
   * Whether to animate the calendar.
   */
  animated?: boolean;

  /**
   * A callback function that is called when the selected date(s) change.
   */
  onChange?: (value: Date | [Date, Date]) => void;

  /**
   * A callback function that is called when the calendar view changes.
   */
  onViewChange?: (view: CalendarViewType) => void;

  /**
   * Theme for the Calendar.
   */
  theme?: CalendarTheme;
}

export const Calendar: FC<CalendarProps> = ({
  min,
  max,
  value,
  disabled,
  isRange,
  previousArrow = '‹',
  nextArrow = '›',
  showDayOfWeek,
  showToday,
  showTime = false,
  is12HourCycle = false,
  animated = true,
  onChange,
  onViewChange,
  theme: customTheme
}) => {
  const theme: CalendarTheme = useComponentTheme('calendar', customTheme);

  const date = useMemo(
    () => (Array.isArray(value) ? value[0] : value ?? new Date()),
    [value]
  );
  const rangeStart = useMemo(
    () => (isRange && Array.isArray(value) ? value?.[0] : undefined),
    [isRange, value]
  );
  const rangeEnd = useMemo(
    () => (isRange && Array.isArray(value) ? value?.[1] : undefined),
    [isRange, value]
  );

  const [viewValue, setViewValue] = useState<Date>(date);
  const [monthValue, setMonthValue] = useState<number>(getMonth(date));
  const [yearValue, setYearValue] = useState<number>(getYear(date));
  const [decadeStart, setDecadeStart] = useState<Date>(startOfDecade(date));
  const [decadeEnd, setDecadeEnd] = useState<Date>(endOfDecade(date));
  const [view, setView] = useState<CalendarViewType>('days');
  const [scrollDirection, setScrollDirection] = useState<
    'forward' | 'back' | null
  >(null);

  const previousClickHandler = useCallback(() => {
    setScrollDirection('back');
    if (view === 'days') {
      setViewValue(sub(viewValue, { months: 1 }));
    } else if (view === 'months') {
      setYearValue(yearValue - 1);
    } else {
      setDecadeStart(subYears(decadeStart, 10));
      setDecadeEnd(subYears(decadeEnd, 10));
    }
  }, [decadeEnd, decadeStart, view, viewValue, yearValue]);

  const nextClickHandler = useCallback(() => {
    setScrollDirection('forward');
    if (view === 'days') {
      setViewValue(add(viewValue, { months: 1 }));
    } else if (view === 'months') {
      setYearValue(yearValue + 1);
    } else {
      setDecadeStart(addYears(decadeStart, 10));
      setDecadeEnd(addYears(decadeEnd, 10));
    }
  }, [decadeEnd, decadeStart, view, viewValue, yearValue]);

  const headerClickHandler = useCallback(() => {
    const newView = view === 'days' ? 'months' : 'years';
    setScrollDirection(null);
    setView(newView);
    onViewChange?.(newView);
  }, [onViewChange, view]);

  const dateChangeHandler = useCallback(
    (newDate: Date) => {
      let finalDate = newDate;
      if (showTime && value) {
        finalDate = updateDateTime(
          value,
          newDate,
          isRange,
          Boolean(rangeStart)
        );
      }

      if (!isRange) {
        onChange?.(finalDate);
      } else if (!rangeStart) {
        onChange?.([finalDate, undefined]);
      } else if (!rangeEnd) {
        const range = [rangeStart, finalDate];
        const sortedRange: [Date, Date] = [minDate(range), maxDate(range)];
        onChange?.(sortedRange);
      } else {
        onChange?.([finalDate, undefined]);
      }
    },
    [isRange, onChange, rangeEnd, rangeStart, showTime, value]
  );

  const monthsChangeHandler = useCallback(
    month => {
      setViewValue(setMonth(setYear(min || new Date(), yearValue), month));
      setMonthValue(month);
      setView('days');
      onViewChange?.('days');
    },
    [min, yearValue, onViewChange]
  );

  const yearChangeHandler = useCallback(
    year => {
      setViewValue(setYear(min || new Date(), year));
      setYearValue(year);
      setView('months');
      onViewChange?.('months');
    },
    [min, onViewChange]
  );

  const handleTimeChange = useCallback(
    (newTimeDate: Date) => {
      if (!isRange) {
        onChange?.(newTimeDate);
      } else {
        if (rangeEnd) {
          const newRangeEnd = setSeconds(
            setMinutes(
              setHours(rangeEnd, getHours(newTimeDate)),
              getMinutes(newTimeDate)
            ),
            getSeconds(newTimeDate)
          );
          onChange?.([rangeStart!, newRangeEnd]);
        } else {
          const newRangeStart = newTimeDate;
          onChange?.([newRangeStart, rangeEnd]);
        }
      }
    },
    [isRange, onChange, rangeStart, rangeEnd]
  );

  const xAnimation = useMemo(() => {
    switch (scrollDirection) {
      case 'forward':
        return '100%';
      case 'back':
        return '-100%';
      default:
        return 0;
    }
  }, [scrollDirection]);

  return (
    <div className={twMerge(theme.base)}>
      <div className="relative flex flex-1">
        <div className="flex-1">
          <header className={twMerge(theme.header.base)}>
            <Button
              variant="text"
              disabled={disabled}
              onClick={previousClickHandler}
              className={theme.header.prev}
              disablePadding
            >
              {previousArrow}
            </Button>
            <Button
              disabled={disabled}
              variant="text"
              onClick={headerClickHandler}
              className={theme.header.mid}
              disablePadding
              fullWidth
            >
              <SmallHeading disableMargins className={theme.title}>
                {view === 'days' && format(viewValue, 'MMMM')}
                {view === 'months' && <>{yearValue}</>}
                {view === 'years' && (
                  <>
                    {decadeStart.getFullYear()}-{decadeEnd.getFullYear()}
                  </>
                )}
              </SmallHeading>
            </Button>
            <Button
              variant="text"
              disabled={disabled}
              onClick={nextClickHandler}
              className={theme.header.next}
              disablePadding
            >
              {nextArrow}
            </Button>
          </header>
          <Divider />
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              className={twMerge(theme.content)}
              key={view}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 1 }}
              transition={{
                x: { type: animated ? 'keyframes' : false },
                opacity: { duration: 0.2, type: animated ? 'tween' : false },
                scale: { type: animated ? 'tween' : false }
              }}
            >
              {view === 'days' && (
                <CalendarDays
                  value={viewValue}
                  min={min}
                  max={max}
                  disabled={disabled}
                  isRange={isRange}
                  current={isRange ? [rangeStart, rangeEnd] : value}
                  showDayOfWeek={showDayOfWeek}
                  showToday={showToday}
                  showTime={showTime}
                  xAnimation={xAnimation}
                  animated={animated}
                  onChange={dateChangeHandler}
                />
              )}
              {view === 'months' && (
                <CalendarMonths
                  value={monthValue}
                  onChange={monthsChangeHandler}
                />
              )}
              {view === 'years' && (
                <CalendarYears
                  decadeStart={decadeStart}
                  decadeEnd={decadeEnd}
                  animated={animated}
                  value={yearValue}
                  xAnimation={xAnimation}
                  onChange={yearChangeHandler}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        {showTime && (
          <CalendarTimes
            value={
              isRange ? (rangeEnd ? rangeEnd : value?.[0]) : (value as Date)
            }
            min={min}
            max={max === 'now' ? new Date() : max}
            theme={theme.time}
            is12HourCycle={is12HourCycle}
            showDayOfWeek={showDayOfWeek}
            onChange={handleTimeChange}
          />
        )}
      </div>
    </div>
  );
};
