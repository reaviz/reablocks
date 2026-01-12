import type { CalendarTheme } from '@/form/Calendar/CalendarTheme';
import {
  defaultCalendarTheme,
  unifyCalendarTheme
} from '@/form/Calendar/CalendarTheme';
import type { InputTheme } from '@/form/Input/InputTheme';
import { defaultInputTheme, unifyInputTheme } from '@/form/Input/InputTheme';

export interface DateInputTheme {
  input: InputTheme;
  calendar: CalendarTheme;
  card?: string;
  preset: {
    list: string;
    option: {
      base: string;
      active: string;
    };
  };
}

export const unifyDateInputTheme: DateInputTheme = {
  input: unifyInputTheme,
  calendar: unifyCalendarTheme,
  card: '',
  preset: {
    list: 'w-full',
    option: {
      base: '',
      active: ''
    }
  }
};

export const defaultDateInputTheme: DateInputTheme = {
  input: defaultInputTheme,
  calendar: defaultCalendarTheme,
  preset: {
    list: 'w-full border border-panel-accent',
    option: {
      base: 'hover:bg-vulcan hover:text-mystic light:hover:bg-vulcan/5 light:hover:text-text-secondary',
      active: 'bg-vulcan hover:text-mystic'
    }
  }
};
