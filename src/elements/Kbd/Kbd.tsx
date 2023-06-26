import React, { FC } from 'react';
import classNames from 'classnames';
import { Chip, ChipProps } from '../Chip';
import { getHotkeyText } from './utils';
import css from './Kbd.module.css';

export interface KbdProps extends Omit<ChipProps, 'children'> {
  keycode: string;
}

export const Kbd: FC<KbdProps> = ({ className, keycode, ...rest }) => {
  const split = keycode.split('+').map(getHotkeyText);
  return (
    <span className={css.container}>
      {split?.map((key, index) => (
        <Chip key={index} {...rest} className={classNames(css.chip, className)}>
          <kbd>{key}</kbd>
        </Chip>
      ))}
    </span>
  );
};
