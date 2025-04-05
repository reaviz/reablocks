import React, { FC, useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { throttle } from 'lodash';
import { Button } from '@/elements';
import { cn, useComponentTheme } from '@/utils';
import { CalendarTheme } from '@/form/Calendar/CalendarTheme';

const YEARS_BUFFER = 15; // Number of years to load/buffer on each side
const SCROLL_THRESHOLD = 50; // Pixels from edge to trigger loading
const THROTTLE_WAIT = 150; // Milliseconds for scroll throttle

export interface CalendarYearsProps {
  /**
   * The currently selected year.
   */
  value: number;

  /**
   * Whether to animate the calendar. (Kept for potential future use on button interactions)
   */
  animated?: boolean;

  /**
   * A callback function that is called when a year is selected.
   */
  onChange: (year: number) => void;

  /**
   * Theme for the CalendarYears.
   */
  theme?: CalendarTheme;
}

export const CalendarYears: FC<CalendarYearsProps> = ({
  value,
  animated,
  onChange,
  theme: customTheme
}) => {
  const { years }: CalendarTheme = useComponentTheme('calendar', customTheme);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const initialValueRef = useRef(value); // Store initial value to scroll to
  const isInitialLoad = useRef(true); // Flag to prevent multiple initial loads

  // Initialize state with a buffer around the initial value
  const [startYear, setStartYear] = useState(
    initialValueRef.current - YEARS_BUFFER
  );
  const [endYear, setEndYear] = useState(
    initialValueRef.current + YEARS_BUFFER
  );
  const [visibleYears, setVisibleYears] = useState<number[]>(() => {
    const arr = [];
    for (let i = startYear; i <= endYear; i++) {
      arr.push(i);
    }
    return arr;
  });
  const [focusedYear, setFocusedYear] = useState<number | null>(value); // Track focused year for keyboard nav

  // Function to prepend older years
  const loadOlderYears = useCallback(() => {
    const newStartYear = startYear - YEARS_BUFFER;
    const olderYears = [];
    // Ensure we don't add duplicates if called rapidly
    for (let i = newStartYear; i < startYear; i++) {
      olderYears.push(i);
    }
    setVisibleYears(prev => [...olderYears, ...prev]);
    setStartYear(newStartYear);
  }, [startYear]);

  // Function to append newer years
  const loadNewerYears = useCallback(() => {
    const newEndYear = endYear + YEARS_BUFFER;
    const newerYears = [];
    // Ensure we don't add duplicates if called rapidly
    for (let i = endYear + 1; i <= newEndYear; i++) {
      newerYears.push(i);
    }
    setVisibleYears(prev => [...prev, ...newerYears]);
    setEndYear(newEndYear);
  }, [endYear]);

  // Throttled scroll handler
  const handleScroll = useCallback(
    throttle(
      () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const { scrollTop, scrollHeight, clientHeight } = container;

        // Only load if not at the absolute top/bottom (prevents infinite loops if buffer is small)
        if (scrollTop < SCROLL_THRESHOLD && scrollTop > 0) {
          const previousScrollTop = container.scrollTop;
          const previousScrollHeight = container.scrollHeight;
          loadOlderYears();
          // Adjust scroll position after adding items at the top
          requestAnimationFrame(() => {
            container.scrollTop =
              previousScrollTop +
              (container.scrollHeight - previousScrollHeight);
          });
        } else if (
          scrollHeight - scrollTop - clientHeight < SCROLL_THRESHOLD &&
          clientHeight + scrollTop < scrollHeight
        ) {
          loadNewerYears();
        }
      },
      THROTTLE_WAIT,
      { leading: false, trailing: true }
    ),
    [loadOlderYears, loadNewerYears]
  );

  // Effect to scroll the initial value into view AND manage focus
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    if (isInitialLoad.current) {
      const selectedYearElement = container.querySelector(
        `[data-year="${initialValueRef.current}"]`
      ) as HTMLElement;

      if (selectedYearElement) {
        // Scroll to center the element
        const containerHeight = container.clientHeight;
        const elementTop = selectedYearElement.offsetTop;
        const elementHeight = selectedYearElement.offsetHeight;
        container.scrollTop =
          elementTop - containerHeight / 2 + elementHeight / 2;
        isInitialLoad.current = false; // Mark initial scroll as done
        // Don't focus container on initial load if interaction is primarily mouse/touch
        // container.focus(); // Focus the container initially if needed
        setFocusedYear(initialValueRef.current); // Set initial focused year based on value
      }
    } else if (focusedYear !== null) {
      // Ensure focused year is visible after loading more years or keyboard nav
      // Use requestAnimationFrame to wait for potential DOM updates after state change
      requestAnimationFrame(() => {
        const focusedYearElement = container.querySelector(
          `[data-year="${focusedYear}"]`
        ) as HTMLElement;
        if (focusedYearElement) {
          focusedYearElement.scrollIntoView({ block: 'nearest' });
        }
      });
    }
  }, [visibleYears, focusedYear]); // Rerun if visibleYears changes or focused year updates

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const container = scrollContainerRef.current;
      // Use 'value' as fallback if focusedYear is somehow null initially
      const currentFocus = focusedYear ?? value;
      if (!container) return;

      let targetYear: number | null = null;
      let shouldPreventDefault = true;

      switch (event.key) {
        case 'ArrowUp':
          targetYear = currentFocus - 1;
          break;
        case 'ArrowDown':
          targetYear = currentFocus + 1;
          break;
        case 'PageUp':
          targetYear = currentFocus - 10; // Jump 10 years
          break;
        case 'PageDown':
          targetYear = currentFocus + 10; // Jump 10 years
          break;
        case 'Home':
          targetYear = visibleYears[0]; // First currently loaded year
          break;
        case 'End':
          targetYear = visibleYears[visibleYears.length - 1]; // Last currently loaded year
          break;
        case 'Enter':
        case ' ': // Allow selection with Space
          if (focusedYear !== null) {
            // Ensure there's a focused year to select
            onChange(focusedYear);
          }
          shouldPreventDefault = true; // Prevent potential button click/scroll/form submission
          break;
        default:
          shouldPreventDefault = false; // Don't prevent default for other keys
          return; // Exit if not a handled key
      }

      if (shouldPreventDefault) {
        event.preventDefault();
      }

      if (targetYear !== null) {
        // Optional: Clamp target year within reasonable bounds if necessary
        // targetYear = Math.max(1900, Math.min(2100, targetYear));

        let yearToFocus = targetYear;

        // Check if target year needs loading
        if (targetYear < startYear) {
          loadOlderYears();
          // Focus the earliest year possible for now, useEffect will scroll later
          yearToFocus = startYear - 1;
        } else if (targetYear > endYear) {
          loadNewerYears();
          // Focus the latest year possible for now, useEffect will scroll later
          yearToFocus = endYear + 1;
        }

        // Update the focused year state. The useEffect will handle scrolling.
        setFocusedYear(yearToFocus);
      }
    },
    [
      focusedYear,
      value,
      onChange,
      startYear,
      endYear,
      loadOlderYears,
      loadNewerYears,
      visibleYears
    ]
  );

  return (
    <motion.div
      ref={scrollContainerRef}
      className={cn(
        years.root,
        'overflow-y-scroll h-42 relative focus:outline-none'
      )} // Add focus styles
      onScroll={handleScroll}
      layout // Animate layout changes (adding years)
      tabIndex={0} // Make it focusable
      onKeyDown={handleKeyDown} // Add keydown handler
      aria-activedescendant={
        focusedYear !== null ? `year-${focusedYear}` : undefined
      } // For accessibility
      role="listbox" // Role for accessibility
      aria-label="Year selection" // Label for accessibility
    >
      {visibleYears.map(year => (
        // Use motion.div for layout animation if Button itself isn't a motion component
        <motion.div key={year} layout="position" className="w-full">
          <Button
            id={`year-${year}`} // ID for aria-activedescendant
            role="option" // Role for accessibility
            aria-selected={value === year}
            key={year} // Keep key on Button for React
            data-year={year} // Add data attribute for scrolling into view
            className={cn(
              years.year,
              { [years.selected]: value === year },
              // Add a distinct visual focus style when focused via keyboard,
              // different from the selected style unless it's the same year.
              {
                'ring-2 ring-offset-1 ring-blue-500 dark:ring-blue-400':
                  focusedYear === year
              },
              'w-full justify-center'
            )} // Ensure full width and centering
            color={value === year ? 'primary' : 'default'}
            variant={value === year ? 'filled' : 'text'}
            disableMargins
            onClick={() => onChange(year)}
            tabIndex={-1} // Prevent button from being individually tabbable
          >
            {year}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};
