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

  /**
   * If the value is 0 it will return this value. Default to '0 ms'
   */
  zeroValue?: string;
}

export const Duration: FC<DurationProps> = ({
  value,
  emptyValue = 'N/A',
  zeroValue = '0 ms'
}) => <>{formatDuration(value, emptyValue, zeroValue)}</>;
