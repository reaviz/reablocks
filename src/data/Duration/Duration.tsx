import React, { FC } from 'react';
import { formatDuration, DurationFormatTypes } from './utils';

export interface DurationProps {
  /**
   * Size to pass to the formatter.
   */
  value: DurationFormatTypes;

  /**
   * If the value is undefined/null it will return this value.
   */
  emptyValue?: string;
}

export const Duration: FC<DurationProps> = ({ value, emptyValue }) => (
  <>{formatDuration(value, emptyValue)}</>
);

Duration.defaultProps = {
  emptyValue: 'N/A'
};
