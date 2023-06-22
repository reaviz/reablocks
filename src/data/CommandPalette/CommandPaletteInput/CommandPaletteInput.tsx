import React, { FC, KeyboardEvent, useLayoutEffect, useRef } from 'react';
import css from './CommandPaletteInput.module.css';

export interface CommandPaletteInputProps {
  value: string;
  placeholder?: string;
  autoFocus?: boolean;
  onChange: (value: string) => void;
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur: (event) => void;
}

export const CommandPaletteInput: FC<CommandPaletteInputProps> = ({
  value,
  autoFocus,
  placeholder,
  onBlur,
  onChange,
  onKeyPress
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useLayoutEffect(() => {
    if (autoFocus) {
      // Small timeout for page loading
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [autoFocus]);

  return (
    <input
      className={css.input}
      ref={inputRef}
      type="text"
      value={value}
      placeholder={placeholder}
      autoCorrect="off"
      spellCheck="false"
      autoComplete="off"
      onChange={e => onChange(e.target.value)}
      onKeyDown={onKeyPress}
      onBlur={onBlur}
    />
  );
};
