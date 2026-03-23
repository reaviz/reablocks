import {
  CalendarTheme,
  defaultCalendarTheme,
  unifyCalendarTheme
} from '@/form/Calendar/CalendarTheme';
import {
  defaultInputTheme,
  InputTheme,
  unifyInputTheme
} from '@/form/Input/InputTheme';

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

export const defaultDateInputTheme: DateInputTheme = {
  input: defaultInputTheme,
  calendar: defaultCalendarTheme,
  preset: {
    list: 'w-full border border-panel-accent',
    option: {
      base: 'hover:bg-panel-accent hover:text-text-secondary',
      active: 'bg-panel-accent text-text-secondary'
    }
  }
};

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
