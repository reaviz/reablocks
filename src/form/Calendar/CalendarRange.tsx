import React, { FC, Fragment, useCallback, useMemo, useState } from 'react';
import { add, addMonths, min as minDate, max as maxDate, sub } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../../elements';
import { CalendarProps } from './Calendar';
import { CalendarDays } from './CalendarDays';
import { SmallHeading } from '../../typography';
import { Stack } from '../../layout';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '../../utils';
import { CalendarRangeTheme } from './CalendarRangeTheme';

export interface CalendarRangeProps
  extends Omit<CalendarProps, 'value' | 'isRange' | 'onViewChange'> {
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
}

export const CalendarRange: FC<CalendarRangeProps> = ({
  min,
  max,
  value,
  disabled,
  previousArrow,
  previousYearArrow,
  nextArrow,
  nextYearArrow,
  dateFormat,
  showDayOfWeek,
  animated,
  onChange,
  monthsToDisplay,
  direction,
  ...rest
}) => {
  const theme = useComponentTheme('calendarRange') as CalendarRangeTheme;
  const date = useMemo(
    () => (Array.isArray(value) ? value[0] : new Date()),
    [value]
  );
  const rangeStart = useMemo(() => (value ? value[0] : undefined), [value]);
  const rangeEnd = useMemo(() => (value ? value[1] : undefined), [value]);

  const [viewValue, setViewValue] = useState<Date>(date || new Date());
  const [scrollDirection, setScrollDirection] = useState<
    'forward' | 'back' | null
  >(null);
  const [hoveringDate, setHoveringDate] = useState<Date | null>(null);

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

  const previousClickHandler = useCallback(() => {
    setScrollDirection('back');
    setViewValue(sub(viewValue, { months: 1 }));
  }, [viewValue]);

  const previousYearClickHandler = useCallback(() => {
    setScrollDirection('back');
    setViewValue(sub(viewValue, { years: 1 }));
  }, [viewValue]);

  const nextClickHandler = useCallback(() => {
    setScrollDirection('forward');
    setViewValue(add(viewValue, { months: 1 }));
  }, [viewValue]);

  const nextYearClickHandler = useCallback(() => {
    setScrollDirection('forward');
    setViewValue(add(viewValue, { years: 1 }));
  }, [viewValue]);

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
      <header className={twMerge(theme.header)}>
        <Stack>
          <Button
            variant="text"
            disabled={disabled}
            onClick={previousYearClickHandler}
            disablePadding
          >
            {previousYearArrow}
          </Button>
          <Button
            variant="text"
            disabled={disabled}
            onClick={previousClickHandler}
            disablePadding
          >
            {previousArrow}
          </Button>
        </Stack>
        <SmallHeading className={twMerge(theme.title)} disableMargins>
          {displayMonths.map(i => (
            <span key={addMonths(viewValue, showPast ? -i : i).toDateString()}>
              {new Intl.DateTimeFormat(navigator.language, {
                month: 'long'
              }).format(addMonths(viewValue, showPast ? -i : i))}
            </span>
          ))}
        </SmallHeading>
        <Stack>
          <Button
            variant="text"
            disabled={disabled}
            onClick={nextClickHandler}
            disablePadding
          >
            {nextArrow}
          </Button>
          <Button
            variant="text"
            disabled={disabled}
            onClick={nextYearClickHandler}
            disablePadding
          >
            {nextYearArrow}
          </Button>
        </Stack>
      </header>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 1 }}
          transition={{
            x: { type: animated ? 'keyframes' : false },
            opacity: { duration: 0.2, type: animated ? 'tween' : false },
            scale: { type: animated ? 'tween' : false }
          }}
        >
          <div data-testid="hello" className={twMerge(theme.content)}>
            {displayMonths.map((offset, idx) => (
              <Fragment key={`calendar-${offset}`}>
                <CalendarDays
                  value={addMonths(viewValue, showPast ? -offset : offset)}
                  min={min}
                  max={max}
                  disabled={disabled}
                  current={[rangeStart, rangeEnd]}
                  showDayOfWeek={showDayOfWeek}
                  xAnimation={xAnimation}
                  animated={animated}
                  hover={hoveringDate}
                  onHover={setHoveringDate}
                  hidePrevMonthDays={idx > 0}
                  hideNextMonthDays={idx < monthsToDisplay - 1}
                  onChange={dateChangeHandler}
                  isRange
                  {...rest}
                />
              </Fragment>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

CalendarRange.defaultProps = {
  previousArrow: '‹',
  nextArrow: '›',
  previousYearArrow: '«',
  nextYearArrow: '»',
  animated: true,
  dateFormat: 'MMMM yyyy',
  range: [new Date(), new Date()],
  monthsToDisplay: 2,
  direction: 'future'
};
