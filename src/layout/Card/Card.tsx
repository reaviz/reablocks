import type { FC, LegacyRef, PropsWithChildren } from 'react';
import React, { forwardRef } from 'react';

import { twMerge } from '@/utils';
import { useComponentTheme } from '@/utils';

import type { CardTheme } from './CardTheme';

export interface CardProps extends React.DOMAttributes<any> {
  /**
   * Disable the padding of the card.
   */
  disablePadding?: boolean;

  /**
   * Additional classname to apply to the card.
   */
  className?: string;

  /**
   * Header classname to apply.
   */
  headerClassName?: string;

  /**
   * Content classname to apply.
   */
  contentClassName?: string;

  /**
   * Additional style attributes. Recommend to use css classes over this.
   */
  style?: React.CSSProperties;

  /**
   * Header element or text to show.
   */
  header?: string | React.JSX.Element | React.JSX.Element[];

  /**
   * Theme for the Card.
   */
  theme?: CardTheme;
}

export type CardRefProps = CardProps &
  PropsWithChildren & { ref?: LegacyRef<HTMLDivElement> };

export const Card: FC<CardRefProps> = forwardRef(
  (
    {
      children,
      disablePadding,
      className,
      header,
      headerClassName,
      contentClassName,
      theme: customTheme,
      ...rest
    }: CardProps,
    ref,
  ) => {
    const theme: CardTheme = useComponentTheme('card', customTheme);

    return (
      <section
        {...rest}
        ref={ref}
        className={twMerge(
          theme.base,
          disablePadding && theme.disablePadding,
          className,
        )}
      >
        {header && (
          <header className={twMerge(theme.header, headerClassName)}>
            {header && typeof header === 'string' ? (
              <h3 className={theme.headerText}>{header}</h3>
            ) : (
              header
            )}
          </header>
        )}
        <div className={twMerge(theme.content, contentClassName)}>
          {children}
        </div>
      </section>
    );
  },
);
