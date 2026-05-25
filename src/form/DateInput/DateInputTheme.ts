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
      base: 'hover:bg-panel-accent hover:text-text-primary',
      active: 'bg-panel-accent hover:text-text-primary'
    }
  }
};
