import React, { FC, useCallback, useEffect, useRef } from 'react';
import type { CalendarTheme } from '@/form/Calendar/CalendarTheme';
import { cn } from '@/utils';

import type { AmPm } from './CalendarTimes';

interface TimeColumnProps {
  /**
   * Array of time options to display in the column
   */
  options: number[] | AmPm[];

  /**
   * Currently selected time value
   */
  value?: number | AmPm;

  /**
   * Minimum allowed time value
   */
  min?: number;

  /**
   * Maximum allowed time value
   */
  max?: number;

  /**
   * Theme configuration for the time column styling
   */
  theme: CalendarTheme['time'];

  /**
   * Whether to use 12-hour cycle for the time picker.
   */
  is12HourCycle?: boolean;

  /**
   * Whether the selected value is PM
   */
  isPM?: boolean;

  /**
   * Callback fired when a time option is selected
   */
  onSelect: (value: number | AmPm) => void;
}

export const TimeColumn: FC<TimeColumnProps> = ({
  options,
  value,
  min,
  max,
  theme,
  isPM = false,
  is12HourCycle = false,
  onSelect
}) => {
  const containerRef = useRef<HTMLUListElement | null>(null);
  const selectedRef = useRef<HTMLLIElement | null>(null);

  const isOptionDisabled = useCallback(
    (option: number | AmPm) => {
      if (typeof option === 'number') {
        if (options.length === 12 && is12HourCycle) {
          if (isPM) {
            const pmOption = option < 12 ? option + 12 : option;
            return pmOption < min || pmOption > max;
          } else {
            return option < min || option > max;
          }
        }

        return option < min || option > max;
      } else {
        if ((option === 'AM' && min >= 12) || (option === 'PM' && max < 12)) {
          return true;
        }

        return false;
      }
    },
    [options.length, is12HourCycle, isPM, min, max]
  );

  useEffect(() => {
    if (containerRef.current && selectedRef.current) {
      const container = containerRef.current;
      const selected = selectedRef.current;

      const containerHeight = container.clientHeight;
      const itemOffsetTop = selected.offsetTop;
      const itemHeight = selected.offsetHeight;
      let scrollTop = 0;
      if (is12HourCycle) {
        scrollTop = itemOffsetTop;
      } else {
        // Calculate scrollTop so that the selected item is centered
        scrollTop = itemOffsetTop - containerHeight / 2 + itemHeight / 2;
      }

      container.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }
  }, [value, is12HourCycle]);

  return (
    <div className={theme.items.container}>
      <ul
        ref={containerRef}
        className={theme.items.list}
        style={{
          paddingBottom:
            is12HourCycle && containerRef.current
              ? containerRef.current?.clientHeight - 24
              : undefined
        }}
      >
        {options.map(option => (
          <li
            key={option}
            ref={value === option ? selectedRef : null}
            className={cn(theme.items.item.base, {
              [theme.items.item.selected]: value === option,
              [theme.items.item.disabled]: isOptionDisabled(option)
            })}
            onClick={() => {
              if (isOptionDisabled(option)) {
                return;
              }

              onSelect(option);
            }}
            role="option"
            aria-disabled={isOptionDisabled(option)}
            aria-selected={value === option}
          >
            {typeof option === 'number'
              ? option.toString().padStart(2, '0')
              : option}
          </li>
        ))}
      </ul>
    </div>
  );
};
