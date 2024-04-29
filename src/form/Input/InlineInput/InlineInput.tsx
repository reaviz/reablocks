import { FC, forwardRef, Ref, InputHTMLAttributes, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { InputTheme } from '../InputTheme';
import { useComponentTheme } from '../../../utils';

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
   * Placeholder content
   */
  placeholder?: string;

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

export const InlineInput: FC<InlineInputProps> = forwardRef(
  (
    {
      className,
      inputClassName,
      placeholder,
      placeholderIsMinWidth = true,
      theme: customTheme,
      extraWidth,
      onChange,
      ...rest
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const theme: InputTheme = useComponentTheme('input', customTheme);
    const [inputValue, setInputValue] = useState('');
    const spanStyles =
      'relative opacity-0 font-[inherit] text-[inherit] leading-none whitespace-pre select-none';

    return (
      <div className={twMerge(className, theme.inline.base)}>
        <span className={spanStyles} style={{ paddingRight: extraWidth ?? 0 }}>
          {inputValue}
        </span>
        {placeholderIsMinWidth && !inputValue && (
          <span className={spanStyles}>{placeholder}</span>
        )}
        <input
          value={inputValue}
          placeholder={placeholder}
          className={twMerge(theme.inline.input, inputClassName)}
          ref={ref}
          onChange={e => {
            setInputValue(e.target.value);
            onChange(e);
          }}
          {...rest}
        />
      </div>
    );
  }
);
