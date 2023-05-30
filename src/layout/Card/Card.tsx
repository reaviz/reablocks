import React, { forwardRef, Ref, FC } from 'react';
import classNames from 'classnames';
import css from './Card.module.css';

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

export type CardRefProps = CardProps & { ref?: Ref<HTMLDivElement> };

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
    ref: Ref<HTMLDivElement>
  ) => (
    <section
      {...rest}
      ref={ref}
      className={classNames(className, css.card, {
        [css.disablePadding]: disablePadding
      })}
    >
      {header && (
        <header className={classNames(css.header, headerClassName)}>
          {header && typeof header === 'string' ? (
            <h3 className={css.headerText}>{header}</h3>
          ) : (
            header
          )}
        </header>
      )}
      <div className={classNames(css.content, contentClassName)}>
        {children}
      </div>
    </section>
  )
);
