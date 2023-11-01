import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import css from './IconButton.module.css';
import { Button, ButtonProps, ButtonRef } from '../Button';
import { Stack } from '../../layout';

export interface IconButtonProps extends ButtonProps {
  /**
   * The icon inside the Button.
   */
  icon: React.ReactElement;

  /**
   * The direction of the icon and text layout.
   */
  direction?: 'row' | 'column' | 'rowReverse' | 'columnReverse';

  /**
   * CSS Classname to apply to the icon
   */
  iconClassName?: string;
}

export const IconButton: FC<IconButtonProps & ButtonRef> = forwardRef(
  (
    {
      className,
      children,
      icon,
      direction = 'row',
      iconClassName,
      size,
      variant = 'filled',
      color = 'default',
      ...rest
    }: IconButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => (
    <Button
      {...rest}
      ref={ref}
      className={classNames(className, css.iconBtn, {
        [css.hasWords]: children !== undefined,
        [css[color]]: true,
        [css[size]]: true,
        [css[variant]]: true
      })}
      size={size}
      color={color}
      variant={variant}
    >
      <Stack direction={direction} dense className={css.childrenContainer}>
        <div className={iconClassName}>{icon}</div>
        {children && <div>{children}</div>}
      </Stack>
    </Button>
  )
);
