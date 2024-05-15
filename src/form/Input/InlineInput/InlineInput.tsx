import React, { forwardRef, Ref, InputHTMLAttributes } from 'react';
import { InputTheme } from '@/form/Input/InputTheme';
import { cn, useComponentTheme } from '@/utils';

export interface InlineInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Additional className for the input container
   */
  className?: string;

  /**
   * Additional width for input element
   */
  extraWidth?: number | string;

  /**
   * Additional className for the input element
   */
  inputClassName?: string;

  /**
   * Theme for the InlineInput.
   */
  theme?: InputTheme;
}

export const InlineInput = forwardRef<HTMLInputElement, InlineInputProps>(
  (
    {
      inputClassName,
      className,
      placeholder,
      value,
      theme: customTheme,
      ...props
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const theme: InputTheme = useComponentTheme('input', customTheme);

    return (
      <div className={cn('inline-grid', className)}>
        <span className="invisible" style={{ gridArea: ' 1 / 1 ' }}>
          {!value && '\u00A0'}
          {typeof value === 'string'
            ? !value
              ? placeholder.replace(/ /g, '\u00A0')
              : value.replace(/ /g, '\u00A0')
            : value}
        </span>
        <input
          {...props}
          size={1}
          ref={ref}
          style={{ gridArea: ' 1 / 1 ' }}
          type="text"
          placeholder={placeholder}
          value={value}
          className={cn(
            'border-none bg-transparent focus:outline-none',
            inputClassName,
            theme.inline
          )}
        />
      </div>
    );
  }
);
