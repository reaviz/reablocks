import type { FC } from 'react';
import React from 'react';

import type { ChipProps } from '@/elements/Chip';
import { Chip } from '@/elements/Chip';
import { useComponentTheme } from '@/utils';
import { twMerge } from '@/utils';

import type { KbdTheme } from './KbdTheme';
import { getHotkeyText } from './utils';

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
