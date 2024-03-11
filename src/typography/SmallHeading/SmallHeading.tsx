import React, { FC, forwardRef, LegacyRef } from 'react';
import { useComponentTheme } from '../../utils';
import { twMerge } from 'tailwind-merge';

export type SmallHeadingColors =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'warning'
  | 'info';

export interface SmallHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Color variation of the title.
   */
  color?: SmallHeadingColors;

  /**
   * Font variant for the heading.
   */
  variant?: 'default' | 'mono';

  /**
   * Whether to disable the margins.
   */
  disableMargins?: boolean;
}

export interface SmallHeadingRef {
  ref?: LegacyRef<HTMLHeadingElement>;
}

export const SmallHeading: FC<SmallHeadingProps & SmallHeadingRef> = forwardRef(
  (
    {
      children,
      color,
      variant,
      disableMargins,
      className,
      ...rest
    }: SmallHeadingProps,
    ref
  ) => {
    const theme = useComponentTheme('typography');

    return (
      <h5
        ref={ref}
        className={twMerge(
          theme.colors[color],
          theme.variant[variant],
          theme.smallHeading,
          disableMargins && theme.disableMargins,
          className
        )}
        {...rest}
      >
        {children}
      </h5>
    );
  }
);

SmallHeading.defaultProps = {
  color: 'default',
  variant: 'default',
  disableMargins: false
};
