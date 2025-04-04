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
            onClick={view === 'months' ? handleYearHeaderClick : undefined}
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
            // minimal animation
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{
              opacity: { duration: 0.05, type: 'keyframes' },
              scale: { type: 'keyframes' }
            }}
            // persist the height and width of the content
            style={{ height: 'fit-content', width: 'fit-content' }}
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
    </div>
  );
};
