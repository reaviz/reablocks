import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { format as formatDate, isValid, parse } from 'date-fns';

import { IconButton } from '@/elements';
import { Menu } from '@/layers';
import { Card } from '@/layout';
import { Calendar, Input, InputProps, InputRef } from '@/form';
import { Placement } from '@/utils';

import CalendarIcon from '@/assets/icons/calendar.svg?react';

export interface DateInputProps extends Omit<InputProps, 'value' | 'onChange'> {
  /**
   * The current date value.
   * @type {Date}
   */
  value: Date;

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
   * Callback function to handle date changes.
   * @param {Date} value - The new date value.
   */
  onChange: (value: Date) => void;
}
export const DateInput: FC<DateInputProps> = ({
  disabled,
  value,
  format = 'MM/dd/yyyy',
  placement = 'bottom-start',
  onChange,
  ...rest
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<InputRef>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const changeHandler = useCallback(
    (value: Date) => {
      setOpen(false);
      onChange(value);
    },
    [onChange]
  );

  const inputChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const dateStr = event.target.value;

      setInputValue(dateStr);

      const date = parse(dateStr, format, new Date());

      if (isValid(date) && formatDate(date, format) === dateStr) {
        onChange(date);
      }
    },
    [format, onChange]
  );

  useEffect(() => {
    if (value) {
      setInputValue(formatDate(value, format));
    }
  }, [format, value]);

  return (
    <>
      <Input
        ref={ref}
        disabled={disabled}
        endAdornment={
          <IconButton
            disabled={disabled}
            variant="text"
            onClick={() => setOpen(true)}
          >
            <CalendarIcon />
          </IconButton>
        }
        placeholder={format.toUpperCase()}
        {...rest}
        value={inputValue}
        onChange={inputChangeHandler}
      />
      <Menu
        open={open}
        onClose={() => setOpen(false)}
        reference={ref?.current?.containerRef}
        placement={placement}
      >
        {() => (
          <Card>
            <Calendar value={value} showDayOfWeek onChange={changeHandler} />
          </Card>
        )}
      </Menu>
    </>
  );
};
