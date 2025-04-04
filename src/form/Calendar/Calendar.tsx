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
  format
} from 'date-fns';
import { CalendarDays } from './CalendarDays';
import { CalendarMonths } from './CalendarMonths';
import { CalendarYears } from './CalendarYears';
import { SmallHeading } from '@/typography';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { CalendarTheme } from './CalendarTheme';
import { Divider } from '@/layout/Divider';
import { useContentHeight } from './hooks/useContentHeight';

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
  animated = true,
  onChange,
  onViewChange,
  theme: customTheme
}) => {
  const theme: CalendarTheme = useComponentTheme('calendar', customTheme);
  const { contentRefs, getHeightStyle } = useContentHeight();

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
    }
  }, [view, viewValue, yearValue]);

  const nextClickHandler = useCallback(() => {
    setScrollDirection('forward');
    if (view === 'days') {
      setViewValue(add(viewValue, { months: 1 }));
    } else if (view === 'months') {
      setYearValue(yearValue + 1);
    }
  }, [view, viewValue, yearValue]);

  const handleMonthHeaderClick = useCallback(() => {
    setScrollDirection(null);
    setView('months');
    onViewChange?.('months');
  }, [onViewChange]);

  const handleYearHeaderClick = useCallback(() => {
    setScrollDirection(null);
    setView('years');
    onViewChange?.('years');
  }, [onViewChange]);

  const dateChangeHandler = useCallback(
    (date: Date) => {
      if (!isRange) {
        onChange?.(date);
        setMonthValue(getMonth(date));
        setYearValue(getYear(date));
      } else if (!rangeStart) {
        onChange?.([date, undefined]);
      } else if (!rangeEnd) {
        const range = [rangeStart, date];
        onChange?.([minDate(range), maxDate(range)]);
      } else {
        onChange?.([date, undefined]);
      }
    },
    [isRange, onChange, rangeEnd, rangeStart]
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
      setView('days');
      onViewChange?.('days');
    },
    [min, onViewChange]
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
    <div className={twMerge(theme.base, 'relative')}>
      <div className="relative">
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
            className={theme.header.mid}
            disablePadding
            fullWidth
          >
            <SmallHeading disableMargins className={theme.title}>
              {view === 'days' && (
                <>
                  <span
                    onClick={e => {
                      if (!disabled) {
                        e.stopPropagation();
                        handleMonthHeaderClick();
                      }
                    }}
                    className="cursor-pointer hover:text-primary-500"
                    role="button"
                    tabIndex={disabled ? -1 : 0}
                  >
                    {format(viewValue, 'MMMM')}
                  </span>
                  <span className="mx-1"> </span>
                  <span
                    onClick={e => {
                      if (!disabled) {
                        e.stopPropagation();
                        handleYearHeaderClick();
                      }
                    }}
                    className="cursor-pointer hover:text-primary-500"
                    role="button"
                    tabIndex={disabled ? -1 : 0}
                  >
                    {format(viewValue, 'yyyy')}
                  </span>
                </>
              )}
              {view === 'months' && (
                <>
                  <span className="text-gray-500">
                    {format(viewValue, 'MMMM')}
                  </span>
                  <span className="mx-1"> </span>
                  <span
                    onClick={e => {
                      if (!disabled) {
                        e.stopPropagation();
                        handleYearHeaderClick();
                      }
                    }}
                    className="cursor-pointer hover:text-primary-500"
                    role="button"
                    tabIndex={disabled ? -1 : 0}
                  >
                    {format(viewValue, 'yyyy')}
                  </span>
                </>
              )}
              {view === 'years' && (
                <span className="text-gray-500">Select Year</span>
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
        <div style={getHeightStyle(0)} className="relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              ref={el => (contentRefs.current[0] = el)}
              key={view}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.1,
                ease: 'easeInOut'
              }}
              className="relative w-full"
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
                  animated={animated}
                  value={yearValue}
                  onChange={yearChangeHandler}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
