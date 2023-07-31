import React, { FC, useEffect, useState } from 'react';
import { Button } from '../../elements/Button';
import {
  add,
  addYears,
  endOfDecade,
  getMonth,
  getYear,
  isBefore,
  setMonth,
  setYear,
  startOfDecade,
  sub,
  subYears
} from 'date-fns';
import { DateFormat } from '../../data/DateFormat';
import { CalendarDays } from './CalendarDays';
import { CalendarMonths } from './CalendarMonths';
import { CalendarYears } from './CalendarYears';
import { SmallHeading } from '../../typography';
import css from './Calendar.module.css';

export type CalendarViewType = 'days' | 'months' | 'years';

export interface CalendarProps {
  /**
   * The selected date(s) for the calendar.
   */
  value?: Date | [Date, Date];

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
   * The date format to use for the calendar. Defaults 'MMMM yyyy'.
   */
  dateFormat?: string;

  /**
   * A callback function that is called when the selected date(s) change.
   */
  onChange?: (value: Date | [Date, Date]) => void;

  /**
   * A callback function that is called when the calendar view changes.
   */
  onViewChange?: (view: CalendarViewType) => void;
}

export const Calendar: FC<CalendarProps> = ({
  min,
  max,
  disabled,
  isRange,
  previousArrow,
  nextArrow,
  dateFormat,
  onChange,
  onViewChange
}) => {
  const [viewValue, setViewValue] = useState<Date>(min || new Date());
  const [monthValue, setMonthValue] = useState<number>(getMonth(viewValue));
  const [yearValue, setYearValue] = useState<number>(getYear(viewValue));
  const [decadeStart, setDecadeStart] = useState<Date>(
    startOfDecade(viewValue)
  );
  const [decadeEnd, setDecadeEnd] = useState<Date>(endOfDecade(viewValue));
  const [view, setView] = useState<CalendarViewType>('days');

  useEffect(() => {
    setMonthValue(getMonth(viewValue));
    setYearValue(getYear(viewValue));
    setDecadeStart(startOfDecade(viewValue));
    setDecadeEnd(endOfDecade(viewValue));
  }, [viewValue]);

  const previousClicked = () => {
    if (view === 'days') {
      setViewValue(sub(viewValue, { months: 1 }));
    } else if (view === 'months') {
      setYearValue(yearValue - 1);
    } else {
      setDecadeStart(subYears(decadeStart, 10));
      setDecadeEnd(subYears(decadeEnd, 10));
    }
  };

  const nextClicked = () => {
    if (view === 'days') {
      setViewValue(add(viewValue, { months: 1 }));
    } else if (view === 'months') {
      setYearValue(yearValue + 1);
    } else {
      setDecadeStart(addYears(decadeStart, 10));
      setDecadeEnd(addYears(decadeEnd, 10));
    }
  };

  const headerClicked = () => {
    if (!disabled) {
      const newView = view === 'days' ? 'months' : 'years';
      setView(newView);
      onViewChange?.(newView);
    }
  };

  const dayChanged = day => {
    if (!isRange) {
      setViewValue(day);
      onChange?.(day);
    } else {
      if (!min) {
        setViewValue(day);
      } else if (max) {
        setViewValue(day);
      } else if (isBefore(min, day)) {
        setViewValue(day);
      } else {
        setViewValue(day);
      }
    }
  };

  const monthsChanged = month => {
    setViewValue(setMonth(setYear(min || new Date(), yearValue), month));
    setMonthValue(month);
    setView('days');
    onViewChange?.('days');
  };

  const yearChanged = year => {
    setViewValue(setYear(min || new Date(), year));
    setYearValue(year);
    setView('months');
    onViewChange?.('months');
  };

  return (
    <div className={css.container}>
      <header className={css.header}>
        <Button
          variant="text"
          disabled={disabled}
          className={css.leftArrow}
          disablePadding
          onClick={previousClicked}
        >
          {previousArrow}
        </Button>
        <Button
          disablePadding
          fullWidth
          disabled={disabled}
          variant="text"
          onClick={headerClicked}
        >
          <SmallHeading disableMargins>
            {view === 'days' && (
              <DateFormat
                date={viewValue}
                format={dateFormat}
                allowToggle={false}
              />
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
          onClick={nextClicked}
        >
          {nextArrow}
        </Button>
      </header>
      {view === 'days' && (
        <CalendarDays
          value={viewValue}
          min={min}
          max={max}
          disabled={disabled}
          isRange={isRange}
          onChange={dayChanged}
        />
      )}
      {view === 'months' && (
        <CalendarMonths value={monthValue} onChange={monthsChanged} />
      )}
      {view === 'years' && (
        <CalendarYears
          decadeStart={decadeStart}
          decadeEnd={decadeEnd}
          value={yearValue}
          onChange={yearChanged}
        />
      )}
    </div>
  );
};

Calendar.defaultProps = {
  previousArrow: '←',
  nextArrow: '→',
  dateFormat: 'MMMM yyyy'
};
