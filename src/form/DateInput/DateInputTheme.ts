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
    list: 'w-full',
    option: {
      base: '',
      active: ''
    }
  }
};
