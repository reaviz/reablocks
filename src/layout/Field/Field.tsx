import React, { FC, ReactNode } from 'react';
import { FieldTheme } from './FieldTheme';
import { cn, useComponentTheme } from '@/utils';

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
   * Whether to show the required indicator next to the label.
   */
  required?: boolean;

  /**
   * Content to render as the required indicator. Defaults to `*`.
   * The indicator is decorative (`aria-hidden`); set `required`/`aria-required`
   * on the input control for screen readers.
   */
  requiredIndicator?: ReactNode;

  /**
   * Visually-hidden text announced by assistive tech alongside the required
   * indicator. Defaults to `'required'`. Pass `''` to opt out (e.g. when the
   * input already carries `aria-required`), or a localized string.
   */
  requiredAnnouncement?: string;

  /**
   * Sets the label's `htmlFor`. Pair with a matching `id` on the child form
   * control to associate them. When omitted, no `htmlFor` is rendered.
   */
  htmlFor?: string;

  /**
   * Children to render.
   */
  children?: ReactNode;

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
   * @default 'vertical'
   */
  direction?: 'vertical' | 'horizontal';

  /**
   * Alignment of the label.
   * @default 'start'
   */
  alignment?: 'start' | 'center' | 'end';

  /**
   * Event when the label is clicked.
   */
  onTitleClick?: (
    event: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => void;

  /**
   * Hint text displayed below the input. Hidden when error message is shown.
   */
  hint?: React.ReactNode;

  /**
   * Error state or message. When `true`, applies error styling.
   * When a string or ReactNode, renders the error message below the input.
   */
  error?: boolean | React.ReactNode;

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
  requiredIndicator = '*',
  requiredAnnouncement = 'required',
  htmlFor,
  direction = 'vertical',
  alignment = 'start',
  onTitleClick,
  hint,
  error,
  theme: customTheme,
  ...rest
}) => {
  const theme: FieldTheme = useComponentTheme('field', customTheme);
  const hasErrorMessage = error != null && error !== false && error !== true;

  return (
    <section
      {...rest}
      className={cn(
        theme.base,
        disableMargin && theme.disableMargin,
        direction === 'horizontal' && theme.horizontal.base,
        direction === 'vertical' && theme.vertical.base,
        alignment === 'end' && theme.endAlign,
        alignment === 'center' && theme.centerAlign,
        error && theme.errorState,
        className
      )}
    >
      {label && (
        <label
          htmlFor={htmlFor}
          className={cn(
            theme.label,
            direction === 'horizontal' && theme.horizontal.label,
            direction === 'vertical' && theme.vertical.label,
            labelClassName
          )}
          onClick={onTitleClick}
        >
          {label}
          {required && (
            <>
              <span className={theme.requiredIndicator} aria-hidden="true">
                {requiredIndicator}
              </span>
              {requiredAnnouncement && (
                <span className="sr-only">{requiredAnnouncement}</span>
              )}
            </>
          )}
        </label>
      )}
      <div
        className={cn(direction === 'horizontal' && theme.horizontal.content)}
      >
        {children}
        {hasErrorMessage ? (
          <span className={theme.error} role="alert">
            {error}
          </span>
        ) : (
          hint && <span className={theme.hint}>{hint}</span>
        )}
      </div>
    </section>
  );
};
