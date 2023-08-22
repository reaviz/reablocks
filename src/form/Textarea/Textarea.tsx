import classNames from 'classnames';
import React, {
  FC,
  TextareaHTMLAttributes,
  useLayoutEffect,
  useRef
} from 'react';

import css from './Textarea.module.css';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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
  autoFocus,
  ...rest
}) => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useLayoutEffect(() => {
    if (autoFocus) {
      // Small timeout for page loading
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [autoFocus]);

  return (
    <div
      className={classNames(css.root, {
        [css.fullWidth]: fullWidth,
        [css.error]: error,
        [css[size]]: size
      })}
    >
      <textarea
        ref={inputRef}
        className={classNames(css.input, className)}
        {...rest}
      />
    </div>
  );
};
