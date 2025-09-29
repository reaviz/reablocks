import type { FC, HTMLAttributes, LegacyRef } from 'react';
import React, { forwardRef } from 'react';

import { twMerge } from '@/utils';
import { useComponentTheme } from '@/utils';

import type {
  VerticalSpacerSizeTheme,
  VerticalSpacerTheme
} from './VerticalSpacerTheme';

export interface VerticalSpacerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The amount of space to add.
   */
  space: keyof VerticalSpacerSizeTheme;

  /**
   * Theme for the VerticalSpacer.
   */
  theme?: VerticalSpacerTheme;
}

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
