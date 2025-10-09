import type { FC } from 'react';
import React from 'react';

import { Button } from '@/elements';
import type { CalendarTheme } from '@/form/Calendar/CalendarTheme';
import { monthNames } from '@/form/Calendar/utils';
import { cn, useComponentTheme } from '@/utils';

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
    <div className={months.root}>
      {monthNames.map((month, i) => (
        <Button
          key={month}
          className={cn(months.month, { [months.selected]: value === i })}
          color={value === i ? 'primary' : 'secondary'}
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
