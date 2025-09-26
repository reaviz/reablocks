import type { FC, Ref } from 'react';
import React, { forwardRef } from 'react';

import type { ButtonProps, ButtonRef } from '@/elements/Button';
import { Button } from '@/elements/Button';
import { twMerge } from '@/utils';
import { useComponentTheme } from '@/utils';

export type IconButtonProps = Omit<
  ButtonProps,
  'fullWidth' | 'startAdornment' | 'endAdornment'
>;

export const IconButton: FC<IconButtonProps & ButtonRef> = forwardRef(
  (
    {
      children,
      className,
      size = 'medium',
      theme: customTheme,
      ...rest
    }: IconButtonProps,
    ref: Ref<HTMLButtonElement>,
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
  },
);
