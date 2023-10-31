import React, {
  forwardRef,
  RefObject,
  useImperativeHandle,
  useRef
} from 'react';
import classNames from 'classnames';
import TextareaAutosize, {
  TextareaAutosizeProps
} from 'react-textarea-autosize';

import css from './Textarea.module.css';

export interface TextareaProps extends TextareaAutosizeProps {
  /**
   * Additional classname for the input container element.
   */
  containerClassName?: string;

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

export interface TextAreaRef {
  inputRef: RefObject<HTMLTextAreaElement>;
  containerRef: RefObject<HTMLDivElement>;
  blur?: () => void;
  focus?: () => void;
}

export const Textarea = forwardRef<TextAreaRef, TextareaProps>(
  (
    {
      fullWidth,
      size = 'small',
      containerClassName,
      className,
      error,
      ...rest
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLTextAreaElement | null>(null);

    useImperativeHandle(ref, () => ({
      inputRef,
      containerRef,
      blur: () => inputRef.current?.blur(),
      focus: () => inputRef.current?.focus()
    }));

    return (
      <div
        className={classNames(
          css.root,
          {
            [css.fullWidth]: fullWidth,
            [css.error]: error,
            [css[size]]: size
          },
          containerClassName
        )}
        ref={containerRef}
      >
        <TextareaAutosize
          ref={inputRef}
          className={classNames(css.input, className)}
          {...rest}
        />
      </div>
    );
  }
);
