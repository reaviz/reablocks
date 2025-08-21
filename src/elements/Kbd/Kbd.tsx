import React, { FC } from 'react';
import { Chip, ChipProps } from '@/elements/Chip';
import { getHotkeyText } from './utils';
import { useComponentTheme } from '@/utils';
import { KbdTheme } from './KbdTheme';
import { twMerge } from '@/utils';

export interface KbdProps extends Omit<ChipProps, 'children' | 'theme'> {
  /**
   * Keycode for the Kbd.
   */
  keycode: string;

  /**
   * Theme for the Kbd.
   */
  theme?: KbdTheme;
}

export const Kbd: FC<KbdProps> = ({
  className,
  keycode,
  theme: customTheme,
  ...rest
}) => {
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
