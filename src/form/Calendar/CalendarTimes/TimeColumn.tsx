import React, { FC, useEffect, useRef } from 'react';
import type { CalendarTheme } from '@/form/Calendar/CalendarTheme';
import { cn } from '@/utils';

interface TimeColumnProps {
  /** Array of time options to display in the column */
  options: number[];

  /** Currently selected time value */
  selectedValue?: number;

  /** Minimum allowed time value */
  min?: number;

  /** Maximum allowed time value */
  max?: number;

  /** Callback fired when a time option is selected */
  onSelect: (value: number) => void;

  /** Theme configuration for the time column styling */
  theme: CalendarTheme['time'];
}

export const TimeColumn: FC<TimeColumnProps> = ({
  options,
  selectedValue,
  min,
  max,
  onSelect,
  theme
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
    <div
      ref={listRef}
      className={cn(
        'h-full overflow-y-auto [&::-webkit-scrollbar]:hidden',
        'scrollbar-none touch-pan-y'
      )}
      style={{
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      <ul className="p-0 m-0 list-none">
        {options.map(option => (
          <li
            key={option}
            ref={selectedValue === option ? selectedRef : null}
            className={cn(
              theme.item.base,
              {
                [theme.item.selected]: selectedValue === option,
                'opacity-50 cursor-not-allowed': option < min || option > max
              },
              'transition-colors duration-150'
            )}
            onClick={() => {
              if (option < min || option > max) return;
              onSelect(option);
            }}
            role="option"
            aria-disabled={option < min || option > max}
            aria-selected={selectedValue === option}
          >
            {option.toString().padStart(2, '0')}
          </li>
        ))}
      </ul>
    </div>
  );
};
