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
import { CalendarProps, CalendarPresetType } from './Calendar';
import { CalendarDays } from './CalendarDays';
import { CalendarMonths } from './CalendarMonths';
import { CalendarYears } from './CalendarYears';
import { SmallHeading } from '@/typography';
import { Divider, Stack } from '@/layout';
import { useComponentTheme } from '@/utils';
import { CalendarRangeTheme } from './CalendarRangeTheme';
import { twMerge } from 'tailwind-merge';
import { useContentHeight } from './hooks/useContentHeight';
import { CalendarPresets, PresetType } from './CalendarPresets';

// Type for the state tracking which picker is open for which pane
type PickerState = { view: 'months' | 'years'; paneIndex: number } | null;

export interface CalendarRangeProps
  extends Omit<
    CalendarProps,
    'value' | 'isRange' | 'onViewChange' | 'theme' | 'preset'
  > {
  /**
   * The selected date(s) for the calendar.
   */
  value?:
    | [Date, Date]
    | [undefined, undefined]
    | [Date | undefined]
    | undefined;

  /**
   * The number of calendar months to display.
   */
  monthsToDisplay?: number;

  /**
   * Defaults view to show past or future months if multiple months shown.
   */
  direction?: 'past' | 'future';

  /**
   * The text or icon to use for next year.
   */
  nextYearArrow?: React.ReactNode | string;

  /**
   * The text or icon to use for previous year.
   */
  previousYearArrow?: React.ReactNode | string;

  /**
   * The format of the date displayed in the calendar header.
   */
  headerDateFormat?: string;

  /**
   * Theme for the CalendarRange.
   */
  theme?: CalendarRangeTheme;

  /**
   * Preset configuration for the calendar range.
   * - 'past': Shows past date range presets
   * - 'future': Shows future date range presets
   * - 'combined': Shows both past and future range presets
   * - ReactNode: Custom preset content
   *
   * Default behavior:
   * - Automatically uses 'past' or 'future' based on direction prop
   * - Falls back to 'past' if no direction is specified
   */
  preset?: CalendarPresetType;
}

export const CalendarRange: FC<CalendarRangeProps> = ({
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
    return paneIndex === 0 ? leftPaneDate : rightPaneDate;
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
    setLeftPaneDate(prev => subMonths(prev, 1));
    setRightPaneDate(prev => subMonths(prev, 1));
  }, []);

  const previousYearClickHandler = useCallback(() => {
    setScrollDirection('back');
    setLeftPaneDate(prev => subYears(prev, 1));
    setRightPaneDate(prev => subYears(prev, 1));
  }, []);

  const nextClickHandler = useCallback(() => {
    setScrollDirection('forward');
    setLeftPaneDate(prev => addMonths(prev, 1));
    setRightPaneDate(prev => addMonths(prev, 1));
  }, []);

  const nextYearClickHandler = useCallback(() => {
    setScrollDirection('forward');
    setLeftPaneDate(prev => addYears(prev, 1));
    setRightPaneDate(prev => addYears(prev, 1));
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
        <header className={theme.header.base}>
          <Stack>
            {/* Show Year arrows only if no picker is open */}
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
                    ? 'Previous year' // TODO: Make arrows context-aware of picker
                    : 'Previous decade' // TODO: Make arrows context-aware of picker
              }
              // TODO: Disable/hide if picker is open?
            >
              {previousArrow}
            </Button>
          </Stack>
          {/* Render clickable headers for each pane centrally */}
          <Stack
            className={twMerge(
              theme.title,
              'justify-center items-center w-full'
            )}
          >
            <div className="flex w-full justify-around">
              {[0, 1].map(paneIndex => {
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
                    ? 'Next year' // TODO: Make arrows context-aware of picker
                    : 'Next decade' // TODO: Make arrows context-aware of picker
              }
              // TODO: Disable/hide if picker is open?
            >
              {nextArrow}
            </Button>
            {/* Show Year arrows only if no picker is open */}
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
        <Divider />
        {/* Render each pane */}
        <div className={theme.content}>
          {[0, 1].map(paneIndex => {
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
