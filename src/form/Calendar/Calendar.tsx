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
  getHours,
  getMinutes,
  getSeconds,
  setHours,
  setMinutes,
  setSeconds
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
import { CalendarTimes } from './CalendarTimes';
import { CalendarInputs } from './CalendarInputs';
import { CalendarPresets, PresetType } from './CalendarPresets';
import { Stack } from '@/layout/Stack';

export type CalendarViewType = 'days' | 'months' | 'years';

export type CalendarPresetType =
  | 'past' // Shows past date presets (e.g., "Last 7 days", "Last month")
  | 'future' // Shows future date presets (e.g., "Next 7 days", "Next month")
  | 'combined' // Shows both past and future presets
  | React.ReactNode; // Custom preset content

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
   * The text or icon to use for next year.
   */
  nextYearArrow?: React.ReactNode | string;

  /**
   * The text or icon to use for previous year.
   */
  previousYearArrow?: React.ReactNode | string;

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

  /**
   * Whether to show the input preview.
   */
  showInputPreview?: boolean;

  /**
   * Whether to show the time picker.
   */
  showTime?: boolean;

  /**
   * Preset configuration for the calendar.
   * - 'past': Shows past date presets
   * - 'future': Shows future date presets
   * - 'combined': Shows both past and future presets
   * - ReactNode: Custom preset content
   *
   * Default behavior:
   * - Calendar: 'combined' for single dates
   * - Calendar with time: 'combined' with time presets
   * - CalendarRange: 'past' or 'future' based on direction
   */
  preset?: CalendarPresetType;
}

export const Calendar: FC<CalendarProps> = ({
  min,
  max,
  value,
  disabled,
  isRange,
  previousArrow = '‹',
  nextArrow = '›',
  previousYearArrow = '«',
  nextYearArrow = '»',
  showDayOfWeek,
  showToday,
  animated = true,
  onChange,
  onViewChange,
  showTime,
  showInputPreview,
  theme: customTheme,
  preset
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

  // Determine if we have custom preset content
  const hasCustomPresets = preset && React.isValidElement(preset);

  // Determine preset type based on calendar configuration
  const presetType = useMemo((): PresetType => {
    if (!preset || hasCustomPresets) return 'past';
    return preset as PresetType;
  }, [preset, hasCustomPresets]);

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

  const previousYearClickHandler = useCallback(() => {
    setScrollDirection('back');
    if (view === 'days') {
      setViewValue(sub(viewValue, { years: 1 }));
      setYearValue(yearValue - 1);
    }
  }, [view, viewValue, yearValue]);

  const nextYearClickHandler = useCallback(() => {
    setScrollDirection('forward');
    if (view === 'days') {
      setViewValue(add(viewValue, { years: 1 }));
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
    (newDate: Date) => {
      let finalDate = newDate;
      if (showTime && value) {
        const hasTime =
          getHours(newDate) !== 0 ||
          getMinutes(newDate) !== 0 ||
          getSeconds(newDate) !== 0;

        if (!hasTime) {
          const originalTimeSource = Array.isArray(value)
            ? rangeStart ?? value[0] ?? new Date()
            : value ?? new Date();
          finalDate = setSeconds(
            setMinutes(
              setHours(newDate, getHours(originalTimeSource)),
              getMinutes(originalTimeSource)
            ),
            getSeconds(originalTimeSource)
          );
        }
      }

      if (!isRange) {
        onChange?.(finalDate);
        setViewValue(finalDate);
        setMonthValue(getMonth(finalDate));
        setYearValue(getYear(finalDate));
      } else if (!rangeStart) {
        onChange?.([finalDate, undefined]);
        setViewValue(finalDate);
      } else if (!rangeEnd) {
        const range = [rangeStart, finalDate];
        const sortedRange: [Date, Date] = [minDate(range), maxDate(range)];
        onChange?.(sortedRange);
        setViewValue(sortedRange[0]);
      } else {
        onChange?.([finalDate, undefined]);
        setViewValue(finalDate);
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
      setView('days');
      onViewChange?.('days');
    },
    [min, onViewChange]
  );

  const handleTimeChange = useCallback(
    (newTimeDate: Date) => {
      if (!isRange) {
        onChange?.(newTimeDate);
        setViewValue(newTimeDate);
      } else {
        const newRangeStart = newTimeDate;
        onChange?.([newRangeStart, rangeEnd]);
        setViewValue(newRangeStart);
      }
    },
    [isRange, onChange, rangeEnd, setViewValue]
  );

  const xAnimation = useMemo(() => {
    switch (scrollDirection) {
      case 'forward':
        return '50%';
      case 'back':
        return '-50%';
      default:
        return 0;
    }
  }, [scrollDirection]);

  return (
    <div className={twMerge(theme.base)}>
      {showInputPreview && (
        <>
          <CalendarInputs
            value={viewValue}
            onChange={dateChangeHandler}
            theme={theme}
            className={theme?.inputPreview?.base}
            showTime={showTime}
          />
          <Divider variant="secondary" />
        </>
      )}
      <Stack direction="row" className="gap-1.75">
        {preset && (
          <CalendarPresets
            type={presetType}
            isRange={isRange}
            showTime={showTime}
            value={value}
            onChange={onChange}
          >
            {hasCustomPresets ? preset : undefined}
          </CalendarPresets>
        )}
        <div className="relative flex flex-1">
          <div className="flex-1">
            <header className={twMerge(theme.header.base)}>
              <div className="flex items-center gap-3">
                <Button
                  variant="text"
                  disabled={disabled}
                  onClick={previousYearClickHandler}
                  className={twMerge(
                    theme.header.prev,
                    'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'
                  )}
                  disablePadding
                >
                  {previousYearArrow}
                </Button>
                <Button
                  variant="text"
                  disabled={disabled}
                  onClick={previousClickHandler}
                  className={theme.header.prev}
                  disablePadding
                >
                  {previousArrow}
                </Button>
              </div>
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
              <div className="flex items-center gap-3">
                <Button
                  variant="text"
                  disabled={disabled}
                  onClick={nextClickHandler}
                  className={theme.header.next}
                  disablePadding
                >
                  {nextArrow}
                </Button>
                <Button
                  variant="text"
                  disabled={disabled}
                  onClick={nextYearClickHandler}
                  className={twMerge(
                    theme.header.next,
                    'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'
                  )}
                  disablePadding
                >
                  {nextYearArrow}
                </Button>
              </div>
            </header>
            <Divider
              className={twMerge(
                showInputPreview && 'border-gray-200 dark:border-gray-700'
              )}
            />
            <div style={getHeightStyle(0)} className="relative">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  ref={el => (contentRefs.current[0] = el)}
                  key={view}
                  initial={{
                    opacity: 0,
                    x: scrollDirection === 'forward' ? '15%' : '-15%'
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: scrollDirection === 'forward' ? '-15%' : '15%'
                  }}
                  transition={{
                    duration: 0.15,
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
          {showTime && !isRange && !Array.isArray(value) && (
            <div className={theme.time?.wrapper}>
              <CalendarTimes
                value={value}
                onChange={handleTimeChange}
                theme={theme.time}
                showDayOfWeek={showDayOfWeek}
              />
            </div>
          )}
          {showTime && isRange && Array.isArray(value) && value[0] && (
            <div className={theme.time?.wrapper}>
              <CalendarTimes
                value={value[0]}
                onChange={newDate => handleTimeChange(newDate)}
                theme={theme.time}
                showDayOfWeek={showDayOfWeek}
              />
            </div>
          )}
        </div>
      </Stack>
    </div>
  );
};
