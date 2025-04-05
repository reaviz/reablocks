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
    return Array.from({ length: monthsToDisplay }, (_, i) =>
      addMonths(initialDate, direction === 'past' ? -i : i)
    );
  });
  const [scrollDirection, setScrollDirection] = useState<
    'forward' | 'back' | null
  >(null);
  const [hoveringDate, setHoveringDate] = useState<Date | null>(null);
  const [pickerState, setPickerState] = useState<PickerState>(null);
  const { contentRefs, getHeightStyle } = useContentHeight({ paneCount: 2 });

  const displayMonths = Array.from(Array(monthsToDisplay).keys());
  const showPast = direction === 'past';
  if (direction === 'past') {
    displayMonths.reverse();
  }

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
  const getPaneDate = (paneIndex: number): Date => {
    return paneDates[paneIndex];
  };

  const handleYearSelect = useCallback(
    (year: number) => {
      if (pickerState) {
        const paneIndex = pickerState.paneIndex;
        const currentPaneDate = getPaneDate(paneIndex);
        const newPaneDate = setYear(currentPaneDate, year);

        if (paneIndex === 0) {
          // Left pane selected
          setLeftPaneDate(newPaneDate);
          // If new year is greater than right pane year, update right pane
          if (year > getYear(rightPaneDate)) {
            setRightPaneDate(setYear(rightPaneDate, year));
          }
        } else {
          // Right pane selected - independent update
          // Ensure right pane year is not less than left pane
          if (year >= getYear(leftPaneDate)) {
            setRightPaneDate(newPaneDate);
          }
        }
        setPickerState(null);
        setScrollDirection(null);
      }
    },
    [pickerState, leftPaneDate, rightPaneDate]
  );

  const handleMonthSelect = useCallback(
    (month: number) => {
      if (pickerState) {
        const paneIndex = pickerState.paneIndex;
        const currentPaneDate = getPaneDate(paneIndex);
        const newPaneDate = setMonth(currentPaneDate, month);

        if (paneIndex === 0) {
          setLeftPaneDate(newPaneDate);
          // If new date is greater than right pane, update right pane
          if (newPaneDate >= rightPaneDate) {
            setRightPaneDate(addMonths(newPaneDate, 1));
          }
        } else {
          // Ensure right pane date is not less than left pane
          if (newPaneDate > leftPaneDate) {
            setRightPaneDate(newPaneDate);
          }
        }
        setPickerState(null);
        setScrollDirection(null);
      }
    },
    [pickerState, leftPaneDate, rightPaneDate]
  );

  // Update navigation handlers to use both pane dates
  const previousClickHandler = useCallback(() => {
    setScrollDirection('back');
    setPaneDates(prev => prev.map(date => subMonths(date, 1)));
  }, []);

  const previousYearClickHandler = useCallback(() => {
    setScrollDirection('back');
    setPaneDates(prev => prev.map(date => subYears(date, 1)));
  }, []);

  const nextClickHandler = useCallback(() => {
    setScrollDirection('forward');
    setPaneDates(prev => prev.map(date => addMonths(date, 1)));
  }, []);

  const nextYearClickHandler = useCallback(() => {
    setScrollDirection('forward');
    setPaneDates(prev => prev.map(date => addYears(date, 1)));
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
    if (value?.[0]) {
      setLeftPaneDate(value[0]);
      setRightPaneDate(addMonths(value[0], 1));
      setScrollDirection(null);
    }
  }, [value]);

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
            <div className="mb-4 px-4">
              <Stack direction="row" className="gap-2 justify-center">
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
                />
                <span className="text-gray-500 dark:text-gray-400 self-center">
                  -
                </span>
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
