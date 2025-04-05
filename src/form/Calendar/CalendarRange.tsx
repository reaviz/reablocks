import React, {
  FC,
  Fragment,
  useCallback,
  useMemo,
  useState,
  useEffect,
  useRef
} from 'react';
import {
  add,
  addMonths,
  addYears,
  min as minDate,
  max as maxDate,
  sub,
  subYears,
  subMonths,
  getYear,
  setYear,
  setMonth,
  format,
  getMonth,
  startOfMonth,
  endOfMonth
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

// Type for the state tracking which picker is open for which pane
type PickerState = { view: 'months' | 'years'; paneIndex: number } | null;

export type { RangeCalendarProps as CalendarRangeProps };

export const CalendarRange: FC<RangeCalendarProps> = ({
  min,
  max,
  value,
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
  ...rest
}) => {
  const theme: CalendarRangeTheme = useComponentTheme(
    'calendarRange',
    customTheme
  );
  const date = useMemo(
    () => (Array.isArray(value) && value[0] ? value[0] : new Date()),
    [value]
  );
  const rangeStart = useMemo(() => (value ? value[0] : undefined), [value]);
  const rangeEnd = useMemo(() => (value ? value[1] : undefined), [value]);

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
  const { contentRefs, getHeightStyle } = useContentHeight({ paneCount: 2 });

  const displayMonths = useMemo(() => {
    const months = Array.from({ length: monthsToDisplay }, (_, i) => i);
    return direction === 'past' ? months.reverse() : months;
  }, [monthsToDisplay, direction]);

  const showPast = direction === 'past';

  const dateChangeHandler = useCallback(
    (date: Date) => {
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

  // --- Handlers for Pane Pickers ---

  const handleMonthHeaderClick = useCallback((paneIndex: number) => {
    setPickerState(current => {
      if (current?.paneIndex === paneIndex && current.view === 'months') {
        return null; // Close if months view is already open
      } else {
        return { view: 'months', paneIndex };
      }
    });
    setScrollDirection(null);
  }, []);

  const handleYearHeaderClick = useCallback((paneIndex: number) => {
    setPickerState(current => {
      if (current?.paneIndex === paneIndex && current.view === 'years') {
        return null; // Close if years view is already open
      } else {
        return { view: 'years', paneIndex };
      }
    });
    setScrollDirection(null);
  }, []);

  // Calculates the new viewValue needed to show the selected month/year in the target pane
  const calculateNewViewValue = (paneIndex: number, newDate: Date): Date => {
    const offset = displayMonths[paneIndex];
    // We need to adjust the view value so that the selected date appears in the correct pane
    return showPast ? addMonths(newDate, offset) : subMonths(newDate, offset);
  };

  // Replace viewValue calculations with pane-specific dates
  const getPaneDate = useCallback(
    (paneIndex: number): Date => {
      return paneDates[paneIndex] || startOfMonth(new Date());
    },
    [paneDates]
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

  // Update view when value changes (including from presets)
  useEffect(() => {
    // Skip view update if the change came from clicking calendar days
    const isCalendarClick = document.activeElement?.closest('.calendar-days');
    // Skip view update if we're in the middle of selecting a range (have start but no end)
    const isSelectingRange = value?.[0] && !value?.[1];

    if (value?.[0] && !isCalendarClick && !isSelectingRange) {
      const startMonth = startOfMonth(value[0]);
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
  }, [value, monthsToDisplay, direction]);

  return (
    <Stack direction="row" className="gap-1.75">
      {preset && (
        <CalendarPresets
          className="before:top-7.25"
          type={presetType}
          isRange={true}
          value={
            value && value.length >= 2
              ? [value[0] as Date, value[1] as Date]
              : undefined
          }
          onChange={onChange}
        >
          {hasCustomPresets ? preset : undefined}
        </CalendarPresets>
      )}
      <div className={theme.base}>
        {/* Show input preview at the top if enabled */}
        {showInputPreview && (
          <>
            <div className="px-4">
              <Stack direction="row" className="gap-0 justify-center">
                <div className="relative">
                  <CalendarInputs
                    value={rangeStart}
                    onChange={date => {
                      if (!rangeEnd) {
                        onChange?.([date, undefined]);
                      } else {
                        const range = [date, rangeEnd];
                        onChange?.([minDate(range), maxDate(range)]);
                      }
                    }}
                    showTime={false}
                    className="w-28"
                    inputClassName="border-r-0 rounded-r-none"
                  />
                  <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    →
                  </span>
                </div>

                <CalendarInputs
                  value={rangeEnd}
                  onChange={date => {
                    if (!rangeStart) {
                      onChange?.([undefined, date]);
                    } else {
                      const range = [rangeStart, date];
                      onChange?.([minDate(range), maxDate(range)]);
                    }
                  }}
                  showTime={false}
                  className="w-28"
                  inputClassName="border-l-0 rounded-l-none"
                />
              </Stack>
            </div>
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

                return (
                  <div
                    key={`header-${paneIndex}`}
                    className="flex items-center space-x-2"
                  >
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
          {/* Existing panes */}
          {displayMonths.map(paneIndex => {
            const paneDate = getPaneDate(paneIndex);
            const paneYear = getYear(paneDate);
            const paneMonth = getMonth(paneDate);

            const isPickerOpenForPane = pickerState?.paneIndex === paneIndex;
            const currentPaneView = isPickerOpenForPane
              ? pickerState.view
              : 'days';

            const renderPaneHeaderContent = () => {
              if (currentPaneView === 'months') {
                return format(paneDate, 'yyyy');
              }
              if (currentPaneView === 'years') {
                const startDecade = Math.floor(paneYear / 10) * 10;
                return `${startDecade} - ${startDecade + 9}`;
              }
              // 'days' view
              return format(paneDate, headerDateFormat);
            };

            return (
              <div key={`pane-${paneIndex}`} className="flex-1 min-w-0">
                {/* Pane Content with Animation */}
                <div style={getHeightStyle(paneIndex)} className="relative">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      ref={el => (contentRefs.current[paneIndex] = el)}
                      key={currentPaneView}
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
                        <CalendarDays
                          value={paneDate}
                          min={min}
                          max={max}
                          disabled={disabled}
                          current={[rangeStart, rangeEnd]}
                          showDayOfWeek={showDayOfWeek && paneIndex === 0}
                          xAnimation={xAnimation}
                          animated={animated}
                          hover={hoveringDate}
                          onHover={setHoveringDate}
                          hidePrevMonthDays={true}
                          hideNextMonthDays={paneIndex < monthsToDisplay - 1}
                          onChange={dateChangeHandler}
                          isRange
                          {...rest}
                        />
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
  );
};
