import React, { FC, useCallback, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  getHours,
  getMinutes,
  getSeconds,
  isSameDay,
  setHours,
  setMinutes,
  setSeconds
} from 'date-fns';
import { twMerge } from 'tailwind-merge';
import { TimeColumn } from './TimeColumn';
import type { CalendarTheme } from '@/form/Calendar/CalendarTheme';
import { Divider } from '@/layout';
import { cn } from '@/utils';

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
}

const HOURS = Array.from({ length: 24 }, (_, i) => i);
const MINUTES = Array.from({ length: 60 }, (_, i) => i);
const SECONDS = Array.from({ length: 60 }, (_, i) => i);

export const CalendarTimes: FC<CalendarTimesProps> = ({
  value,
  min,
  max,
  onChange,
  theme: timeTheme,
  showDayOfWeek = false
}) => {
  const safeDate = useMemo(() => {
    if (!value || isNaN(value.getTime())) {
      const midnight = new Date().setHours(0, 0, 0, 0);
      return midnight;
    }
    return value;
  }, [value]);

  const handleHourChange = useCallback(
    (hour: number) => {
      const newDate = setHours(safeDate, hour);
      if (!isNaN(newDate.getTime())) {
        onChange(newDate);
      }
    },
    [onChange, safeDate]
  );

  const handleMinuteChange = useCallback(
    (minute: number) => {
      const newDate = setMinutes(safeDate, minute);
      if (!isNaN(newDate.getTime())) {
        onChange(newDate);
      }
    },
    [onChange, safeDate]
  );

  const handleSecondChange = useCallback(
    (second: number) => {
      const newDate = setSeconds(safeDate, second);
      if (!isNaN(newDate.getTime())) {
        onChange(newDate);
      }
    },
    [onChange, safeDate]
  );

  const isSameDayWithMax = useMemo(() => isSameDay(value, max), [value, max]);
  const isSameDayWithMin = useMemo(() => isSameDay(value, min), [value, min]);

  const hours = useMemo(() => {
    if (!value) return undefined;
    const dayHours = getHours(safeDate);
    const minHours = isSameDayWithMin ? getHours(min) : 0;
    const maxHours = isSameDayWithMax ? getHours(max) : 24;
    if (dayHours < minHours) {
      return minHours;
    }
    if (dayHours > maxHours) {
      return maxHours;
    }

    return dayHours;
  }, [value, safeDate, isSameDayWithMin, min, isSameDayWithMax, max]);

  const minutes = useMemo(() => {
    if (!value) return undefined;
    const dayMinutes = getMinutes(safeDate);
    const minMinutes = isSameDayWithMin ? getMinutes(min) : 0;
    const maxMinutes = isSameDayWithMax ? getMinutes(max) : 59;

    if (dayMinutes < minMinutes) {
      return minMinutes;
    }
    if (dayMinutes > maxMinutes) {
      return maxMinutes;
    }

    return dayMinutes;
  }, [value, safeDate, isSameDayWithMin, min, isSameDayWithMax, max]);

  const seconds = useMemo(() => {
    if (!value) return undefined;
    const daySeconds = getSeconds(safeDate);
    const minSeconds = isSameDayWithMin ? getSeconds(min) : 0;
    const maxSeconds = isSameDayWithMax ? getSeconds(max) : 59;

    if (daySeconds < minSeconds) {
      return minSeconds;
    }
    if (daySeconds > maxSeconds) {
      return maxSeconds;
    }

    return daySeconds;
  }, [value, safeDate, isSameDayWithMin, min, isSameDayWithMax, max]);

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
        <Divider
          orientation="vertical"
          className="h-auto mt-2.5 mx-1 bg-surface z-10"
        />
        <div className={timeTheme.base}>
          <Divider orientation="horizontal" className="w-full" />
          <div
            className={twMerge(
              'flex flex-row flex-auto gap-0.25 pt-1',
              showDayOfWeek ? 'h-54' : 'h-46'
            )}
          >
            <div className="flex-1">
              <TimeColumn
                theme={timeTheme}
                options={HOURS}
                min={isSameDayWithMin ? getHours(min) : undefined}
                max={isSameDayWithMax ? getHours(max) : undefined}
                selectedValue={hours}
                onSelect={handleHourChange}
              />
            </div>
            <Divider orientation="vertical" className="mx-0" />
            <div className="flex-1">
              <TimeColumn
                theme={timeTheme}
                options={MINUTES}
                min={isSameDayWithMin ? getMinutes(min) : undefined}
                max={isSameDayWithMax ? getMinutes(max) : undefined}
                selectedValue={minutes}
                onSelect={handleMinuteChange}
              />
            </div>
            <Divider orientation="vertical" className="mx-0" />
            <div className="flex-1">
              <TimeColumn
                theme={timeTheme}
                options={SECONDS}
                min={isSameDayWithMin ? getSeconds(min) : undefined}
                max={isSameDayWithMax ? getSeconds(max) : undefined}
                selectedValue={seconds}
                onSelect={handleSecondChange}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
