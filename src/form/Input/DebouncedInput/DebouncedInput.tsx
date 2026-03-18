import React, { FC, forwardRef, Ref, useEffect, useRef, useState } from 'react';
import { Input, InputProps, InputRef } from '@/form/Input/Input';

export interface DebouncedInputProps extends InputProps {
  /**
   * The debounce time in milliseconds. Defaults to 100.
   */
  debounce?: number;
}

export const DebouncedInput = forwardRef<InputRef, DebouncedInputProps>(
  (
    { debounce = 100, value, onChange, onValueChange, ...rest },
    ref: Ref<InputRef>
  ) => {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [internalValue, setInternalValue] = useState<
      string | number | readonly string[]
    >(value);

    useEffect(() => {
      setInternalValue(value);
    }, [value]);

    return (
      <Input
        {...rest}
        ref={ref}
        value={internalValue}
        onKeyDown={(event: any) => {
          // if user hits enter, no need to debounce
          if (event.key === 'Enter') {
            onValueChange?.(event.target.value);
            onChange?.(event as any);
          }
        }}
        onChange={event => {
          setInternalValue(event.target.value);

          if (debounce) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
              onValueChange?.(event.target.value);
              onChange?.(event);
            }, debounce);
          } else {
            onValueChange?.(event.target.value);
            onChange?.(event);
          }
        }}
      />
    );
  }
);
