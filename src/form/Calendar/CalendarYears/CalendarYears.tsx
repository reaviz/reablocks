import React, { FC, useMemo } from 'react';
import { Button } from '../../../elements/Button';
import css from './CalendarYears.module.css';

export interface CalendarYearsProps {
  /**
   * The start date of the decade to display.
   */
  decadeStart: Date;

  /**
   * The end date of the decade to display.
   */
  decadeEnd: Date;

  /**
   * The currently selected year.
   */
  value: number;

  /**
   * A callback function that is called when a year is selected.
   */
  onChange: (year: number) => void;
}

export const CalendarYears: FC<CalendarYearsProps> = ({
  decadeStart,
  decadeEnd,
  value,
  onChange
}) => {
  const years = useMemo(() => {
    const arr = [];
    const start = decadeStart.getFullYear();
    const end = decadeEnd.getFullYear();

    for (let i = start - 1; i < end + 2; i++) {
      arr.push(i);
    }

    return arr;
  }, [decadeEnd, decadeStart]);

  return (
    <div className={css.years}>
      {years.map(year => (
        <Button
          key={year}
          className={css.year}
          variant={value === year ? 'filled' : 'text'}
          disableMargins
          title={year}
          onClick={() => onChange(year)}
        >
          {year}
        </Button>
      ))}
    </div>
  );
};
