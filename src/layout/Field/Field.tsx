import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { FieldTheme } from './FieldTheme';
import { useComponentTheme } from '@/utils';

export interface FieldProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Label to display on the field.
   */
  label?: React.ReactNode | string;

  /**
   * Disable field bottom margin.
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
   * Additional classname to apply to the field.
   */
  className?: string;

  /**
   * Direction of the field.
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

  /**
   * Theme for the Field.
   */
  theme?: FieldTheme;
}

export const Field: FC<FieldProps> = ({
  label,
  children,
  disableMargin,
  labelClassName,
  className,
  required,
  direction = 'vertical',
  alignment = 'start',
  onTitleClick,
  theme: customTheme,
  ...rest
}) => {
  const theme: FieldTheme = useComponentTheme('field', customTheme);

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
