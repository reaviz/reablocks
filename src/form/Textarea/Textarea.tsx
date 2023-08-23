import classNames from 'classnames';
import React, { FC, useRef } from 'react';
import TextareaAutosize, {
  TextareaAutosizeProps
} from 'react-textarea-autosize';

import css from './Textarea.module.css';

export interface TextareaProps extends TextareaAutosizeProps {
  /**
   * Mark field as errored
   */
  error?: boolean;

  /**
   * If true, the field will take up the full width of its container.
   */
  fullWidth?: boolean;

  /**
   * Size of the field.
   */
  size?: 'small' | 'medium' | 'large';
}

export const Textarea: FC<TextareaProps> = ({
  fullWidth,
  size = 'small',
  className,
  error,
  ...rest
}) => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  return (
    <div
      className={classNames(css.root, {
        [css.fullWidth]: fullWidth,
        [css.error]: error,
        [css[size]]: size
      })}
    >
      <TextareaAutosize
        ref={inputRef}
        className={classNames(css.input, className)}
        {...rest}
      />
    </div>
  );
};
