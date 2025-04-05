import React, {
  FC,
  useCallback,
  useMemo,
  useState,
  useEffect,
  useRef
} from 'react';
import {
  add,
  addMonths,
  min as minDate,
  max as maxDate,
  getYear,
  setYear,
  setMonth,
  format,
  getMonth,
  startOfMonth,
  getHours,
  getMinutes,
  getSeconds,
  startOfWeek,
  endOfWeek
} from 'date-fns';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from '@/elements';
import { CalendarDays } from './CalendarDays';
import { CalendarMonths } from './CalendarMonths';
import { CalendarYears } from './CalendarYears';
import { SmallHeading } from '@/typography';
import { Divider, Stack } from '@/layout';
import { useComponentTheme } from '@/utils';
import { CalendarRangeTheme } from './CalendarRangeTheme';
import { twMerge } from 'tailwind-merge';
import { useContentHeight } from './hooks/useContentHeight';
import { CalendarPresets } from './CalendarPresets';
import { RangeCalendarProps } from './hooks/useCalendar';
import { PresetType } from './CalendarPresets';
import { CalendarInputs } from './CalendarInputs';
import { CalendarTimes } from './CalendarTimes';

// Type for the state tracking which picker is open for which pane
type PickerState = { view: 'months' | 'years'; paneIndex: number } | null;

export type { RangeCalendarProps as CalendarRangeProps };

export const CalendarRange: FC<RangeCalendarProps> = ({
  min,
  max,
  value: internalValue,
  disabled,
  previousArrow = '‹',
  previousYearArrow = '«',
  nextArrow = '›',
  nextYearArrow = '»',
  showDayOfWeek,
  animated = true,
  onChange,
  monthsToDisplay = 2,
  direction = 'future',
  headerDateFormat = 'MMMM',
  theme: customTheme,
  preset,
  showInputPreview = false,
  showTime = false,
  onOk,
  ...rest
}) => {
  const theme: CalendarRangeTheme = useComponentTheme(
    'calendarRange',
    customTheme
  );
  const date = useMemo(
    () =>
      Array.isArray(internalValue) && internalValue[0]
        ? internalValue[0]
        : new Date(),
    [internalValue]
  );
  const rangeStart = useMemo(
    () => (internalValue ? internalValue[0] : undefined),
    [internalValue]
  );
  const rangeEnd = useMemo(
    () => (internalValue ? internalValue[1] : undefined),
    [internalValue]
  );

  const [leftPaneDate, setLeftPaneDate] = useState<Date>(date || new Date());
  const [rightPaneDate, setRightPaneDate] = useState<Date>(
    addMonths(date || new Date(), 1)
  );
  const [paneDates, setPaneDates] = useState<Date[]>(() => {
    const initialDate = date || new Date();
    return Array.from({ length: monthsToDisplay }, (_, i) => {
      const newDate = new Date(initialDate);
      if (direction === 'past') {
        newDate.setMonth(initialDate.getMonth() - i);
      } else {
        newDate.setMonth(initialDate.getMonth() + i);
      }
      return startOfMonth(newDate);
    });
  });
  const [scrollDirection, setScrollDirection] = useState<
    'forward' | 'back' | null
  >(null);
  const [hoveringDate, setHoveringDate] = useState<Date | null>(null);
  const [pickerState, setPickerState] = useState<PickerState>(null);
  const valueChangeSourceRef = useRef<'calendar' | 'preset' | 'input' | null>(
    null
  );
  const { contentRefs, getHeightStyle } = useContentHeight({ paneCount: 2 });
  const [activeTimePane, setActiveTimePane] = useState<number | null>(null);
  const timePickerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timeIconRefs = useRef<(HTMLDivElement | null)[]>([]);

  const displayMonths = useMemo(() => {
    const months = Array.from({ length: monthsToDisplay }, (_, i) => i);
    return direction === 'past' ? months.reverse() : months;
  }, [monthsToDisplay, direction]);

  const showPast = direction === 'past';

  const dateChangeHandler = useCallback(
    (date: Date) => {
      valueChangeSourceRef.current = 'calendar';
      if (!rangeStart) {
        onChange?.([date, undefined]);
      } else if (!rangeEnd) {
        const range = [rangeStart, date];
        onChange?.([minDate(range), maxDate(range)]);
      } else {
        onChange?.([date, undefined]);
      }
    },
    [onChange, rangeEnd, rangeStart]
  );

  // Update handlers for preset and input changes
  const handlePresetChange = useCallback(
    (newValue: [Date, Date]) => {
      valueChangeSourceRef.current = 'preset';
      onChange?.(newValue);
    },
    [onChange]
  );

  const handleInputChange = useCallback(
    (date: Date, isStart: boolean) => {
      valueChangeSourceRef.current = 'input';
      if (isStart) {
        if (!rangeEnd) {
          onChange?.([date, undefined]);
        } else {
          const range = [date, rangeEnd];
          onChange?.([minDate(range), maxDate(range)]);
        }
      } else {
        if (!rangeStart) {
          onChange?.([undefined, date]);
        } else {
          const range = [rangeStart, date];
          onChange?.([minDate(range), maxDate(range)]);
        }
      }
    },
    [onChange, rangeStart, rangeEnd]
  );

  // Replace viewValue calculations with pane-specific dates
  const getPaneDate = useCallback(
    (paneIndex: number): Date => {
      return paneDates[paneIndex] || startOfMonth(new Date());
    },
    [paneDates]
  );

  const handleTimeChange = useCallback(
    (newTimeDate: Date, paneIndex: number) => {
      // Check if this is the end date pane
      const isEndDatePane =
        internalValue?.[1] &&
        format(internalValue[1], 'yyyy-MM') ===
          format(getPaneDate(paneIndex), 'yyyy-MM');

      if (isEndDatePane && internalValue?.[1]) {
        // Update end date time
        const newEnd = new Date(internalValue[1]);
        newEnd.setHours(getHours(newTimeDate));
        newEnd.setMinutes(getMinutes(newTimeDate));
        newEnd.setSeconds(getSeconds(newTimeDate));
        onChange?.([internalValue[0], newEnd]);
      } else if (internalValue?.[0]) {
        // Update start date time
        const newStart = new Date(internalValue[0]);
        newStart.setHours(getHours(newTimeDate));
        newStart.setMinutes(getMinutes(newTimeDate));
        newStart.setSeconds(getSeconds(newTimeDate));
        onChange?.([newStart, internalValue[1]]);
      }
    },
    [onChange, internalValue, getPaneDate]
  );

  // --- Handlers for Pane Pickers ---

  const handleMonthHeaderClick = useCallback(
    (paneIndex: number) => {
      // Only allow first and last panes to open month picker
      if (paneIndex !== 0 && paneIndex !== monthsToDisplay - 1) return;

      setPickerState(current => {
        if (current?.paneIndex === paneIndex && current.view === 'months') {
          return null; // Close if months view is already open
        } else {
          return { view: 'months', paneIndex };
        }
      });
      setScrollDirection(null);
    },
    [monthsToDisplay]
  );

  const handleYearHeaderClick = useCallback(
    (paneIndex: number) => {
      // Only allow first and last panes to open year picker
      if (paneIndex !== 0 && paneIndex !== monthsToDisplay - 1) return;

      setPickerState(current => {
        if (current?.paneIndex === paneIndex && current.view === 'years') {
          return null; // Close if years view is already open
        } else {
          return { view: 'years', paneIndex };
        }
      });
      setScrollDirection(null);
    },
    [monthsToDisplay]
  );

  const handleYearSelect = useCallback(
    (year: number) => {
      if (pickerState) {
        const paneIndex = pickerState.paneIndex;
        const currentPaneDate = getPaneDate(paneIndex);

        // Create new dates array and only update the selected pane
        const newDates = [...paneDates];
        newDates[paneIndex] = startOfMonth(setYear(currentPaneDate, year));

        // Ensure the new date maintains chronological order with adjacent panes
        const prevPane = paneIndex > 0 ? newDates[paneIndex - 1] : null;
        const nextPane =
          paneIndex < newDates.length - 1 ? newDates[paneIndex + 1] : null;

        if (direction === 'future') {
          if (prevPane && newDates[paneIndex] <= prevPane) return;
          if (nextPane && newDates[paneIndex] >= nextPane) return;
        } else {
          if (prevPane && newDates[paneIndex] >= prevPane) return;
          if (nextPane && newDates[paneIndex] <= nextPane) return;
        }

        setPaneDates(newDates);
        setPickerState(null);
        setScrollDirection(null);
      }
    },
    [pickerState, paneDates, direction, getPaneDate]
  );

  const handleMonthSelect = useCallback(
    (month: number) => {
      if (pickerState) {
        const paneIndex = pickerState.paneIndex;
        const currentPaneDate = getPaneDate(paneIndex);

        // Create new dates array and only update the selected pane
        const newDates = [...paneDates];
        newDates[paneIndex] = startOfMonth(setMonth(currentPaneDate, month));

        // Ensure the new date maintains chronological order with adjacent panes
        const prevPane = paneIndex > 0 ? newDates[paneIndex - 1] : null;
        const nextPane =
          paneIndex < newDates.length - 1 ? newDates[paneIndex + 1] : null;

        if (direction === 'future') {
          if (prevPane && newDates[paneIndex] <= prevPane) return;
          if (nextPane && newDates[paneIndex] >= nextPane) return;
        } else {
          if (prevPane && newDates[paneIndex] >= prevPane) return;
          if (nextPane && newDates[paneIndex] <= nextPane) return;
        }

        setPaneDates(newDates);
        setPickerState(null);
        setScrollDirection(null);
      }
    },
    [pickerState, paneDates, direction, getPaneDate]
  );

  // Update navigation handlers to use both pane dates
  const previousClickHandler = useCallback(() => {
    setScrollDirection('back');
    setPaneDates(prev =>
      prev.map(date => {
        const newDate = new Date(date);
        newDate.setMonth(date.getMonth() - 1);
        return startOfMonth(newDate);
      })
    );
  }, []);

  const previousYearClickHandler = useCallback(() => {
    setScrollDirection('back');
    setPaneDates(prev =>
      prev.map(date => {
        const newDate = new Date(date);
        newDate.setFullYear(date.getFullYear() - 1);
        return startOfMonth(newDate);
      })
    );
  }, []);

  const nextClickHandler = useCallback(() => {
    setScrollDirection('forward');
    setPaneDates(prev =>
      prev.map(date => {
        const newDate = new Date(date);
        newDate.setMonth(date.getMonth() + 1);
        return startOfMonth(newDate);
      })
    );
  }, []);

  const nextYearClickHandler = useCallback(() => {
    setScrollDirection('forward');
    setPaneDates(prev =>
      prev.map(date => {
        const newDate = new Date(date);
        newDate.setFullYear(date.getFullYear() + 1);
        return startOfMonth(newDate);
      })
    );
  }, []);

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

  // Determine if we have custom preset content
  const hasCustomPresets = preset && React.isValidElement(preset);

  // Determine preset type based on direction
  const presetType = useMemo((): PresetType => {
    if (!preset || hasCustomPresets) return direction as PresetType;
    return preset as PresetType;
  }, [preset, hasCustomPresets, direction]);

  useEffect(() => {
    // Only update view if change came from preset or input
    const isFromPresetOrInput =
      valueChangeSourceRef.current === 'preset' ||
      valueChangeSourceRef.current === 'input';
    const isSelectingRange = internalValue?.[0] && !internalValue?.[1];

    if (internalValue?.[0] && isFromPresetOrInput && !isSelectingRange) {
      const startMonth = startOfMonth(internalValue[0]);
      const dates = Array.from({ length: monthsToDisplay }, (_, i) => {
        const newDate = new Date(startMonth);
        if (direction === 'past') {
          newDate.setMonth(startMonth.getMonth() - i);
        } else {
          newDate.setMonth(startMonth.getMonth() + i);
        }
        return startOfMonth(newDate);
      });
      setPaneDates(dates);
      setScrollDirection(null);
    }

    // Reset the source after handling
    valueChangeSourceRef.current = null;
  }, [internalValue, monthsToDisplay, direction]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeTimePane === null) return;

      const timePickerElement = timePickerRefs.current[activeTimePane];
      const timeIconElement = timeIconRefs.current[activeTimePane];

      if (!timePickerElement || !timeIconElement) return;

      // Check if click is outside both the time picker and its trigger icon
      if (
        !timePickerElement.contains(event.target as Node) &&
        !timeIconElement.contains(event.target as Node)
      ) {
        setActiveTimePane(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeTimePane]);

  const handleThisWeekClick = useCallback(() => {
    const today = new Date();
    const weekStart = startOfWeek(today);
    const weekEnd = endOfWeek(today);

    if (showTime) {
      // For time picker, preserve current time in weekStart
      weekStart.setHours(today.getHours());
      weekStart.setMinutes(today.getMinutes());
      weekStart.setSeconds(today.getSeconds());
    }

    onChange?.([weekStart, weekEnd]);
    setPaneDates(prev => {
      const newDates = [...prev];
      newDates[0] = weekStart;
      if (monthsToDisplay > 1) {
        newDates[1] = add(weekStart, { months: 1 });
      }
      return newDates;
    });
  }, [onChange, monthsToDisplay, showTime]);

  return (
    <div className="flex flex-col">
      <Stack direction="row" className="gap-1.75" alignItems="end">
        {preset && (
          <CalendarPresets
            className="before:top-7.25"
            type={presetType}
            isRange={true}
            value={
              internalValue && internalValue.length >= 2
                ? [internalValue[0] as Date, internalValue[1] as Date]
                : undefined
            }
            onChange={handlePresetChange}
          >
            {hasCustomPresets ? preset : undefined}
          </CalendarPresets>
        )}
        <div className={theme.base}>
          {/* Show input preview at the top if enabled */}
          {showInputPreview && (
            <>
              <Stack direction="row" className="gap-0 justify-center">
                <div className="relative w-auto">
                  <CalendarInputs
                    value={rangeStart}
                    onChange={date => handleInputChange(date, true)}
                    showTime={showTime}
                    className={showTime ? 'w-40' : 'w-28'}
                    inputClassName="border-r-0 rounded-r-none"
                  />
                  <span className="absolute right-[-8px] top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
                    →
                  </span>
                </div>

                <CalendarInputs
                  value={rangeEnd}
                  onChange={date => handleInputChange(date, false)}
                  showTime={showTime}
                  className={showTime ? 'w-40' : 'w-28'}
                  inputClassName="border-l-0 rounded-l-none text-sm"
                />
              </Stack>
              <Divider variant="secondary" className="mb-4" />
            </>
          )}
          <header className={theme.header.base}>
            <Stack>
              {pickerState === null && (
                <Button
                  variant="text"
                  disabled={disabled}
                  onClick={previousYearClickHandler}
                  className={theme.header.prev}
                  disablePadding
                  aria-label="Previous year"
                >
                  {previousYearArrow}
                </Button>
              )}
              <Button
                variant="text"
                disabled={disabled}
                onClick={previousClickHandler}
                className={theme.header.prev}
                disablePadding
                aria-label={
                  pickerState === null
                    ? 'Previous month'
                    : pickerState.view === 'months'
                      ? 'Previous year'
                      : 'Previous decade'
                }
              >
                {previousArrow}
              </Button>
            </Stack>
            <Stack
              className={twMerge(
                theme.title,
                'justify-center items-center w-full'
              )}
            >
              <div className="flex w-full justify-around">
                {displayMonths.map(paneIndex => {
                  const paneDate = getPaneDate(paneIndex);
                  const isPickerOpenForPane =
                    pickerState?.paneIndex === paneIndex;
                  const isFirstOrLastPane =
                    paneIndex === 0 || paneIndex === displayMonths.length - 1;

                  return (
                    <div
                      key={`header-${paneIndex}`}
                      className="flex items-center space-x-2"
                    >
                      {isFirstOrLastPane ? (
                        <>
                          <Button
                            variant="text"
                            className="p-1"
                            onClick={() => handleMonthHeaderClick(paneIndex)}
                            aria-live="polite"
                            aria-atomic="true"
                            disablePadding
                          >
                            <SmallHeading disableMargins>
                              {format(paneDate, 'MMMM')}
                            </SmallHeading>
                          </Button>
                          <Button
                            variant="text"
                            className="p-1"
                            onClick={() => handleYearHeaderClick(paneIndex)}
                            aria-live="polite"
                            aria-atomic="true"
                            disablePadding
                          >
                            <SmallHeading disableMargins>
                              {format(paneDate, 'yyyy')}
                            </SmallHeading>
                          </Button>
                        </>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <SmallHeading
                            disableMargins
                            className="p-1 text-gray-500 pointer-events-none"
                          >
                            {format(paneDate, 'MMMM')}
                          </SmallHeading>
                          <SmallHeading
                            disableMargins
                            className="p-1 text-gray-500 pointer-events-none"
                          >
                            {format(paneDate, 'yyyy')}
                          </SmallHeading>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Stack>
            <Stack>
              <Button
                variant="text"
                disabled={disabled}
                onClick={nextClickHandler}
                className={theme.header.next}
                disablePadding
                aria-label={
                  pickerState === null
                    ? 'Next month'
                    : pickerState.view === 'months'
                      ? 'Next year'
                      : 'Next decade'
                }
              >
                {nextArrow}
              </Button>
              {pickerState === null && (
                <Button
                  variant="text"
                  disabled={disabled}
                  onClick={nextYearClickHandler}
                  className={theme.header.next}
                  disablePadding
                  aria-label="Next year"
                >
                  {nextYearArrow}
                </Button>
              )}
            </Stack>
          </header>
          <Divider className={showInputPreview ? 'opacity-30' : ''} />
          <div className={theme.content}>
            {displayMonths.map(paneIndex => {
              const paneDate = getPaneDate(paneIndex);
              const paneYear = getYear(paneDate);
              const paneMonth = getMonth(paneDate);
              const isPickerOpenForPane = pickerState?.paneIndex === paneIndex;
              const currentPaneView = isPickerOpenForPane
                ? pickerState.view
                : 'days';

              // Determine if this pane should show time picker
              const isStartDatePane =
                internalValue?.[0] &&
                format(internalValue[0], 'yyyy-MM') ===
                  format(paneDate, 'yyyy-MM');
              const isEndDatePane =
                internalValue?.[1] &&
                format(internalValue[1], 'yyyy-MM') ===
                  format(paneDate, 'yyyy-MM');
              const shouldShowTimePicker =
                showTime &&
                currentPaneView === 'days' &&
                ((isStartDatePane && !internalValue?.[1]) || // Show in start pane when selecting range start
                  (isEndDatePane && internalValue?.[1])); // Show in end pane when range is complete

              // Check if this pane has a selected date
              const isPaneSelected = internalValue?.some(
                date =>
                  date &&
                  format(date, 'yyyy-MM-dd') === format(paneDate, 'yyyy-MM-dd')
              );

              // Get the selected date for this pane (if any)
              const paneSelectedDate = internalValue?.[0];

              return (
                <div key={`pane-${paneIndex}`} className="flex-1 min-w-0">
                  <div style={getHeightStyle(paneIndex)} className="relative">
                    <AnimatePresence initial={false} mode="wait">
                      <motion.div
                        ref={el => (contentRefs.current[paneIndex] = el)}
                        key={`${currentPaneView}-${paneDate.getTime()}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.1,
                          ease: 'easeInOut'
                        }}
                        className="relative w-full"
                      >
                        {currentPaneView === 'days' && (
                          <div className="relative">
                            <CalendarDays
                              value={paneDate}
                              min={min}
                              max={max}
                              disabled={disabled}
                              current={[rangeStart, rangeEnd]}
                              showDayOfWeek={true}
                              xAnimation={xAnimation}
                              animated={animated}
                              hover={hoveringDate}
                              onHover={setHoveringDate}
                              hidePrevMonthDays={false}
                              hideNextMonthDays={
                                paneIndex < monthsToDisplay - 1
                              }
                              onChange={dateChangeHandler}
                              isRange
                              {...rest}
                            />
                            {shouldShowTimePicker && (
                              <>
                                <div
                                  ref={el =>
                                    (timeIconRefs.current[paneIndex] = el)
                                  }
                                  onClick={() =>
                                    setActiveTimePane(
                                      activeTimePane === paneIndex
                                        ? null
                                        : paneIndex
                                    )
                                  }
                                  className={twMerge(
                                    'absolute -bottom-1 -right-1 p-1.5 rounded cursor-pointer bg-black/50',
                                    'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300',
                                    'transition-colors duration-150',
                                    activeTimePane === paneIndex &&
                                      'text-primary-500'
                                  )}
                                  aria-label="Time picker"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                  >
                                    <circle
                                      cx="12"
                                      cy="12"
                                      r="9"
                                      strokeWidth="2"
                                    />
                                    <path strokeWidth="2" d="M12 7v5l3 3" />
                                  </svg>
                                </div>
                                <AnimatePresence>
                                  {activeTimePane === paneIndex && (
                                    <motion.div
                                      ref={el =>
                                        (timePickerRefs.current[paneIndex] = el)
                                      }
                                      initial={{ opacity: 0, y: 0 }}
                                      animate={{ opacity: 1, y: 15 }}
                                      exit={{ opacity: 0, y: 0 }}
                                      transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 30
                                      }}
                                      className="absolute bottom-8 right-0 bg-gray-900/95 dark:bg-gray-950/95 backdrop-blur-sm border border-gray-500 dark:border-gray-500 rounded-sm"
                                    >
                                      <CalendarTimes
                                        value={
                                          isEndDatePane
                                            ? internalValue[1]
                                            : internalValue[0]
                                        }
                                        onChange={date =>
                                          handleTimeChange(date, paneIndex)
                                        }
                                        theme={theme.time}
                                        showDayOfWeek={showDayOfWeek}
                                      />
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </>
                            )}
                          </div>
                        )}
                        {currentPaneView === 'months' && (
                          <CalendarMonths
                            value={paneMonth}
                            onChange={handleMonthSelect}
                            // Pass min/max constraints if CalendarMonths supports them
                            // min={min ? startOfMonth(min) : undefined}
                            // max={max ? endOfMonth(max) : undefined}
                          />
                        )}
                        {currentPaneView === 'years' && (
                          <CalendarYears
                            value={paneYear}
                            onChange={handleYearSelect}
                            animated={animated}
                            // Pass min/max constraints if CalendarYears supports them
                            // min={min ? getYear(min) : undefined}
                            // max={max ? getYear(max) : undefined}
                          />
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Stack>
      {onOk && (
        <div className="flex justify-between mt-4 pt-2 border-t border-gray-200 dark:border-gray-700">
          <Button
            variant="filled"
            size="small"
            disabled={disabled}
            onClick={handleThisWeekClick}
          >
            This Week
          </Button>
          {onOk && (
            <Button
              variant="filled"
              size="small"
              disabled={
                disabled ||
                !internalValue ||
                !internalValue[0] ||
                !internalValue[1]
              }
              onClick={() => {
                if (internalValue && internalValue[0] && internalValue[1]) {
                  onOk(internalValue as [Date, Date]);
                  onChange?.(internalValue as [Date, Date]);
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
