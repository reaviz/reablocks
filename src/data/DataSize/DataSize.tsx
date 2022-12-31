import React, { FC } from 'react';
import { formatSize, FormatSizeTypes } from './utils';

export interface DataSizeProps {
  /**
   * The size value to render.
   */
  value: FormatSizeTypes;

  /**
   * If the value is undefined/null it will return this value.
   */
  emptyValue?: string;
}

export const DataSize: FC<DataSizeProps> = ({ value, emptyValue }) => (
  <>{formatSize(value, emptyValue)}</>
);
