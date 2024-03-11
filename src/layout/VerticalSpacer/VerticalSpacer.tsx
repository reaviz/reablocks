import React, { forwardRef, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '../../utils';

export interface VerticalSpacerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The amount of space to add.
   */
  space: VerticalSpaceType;
}

export type VerticalSpaceType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const VerticalSpacer = forwardRef<HTMLDivElement, VerticalSpacerProps>(
  ({ space, className, ...rest }, ref) => {
    const theme = useComponentTheme('verticalSpacer');

    return (
      <div
        className={twMerge(className, theme.size[space])}
        ref={ref}
        {...rest}
      />
    );
  }
);

VerticalSpacer.defaultProps = {
  space: 'md'
};
