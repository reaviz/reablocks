import React, { FC } from 'react';
import { Button } from '../../../elements/Button';
import { monthNames } from '../utils';
import css from './CalendarMonths.module.css';

export interface CalendarMonthsProps {
  /**
   * The currently displayed month of the calendar.
   */
  value: number;

  /**
   * A callback function that is called when a day is selected.
   */
  onChange: (month: number) => void;
}

export const CalendarMonths: FC<CalendarMonthsProps> = ({
  value,
  onChange
}) => (
  <div className={css.months}>
    {monthNames.map((month, i) => (
      <Button
        key={month}
        className={css.month}
        variant={value === i ? 'filled' : 'text'}
        disableMargins
        title={month}
        onClick={() => onChange(i)}
      >
        {month}
      </Button>
    ))}
  </div>
);
