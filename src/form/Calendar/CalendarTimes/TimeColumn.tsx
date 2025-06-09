import React, { FC, useEffect, useRef } from 'react';
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
  selectedValue?: number | AmPm;

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
   * Callback fired when a time option is selected
   */
  onSelect: (value: number | AmPm) => void;
}

export const TimeColumn: FC<TimeColumnProps> = ({
  options,
  selectedValue,
  min,
  max,
  theme,
  is12HourCycle = false,
  onSelect
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (containerRef.current && selectedRef.current) {
      const selectedItem = selectedRef.current;
      const container = containerRef.current;

      if (is12HourCycle) {
        // Scroll to the selected item after a short delay to ensure the padding is applied
        setTimeout(() => {
          selectedItem.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        });
      } else {
        // Calculate scroll position to center the item
        const itemOffset = selectedItem.offsetTop;
        const containerHeight = container.clientHeight;
        const itemHeight = selectedItem.clientHeight;
        const centerPosition =
          itemOffset - containerHeight / 2 - itemHeight / 2;
        container.scrollTo({
          top: centerPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [selectedValue, is12HourCycle]);

  return (
    <div ref={containerRef} className={theme.items.container}>
      <ul
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
            ref={selectedValue === option ? selectedRef : null}
            className={cn(theme.item.base, {
              [theme.item.selected]: selectedValue === option,
              [theme.item.disabled]: option < min || option > max
            })}
            onClick={() => {
              if (option < min || option > max) return;
              onSelect(option);
            }}
            role="option"
            aria-disabled={option < min || option > max}
            aria-selected={selectedValue === option}
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
