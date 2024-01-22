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

  /**
   * Customize scale for displaying units.
   */
  scale?: string[];

  /**
   * The number of decimals to be set.
   */
  decimals?: number;
}

export const DataSize: FC<DataSizeProps> = ({
  value,
  emptyValue,
  scale,
  decimals
}) => <>{formatSize(value, emptyValue, scale, decimals)}</>;
