import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { BlockTheme } from './BlockTheme';
import { useComponentTheme } from '../../utils/Theme/TW';

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
  disableMargin,
  labelClassName,
  className,
  required,
  direction,
  alignment,
  onTitleClick,
  ...rest
}) => {
  const theme: BlockTheme = useComponentTheme('block');

  return (
    <section
      {...rest}
      className={twMerge(
        theme.base,
        disableMargin && theme.disableMargin,
        direction === 'horizontal' && theme.horizontal.base,
        direction === 'vertical' && theme.vertical.base,
        alignment === 'end' && theme.endAlign,
        alignment === 'center' && theme.centerAlign,
        className
      )}
    >
      {label && (
        <label
          className={twMerge(
            theme.label,
            direction === 'horizontal' && theme.horizontal.label,
            direction === 'vertical' && theme.vertical.label,
            labelClassName
          )}
          onClick={onTitleClick}
        >
          {label}
          {`${required ? ' *' : ''}`}
        </label>
      )}
      {children}
    </section>
  );
};

Block.defaultProps = {
  direction: 'vertical',
  alignment: 'start'
};
