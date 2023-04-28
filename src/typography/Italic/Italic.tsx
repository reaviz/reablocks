import React, { FC, forwardRef, Ref } from 'react';
export interface ItalicRef {
  ref?: Ref<HTMLElement>;
}

export const Italic: FC<React.HTMLAttributes<HTMLElement> & ItalicRef> =
  forwardRef(
    (
      { children, ...rest }: React.HTMLAttributes<HTMLElement>,
      ref: Ref<HTMLElement>
    ) => (
      <i ref={ref} {...rest}>
        {children}
      </i>
    )
  );
