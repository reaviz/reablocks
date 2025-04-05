import { AnimatePresence, motion } from 'motion/react';
import React, {
  FC,
  useCallback,
  useMemo,
  useState,
  useRef,
  useEffect
} from 'react';
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
  setSeconds,
  startOfToday
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
import { CalendarPresets } from './CalendarPresets';
import { Stack } from '@/layout/Stack';
import { SingleCalendarProps, CalendarViewType } from './hooks/useCalendar';
import { PresetType } from './CalendarPresets';

export type { SingleCalendarProps as CalendarProps };

export const Calendar: FC<SingleCalendarProps> = ({
  min,
  max,
  value: internalValue,
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
  preset,
  onOk
}) => {
  const theme: CalendarTheme = useComponentTheme('calendar', customTheme);
  const { contentRefs, getHeightStyle } = useContentHeight();

  // Initialize with undefined if no valid value is provided
  const date = useMemo(() => {
    if (Array.isArray(internalValue)) {
      return internalValue[0] || new Date();
    }
    return internalValue || new Date();
  }, [internalValue]);

  const rangeStart = useMemo(
    () =>
      isRange && Array.isArray(internalValue) ? internalValue?.[0] : undefined,
    [isRange, internalValue]
  );
  const rangeEnd = useMemo(
    () =>
      isRange && Array.isArray(internalValue) ? internalValue?.[1] : undefined,
    [isRange, internalValue]
  );

  // Use date for view state but not for display
  const [viewValue, setViewValue] = useState<Date>(date);
  const [monthValue, setMonthValue] = useState<number>(getMonth(date));
  const [yearValue, setYearValue] = useState<number>(getYear(date));
  const [view, setView] = useState<CalendarViewType>('days');
  const [scrollDirection, setScrollDirection] = useState<
    'forward' | 'back' | null
  >(null);
  const valueChangeSourceRef = useRef<'calendar' | 'preset' | 'input' | null>(
    null
  );

  // Determine if we have custom preset content
  const hasCustomPresets = preset && React.isValidElement(preset);

  // Determine preset type based on calendar configuration
  const presetType = useMemo((): PresetType => {
    if (!preset || hasCustomPresets) return 'past';
    return preset as PresetType;
  }, [preset, hasCustomPresets]);

  // Handle preset changes
  const handlePresetChange = useCallback(
    (newValue: Date | [Date, Date]) => {
      valueChangeSourceRef.current = 'preset';
      onChange?.(newValue);

      // Update view to focus on the selected date
      const targetDate = Array.isArray(newValue) ? newValue[0] : newValue;
      if (targetDate) {
        setViewValue(targetDate);
        setMonthValue(getMonth(targetDate));
        setYearValue(getYear(targetDate));
        setView('days');
        setScrollDirection(null);
      }
    },
    [onChange]
  );

  // Update view when value changes from presets
  useEffect(() => {
    if (valueChangeSourceRef.current === 'preset' && internalValue) {
      const targetDate = Array.isArray(internalValue)
        ? internalValue[0]
        : internalValue;
      if (targetDate) {
        setViewValue(targetDate);
        setMonthValue(getMonth(targetDate));
        setYearValue(getYear(targetDate));
        setView('days');
        setScrollDirection(null);
      }
    }
    valueChangeSourceRef.current = null;
  }, [internalValue]);

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
      if (showTime && internalValue) {
        const hasTime =
          getHours(newDate) !== 0 ||
          getMinutes(newDate) !== 0 ||
          getSeconds(newDate) !== 0;

        if (!hasTime) {
          if (!isRange) {
            // For single date, inherit time from previous value
            const originalTimeSource = Array.isArray(internalValue)
              ? internalValue[0] ?? new Date()
              : internalValue ?? new Date();
            finalDate = setSeconds(
              setMinutes(
                setHours(newDate, getHours(originalTimeSource)),
                getMinutes(originalTimeSource)
              ),
              getSeconds(originalTimeSource)
            );
          } else {
            // For range, only inherit time for first date
            if (!rangeStart) {
              const originalTimeSource = Array.isArray(internalValue)
                ? internalValue[0] ?? new Date()
                : internalValue ?? new Date();
              finalDate = setSeconds(
                setMinutes(
                  setHours(newDate, getHours(originalTimeSource)),
                  getMinutes(originalTimeSource)
                ),
                getSeconds(originalTimeSource)
              );
            } else {
              // Reset time to start of day for second date
              finalDate = setSeconds(setMinutes(setHours(newDate, 0), 0), 0);
            }
          }
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
    [isRange, onChange, rangeEnd, rangeStart, showTime, internalValue]
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
        setViewValue(newTimeDate);
      }
    },
    [isRange, onChange, rangeStart, rangeEnd, setViewValue]
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

  const handleNowClick = useCallback(() => {
    const now = new Date();
    onChange?.(now);
    setViewValue(now);
    setMonthValue(getMonth(now));
    setYearValue(getYear(now));
  }, [onChange]);

  const handleTodayClick = useCallback(() => {
    const today = startOfToday();
    onChange?.(today);
    setViewValue(today);
    setMonthValue(getMonth(today));
    setYearValue(getYear(today));
  }, [onChange]);

  return (
    <div className={twMerge(theme.base)}>
      {showInputPreview && (
        <>
          <CalendarInputs
            value={
              isRange
                ? Array.isArray(internalValue) && internalValue[0]
                  ? internalValue[0]
                  : undefined
                : (internalValue as Date)
            }
            onChange={dateChangeHandler}
            theme={theme}
            className={theme?.inputPreview?.base}
            showTime={showTime}
          />
          <Divider variant="secondary" />
        </>
      )}
      <Stack direction="row" className="gap-1.75" alignItems="end">
        {preset && (
          <CalendarPresets
            type={presetType}
            isRange={isRange}
            showTime={showTime}
            value={internalValue}
            onChange={handlePresetChange}
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
                  key={`${view}-${viewValue.getMonth()}-${viewValue.getFullYear()}`}
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
                      current={isRange ? [rangeStart, rangeEnd] : internalValue}
                      showDayOfWeek={showDayOfWeek}
                      showToday={showToday}
                      xAnimation={xAnimation}
                      animated={animated && scrollDirection !== null}
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
          {showTime && (
            <AnimatePresence>
              {showTime && (
                <motion.div
                  initial={{ opacity: 0, x: 10, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: 'auto' }}
                  exit={{ opacity: 0, x: 10, width: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 40,
                    duration: 0.2
                  }}
                  className={theme.time?.wrapper}
                >
                  <CalendarTimes
                    value={
                      isRange
                        ? rangeEnd
                          ? rangeEnd
                          : internalValue?.[0] || new Date()
                        : (internalValue as Date) || new Date()
                    }
                    onChange={handleTimeChange}
                    theme={theme.time}
                    showDayOfWeek={showDayOfWeek}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </Stack>
      {onOk && (
        <div className="flex justify-between mt-4 pt-2 border-t border-gray-200 dark:border-gray-700">
          <Button
            variant="text"
            size="small"
            disabled={disabled}
            onClick={showTime ? handleNowClick : handleTodayClick}
          >
            {showTime ? 'Now' : 'Today'}
          </Button>
          {onOk && (
            <Button
              variant="filled"
              size="small"
              disabled={disabled || !internalValue}
              onClick={() => {
                if (internalValue) {
                  onOk(internalValue);
                  onChange?.(internalValue);
                }
              }}
            >
              OK
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
