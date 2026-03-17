import React, {
  forwardRef,
  RefObject,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import { InputTheme } from './InputTheme';
import { cn, useComponentTheme } from '@/utils';

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
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
  size?: 'small' | 'medium' | 'large' | string;

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

  /**
   * Theme for the Input.
   */
  theme?: InputTheme;
}

export interface InputRef {
  /**
   * Reference to the input element.
   */
  inputRef?: RefObject<HTMLInputElement>;

  /**
   * Reference to the container element.
   */
  containerRef?: RefObject<HTMLDivElement>;

  /**
   * Method to blur the input.
   */
  blur?: () => void;

  /**
   * Method to focus the input.
   */
  focus?: () => void;

  /**
   * Method to select the input.
   */
  select?: () => void;
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
      size = 'medium',
      onFocus,
      onChange,
      onValueChange,
      onBlur,
      theme: customTheme,
      ...rest
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [focused, setFocused] = useState(false);

    useImperativeHandle(ref, () => ({
      inputRef,
      containerRef,
      blur: () => inputRef.current?.blur(),
      focus: () => inputRef.current?.focus(),
      select: () => inputRef.current?.select()
    }));

    useLayoutEffect(() => {
      if (autoFocus) {
        // Small timeout for page loading
        requestAnimationFrame(() => inputRef.current?.focus());
      }
    }, [autoFocus]);

    const theme: InputTheme = useComponentTheme('input', customTheme);

    return (
      <div
        className={cn(
          theme.base,
          focused && theme.focused,
          fullWidth && theme.fullWidth,
          error && theme.error,
          theme.sizes[size],
          disabled && theme.disabled,
          containerClassname
        )}
        ref={containerRef}
      >
        {start && (
          <div className={cn(theme.adornment.base, theme.adornment.start)}>
            {start}
          </div>
        )}
        <input
          {...rest}
          ref={inputRef}
          value={value}
          disabled={disabled}
          aria-invalid={error || undefined}
          className={cn(theme.input, className)}
          onFocus={event => {
            if (selectOnFocus) {
              event.target.select();
            }
            setFocused(true);
            onFocus?.(event);
          }}
          onBlur={event => {
            onBlur?.(event);
            setFocused(false);
          }}
          onChange={event => {
            onValueChange?.(event.target.value);
            onChange?.(event);
          }}
        />
        {end && (
          <div className={cn(theme.adornment.base, theme.adornment.end)}>
            {end}
          </div>
        )}
      </div>
    );
  }
);
