import React, {
  ChangeEvent,
  FocusEvent,
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { format as formatDate, isValid, parse } from 'date-fns';

import { IconButton } from '@/elements/IconButton';
import { Menu } from '@/layers/Menu';
import { Card } from '@/layout/Card';
import { Placement } from '@/utils/Position';
import { Calendar, CalendarRange } from '@/form/Calendar';
import { Input, InputProps, InputRef } from '@/form/Input';
import {
  SingleCalendarProps,
  RangeCalendarProps
} from '@/form/Calendar/hooks/useCalendar';

import CalendarIcon from '@/assets/icons/calendar.svg?react';

// Base DateInput props without the value/onChange union
type BaseDateInputProps = {
  /**
   * The format in which the date should be displayed.
   * @type {string}
   */
  format?: string;

  /**
   * Calendar placement type.
   */
  placement?: Placement;

  /**
   * Open calendar on field focus
   */
  openOnFocus?: boolean;

  /**
   * Icon to show in open calendar button.
   */
  icon?: ReactElement;
} & Omit<InputProps, 'value' | 'onChange'>;

// DateInput props with discriminated union for single/range
export type DateInputProps = BaseDateInputProps &
  (
    | ({
        isRange?: false;
        value: Date;
        onChange: (value: Date) => void;
        onOk?: (value: Date) => void;
      } & Omit<SingleCalendarProps, 'value' | 'onChange' | 'isRange' | 'onOk'>)
    | ({
        isRange: true;
        value: [Date, Date];
        onChange: (value: [Date, Date]) => void;
        onOk?: (value: [Date, Date]) => void;
      } & Omit<RangeCalendarProps, 'value' | 'onChange' | 'onOk'>)
  );

export const DateInput: FC<DateInputProps> = ({
  disabled,
  value,
  format = 'MM/dd/yyyy',
  placement = 'bottom-start',
  isRange,
  icon = <CalendarIcon />,
  openOnFocus = true,
  onChange,
  onFocus,
  onOk,
  ...calendarProps
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<InputRef>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [tempValue, setTempValue] = useState<typeof value>(value);
  const isPresetActionRef = useRef(false);

  const handleRangeChange = useCallback(
    (rangeValue: [Date, Date]) => {
      if (isPresetActionRef.current) {
        // For preset actions (This Week, Now), trigger onChange immediately and close
        onChange(rangeValue as any);
        setOpen(false);
        isPresetActionRef.current = false;
      } else if (!onOk) {
        // If no onOk, trigger onChange immediately
        onChange(rangeValue as any);
        if (rangeValue[0] && rangeValue[1]) {
          setOpen(false);
        }
      } else {
        // If onOk is present, store in temp value
        setTempValue(rangeValue as any);
      }
    },
    [onChange, onOk]
  );

  const handleSingleChange = useCallback(
    (singleValue: Date) => {
      if (isPresetActionRef.current) {
        // For preset actions (This Week, Now), trigger onChange immediately and close
        onChange(singleValue as any);
        setOpen(false);
        isPresetActionRef.current = false;
      } else if (!onOk) {
        // If no onOk, trigger onChange immediately
        setOpen(false);
        onChange(singleValue as any);
      } else {
        // If onOk is present, store in temp value
        setTempValue(singleValue as any);
      }
    },
    [onChange, onOk]
  );

  const handleOk = useCallback(
    (okValue: Date | [Date, Date]) => {
      onChange(okValue as any);
      onOk?.(okValue as any);
      setOpen(false);
    },
    [onChange, onOk]
  );

  const handlePresetAction = useCallback(() => {
    isPresetActionRef.current = true;
  }, []);

  const changeHandler = useCallback(
    (newValue: Date | [Date, Date]) => {
      if (isRange) {
        handleRangeChange(newValue as [Date, Date]);
      } else {
        handleSingleChange(newValue as Date);
      }
    },
    [isRange, handleRangeChange, handleSingleChange]
  );

  const handleRangeInputChange = useCallback(
    (dateStr: string) => {
      const [startStr, endStr] = dateStr.split('-');
      const startDate = parse(startStr?.trim(), format, new Date());
      const endDate = parse(endStr?.trim(), format, new Date());

      if (
        isValid(startDate) &&
        isValid(endDate) &&
        formatDate(startDate, format) === startStr.trim() &&
        formatDate(endDate, format) === endStr.trim()
      ) {
        const newValue = [startDate, endDate] as [Date, Date];
        if (!onOk) {
          onChange(newValue as any);
        } else {
          setTempValue(newValue as any);
        }
      }
    },
    [format, onChange, onOk]
  );

  const handleSingleInputChange = useCallback(
    (dateStr: string) => {
      const date = parse(dateStr, format, new Date());
      if (isValid(date) && formatDate(date, format) === dateStr) {
        if (!onOk) {
          onChange(date as any);
        } else {
          setTempValue(date as any);
        }
      }
    },
    [format, onChange, onOk]
  );

  const inputChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const dateStr = event.target.value;
      setInputValue(dateStr);

      if (isRange) {
        handleRangeInputChange(dateStr);
      } else {
        handleSingleInputChange(dateStr);
      }
    },
    [isRange, handleRangeInputChange, handleSingleInputChange]
  );

  const focusHandler = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      if (openOnFocus) {
        setOpen(true);
      }
      onFocus?.(e);
    },
    [onFocus, openOnFocus]
  );

  const formatRangeValue = useCallback(
    (start: Date, end: Date) =>
      `${start ? formatDate(start, format) : ''} - ${
        end ? formatDate(end, format) : ''
      }`,
    [format]
  );

  useEffect(() => {
    if (!value) return;

    if (isRange) {
      const [start, end] = value as [Date, Date];
      setInputValue(formatRangeValue(start, end));
    } else {
      setInputValue(formatDate(value as Date, format));
    }
  }, [format, isRange, value, formatRangeValue]);

  // Update tempValue when value prop changes
  useEffect(() => {
    setTempValue(value);
  }, [value]);

  const renderCalendarComponent = () => {
    const displayValue = onOk ? tempValue : value;
    const commonCalendarProps = {
      disabled,
      onOk: onOk ? handleOk : undefined
    };

    if (!isRange) {
      return (
        <Calendar
          {...commonCalendarProps}
          value={displayValue as Date}
          onChange={changeHandler as (value: Date) => void}
          {...(calendarProps as Omit<
            SingleCalendarProps,
            'value' | 'onChange' | 'isRange' | 'onOk'
          >)}
        />
      );
    }

    const shouldUseSingleCalendar =
      (calendarProps as RangeCalendarProps).monthsToDisplay === 1;

    if (shouldUseSingleCalendar) {
      return (
        <Calendar
          {...commonCalendarProps}
          value={displayValue as [Date, Date]}
          onChange={changeHandler as (value: [Date, Date]) => void}
          isRange={true}
          {...(calendarProps as Omit<
            SingleCalendarProps,
            'value' | 'onChange' | 'isRange' | 'onOk'
          >)}
        />
      );
    }

    return (
      <CalendarRange
        {...commonCalendarProps}
        value={displayValue as [Date, Date]}
        onChange={changeHandler as (value: [Date, Date]) => void}
        {...(calendarProps as Omit<
          RangeCalendarProps,
          'value' | 'onChange' | 'onOk'
        >)}
      />
    );
  };

  return (
    <>
      <Input
        ref={ref}
        disabled={disabled}
        endAdornment={
          <IconButton
            className="px-0"
            variant="text"
            onClick={() => setOpen(true)}
          >
            {icon}
          </IconButton>
        }
        placeholder={
          isRange
            ? `${format.toUpperCase()} - ${format.toUpperCase()}`
            : format.toUpperCase()
        }
        value={inputValue}
        onChange={inputChangeHandler}
        onFocus={focusHandler}
      />
      <Menu
        open={open}
        onClose={() => setOpen(false)}
        reference={ref?.current?.containerRef}
        placement={placement}
      >
        {() => <Card>{renderCalendarComponent()}</Card>}
      </Menu>
    </>
  );
};
