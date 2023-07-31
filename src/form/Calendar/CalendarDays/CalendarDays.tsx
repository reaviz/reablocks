import { FC, useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import { isAfter, isBefore, isEqual, isSameDay } from 'date-fns';
import { Button } from '../../../elements/Button';
import { getWeeks } from '../utils';
import css from './CalendarDays.module.css';

export interface CalendarDaysProps {
  /**
   * The currently displayed month of the calendar.
   */
  value: Date;

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
   * A callback function that is called when a day is selected.
   */
  onChange: (day: Date) => void;
}

export const CalendarDays: FC<CalendarDaysProps> = ({
  value,
  isRange,
  disabled,
  min,
  max,
  onChange
}) => {
  const [hoveringDate, setHoveringDate] = useState<Date | null>(null);
  const weeks = useMemo(() => getWeeks(value), [value]);
  const maxDate = useMemo(() => (max === 'now' ? new Date() : max), [max]);

  const isInHoveringDateRange = useCallback(
    (date: Date) => {
      if (!isRange || !min || maxDate || !hoveringDate) {
        return false;
      }

      const isHoveringBefore =
        hoveringDate && min && isBefore(hoveringDate, min);

      if (isHoveringBefore) {
        return isAfter(date, hoveringDate) && isBefore(date, min);
      }

      return isBefore(date, hoveringDate) && isAfter(date, min);
    },
    [hoveringDate, isRange, min]
  );

  const renderDay = useCallback(
    (day, ii) => {
      // Determine if the minimum date is active
      const minDateActive =
        isRange &&
        min &&
        isSameDay(min, day.date) &&
        (!hoveringDate || isBefore(min, hoveringDate));

      // Determine if the maximum date is active
      const maxDateActive =
        isRange &&
        maxDate &&
        isSameDay(maxDate, day.date) &&
        (!hoveringDate || isAfter(maxDate, hoveringDate));

      // Determine if the day is within the range of selected dates
      const rangeActive =
        isRange &&
        min &&
        maxDate &&
        isAfter(day.date, min) &&
        isBefore(day.date, maxDate);

      // Determine if the day is within the range of hovering dates
      const rangeHovered = isRange && isInHoveringDateRange(day.date);

      // Determine if the day is disabled
      const isDisabled =
        disabled ||
        (min && isBefore(day.date, min)) ||
        (maxDate && isAfter(day.date, maxDate));

      // Determine the color variant of the button
      const colorVariant = isSameDay(value, day.date) ? 'primary' : 'default';

      // Determine the button variant
      const buttonVariant =
        (min && isSameDay(min, day.date)) ||
        (maxDate && isSameDay(maxDate, day.date)) ||
        isSameDay(value, day.date)
          ? 'filled'
          : 'text';

      return (
        <Button
          key={`day-${ii}`}
          className={classNames(css.day, {
            [css.outside]: day.isNextMonth || day.isPreviousMonth,
            [css.today]: day.isToday,
            [css.minDate]: minDateActive,
            [css.maxDate]: maxDateActive,
            [css.range]: rangeActive,
            [css.rangeHover]: rangeHovered
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
    [disabled, min, maxDate, onChange, isInHoveringDateRange, isRange]
  );

  return (
    <>
      {weeks.map((week, i) => (
        <div key={`week-${i}`} className={css.week}>
          {week.map(renderDay)}
        </div>
      ))}
    </>
  );
};
