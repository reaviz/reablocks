import React, { FC, forwardRef, Ref } from 'react';
import { Button, ButtonProps, ButtonRef } from '@/elements/Button';
import { cn, useComponentTheme } from '@/utils';

export interface IconButtonProps extends Omit<
  ButtonProps,
  'fullWidth' | 'start' | 'end'
> {}

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
        className={cn(theme.iconSizes[size], className)}
        size={size}
        {...rest}
        ref={ref}
      >
        {children}
      </Button>
    );
  }
);
