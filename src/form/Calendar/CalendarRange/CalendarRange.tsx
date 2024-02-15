import { FC, Fragment, useState } from 'react';
import { addMonths } from 'date-fns';
import { CalendarProps } from '../Calendar';
import { CalendarDays } from '../CalendarDays';
import css from './CalendarRange.module.css';

export interface CalendarRangeProps extends Omit<CalendarProps, 'value'> {
  /**
   * The currently displayed month of the calendar.
   */
  value?: Date;
}

export const CalendarRange: FC<CalendarRangeProps> = ({
  value,
  onChange,
  numMonths,
  direction,
  ...rest
}) => {
  const [hoveringDate, setHoveringDate] = useState<Date | null>(null);

  if (numMonths < 0) {
    return null;
  }

  const displayMonths = Array.from(Array(numMonths).keys());
  const showPast = direction === 'past';
  if (direction === 'past') {
    displayMonths.reverse();
  }

  return (
    <div className={css.calendar}>
      {displayMonths.map(month => (
        <Fragment key={`calendar-${month}`}>
          <CalendarDays
            value={addMonths(value, showPast ? -month : month)}
            hover={hoveringDate}
            onHover={setHoveringDate}
            hidePrevMonthDays={month > 0}
            hideNextMonthDays={month < numMonths - 1}
            numMonths={numMonths}
            onChange={onChange}
            {...rest}
          />
        </Fragment>
      ))}
    </div>
  );
};
