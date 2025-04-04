import React, { FC, useCallback } from 'react';
import {
  format,
  parse,
  isValid,
  setHours,
  setMinutes,
  setSeconds
} from 'date-fns';
import { twMerge } from 'tailwind-merge';
import { CalendarTheme } from '../CalendarTheme';

export interface CalendarInputsProps {
  /**
   * The current date time value.
   */
  value: Date;

  /**
   * Callback fired when the value changes.
   */
  onChange: (date: Date) => void;

  /**
   * Theme for the Calendar.
   */
  theme?: CalendarTheme;

  /**
   * Additional class name.
   */
  className?: string;
}

export const CalendarInputs: FC<CalendarInputsProps> = ({
  value,
  onChange,
  theme,
  className
}) => {
  const dateStr = format(value, 'MM/dd/yyyy');
  const timeStr = format(value, 'HH:mm:ss');

  const handleDateChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newDate = parse(e.target.value, 'MM/dd/yyyy', new Date());
      if (isValid(newDate)) {
        // Preserve the time when changing the date
        const newValue = new Date(newDate);
        newValue.setHours(value.getHours());
        newValue.setMinutes(value.getMinutes());
        newValue.setSeconds(value.getSeconds());
        onChange(newValue);
      }
    },
    [value, onChange]
  );

  const handleTimeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const [hours, minutes, seconds] = e.target.value.split(':').map(Number);
      if (!isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
        const newValue = new Date(value);
        onChange(
          setHours(setMinutes(setSeconds(newValue, seconds), minutes), hours)
        );
      }
    },
    [value, onChange]
  );

  return (
    <section
      className={twMerge(
        'flex items-center justify-center gap-1 px-4',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={dateStr}
          onChange={handleDateChange}
          placeholder="MM/DD/YYYY"
          className="w-24 px-2 py-1 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="text"
          value={timeStr}
          onChange={handleTimeChange}
          placeholder="HH:MM:SS"
          className="w-20 px-2 py-1 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </section>
  );
};
