import React from 'react';
import classNames from 'classnames';
import styles from './Column.module.css';

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  offsetXs?: number;
  offsetSm?: number;
  offsetMd?: number;
  offsetLg?: number;
  offsetXl?: number;
  auto?: boolean;
}

export const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  (
    {
      xs,
      sm,
      md,
      lg,
      xl,
      offsetXs,
      offsetSm,
      offsetMd,
      offsetLg,
      offsetXl,
      auto,
      children,
      ...otherProps
    },
    ref
  ) => {
    const columnClasses = classNames(styles.column, {
      [styles[`col-xs-${xs}`]]: xs,
      [styles[`col-sm-${sm}`]]: sm,
      [styles[`col-md-${md}`]]: md,
      [styles[`col-lg-${lg}`]]: lg,
      [styles[`col-xl-${xl}`]]: xl,
      [styles[`offset-xs-${offsetXs}`]]: offsetXs,
      [styles[`offset-sm-${offsetSm}`]]: offsetSm,
      [styles[`offset-md-${offsetMd}`]]: offsetMd,
      [styles[`offset-lg-${offsetLg}`]]: offsetLg,
      [styles[`offset-xl-${offsetXl}`]]: offsetXl,
      [styles.auto]: auto
    });

    return (
      <div
        className={columnClasses}
        style={{ paddingLeft: '15px', paddingRight: '15px' }}
        ref={ref}
        {...otherProps}
      >
        {children}
      </div>
    );
  }
);
