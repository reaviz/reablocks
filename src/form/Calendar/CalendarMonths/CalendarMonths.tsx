import React, { FC } from 'react';
import { Button } from '../../../elements/Button';
import { monthNames } from '../utils';
import { useComponentTheme } from '../../../utils/Theme/TW';
import { CalendarTheme } from '../CalendarTheme';
import { twMerge } from 'tailwind-merge';
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
}) => {
  const { months } = useComponentTheme('calendar') as CalendarTheme;

  return (
    <div className={twMerge(months.root)}>
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
};
