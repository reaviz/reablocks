import React, { FC } from 'react';
import { Chip, ChipProps } from '../Chip';
import { getHotkeyText } from './utils';
import { useComponentTheme } from '../../utils/Theme/TW';
import { KbdTheme } from './KbdTheme';
import { twMerge } from 'tailwind-merge';

export interface KbdProps extends Omit<ChipProps, 'children'> {
  keycode: string;
}

export const Kbd: FC<KbdProps> = ({ className, keycode, ...rest }) => {
  const split = keycode.split('+').map(getHotkeyText);
  const theme: KbdTheme = useComponentTheme('kbd');

  return (
    <span className={theme.base}>
      {split?.map((key, index) => (
        <Chip key={index} {...rest} className={twMerge(theme.chip, className)}>
          <kbd>{key}</kbd>
        </Chip>
      ))}
    </span>
  );
};
