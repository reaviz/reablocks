import { FC, useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import {
  addDays,
  isAfter,
  isBefore,
  isSameDay,
  max as maxDate,
  min as minDate,
  isSameMonth,
  isValid
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
   * The currently selected date(s).
   */
  current?:
    | Date
    | [Date, Date]
    | [Date, undefined]
    | [undefined, undefined]
    | undefined;

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
  range?: [Date, Date] | [Date, undefined] | [undefined, undefined];

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

const DAY_OF_WEEK_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const CalendarDays: FC<CalendarDaysProps> = ({
  value,
  current,
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
    day => {
      // Determine if the day should be shown or not
      if (
        (day.isPreviousMonth && hidePrevMonthDays) ||
        (day.isNextMonth && hideNextMonthDays)
      ) {
        return <div key={day.dayOfMonth} />;
      }

      const handleHover = (value: Date | null) => {
        if (onHover) {
          onHover(value);
        } else {
          setHoveringDate(value);
        }
      };

      // Determine if the day is disabled
      const isDisabled =
        disabled ||
        (minLimit && isBefore(day.date, minLimit)) ||
        (maxLimit && isAfter(day.date, maxLimit));

      // Determine if date is in selected (or to be selected) range
      const currentHover = hover || hoveringDate;
      const isSelectionStarted = Array.isArray(current) && isValid(current[0]);
      const isSelectionComplete = isSelectionStarted && isValid(current[1]);

      const isInRange = (date: Date, range: [Date, Date]) => {
        const startDate = minDate(range);
        const endDate = maxDate(range);

        return (
          isAfter(date, addDays(startDate, -1)) &&
          isBefore(date, addDays(endDate, 1))
        );
      };

      let isActive = false;
      let isRangeStart = false;
      let isRangeEnd = false;

      if (!isRange && isValid(current)) {
        // if not a range
        isActive = isSameDay(day.date, current as Date);
      } else if (!isSelectionStarted) {
        // if selection has not started
        isActive = isSameDay(day.date, currentHover);
        isRangeStart = isActive;
        isRangeEnd = isActive;
      } else if (isSelectionComplete) {
        // if a range has been selected
        isActive = isInRange(day.date, current);
        isRangeStart = isSameDay(day.date, current[0]);
        isRangeEnd = isSameDay(day.date, current[1]);
      } else {
        // if in the process of selecting a range
        const activeRange: [Date, Date] = [
          current[0],
          currentHover ?? current[0]
        ];
        isActive = isInRange(day.date, activeRange);
        isRangeStart = isSameDay(day.date, minDate(activeRange));
        isRangeEnd = isSameDay(day.date, maxDate(activeRange));
      }

      // Determine styling of range start and end dates -
      // this is used to correctly round the corners of the range
      // depending on the current selection and whether corner connects
      // with the above or below day.
      const hasNoRange = isRangeStart && isRangeEnd;
      const nextWeek = addDays(day.date, 7);
      const nextWeekInRange =
        isRangeStart &&
        isBefore(nextWeek, isSelectionComplete ? current[1] : currentHover);
      const rangeConnectsBottom =
        !nextWeekInRange &&
        (isSameMonth(day.date, nextWeek) || !hideNextMonthDays);

      const prevWeek = addDays(day.date, -7);
      const prevWeekInRange =
        isRangeEnd &&
        isAfter(prevWeek, isSelectionStarted ? current[0] : currentHover);
      const rangeConnectsTop =
        !prevWeekInRange &&
        (isSameMonth(day.date, prevWeek) || !hidePrevMonthDays);

      // Determine the color variant of the button
      const colorVariant = isActive ? 'primary' : 'default';

      // Determine the button variant
      const buttonVariant = isActive ? 'filled' : 'text';

      return (
        <Button
          key={day.formattedDate}
          className={classNames(css.day, {
            [css.outside]: day.isNextMonth || day.isPreviousMonth,
            [css.selectedDay]: !isRange && isActive,
            [css.range]: isRange && isActive,
            [css.startRangeDate]: isRange && isRangeStart,
            [css.roundStartDateBottom]:
              (isRange && isRangeStart && rangeConnectsBottom) || hasNoRange,
            [css.endRangeDate]: isRange && isRangeEnd,
            [css.roundEndDateTop]:
              (isRange && isRangeEnd && rangeConnectsTop) || hasNoRange
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
      current,
      hover,
      isRange,
      onChange,
      onHover,
      hoveringDate
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
