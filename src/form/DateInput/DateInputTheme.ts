import type { CalendarTheme } from '@/form/Calendar';
import { calendarTheme } from '@/form/Calendar';
import type { InputTheme } from '@/form/Input';
import { inputTheme } from '@/form/Input';

export interface DateInputTheme {
  input: InputTheme;
  calendar: CalendarTheme;
  card: string;
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
  card: '',
  preset: {
    list: 'w-full',
    option: {
      base: '',
      active: ''
    }
  }
};
