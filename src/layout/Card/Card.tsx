import React, { forwardRef, LegacyRef, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { CardTheme } from './CardTheme';
import { useComponentTheme } from '../../utils';

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
}

export type CardRefProps = CardProps & { ref?: LegacyRef<HTMLDivElement> };

export const Card: FC<CardRefProps> = forwardRef(
  (
    {
      children,
      disablePadding,
      className,
      header,
      headerClassName,
      contentClassName,
      ...rest
    }: CardProps,
    ref
  ) => {
    const theme: CardTheme = useComponentTheme('card');

    return (
      <section
        {...rest}
        ref={ref}
        className={twMerge(
          theme.base,
          disablePadding && theme.disablePadding,
          className
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
  }
);
