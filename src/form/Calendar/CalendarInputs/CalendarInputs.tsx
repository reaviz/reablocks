import React, { FC, useCallback, useState, useEffect } from 'react';
import {
  format,
  parse,
  isValid,
  setHours,
  setMinutes,
  setSeconds,
  isMatch,
  parseISO,
  isDate
} from 'date-fns';
import { twMerge } from 'tailwind-merge';
import { CalendarTheme } from '../CalendarTheme';

export interface CalendarInputsProps {
  /**
   * The current date time value.
   */
  value?: Date;

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

  /**
   * Additional class name for the input.
   */
  inputClassName?: string;
}

const isValidTimeFormat = (timeStr: string): boolean => {
  // First check if the string matches HH:mm:ss format
  const parsedTime = parse(timeStr, 'HH:mm:ss', new Date());

  if (!isValid(parsedTime)) {
    return false;
  }

  // Ensure the time string has exactly 2 digits for each component
  const formattedBack = format(parsedTime, 'HH:mm:ss');
  return formattedBack === timeStr;
};

const isValidDateFormat = (dateStr: string, showTime: boolean): boolean => {
  if (!dateStr) return false;

  const parts = dateStr.split(' ');

  // Validate parts length based on showTime
  if (showTime && parts.length !== 2) return false;
  if (!showTime && parts.length !== 1) return false;

  const datePart = parts[0];

  // Parse and validate date part
  const parsedDate = parse(datePart, 'dd-MM-yyyy', new Date());

  if (!isValid(parsedDate)) {
    return false;
  }

  // Ensure the date string has exactly 2 digits for day/month
  const formattedBack = format(parsedDate, 'dd-MM-yyyy');
  if (formattedBack !== datePart) {
    return false;
  }

  // If time is included, validate time part
  if (showTime) {
    return isValidTimeFormat(parts[1]);
  }

  return true;
};

export const CalendarInputs: FC<CalendarInputsProps> = ({
  value,
  onChange,
  theme,
  showTime = false,
  className,
  inputClassName
}) => {
  const currentFormat = showTime ? 'dd-MM-yyyy HH:mm:ss' : 'dd-MM-yyyy';
  const placeholder = showTime ? 'DD-MM-YYYY HH:MM:SS' : 'DD-MM-YYYY';

  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    if (value && isValid(value)) {
      setInputValue(format(value, currentFormat));
    } else {
      setInputValue('');
    }
  }, [value, currentFormat]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);

      // Don't try to parse empty or incomplete values
      if (!newValue || newValue.length < currentFormat.length) {
        return;
      }

      // Validate format first
      if (!isValidDateFormat(newValue, showTime)) {
        return;
      }

      // Parse the full datetime string
      const parsedDateTime = parse(newValue, currentFormat, new Date());

      if (isValid(parsedDateTime)) {
        onChange(parsedDateTime);
      }
    },
    [onChange, showTime, currentFormat]
  );

  const handleBlur = useCallback(() => {
    // If input is empty, keep it empty
    if (!inputValue) {
      return;
    }

    // If input is invalid, reset to current value if exists, or empty if not
    if (!isValidDateFormat(inputValue, showTime)) {
      if (value && isValid(value)) {
        setInputValue(format(value, currentFormat));
      } else {
        setInputValue('');
      }
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
            inputClassName,
            showTime ? 'w-40' : 'w-28'
          )}
        />
      </div>
    </section>
  );
};
