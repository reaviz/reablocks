import React, { FC, useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import {
  addDays,
  isAfter,
  isBefore,
  isSameDay,
  set,
  max as maxDate,
  min as minDate
} from 'date-fns';
import { Button } from '../../../elements/Button';
import { getWeeks } from '../utils';
import { AnimatePresence, motion } from 'framer-motion';

import css from './CalendarDays.module.css';

export interface CalendarDaysProps {
  /**
   * The currently displayed month of the calendar.
   */
  value?: Date;

  /**
   * The currently selected date.
   */
  current?: Date | [Date, Date];

  /**
   * The minimum selectable date for the calendar, as a Date object.
   */
  min?: Date;

  /**
   * The maximum selectable date for the calendar, as a Date object or the string 'now'.
   */
  max?: Date | 'now';

  /**
   * Whether the calendar is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the calendar is a range picker.
   */
  isRange?: boolean;

  /**
   * Range of selected dates
   */
  range?: [Date, Date];

  /**
   * X-axis block animation
   */
  xAnimation?: string | number;

  /**
   * A callback function that is called when a day is selected.
   */
  onChange: (date: Date) => void;
}

const ZERO_TIME = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0
};

export const CalendarDays: FC<CalendarDaysProps> = ({
  value = new Date(),
  current = new Date(),
  isRange,
  disabled,
  min: minLimit,
  max,
  xAnimation = 0,
  onChange
}) => {
  const [hoveringDate, setHoveringDate] = useState<Date | null>(null);
  const weeks = useMemo(() => getWeeks(value), [value]);
  const maxLimit = useMemo(() => (max === 'now' ? new Date() : max), [max]);

  const renderDay = useCallback(
    (day, ii) => {
      // Determine if the day is disabled
      const isDisabled =
        disabled ||
        (minLimit && isBefore(day.date, minLimit)) ||
        (maxLimit && isAfter(day.date, maxLimit));

      // Determine that date is in selected range
      const isSelectionStarted =
        Array.isArray(current) && isSameDay(...current);
      const prevDayRangeStart = set(
        addDays(
          hoveringDate && isSelectionStarted
            ? minDate([current?.[0], hoveringDate])
            : current?.[0],
          -1
        ),
        ZERO_TIME
      );
      const nextDayRangeEnd = set(
        addDays(
          hoveringDate && isSelectionStarted
            ? maxDate([current?.[1], hoveringDate])
            : current?.[1],
          1
        ),
        ZERO_TIME
      );
      const isSelected = Array.isArray(current)
        ? isAfter(day.date, prevDayRangeStart) &&
          isBefore(day.date, nextDayRangeEnd)
        : isSameDay(current, day.date);

      // Determine start/end range dates
      const isStartRangeDate =
        Array.isArray(current) &&
        isSameDay(addDays(prevDayRangeStart, 1), day.date);
      const isEndRangeDate =
        Array.isArray(current) &&
        isSameDay(addDays(nextDayRangeEnd, -1), day.date);

      // Determine the color variant of the button
      const colorVariant = isSelected ? 'primary' : 'default';

      // Determine the button variant
      const buttonVariant = isSelected ? 'filled' : 'text';

      return (
        <Button
          key={`day-${ii}`}
          className={classNames(css.day, {
            [css.outside]: day.isNextMonth || day.isPreviousMonth,
            [css.today]: day.isToday,
            [css.range]: isRange && isSelected,
            [css.startRangeDate]: isRange && isStartRangeDate,
            [css.endRangeDate]: isRange && isEndRangeDate
          })}
          onMouseEnter={() => setHoveringDate(day.date)}
          onMouseLeave={() => setHoveringDate(null)}
          variant={buttonVariant}
          color={colorVariant}
          disableMargins
          disabled={isDisabled}
          title={day.formattedDate}
          onClick={() => onChange(day.date)}
        >
          {day.dayOfMonth}
        </Button>
      );
    },
    [disabled, minLimit, maxLimit, hoveringDate, current, isRange, onChange]
  );

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={value.toString()}
        initial={{ opacity: 0, x: xAnimation }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          x: { type: 'keyframes' },
          opacity: { duration: 0.2 }
        }}
      >
        {weeks.map((week, i) => (
          <div key={`week-${i}`} className={css.week}>
            {week.map(renderDay)}
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
