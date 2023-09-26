import { FC, forwardRef, Ref, InputHTMLAttributes } from 'react';
import AutosizeInput from 'react-input-autosize';
import classNames from 'classnames';
import { InputRef } from '../Input';
import css from './InlineInput.module.css';

export const InlineInput: FC<InputHTMLAttributes<HTMLInputElement>> =
  forwardRef(({ className, ...rest }, ref: Ref<InputRef>) => (
    <AutosizeInput
      ref={ref}
      className={classNames(css.input, className)}
      placeholderIsMinWidth
      {...rest}
    />
  ));
