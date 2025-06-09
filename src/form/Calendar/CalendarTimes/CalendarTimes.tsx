import React, { FC, useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  getHours,
  getMinutes,
  getSeconds,
  isAfter,
  isBefore,
  isSameDay,
  isSameHour,
  setHours,
  setMinutes,
  setSeconds
} from 'date-fns';
import { TimeColumn } from './TimeColumn';
import type { CalendarTheme } from '@/form/Calendar/CalendarTheme';
import { Divider } from '@/layout';
import { cn } from '@/utils';

export type AmPm = 'AM' | 'PM';

export interface CalendarTimesProps {
  /**
   * The current date time value.
   */
  value: Date;

  /**
   * The minimum selectable date for the calendar.
   */
  min?: Date;

  /**
   * The maximum selectable date for the calendar.
   */
  max?: Date;

  /**
   * Callback fired when the time changes.
   */
  onChange: (newDate: Date) => void;

  /**
   * Theme for the Calendar Time section.
   */
  theme?: CalendarTheme['time'];

  /**
   * Whether day of week labels are shown in the calendar
   */
  showDayOfWeek?: boolean;

  /**
   * Whether to use 12-hour cycle for the time picker.
   */
  is12HourCycle?: boolean;
}

const HOURS_24 = Array.from({ length: 24 }, (_, i) => i);
const HOURS_12 = [12, ...Array.from({ length: 11 }, (_, i) => i + 1)];
const MINUTES = Array.from({ length: 60 }, (_, i) => i);
const SECONDS = Array.from({ length: 60 }, (_, i) => i);

export const CalendarTimes: FC<CalendarTimesProps> = ({
  value,
  min,
  max,
  onChange,
  theme: timeTheme,
  showDayOfWeek = false,
  is12HourCycle = false
}) => {
  const safeDate = useMemo(() => {
    if (!value || isNaN(value.getTime())) {
      const midnight = new Date().setHours(0, 0, 0, 0);
      return midnight;
    }
    return value;
  }, [value]);

  const onChangeHandler = useCallback(
    (newDate: Date) => {
      if (isAfter(newDate, max)) {
        newDate = max;
      } else if (isBefore(newDate, min)) {
        newDate = min;
      }
      onChange(newDate);
    },
    [onChange, max, min]
  );

  const handleHourChange = useCallback(
    (hour: number) => {
      let newDate = setHours(safeDate, hour);
      if (is12HourCycle) {
        const isPM = getHours(safeDate) >= 12;
        if (hour === 12) {
          newDate = setHours(newDate, 0);
        } else if (isPM) {
          newDate = setHours(newDate, getHours(newDate) + 12);
        }
      }
      onChangeHandler(newDate);
    },
    [is12HourCycle, safeDate, onChangeHandler]
  );

  const handleMinuteChange = useCallback(
    (minute: number) => {
      const newDate = setMinutes(safeDate, minute);
      onChangeHandler(newDate);
    },
    [onChangeHandler, safeDate]
  );

  const handleSecondChange = useCallback(
    (second: number) => {
      const newDate = setSeconds(safeDate, second);
      onChangeHandler(newDate);
    },
    [onChangeHandler, safeDate]
  );

  const handleAmPmChange = useCallback(
    (amPm: AmPm) => {
      const currentAmPm = getHours(safeDate) >= 12 ? 'PM' : 'AM';
      // If the current AM/PM is the same as the selected AM/PM, do nothing
      if (currentAmPm === amPm) {
        return;
      }

      let date = new Date(safeDate);
      if (!value) {
        date = setHours(safeDate, amPm === 'AM' ? 0 : 12);
      } else {
        const hours = getHours(value);
        date = setHours(value, amPm === 'AM' ? hours - 12 : hours + 12);
      }
      onChangeHandler(date);
    },
    [onChangeHandler, safeDate, value]
  );

  const isSameDayWithMax = useMemo(() => isSameDay(value, max), [value, max]);
  const isSameDayWithMin = useMemo(() => isSameDay(value, min), [value, min]);
  const isSameHoursWithMin = useMemo(
    () => isSameHour(value, min),
    [value, min]
  );
  const isSameHoursWithMax = useMemo(
    () => isSameHour(value, max),
    [value, max]
  );

  const hours = useMemo(() => {
    if (!value) return undefined;
    let dayHours = getHours(safeDate);

    return is12HourCycle ? dayHours % 12 || 12 : dayHours;
  }, [value, safeDate, is12HourCycle]);

  const minutes = useMemo(
    () => (value ? getMinutes(safeDate) : undefined),
    [value, safeDate]
  );

  const seconds = useMemo(
    () => (value ? getSeconds(safeDate) : undefined),
    [value, safeDate]
  );

  const amPm = useMemo(() => {
    if (!value || !is12HourCycle) return undefined;
    return getHours(safeDate) < 12 ? 'AM' : 'PM';
  }, [value, safeDate, is12HourCycle]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 10, width: 0 }}
        animate={{ opacity: 1, x: 0, width: 'auto' }}
        exit={{ opacity: 0, x: 10, width: 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 40,
          duration: 0.2
        }}
        className={cn(timeTheme?.wrapper)}
      >
        <Divider orientation="vertical" className={timeTheme?.dividerLeft} />
        <div className={timeTheme.base}>
          <Divider orientation="horizontal" className={timeTheme?.dividerTop} />
          <div
            className={cn(timeTheme?.items.wrapper, {
              'h-54': showDayOfWeek
            })}
          >
            <TimeColumn
              theme={timeTheme}
              options={is12HourCycle ? HOURS_12 : HOURS_24}
              min={isSameDayWithMin ? getHours(min) : undefined}
              max={isSameDayWithMax ? getHours(max) : undefined}
              selectedValue={hours}
              isPM={amPm === 'PM'}
              is12HourCycle={is12HourCycle}
              onSelect={handleHourChange}
            />
            <Divider
              orientation="vertical"
              className={timeTheme?.items.divider}
            />
            <TimeColumn
              theme={timeTheme}
              options={MINUTES}
              min={
                isSameDayWithMin && isSameHoursWithMin
                  ? getMinutes(min)
                  : undefined
              }
              max={
                isSameDayWithMax && isSameHoursWithMax
                  ? getMinutes(max)
                  : undefined
              }
              selectedValue={minutes}
              isPM={amPm === 'PM'}
              is12HourCycle={is12HourCycle}
              onSelect={handleMinuteChange}
            />
            <Divider
              orientation="vertical"
              className={timeTheme?.items.divider}
            />
            <TimeColumn
              theme={timeTheme}
              options={SECONDS}
              min={
                isSameDayWithMin && isSameHoursWithMin
                  ? getSeconds(min)
                  : undefined
              }
              max={
                isSameDayWithMax && isSameHoursWithMax
                  ? getSeconds(max)
                  : undefined
              }
              selectedValue={seconds}
              isPM={amPm === 'PM'}
              is12HourCycle={is12HourCycle}
              onSelect={handleSecondChange}
            />
            {is12HourCycle && (
              <>
                <Divider
                  orientation="vertical"
                  className={timeTheme?.items.divider}
                />
                <TimeColumn
                  theme={timeTheme}
                  options={['AM', 'PM']}
                  min={isSameDayWithMin ? getHours(min) : undefined}
                  max={isSameDayWithMax ? getHours(max) : undefined}
                  selectedValue={amPm}
                  isPM={amPm === 'PM'}
                  onSelect={handleAmPmChange}
                />
              </>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
