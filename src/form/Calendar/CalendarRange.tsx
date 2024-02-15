import { FC, Fragment, useCallback, useMemo, useState } from 'react';
import {
  add,
  addMonths,
  addYears,
  endOfDecade,
  getMonth,
  getYear,
  isSameDay,
  max as maxDate,
  min as minDate,
  setMonth,
  setYear,
  startOfDecade,
  sub,
  subYears
} from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../../elements/Button';
import { CalendarProps, CalendarViewType } from './Calendar';
import { CalendarDays } from './CalendarDays';
import { CalendarMonths } from './CalendarMonths';
import { CalendarYears } from './CalendarYears';
import { DateFormat } from '../../data/DateFormat';
import { SmallHeading } from '../../typography';
import css from './Calendar.module.css';

export interface CalendarRangeProps extends CalendarProps {
  /**
   * The number of months to display in the range.
   * Defaults to 2.
   */
  numMonths?: number;
}

export const CalendarRange: FC<CalendarRangeProps> = ({
  min,
  max,
  value,
  disabled,
  isRange,
  previousArrow,
  nextArrow,
  dateFormat,
  animated,
  onChange,
  onViewChange,
  numMonths,
  enableDayOfWeek
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
  const [monthValue, setMonthValue] = useState<number>(getMonth(date));
  const [yearValue, setYearValue] = useState<number>(getYear(date));
  const [decadeStart, setDecadeStart] = useState<Date>(startOfDecade(date));
  const [decadeEnd, setDecadeEnd] = useState<Date>(endOfDecade(date));
  const [view, setView] = useState<CalendarViewType>('days');
  const [hoveringDate, setHoveringDate] = useState<Date | null>(null);
  const [scrollDirection, setScrollDirection] = useState<
    'forward' | 'back' | null
  >(null);

  if (numMonths < 0) {
    return null;
  }

  const displayMonths = Array.from(Array(numMonths).keys());

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

  const headerClickHandler = useCallback(() => {
    const newView = view === 'days' ? 'months' : 'years';
    setScrollDirection(null);
    setView(newView);
    onViewChange?.(newView);
  }, [onViewChange, view]);

  const dateChangeHandler = useCallback(
    (date: Date) => {
      if (!isRange) {
        onChange?.(date);
        setMonthValue(getMonth(date));
        setYearValue(getYear(date));
      } else {
        if (isSameDay(rangeStart, rangeEnd)) {
          onChange?.([minDate([rangeStart, date]), maxDate([rangeEnd, date])]);
        } else {
          onChange?.([date, date]);
        }
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
      setView('months');
      onViewChange?.('months');
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
    <div className={css.container}>
      <header className={css.header}>
        <Button
          variant="text"
          disabled={disabled}
          className={css.leftArrow}
          disablePadding
          onClick={previousClickHandler}
        >
          {previousArrow}
        </Button>
        <Button
          disablePadding
          fullWidth
          disabled={disabled}
          variant="text"
          onClick={headerClickHandler}
        >
          <SmallHeading disableMargins>
            {view === 'days' && (
              <div className={css.multiviewLabel}>
                {displayMonths.map(i => (
                  <DateFormat
                    key={`label-${i}`}
                    date={addMonths(viewValue, i)}
                    format={dateFormat}
                    allowToggle={false}
                  />
                ))}
              </div>
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
          disablePadding
          disabled={disabled}
          onClick={nextClickHandler}
        >
          {nextArrow}
        </Button>
      </header>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={view}
          className={css.calendars}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 1 }}
          transition={{
            x: { type: animated ? 'keyframes' : false },
            opacity: { duration: 0.2, type: animated ? 'tween' : false },
            scale: { type: animated ? 'tween' : false }
          }}
        >
          {view === 'days' &&
            displayMonths.map(month => (
              <Fragment key={`calendar-${month}`}>
                <CalendarDays
                  value={addMonths(viewValue, month)}
                  min={min}
                  max={max}
                  disabled={disabled}
                  isRange={isRange}
                  current={isRange ? [rangeStart, rangeEnd] : date}
                  xAnimation={xAnimation}
                  animated={animated}
                  onChange={dateChangeHandler}
                  hover={hoveringDate}
                  onHover={setHoveringDate}
                  hidePrevMonthDays={month > 0}
                  hideNextMonthDays={month < numMonths - 1}
                  enableDayOfWeek={enableDayOfWeek}
                />
              </Fragment>
            ))}
          {view === 'months' && (
            <CalendarMonths
              value={monthValue}
              animated={animated}
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
  );
};

CalendarRange.defaultProps = {
  previousArrow: '←',
  nextArrow: '→',
  animated: true,
  dateFormat: 'MMMM yyyy',
  range: [new Date(), new Date()],
  numMonths: 2
};
