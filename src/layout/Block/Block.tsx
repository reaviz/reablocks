import React, { FC } from 'react';
import classNames from 'classnames';
import css from './Block.module.css';

export interface BlockProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Label to display on the block.
   */
  label?: React.ReactNode | string;

  /**
   * Disable block bottom margin.
   */
  disableMargin?: boolean;

  /**
   * Whether to show the required * or not.
   */
  required?: boolean;

  /**
   * Children to render.
   */
  children?: React.ReactNode;

  /**
   * Additional classname to apply to the content.
   */
  contentClassName?: string;

  /**
   * Additional classname to apply to the label.
   */
  labelClassName?: string;

  /**
   * Additional classname to apply to the block.
   */
  className?: string;

  /**
   * Direction of the block.
   */
  direction?: 'vertical' | 'horizontal';

  /**
   * Alignment of the label.
   */
  alignment?: 'start' | 'center' | 'end';

  /**
   * Event when the label is clicked.
   */
  onTitleClick?: (
    event: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => void;
}

export const Block: FC<BlockProps> = ({
  label,
  children,
  contentClassName,
  disableMargin,
  labelClassName,
  className,
  required,
  direction,
  alignment,
  onTitleClick,
  ...rest
}) => (
  <section
    {...rest}
    className={classNames(css.block, className, {
      [css.disableMargin]: disableMargin,
      [css.horizontal]: direction === 'horizontal',
      [css.vertical]: direction === 'vertical',
      [css.endAlign]: alignment === 'end',
      [css.centerAlign]: alignment === 'center'
    })}
  >
    {label && (
      <label
        className={classNames(css.label, labelClassName)}
        onClick={onTitleClick}
      >
        {label}
        {`${required ? ' *' : ''}`}
      </label>
    )}
    {children}
  </section>
);

Block.defaultProps = {
  direction: 'vertical',
  alignment: 'start'
};
