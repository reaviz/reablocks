import { FC, useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import {
  addDays,
  isAfter,
  isBefore,
  isSameDay,
  set,
  max as maxDate,
  min as minDate,
  isSameMonth
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
   * The currently hovered date.
   */
  hover?: Date | null;

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
   * Whether to display days of previous month
   */
  hidePrevMonthDays?: boolean;

  /**
   * Whether to display days of next month
   */
  hideNextMonthDays?: boolean;

  /**
   * Whether to display day of week labels
   */
  showDayOfWeek?: boolean;

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
   * Whether to animate the calendar.
   */
  animated?: boolean;

  /**
   * A callback function that is called when a day is selected.
   */
  onChange: (date: Date) => void;

  /**
   * A callback function that is called when a day is hovered.
   */
  onHover?: (date: Date | null) => void;
}

const ZERO_TIME = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0
};

const DAY_OF_WEEK_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const CalendarDays: FC<CalendarDaysProps> = ({
  value = new Date(),
  current = new Date(),
  hover = null,
  isRange,
  disabled,
  min: minLimit,
  max,
  animated,
  xAnimation = 0,
  showDayOfWeek,
  hidePrevMonthDays,
  hideNextMonthDays,
  onChange,
  onHover
}) => {
  const [hoveringDate, setHoveringDate] = useState<Date | null>(hover);
  const weeks = useMemo(() => getWeeks(value), [value]);
  const maxLimit = useMemo(() => (max === 'now' ? new Date() : max), [max]);

  const renderDay = useCallback(
    (day, ii) => {
      // Determine if the day should be shown or not
      const hideDay =
        (day.isPreviousMonth && hidePrevMonthDays) ||
        (day.isNextMonth && hideNextMonthDays);

      // Determine if the day is disabled
      const isDisabled =
        disabled ||
        (minLimit && isBefore(day.date, minLimit)) ||
        (maxLimit && isAfter(day.date, maxLimit));

      // Determine that date is in selected range
      const currentHover = hover || hoveringDate;
      const isSelectionStarted =
        Array.isArray(current) && isSameDay(...current);
      const prevDayRangeStart = set(
        addDays(
          currentHover && isSelectionStarted
            ? minDate([current?.[0], currentHover])
            : current?.[0],
          -1
        ),
        ZERO_TIME
      );
      const nextDayRangeEnd = set(
        addDays(
          currentHover && isSelectionStarted
            ? maxDate([current?.[1], currentHover])
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

      // Determine styling of range start and end dates
      const hasNoRange = isStartRangeDate && isEndRangeDate;
      const nextWeek = addDays(day.date, 7);
      const nextWeekInRange =
        isStartRangeDate && isBefore(nextWeek, nextDayRangeEnd);
      const rangeConnectsBottom =
        !nextWeekInRange &&
        (isSameMonth(day.date, nextWeek) || !hideNextMonthDays);

      const prevWeek = addDays(day.date, -7);
      const prevWeekInRange =
        isEndRangeDate && isAfter(prevWeek, prevDayRangeStart);
      const rangeConnectsTop =
        !prevWeekInRange &&
        (isSameMonth(day.date, prevWeek) || !hidePrevMonthDays);

      // Determine the color variant of the button
      const colorVariant = isSelected ? 'primary' : 'default';

      // Determine the button variant
      const buttonVariant = isSelected ? 'filled' : 'text';

      const handleHover = (value: Date | null) => {
        if (onHover) {
          onHover(value);
        } else {
          setHoveringDate(value);
        }
      };

      return (
        <Button
          key={`day-${ii}`}
          className={classNames(css.day, {
            [css.outside]: day.isNextMonth || day.isPreviousMonth,
            [css.today]: day.isToday,
            [css.range]: isRange && isSelected,
            [css.startRangeDate]: isRange && isStartRangeDate,
            [css.roundStartDateBottom]:
              (isRange && isStartRangeDate && rangeConnectsBottom) ||
              hasNoRange,
            [css.endRangeDate]: isRange && isEndRangeDate,
            [css.roundEndDateTop]:
              (isRange && isEndRangeDate && rangeConnectsTop) || hasNoRange,
            [css.hideDay]: hideDay
          })}
          onMouseEnter={() => handleHover(day.date)}
          onMouseLeave={() => handleHover(null)}
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
    [
      disabled,
      minLimit,
      maxLimit,
      hoveringDate,
      current,
      hover,
      isRange,
      onChange,
      onHover
    ]
  );

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={value.toString()}
        initial={{ opacity: 0, x: xAnimation }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          x: { type: animated ? 'keyframes' : false },
          opacity: { duration: 0.2, type: animated ? 'tween' : false }
        }}
      >
        {showDayOfWeek && (
          <div className={css.weekLabels}>
            {DAY_OF_WEEK_LABELS.map(day => (
              <div key={`day-${day}`} className={css.dayOfWeek}>
                {day}
              </div>
            ))}
          </div>
        )}
        {weeks.map((week, i) => (
          <div key={`week-${i}`} className={css.week}>
            {week.map(renderDay)}
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
