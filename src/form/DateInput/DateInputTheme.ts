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
      base: 'hover:bg-vulcan hover:text-mystic light:hover:bg-vulcan/5 light:hover:text-text-secondary',
      active: 'bg-vulcan hover:text-mystic'
    }
  }
};
