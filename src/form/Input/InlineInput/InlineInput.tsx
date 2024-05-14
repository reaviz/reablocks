import React, { forwardRef, Ref, InputHTMLAttributes } from 'react';
import AutosizeInput from 'react-18-input-autosize';
import { twMerge } from 'tailwind-merge';
import { InputTheme } from '@/form/Input/InputTheme';
import { useComponentTheme } from '@/utils';

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
   * Don't collapse size to less than the placeholder
   */
  placeholderIsMinWidth?: boolean;

  /**
   * onAutosize handler
   */
  onAutosize?: (newWidth: number) => void;

  /**
   * Theme for the InlineInput.
   */
  theme?: InputTheme;
}

export const InlineInput = forwardRef<HTMLDivElement, InlineInputProps>(
  (
    {
      inputClassName,
      placeholderIsMinWidth = true,
      theme: customTheme,
      ...rest
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const theme: InputTheme = useComponentTheme('input', customTheme);

    return (
      <AutosizeInput
        inputRef={ref}
        inputClassName={twMerge(theme.inline, inputClassName)}
        placeholderIsMinWidth={placeholderIsMinWidth}
        {...rest}
      />
    );
  }
);
