import React, { FC, useCallback, useState, useEffect } from 'react';
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

const isValidTimeFormat = (timeStr: string): boolean => {
  if (!timeStr) return false;

  // Check the overall format using a strict regex
  const timeRegex = /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
  if (!timeRegex.test(timeStr)) {
    console.log('Time format regex failed');
    return false;
  }

  const [hours, minutes, seconds] = timeStr.split(':');

  // Debug logs
  console.log('Time parts:', { hours, minutes, seconds });

  // Parse the numbers (we know they're valid from regex)
  const h = parseInt(hours, 10);
  const m = parseInt(minutes, 10);
  const s = parseInt(seconds, 10);

  console.log('Parsed values:', { h, m, s });

  // Double-check ranges (although regex already ensures this)
  if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59) {
    console.log('Range check failed');
    return false;
  }

  return true;
};

const isValidDateFormat = (dateStr: string, showTime: boolean): boolean => {
  // Split into date and time parts
  const parts = dateStr.split(' ');
  console.log('Date string parts:', parts);

  if (showTime && parts.length !== 2) return false;
  if (!showTime && parts.length !== 1) return false;

  const datePart = parts[0];
  const [day, month, year] = datePart.split('-');

  // Check if all date parts exist
  if (!day?.length || !month?.length || !year?.length) return false;

  // Check if date parts are in correct format (DD-MM-YYYY)
  if (day.length !== 2 || month.length !== 2 || year.length !== 4) return false;
  if (!/^\d{2}$/.test(day) || !/^\d{2}$/.test(month) || !/^\d{4}$/.test(year))
    return false;

  // Check if date numbers are in valid ranges
  const d = parseInt(day, 10);
  const m = parseInt(month, 10);
  const y = parseInt(year, 10);

  if (d < 1 || d > 31) return false;
  if (m < 1 || m > 12) return false;
  if (y < 1000) return false;

  // If time is required, validate time part
  if (showTime) {
    const timeValid = isValidTimeFormat(parts[1]);
    console.log('Time validation result:', timeValid);
    return timeValid;
  }

  return true;
};

export const CalendarInputs: FC<CalendarInputsProps> = ({
  value,
  onChange,
  theme,
  showTime = false,
  className
}) => {
  const currentFormat = showTime ? 'dd-MM-yyyy HH:mm:ss' : 'dd-MM-yyyy';
  const placeholder = showTime ? 'DD-MM-YYYY HH:MM:SS' : 'DD-MM-YYYY';

  const [inputValue, setInputValue] = useState(format(value, currentFormat));

  useEffect(() => {
    setInputValue(format(value, currentFormat));
  }, [value, currentFormat]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);

      console.log('Input value:', newValue);
      console.log('Show time:', showTime);

      // Only proceed with date parsing if format is valid
      const formatValid = isValidDateFormat(newValue, showTime);
      console.log('Is valid format:', formatValid);

      if (!formatValid) {
        return;
      }

      try {
        // Split into date and time parts for separate handling
        const [datePart, timePart] = newValue.split(' ');
        const [day, month, year] = datePart.split('-').map(Number);

        // Create base date from the date part
        let finalDateTime = new Date(year, month - 1, day);

        // If showing time, parse and set time components
        if (showTime && timePart) {
          const [hours, minutes, seconds] = timePart.split(':').map(Number);
          console.log('Time components:', { hours, minutes, seconds });

          finalDateTime = setHours(finalDateTime, hours);
          finalDateTime = setMinutes(finalDateTime, minutes);
          finalDateTime = setSeconds(finalDateTime, seconds);
        } else {
          // Reset time to midnight if not showing time
          finalDateTime = setHours(finalDateTime, 0);
          finalDateTime = setMinutes(finalDateTime, 0);
          finalDateTime = setSeconds(finalDateTime, 0);
        }

        console.log('Final datetime:', finalDateTime);

        // Only trigger onChange if the date is valid
        if (finalDateTime instanceof Date && !isNaN(finalDateTime.getTime())) {
          onChange(finalDateTime);
        }
      } catch (error) {
        // If any parsing error occurs, don't trigger onChange
        console.error('Error parsing date:', error);
      }
    },
    [onChange, showTime]
  );

  const handleBlur = useCallback(() => {
    // If current input is invalid, reset to the last valid value
    if (!isValidDateFormat(inputValue, showTime)) {
      setInputValue(format(value, currentFormat));
    }
  }, [inputValue, value, currentFormat, showTime]);

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
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
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
