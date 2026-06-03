import { calendarTheme, CalendarTheme } from '@/form/Calendar';
import { inputTheme, InputTheme } from '@/form/Input';

export interface DateInputTheme {
  /** Theme applied to the underlying input element. */
  input: InputTheme;
  /** Theme applied to the calendar popover. */
  calendar: CalendarTheme;
  /** Class names for the preset list and its options. */
  preset: {
    list: string;
    option: {
      base: string;
      active: string;
    };
  };
}

export const dateInputTheme: DateInputTheme = {
  input: inputTheme,
  calendar: calendarTheme,
  preset: {
    list: 'w-full border border-panel-accent',
    option: {
      base: 'hover:bg-panel-accent hover:text-text-primary',
      active: 'bg-panel-accent hover:text-text-primary'
    }
  }
};
