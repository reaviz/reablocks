import React, {
  FC,
  KeyboardEvent,
  FocusEvent,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef
} from 'react';
import { SearchIcon } from './SearchIcon';
import { HotkeyIem } from '../useFlattenedTree';
import Mousetrap from 'mousetrap';
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
   * Hotkeys set by CommandPalette from useFlattenedTree.
   */
  hotkeys: HotkeyIem[];

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
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;

  /**
   * When a hotkey was triggered. Used internally.
   */
  onHotkey: (hotkey: HotkeyIem) => void;
}

export const CommandPaletteInput: FC<CommandPaletteInputProps> = ({
  value,
  autoFocus,
  icon,
  hotkeys,
  placeholder,
  onHotkey,
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

  useEffect(() => {
    if (inputRef.current) {
      const mousetrap = new Mousetrap(inputRef.current);

      for (const hotkey of hotkeys) {
        mousetrap.bind(hotkey.hotkey, () => onHotkey(hotkey));
      }
    }

    return () => {
      hotkeys.forEach(hotkey => Mousetrap.unbind(hotkey.hotkey));
    };
  }, [hotkeys]);

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
