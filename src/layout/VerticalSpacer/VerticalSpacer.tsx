import React, { forwardRef, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '../../utils';
import { VerticalSpacerTheme } from './VerticalSpacerTheme';

export interface VerticalSpacerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The amount of space to add.
   */
  space: VerticalSpaceType;

  /**
   * Theme for the VerticalSpacer.
   */
  theme?: VerticalSpacerTheme;
}

export type VerticalSpaceType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const VerticalSpacer = forwardRef<HTMLDivElement, VerticalSpacerProps>(
  ({ space, className, theme: customTheme, ...rest }, ref) => {
    const theme: VerticalSpacerTheme = useComponentTheme(
      'verticalSpacer',
      customTheme
    );

    return (
      <div
        className={twMerge(className, theme.base, theme.size[space])}
        ref={ref}
        {...rest}
      />
    );
  }
);

VerticalSpacer.defaultProps = {
  space: 'md'
};
