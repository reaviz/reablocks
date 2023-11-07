import React, {
  forwardRef,
  RefObject,
  useImperativeHandle,
  useLayoutEffect,
  useRef
} from 'react';
import classNames from 'classnames';
import css from './Input.module.css';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * If true, the input will take up the full width of its container.
   */
  fullWidth?: boolean;

  /**
   * If true, the input will be focused during the first mount.
   */
  selectOnFocus?: boolean;

  /**
   * If true, the input will show an error state.
   */
  error?: boolean;

  /**
   * Additional classname for the input container element.
   */
  containerClassname?: string;

  /**
   * Size of the input.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Content to display before the input.
   */
  start?: React.ReactNode | string;

  /**
   * Content to display after the input.
   */
  end?: React.ReactNode | string;

  /**
   * Shortcut for the onChange value event.
   */
  onValueChange?: (value: string) => void;
}

export interface InputRef {
  inputRef: RefObject<HTMLInputElement>;
  containerRef: RefObject<HTMLDivElement>;
  blur?: () => void;
  focus?: () => void;
}

export const Input = forwardRef<InputRef, InputProps>(
  (
    {
      className,
      containerClassname,
      error,
      fullWidth,
      selectOnFocus,
      start,
      end,
      autoFocus,
      disabled,
      value,
      size,
      onFocus,
      onChange,
      onValueChange,
      ...rest
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(ref, () => ({
      inputRef,
      containerRef,
      blur: () => inputRef.current?.blur(),
      focus: () => inputRef.current?.focus()
    }));

    useLayoutEffect(() => {
      if (autoFocus) {
        // Small timeout for page loading
        requestAnimationFrame(() => inputRef.current?.focus());
      }
    }, [autoFocus]);

    return (
      <div
        className={classNames(css.container, containerClassname, {
          [css.fullWidth]: fullWidth,
          [css.error]: error,
          [css[size]]: size
        })}
        ref={containerRef}
      >
        {start && <div className={css.startAdornment}>{start}</div>}
        <input
          {...rest}
          ref={inputRef}
          value={value}
          disabled={disabled}
          className={classNames(className, css.input)}
          onFocus={event => {
            if (selectOnFocus) {
              event.target.select();
            }
            onFocus?.(event);
          }}
          onChange={event => {
            onValueChange?.(event.target.value);
            onChange?.(event);
          }}
        />
        {end && <div className={css.endAdornment}>{end}</div>}
      </div>
    );
  }
);

Input.defaultProps = {
  size: 'medium'
};
