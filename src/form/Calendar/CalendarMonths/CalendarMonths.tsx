import React, { FC } from 'react';
import { Button } from '../../../elements';
import { monthNames } from '../utils';
import { useComponentTheme } from '../../../utils';
import { CalendarTheme } from '../CalendarTheme';
import { twMerge } from 'tailwind-merge';

export interface CalendarMonthsProps {
  /**
   * The currently displayed month of the calendar.
   */
  value: number;

  /**
   * A callback function that is called when a day is selected.
   */
  onChange: (month: number) => void;

  /**
   * Theme for the CalendarMonths.
   */
  theme?: CalendarTheme;
}

export const CalendarMonths: FC<CalendarMonthsProps> = ({
  value,
  onChange,
  theme: customTheme
}) => {
  const { months }: CalendarTheme = useComponentTheme('calendar', customTheme);

  return (
    <div className={twMerge(months.root)}>
      {monthNames.map((month, i) => (
        <Button
          key={month}
          className={twMerge(months.month)}
          color={value === i ? 'primary' : 'default'}
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
