import React, { FC } from 'react';
import classNames from 'classnames';
import css from './Block.module.css';

export interface BlockProps extends React.HTMLAttributes<HTMLElement> {
  label?: React.ReactNode | string;
  disableLabelPadding?: boolean;
  disableMargin?: boolean;
  required?: boolean;
  children?: React.ReactNode;
  contentClassName?: string;
  labelClassName?: string;
  className?: string;
  direction?: 'vertical' | 'horizontal';
  alignment?: 'start' | 'center' | 'end';
  onTitleClick?: (
    event: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => void;
}

export const Block: FC<BlockProps> = ({
  label,
  disableLabelPadding,
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
        className={classNames(css.label, labelClassName, {
          [css.disablePadding]: disableLabelPadding
        })}
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
