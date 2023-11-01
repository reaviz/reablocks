import React, { FC, forwardRef, Ref } from 'react';
import { Button, ButtonProps, ButtonRef } from '../Button';

export interface IconButtonProps
  extends Omit<ButtonProps, 'fullWidth' | 'startIcon' | 'endIcon'> {}

export const IconButton: FC<IconButtonProps & ButtonRef> = forwardRef(
  ({ children, ...rest }: IconButtonProps, ref: Ref<HTMLButtonElement>) => (
    <Button {...rest} ref={ref}>
      {children}
    </Button>
  )
);
