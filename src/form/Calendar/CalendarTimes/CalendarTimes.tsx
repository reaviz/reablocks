import React, { FC, useCallback, useMemo, useRef, useEffect } from 'react';
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
  const listRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (listRef.current && selectedRef.current) {
      const selectedItem = selectedRef.current;
      const container = listRef.current;

      // Calculate scroll position to center the item
      const itemOffset = selectedItem.offsetTop;
      const containerHeight = container.clientHeight;
      const itemHeight = selectedItem.clientHeight;
      const centerPosition = itemOffset - containerHeight / 2 + itemHeight / 2;

      // Smooth scroll to centered position
      container.scrollTo({
        top: centerPosition,
        behavior: 'smooth'
      });
    }
  }, [selectedValue]);

  return (
    <div ref={listRef} className="h-full overflow-y-auto scroll-smooth">
      <ul className="p-0 m-0 list-none">
        {options.map(option => (
          <li
            key={option}
            ref={selectedValue === option ? selectedRef : null}
            className={twMerge(
              theme.item.base,
              selectedValue === option && theme.item.selected,
              'transition-colors duration-150'
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

  /**
   * Whether day of week labels are shown in the calendar
   */
  showDayOfWeek?: boolean;
}

export const CalendarTimes: FC<CalendarTimesProps> = ({
  value,
  onChange,
  theme,
  showDayOfWeek = false
}) => {
  // Provide default theme structure if theme or theme.time is not passed
  const timeTheme = theme;

  const hours = useMemo(() => Array.from({ length: 24 }, (_, i) => i), []);
  const minutes = useMemo(() => Array.from({ length: 60 }, (_, i) => i), []);
  const seconds = useMemo(() => Array.from({ length: 60 }, (_, i) => i), []);

  // Ensure we have a valid date to work with
  const safeDate = useMemo(() => {
    if (!value || isNaN(value.getTime())) {
      return new Date();
    }
    return value;
  }, [value]);

  const currentHour = getHours(safeDate);
  const currentMinute = getMinutes(safeDate);
  const currentSecond = getSeconds(safeDate);

  const handleHourChange = useCallback(
    (hour: number) => {
      const newDate = setHours(safeDate, hour);
      if (!isNaN(newDate.getTime())) {
        onChange(newDate);
      }
    },
    [onChange, safeDate]
  );

  const handleMinuteChange = useCallback(
    (minute: number) => {
      const newDate = setMinutes(safeDate, minute);
      if (!isNaN(newDate.getTime())) {
        onChange(newDate);
      }
    },
    [onChange, safeDate]
  );

  const handleSecondChange = useCallback(
    (second: number) => {
      const newDate = setSeconds(safeDate, second);
      if (!isNaN(newDate.getTime())) {
        onChange(newDate);
      }
    },
    [onChange, safeDate]
  );

  return (
    <div className={timeTheme.base}>
      <div
        className={twMerge(
          'flex border-t border-gray-200 dark:border-gray-700 pt-1',
          showDayOfWeek ? 'h-54' : 'h-46'
        )}
      >
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
