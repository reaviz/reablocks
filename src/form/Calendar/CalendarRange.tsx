import { FC, Fragment, useCallback, useMemo, useState } from 'react';
import {
  add,
  addMonths,
  isSameDay,
  max as maxDate,
  min as minDate,
  sub
} from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../../elements/Button';
import { CalendarProps } from '../Calendar';
import { CalendarDays } from './CalendarDays';
import { DateFormat } from '../../data/DateFormat';
import { SmallHeading } from '../../typography';
import { Stack } from '../../layout/Stack';
import css from './CalendarRange.module.css';

export interface CalendarRangeProps
  extends Omit<CalendarProps, 'isRange' | 'onViewChange'> {
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
  const date = useMemo(
    () => (Array.isArray(value) ? value?.[0] : value) ?? new Date(),
    [value]
  );
  const rangeStart = useMemo(
    () => value?.[0] ?? date ?? new Date(),
    [date, value]
  );
  const rangeEnd = useMemo(
    () => value?.[1] ?? date ?? new Date(),
    [date, value]
  );

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
      if (isSameDay(rangeStart, rangeEnd)) {
        onChange?.([minDate([rangeStart, date]), maxDate([rangeEnd, date])]);
      } else {
        onChange?.([date, date]);
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
    <div className={css.container}>
      <header className={css.header}>
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
        <SmallHeading className={css.monthLabel} disableMargins>
          {displayMonths.map(i => (
            <DateFormat
              key={`label-${i}`}
              date={addMonths(viewValue, showPast ? -i : i)}
              format={dateFormat}
              allowToggle={false}
            />
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
          <div className={css.calendars}>
            {displayMonths.map((offset, idx) => (
              <Fragment key={`calendar-${offset}`}>
                <CalendarDays
                  value={addMonths(viewValue, showPast ? -offset : offset)}
                  min={min}
                  max={max}
                  disabled={disabled}
                  isRange={true}
                  current={[rangeStart, rangeEnd]}
                  showDayOfWeek={showDayOfWeek}
                  xAnimation={xAnimation}
                  animated={animated}
                  hover={hoveringDate}
                  onHover={setHoveringDate}
                  hidePrevMonthDays={idx > 0}
                  hideNextMonthDays={idx < monthsToDisplay - 1}
                  onChange={dateChangeHandler}
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
