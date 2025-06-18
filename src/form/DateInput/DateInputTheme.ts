import { calendarTheme, CalendarTheme } from '@/form/Calendar';
import { inputTheme, InputTheme } from '@/form/Input';

export interface DateInputTheme {
  input: InputTheme;
  calendar: CalendarTheme;
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

export const legacyDateInputTheme: DateInputTheme = dateInputTheme;
