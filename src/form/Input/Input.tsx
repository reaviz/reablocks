import React, {
  forwardRef,
  RefObject,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import { twMerge } from 'tailwind-merge';
import { InputTheme } from './InputTheme';
import { useComponentTheme } from '../../utils';

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
   *
   * @deprecated Use `startAdornment` instead.
   */
  start?: React.ReactNode | string;

  /**
   * Content to display after the input.
   *
   * @deprecated Use `endAdornment` instead.
   */
  end?: React.ReactNode | string;

  /**
   * Element to display before the Button content.
   */
  startAdornment?: any;

  /**
   * Element to display after the Button content.
   */
  endAdornment?: any;

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
  inputRef: RefObject<HTMLInputElement>;
  containerRef: RefObject<HTMLDivElement>;
  blur?: () => void;
  focus?: () => void;
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
      startAdornment,
      endAdornment,
      autoFocus,
      disabled,
      value,
      size,
      onFocus,
      onChange,
      onValueChange,
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
        className={twMerge(
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
        {(start || startAdornment) && (
          <div className={twMerge(theme.adornment.base, theme.adornment.start)}>
            {start ?? startAdornment}
          </div>
        )}
        <input
          {...rest}
          ref={inputRef}
          value={value}
          disabled={disabled}
          className={twMerge(theme.input, className)}
          onFocus={event => {
            if (selectOnFocus) {
              event.target.select();
            }
            setFocused(true);
            onFocus?.(event);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          onChange={event => {
            onValueChange?.(event.target.value);
            onChange?.(event);
          }}
        />
        {(end || endAdornment) && (
          <div className={twMerge(theme.adornment.base, theme.adornment.end)}>
            {end ?? endAdornment}
          </div>
        )}
      </div>
    );
  }
);

Input.defaultProps = {
  size: 'medium'
};
