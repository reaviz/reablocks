import React, { FC, forwardRef, LegacyRef } from 'react';
import { useComponentTheme } from '../../utils';
import { twMerge } from 'tailwind-merge';
import { TypographyTheme } from '../TypographyTheme';

export interface PageTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Color variation of the title.
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
   * Font variant for the title.
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

export interface PageTitleRef {
  ref?: LegacyRef<HTMLHeadingElement>;
}

export const PageTitle: FC<PageTitleProps & PageTitleRef> = forwardRef(
  (
    {
      children,
      color,
      variant,
      disableMargins,
      className,
      theme: customTheme,
      ...rest
    }: PageTitleProps,
    ref
  ) => {
    const theme: TypographyTheme = useComponentTheme('typography', customTheme);

    return (
      <h1
        ref={ref}
        className={twMerge(
          theme.colors[color],
          theme.variant[variant],
          theme.pageTitle,
          disableMargins && theme.disableMargins,
          className
        )}
        {...rest}
      >
        {children}
      </h1>
    );
  }
);

PageTitle.defaultProps = {
  color: 'default',
  variant: 'default',
  disableMargins: false
};
