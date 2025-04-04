import React, { FC, useCallback, useMemo } from 'react';
import {
  getHours,
  getMinutes,
  getSeconds,
  setHours,
  setMinutes,
  setSeconds
} from 'date-fns';
import { twMerge } from 'tailwind-merge';
import { CalendarTheme } from '../CalendarTheme';

interface TimeColumnProps {
  options: number[];
  selectedValue: number;
  onSelect: (value: number) => void;
  theme: CalendarTheme['time'];
  className?: string;
}

const TimeColumn: FC<TimeColumnProps> = ({
  options,
  selectedValue,
  onSelect,
  theme,
  className
}) => {
  // TODO: Add scrolling logic to center selected value later
  return (
    <div className="h-full overflow-y-auto">
      <ul className="p-0 m-0 list-none">
        {options.map(option => (
          <li
            key={option}
            className={twMerge(
              'px-2 py-1 text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700',
              selectedValue === option &&
                'bg-primary-100 text-primary-700 dark:bg-primary-700 dark:text-primary-100'
            )}
            onClick={() => onSelect(option)}
            role="option"
            aria-selected={selectedValue === option}
          >
            {option.toString().padStart(2, '0')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export interface CalendarTimesProps {
  /**
   * The current date time value.
   */
  value: Date;

  /**
   * Callback fired when the time changes.
   */
  onChange: (newDate: Date) => void;

  /**
   * Theme for the Calendar Time section.
   */
  theme?: CalendarTheme['time'];
}

export const CalendarTimes: FC<CalendarTimesProps> = ({
  value,
  onChange,
  theme
}) => {
  // Provide default theme structure if theme or theme.time is not passed
  const timeTheme = theme;

  const hours = useMemo(() => Array.from({ length: 24 }, (_, i) => i), []);
  const minutes = useMemo(() => Array.from({ length: 60 }, (_, i) => i), []);
  const seconds = useMemo(() => Array.from({ length: 60 }, (_, i) => i), []);

  const currentHour = getHours(value);
  const currentMinute = getMinutes(value);
  const currentSecond = getSeconds(value);

  const handleHourChange = useCallback(
    (hour: number) => {
      onChange(setHours(value, hour));
    },
    [onChange, value]
  );

  const handleMinuteChange = useCallback(
    (minute: number) => {
      onChange(setMinutes(value, minute));
    },
    [onChange, value]
  );

  const handleSecondChange = useCallback(
    (second: number) => {
      onChange(setSeconds(value, second));
    },
    [onChange, value]
  );

  return (
    <div className={timeTheme.base}>
      <div className="flex h-54 border-t border-gray-200 dark:border-gray-700">
        <div className="flex-1 border-r border-gray-200 dark:border-gray-700">
          <TimeColumn
            theme={timeTheme}
            options={hours}
            selectedValue={currentHour}
            onSelect={handleHourChange}
          />
        </div>
        <div className="flex-1 border-r border-gray-200 dark:border-gray-700">
          <TimeColumn
            theme={timeTheme}
            options={minutes}
            selectedValue={currentMinute}
            onSelect={handleMinuteChange}
          />
        </div>
        <div className="flex-1">
          <TimeColumn
            theme={timeTheme}
            options={seconds}
            selectedValue={currentSecond}
            onSelect={handleSecondChange}
          />
        </div>
      </div>
    </div>
  );
};
