import { isValid, format as dateFnsFormat } from 'date-fns';
import { formatRelative } from './relative';

export interface SafeFormatOptions {
  /** The date-fns format string used to format the absolute date. */
  format: string;
  /** Whether to include seconds when computing the relative time string. */
  includeSeconds?: boolean;
  /** Whether to append a suffix (e.g. "ago", "in") to the relative time string. */
  addSuffix?: boolean;
}

export function safeFormat(
  date: Date | string | number | null | undefined,
  options: SafeFormatOptions
) {
  let relative;
  let formatted;
  let dateObj;

  if (date) {
    dateObj = new Date(date);

    // If we have a valid date, now lets do magic
    if (isValid(dateObj)) {
      const { format, includeSeconds, addSuffix } = options;
      formatted = dateFnsFormat(dateObj, format);
      relative = formatRelative(dateObj, { includeSeconds, addSuffix });
    }
  }

  return {
    dateObj,
    formatted,
    relative
  };
}
