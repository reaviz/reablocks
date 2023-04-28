import React, { FC, forwardRef, Ref } from 'react';
export interface BoldRef {
  ref?: Ref<HTMLElement>;
}

export const Bold: FC<React.HTMLAttributes<HTMLElement> & BoldRef> = forwardRef(
  (
    { children, ...rest }: React.HTMLAttributes<HTMLElement>,
    ref: Ref<HTMLElement>
  ) => (
    <b ref={ref} {...rest}>
      {children}
    </b>
  )
);
