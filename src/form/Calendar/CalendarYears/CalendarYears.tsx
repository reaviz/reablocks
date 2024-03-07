import React, { FC, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../../../elements/Button';
import { useComponentTheme } from '../../../utils/Theme/TW';
import { CalendarTheme } from '../CalendarTheme';
import { twMerge } from 'tailwind-merge';

export interface CalendarYearsProps {
  /**
   * The start date of the decade to display.
   */
  decadeStart: Date;

  /**
   * The end date of the decade to display.
   */
  decadeEnd: Date;

  /**
   * The currently selected year.
   */
  value: number;

  /**
   * X-axis block animation
   */
  xAnimation?: string | number;

  /**
   * Whether to animate the calendar.
   */
  animated?: boolean;

  /**
   * A callback function that is called when a year is selected.
   */
  onChange: (year: number) => void;
}

export const CalendarYears: FC<CalendarYearsProps> = ({
  decadeStart,
  decadeEnd,
  value,
  animated,
  xAnimation = 0,
  onChange
}) => {
  const { years } = useComponentTheme('calendar') as CalendarTheme;

  const yearDates = useMemo(() => {
    const arr = [];
    const start = decadeStart.getFullYear();
    const end = decadeEnd.getFullYear();

    for (let i = start - 1; i < end + 2; i++) {
      arr.push(i);
    }

    return arr;
  }, [decadeEnd, decadeStart]);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        className={twMerge(years.root)}
        key={`${decadeStart.toString()}-${decadeEnd.toString()}`}
        initial={{ opacity: 0, x: xAnimation }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          x: { type: animated ? 'keyframes' : false },
          opacity: { duration: 0.2, type: animated ? 'tween' : false }
        }}
      >
        {yearDates.map(year => (
          <Button
            key={year}
            className={twMerge(years.year)}
            color={value === year ? 'primary' : 'default'}
            variant={value === year ? 'filled' : 'text'}
            disableMargins
            title={year}
            onClick={() => onChange(year)}
          >
            {year}
          </Button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
