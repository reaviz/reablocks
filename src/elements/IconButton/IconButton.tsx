import React, { FC, forwardRef, Ref } from 'react';
import { Button, ButtonProps, ButtonRef } from '@/elements/Button';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';

export interface IconButtonProps
  extends Omit<ButtonProps, 'fullWidth' | 'startAdornment' | 'endAdornment'> {}

export const IconButton: FC<IconButtonProps & ButtonRef> = forwardRef(
  (
    {
      children,
      className,
      size = 'medium',
      theme: customTheme,
      ...rest
    }: IconButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const theme = useComponentTheme('button', customTheme);

    return (
      <Button
        className={twMerge(theme.iconSizes[size], className)}
        size={size}
        {...rest}
        ref={ref}
      >
        {children}
      </Button>
    );
  }
);
