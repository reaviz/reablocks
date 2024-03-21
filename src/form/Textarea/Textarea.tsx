import React, {
  forwardRef,
  RefObject,
  useImperativeHandle,
  useRef
} from 'react';
import TextareaAutosize, {
  TextareaAutosizeProps
} from 'react-textarea-autosize';
import { twMerge } from 'tailwind-merge';
import { TextareaTheme } from './TextareaTheme';
import { useComponentTheme } from '../../utils';

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
      size = 'medium',
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

    const theme: TextareaTheme = useComponentTheme('textarea');

    return (
      <div
        className={twMerge(
          theme.base,
          fullWidth && theme.fullWidth,
          error && theme.error,
          containerClassName
        )}
        ref={containerRef}
      >
        <TextareaAutosize
          ref={inputRef}
          className={twMerge(
            theme.input,
            fullWidth && theme.fullWidth,
            rest.disabled && theme.disabled,
            theme.sizes[size],
            className
          )}
          {...rest}
        />
      </div>
    );
  }
);
