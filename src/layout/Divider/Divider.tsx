import React, { FC } from 'react';
import classNames from 'classnames';
import css from './Divider.module.css';

export interface DividerProps {
  /**
   * Classname to apply to the divider.
   */
  className?: string;

  /**
   * Disable the margins of the divider.
   * The default margin is: `--spacings-md`.
   */
  disableMargins?: boolean;

  /**
   * Orientation of the divider.
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Additional style attributes. Recommend to use css classes over this.
   */
  style?: React.CSSProperties;
}

export const Divider: FC<DividerProps> = ({
  className,
  disableMargins,
  orientation,
  ...rest
}) => (
  <hr
    {...rest}
    className={classNames(css.divider, className, {
      [css.disableMargins]: disableMargins,
      [css.vertical]: orientation === 'vertical',
      [css.horizontal]: orientation === 'horizontal'
    })}
  />
);

Divider.defaultProps = {
  orientation: 'horizontal',
  disableMargins: false
};
