import React, { FC, forwardRef, LegacyRef } from 'react';
import { useComponentTheme } from '@/utils';
import { twMerge } from 'tailwind-merge';
import { TypographyTheme } from '@/typography/TypographyTheme';

export interface SubProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Color variation of the text.
   */
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'success'
    | 'warning'
    | 'info';

  /**
   * Font variant for the text.
   */
  variant?: 'default' | 'mono';

  /**
   * Whether to disable the margins.
   */
  disableMargins?: boolean;

  /**
   * Theme for the Typography.
   */
  theme?: TypographyTheme;
}

export interface SubRef {
  ref?: LegacyRef<HTMLHeadingElement>;
}

export const Sub: FC<SubProps & SubRef> = forwardRef(
  (
    {
      color,
      variant,
      disableMargins,
      children,
      className,
      theme: customTheme,
      ...rest
    }: SubProps,
    ref
  ) => {
    const theme: TypographyTheme = useComponentTheme('typography', customTheme);

    return (
      <h6
        ref={ref}
        className={twMerge(
          theme.colors[color],
          theme.variant[variant],
          theme.sub,
          disableMargins && theme.disableMargins,
          className
        )}
        {...rest}
      >
        {children}
      </h6>
    );
  }
);

Sub.defaultProps = {
  color: 'default',
  variant: 'default',
  disableMargins: false
};
