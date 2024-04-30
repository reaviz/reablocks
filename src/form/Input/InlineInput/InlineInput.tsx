import {
  FC,
  forwardRef,
  RefObject,
  InputHTMLAttributes,
  useState
} from 'react';
import { twMerge } from 'tailwind-merge';
import { InputTheme } from '../InputTheme';
import { useComponentTheme } from '../../../utils';
import { InputRef } from '../Input';

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
      placeholderIsMinWidth,
      theme: customTheme,
      extraWidth,
      onChange,
      ...rest
    },
    ref: RefObject<InputRef>
  ) => {
    const theme: InputTheme = useComponentTheme('input', customTheme);
    const spanStyles = 'relative opacity-0 whitespace-pre select-none';
    const [inputValue, setInputValue] = useState('');
    const [placeholderValue, setPlaceholderValue] = useState(placeholder);

    const onInputValueChange = event => {
      setInputValue(event.target.value);
      onChange(event);
    };

    const setRef = (node: HTMLInputElement) => {
      ref?.current?.inputRef;

      const placeholder = node?.placeholder;
      const value = node?.value;

      placeholder && setPlaceholderValue(placeholder);
      value && setInputValue(value);
    };

    return (
      <div className={twMerge(className, theme.inline.base)}>
        <span className={spanStyles} style={{ paddingRight: extraWidth ?? 0 }}>
          {inputValue}
        </span>
        {!placeholderIsMinWidth === true && !inputValue && (
          <span className={spanStyles}>{placeholder}</span>
        )}
        <input
          value={inputValue}
          placeholder={placeholderValue}
          className={twMerge(theme.inline.input, inputClassName)}
          ref={setRef}
          onChange={onInputValueChange}
          {...rest}
        />
      </div>
    );
  }
);
