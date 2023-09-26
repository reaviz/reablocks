import { FC, forwardRef, Ref, InputHTMLAttributes } from 'react';
import AutosizeInput from 'react-input-autosize';
import classNames from 'classnames';
import { InputRef } from '../Input';
import css from './InlineInput.module.css';

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
}

export const InlineInput: FC<InlineInputProps> = forwardRef(
  (
    { inputClassName, placeholderIsMinWidth = true, ...rest },
    ref: Ref<InputRef>
  ) => (
    <AutosizeInput
      inputRef={ref}
      inputClassName={classNames(css.input, inputClassName)}
      placeholderIsMinWidth={placeholderIsMinWidth}
      {...rest}
    />
  )
);
