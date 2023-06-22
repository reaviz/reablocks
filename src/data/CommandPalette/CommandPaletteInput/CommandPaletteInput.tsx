import React, {
  FC,
  KeyboardEvent,
  ReactNode,
  useLayoutEffect,
  useRef
} from 'react';
import { SearchIcon } from './SearchIcon';
import css from './CommandPaletteInput.module.css';

export interface CommandPaletteInputProps {
  /**
   * The value of the input.
   */
  value: string;

  /**
   * Placeholder text.
   */
  placeholder?: string;

  /**
   * Autofocus or not.
   */
  autoFocus?: boolean;

  /**
   * Icon to show in the search input.
   */
  icon?: ReactNode;

  /**
   * When the search input value changes.
   */
  onChange: (value: string) => void;

  /**
   * When a user presses a key.
   */
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;

  /**
   * When the input loses focus.
   */
  onBlur: (event) => void;
}

export const CommandPaletteInput: FC<CommandPaletteInputProps> = ({
  value,
  autoFocus,
  icon,
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
    <div className={css.container}>
      {icon && <span className={css.icon}>{icon}</span>}
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
    </div>
  );
};

CommandPaletteInput.defaultProps = {
  icon: <SearchIcon />
};
