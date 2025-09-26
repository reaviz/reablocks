import type { HandlerInterface, Key } from 'ctrl-keys';
import { keys } from 'ctrl-keys';
import type { FC, FocusEvent, KeyboardEvent, ReactNode } from 'react';
import React, { useEffect, useLayoutEffect, useRef } from 'react';

import type { CommandPaletteTheme } from '@/elements/CommandPalette/CommandPaletteTheme';
import type { HotkeyIem } from '@/elements/CommandPalette/useFlattenedTree';
import { useComponentTheme } from '@/utils';

import { SearchIcon } from './SearchIcon';

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

  /**
   * Theme for the Command Palette.
   */
  theme?: CommandPaletteTheme;
}

export const CommandPaletteInput: FC<CommandPaletteInputProps> = ({
  value,
  autoFocus,
  icon = <SearchIcon />,
  hotkeys,
  placeholder,
  onHotkey,
  onBlur,
  onChange,
  onKeyPress,
  theme: customTheme,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handlerRef = useRef<HandlerInterface>(keys());
  const keyMapRef = useRef<Map<string, any>>(new Map());

  useLayoutEffect(() => {
    if (autoFocus) {
      // Small timeout for page loading
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [autoFocus]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handler = handlerRef.current;
      const keyMap = keyMapRef.current;

      for (const hotkey of hotkeys) {
        const callback = () => onHotkey(hotkey);
        handler.add(hotkey.hotkey as Key, callback);
        keyMap.set(hotkey.hotkey, callback);
      }

      window.addEventListener('keydown', handler.handle);

      return () => {
        [...keyMap].forEach(([key, cb]) => handler.remove(key as Key, cb));
        window.removeEventListener('keydown', handler.handle);
        keyMapRef.current = new Map();
      };
    }
  }, [onHotkey, hotkeys]);

  const { input: inputTheme }: CommandPaletteTheme = useComponentTheme(
    'commandPalette',
    customTheme,
  );

  return (
    <div className={inputTheme.base}>
      {icon && <span className={inputTheme.icon}>{icon}</span>}
      <input
        className={inputTheme.input}
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
