import { ReactNode } from 'react';
import { CalendarTheme } from '../CalendarTheme';
import { CalendarRangeTheme } from '../CalendarRangeTheme';

export type CalendarViewType = 'days' | 'months' | 'years';

export type CalendarPresetType =
  | 'past' // Shows past date presets (e.g., "Last 7 days", "Last month")
  | 'future' // Shows future date presets (e.g., "Next 7 days", "Next month")
  | 'combined' // Shows both past and future presets
  | ReactNode; // Custom preset content

export interface BaseCalendarProps {
  /**
   * The minimum selectable date for the calendar.
   */
  min?: Date;

  /**
   * The maximum selectable date for the calendar.
   * Can also be set to 'now' to use the current date.
   */
  max?: Date | 'now';

  /**
   * Whether the calendar is disabled.
   */
  disabled?: boolean;

  /**
   * The text or icon to use for next.
   */
  nextArrow?: ReactNode | string;

  /**
   * The text or icon to use for previous.
   */
  previousArrow?: ReactNode | string;

  /**
   * The text or icon to use for next year.
   */
  nextYearArrow?: ReactNode | string;

  /**
   * The text or icon to use for previous year.
   */
  previousYearArrow?: ReactNode | string;

  /**
   * Whether to display day of week labels
   */
  showDayOfWeek?: boolean;

  /**
   * Whether to animate the calendar.
   */
  animated?: boolean;

  /**
   * Preset configuration for the calendar.
   */
  preset?: CalendarPresetType;

  /**
   * Whether to highlight today.
   */
  showToday?: boolean;

  /**
   * Whether to show the input preview.
   */
  showInputPreview?: boolean;

  /**
   * Whether to show the time picker.
   */
  showTime?: boolean;

  /**
   * Callback when clicking the OK button in time picker mode
   */
  onOk?: (value: Date | [Date, Date]) => void;
}

export interface SingleCalendarProps extends BaseCalendarProps {
  /**
   * Whether the calendar is a range picker.
   */
  isRange?: boolean;

  /**
   * A callback function that is called when the calendar view changes.
   */
  onViewChange?: (view: CalendarViewType) => void;

  /**
   * Theme for the Calendar.
   */
  theme?: CalendarTheme;

  /**
   * The selected date(s) for the calendar.
   */
  value?: Date | [Date, Date] | [Date, undefined] | [undefined, undefined];

  /**
   * A callback function that is called when the selected date(s) change.
   */
  onChange?: (value: Date | [Date, Date]) => void;
}

export interface RangeCalendarProps extends BaseCalendarProps {
  /**
   * The number of calendar months to display.
   */
  monthsToDisplay?: number;

  /**
   * Defaults view to show past or future months if multiple months shown.
   */
  direction?: 'past' | 'future';

  /**
   * The format of the date displayed in the calendar header.
   */
  headerDateFormat?: string;

  /**
   * Theme for the CalendarRange.
   */
  theme?: CalendarRangeTheme;

  /**
   * The selected date(s) for the range calendar.
   */
  value?: [Date, Date] | [undefined, undefined] | [Date | undefined];

  /**
   * A callback function that is called when the selected date(s) change.
   */
  onChange?: (value: [Date, Date]) => void;
}

export type UseCalendarProps = SingleCalendarProps | RangeCalendarProps;

export const useCalendar = (props: UseCalendarProps) => {
  // Hook implementation will go here
  return {
    props
  };
};
