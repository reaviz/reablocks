import React, { FC, forwardRef, Ref, useEffect, useRef } from 'react';
import { Input, InputProps, InputRef } from '../Input';

export interface DebouncedInputProps extends InputProps {
  /**
   * The debounce time in milliseconds. Defaults to 100.
   */
  debounce?: number;
}

export const DebouncedInput: FC<DebouncedInputProps> = forwardRef(
  (
    { debounce, value, onChange, onValueChange, ...rest },
    ref: Ref<InputRef>
  ) => {
    // eslint-disable-next-line no-undef
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lastEvent = useRef<any>();

    return (
      <Input
        {...rest}
        ref={ref}
        onKeyDown={(event: any) => {
          // if user hits enter, no need to debounce
          if (event.key === 'Enter') {
            onValueChange?.(event.target.value);
            onChange?.(event as any);
          }
        }}
        onChange={event => {
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

DebouncedInput.defaultProps = {
  debounce: 100
};
