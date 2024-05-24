import React, { FC, forwardRef, HTMLAttributes, LegacyRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
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

export type VerticalSpaceType =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | string;

export interface VerticalSpacerRef {
  /**
   * Reference to the HTML div element.
   */
  ref?: LegacyRef<HTMLDivElement>;
}

export const VerticalSpacer: FC<VerticalSpacerProps & VerticalSpacerRef> =
  forwardRef<HTMLDivElement, VerticalSpacerProps>(
    ({ space = 'md', className, theme: customTheme, ...rest }, ref) => {
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
