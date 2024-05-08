import React, {
  FC,
  useState,
  PropsWithChildren,
  useEffect,
  KeyboardEvent,
  Children,
  useRef,
  ReactNode
} from 'react';
import { CommandPaletteInput } from './CommandPaletteInput';
import {
  DATA_ATTRIBUTE_INDEX,
  HotkeyIem,
  useFlattenedTree
} from './useFlattenedTree';
import { List, ListItem } from '@/layout/List';
import { Card } from '@/layout/Card';
import { MotionGroup } from '@/layout/Motion';
import { useComponentTheme } from '@/utils';
import { CommandPaletteTheme } from './CommandPaletteTheme';

export interface CommandPaletteProps extends PropsWithChildren {
  /**
   * Search input value.
   */
  search?: string;

  /**
   * Placeholder text.
   */
  placeholder?: string;

  /**
   * Selected Index.
   */
  selected?: number;

  /**
   * Autofocus or not.
   */
  autoFocus?: boolean;

  /**
   * Empty message to show when there are no items.
   */
  emptyMessage?: string;

  /**
   * Icon to show in the search input.
   */
  inputIcon?: ReactNode;

  /**
   * When the search input value changes.
   */
  onSearchChange?: (value: string) => void;

  /**
   * When a user picks something from the list.
   */
  onSelectedIndexChange?: (value: number) => void;

  /**
   * When a hotkey was triggered.
   */
  onHotkey?: (hotkey: HotkeyIem) => void;

  /**
   * Theme for the CommandPalette.
   */
  theme?: CommandPaletteTheme;
}

export const CommandPalette: FC<CommandPaletteProps> = ({
  search,
  placeholder,
  children,
  inputIcon,
  autoFocus = true,
  emptyMessage,
  onHotkey,
  onSelectedIndexChange,
  onSearchChange,
  theme: customTheme
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [filterText, setFilterText] = useState<string>(search);
  const { flattenedTree, itemsRef, hotkeys } = useFlattenedTree(
    children,
    selectedIndex,
    onSelectedIndexChange
  );
  const hasChildren = Children.count(children) > 0;
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      setSelectedIndex(prev => Math.max(prev - 1, -1));
    } else if (event.key === 'ArrowDown') {
      setSelectedIndex(prev => Math.min(prev + 1, itemsRef.current.length - 1));
    } else if (event.key === 'Enter' && itemsRef.current[selectedIndex]) {
      onSelectedIndexChange?.(selectedIndex);
      setSelectedIndex(-1);
    }
  };

  useEffect(() => {
    if (selectedIndex > -1) {
      elementRef.current
        .querySelector(`[${DATA_ATTRIBUTE_INDEX}="${selectedIndex}"]`)
        ?.scrollIntoView();
    }
  }, [selectedIndex, flattenedTree]);

  const theme: CommandPaletteTheme = useComponentTheme(
    'commandPalette',
    customTheme
  );

  return (
    <Card className={theme.base} disablePadding ref={elementRef}>
      <CommandPaletteInput
        value={filterText}
        placeholder={placeholder}
        autoFocus={autoFocus}
        icon={inputIcon}
        hotkeys={hotkeys}
        onHotkey={onHotkey}
        onChange={val => {
          setFilterText(val);
          onSearchChange?.(val);
        }}
        onKeyPress={handleKeyDown}
        onBlur={() => setSelectedIndex(-1)}
      />
      <MotionGroup>
        {hasChildren && (
          <Card className={theme.inner} disablePadding>
            <List>{flattenedTree}</List>
          </Card>
        )}
        {!hasChildren && emptyMessage && (
          <List className={theme.emptyContainer}>
            <ListItem>{emptyMessage}</ListItem>
          </List>
        )}
      </MotionGroup>
    </Card>
  );
};
