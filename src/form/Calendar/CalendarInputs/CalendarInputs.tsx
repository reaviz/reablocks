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
   * Whether to show time input.
   */
  showTime?: boolean;

  /**
   * Additional class name.
   */
  className?: string;
}

export const CalendarInputs: FC<CalendarInputsProps> = ({
  value,
  onChange,
  theme,
  showTime = false,
  className
}) => {
  const currentFormat = showTime ? 'dd-MM-yyyy HH:mm:ss' : 'dd-MM-yyyy';
  const placeholder = showTime ? 'DD-MM-YYYY HH:MM:SS' : 'DD-MM-YYYY';
  const dateTimeStr = format(value, currentFormat);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newDateTime = parse(e.target.value, currentFormat, new Date());
      if (isValid(newDateTime)) {
        let finalDateTime = newDateTime;
        if (!showTime) {
          finalDateTime = setSeconds(
            setMinutes(setHours(newDateTime, 0), 0),
            0
          );
        }

        onChange(finalDateTime);
      }
    },
    [onChange, showTime, currentFormat]
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
          value={dateTimeStr}
          onChange={handleChange}
          placeholder={placeholder}
          className={twMerge(
            'px-2 py-1 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border text-center border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500',
            showTime ? 'w-40' : 'w-28'
          )}
        />
      </div>
    </section>
  );
};
