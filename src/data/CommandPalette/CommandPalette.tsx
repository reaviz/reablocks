import {
  FC,
  useState,
  useRef,
  PropsWithChildren,
  useEffect,
  KeyboardEvent,
  Children,
  cloneElement,
  isValidElement
} from 'react';
import { CommandPaletteItem } from './CommandPaletteItem';
import { CommandPaletteInput } from './CommandPaletteInput';
import { useFlattenedTree } from './useFlattenedTree';
import { List, ListItem } from '../../layout/List';
import { Card } from '../../layout/Card';
import { MotionGroup } from '../../layout/Motion';
import css from './CommandPalette.module.css';

export interface CommandPaletteProps extends PropsWithChildren {
  search?: string;
  placeholder?: string;
  selected?: number;
  autoFocus?: boolean;
  emptyMessage?: string;
  onSearchChange?: (value: string) => void;
  onSelectedChange?: (value: number) => void;
}

export const CommandPalette: FC<CommandPaletteProps> = ({
  search,
  placeholder,
  children,
  autoFocus,
  emptyMessage
}) => {
  const [selectedItem, setSelectedItem] = useState<number>(-1);
  const [filterText, setFilterText] = useState<string>(search);
  const flattenedTree = useFlattenedTree(children);
  const itemsRef = useRef<HTMLElement[]>([]);
  const hasChildren = Children.count(children) > 0;

  // Handle keyboard events
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      setSelectedItem(prev => (prev > 0 ? prev - 1 : prev));
    } else if (event.key === 'ArrowDown') {
      setSelectedItem(prev =>
        prev < itemsRef.current.length - 1 ? prev + 1 : prev
      );
    } else if (event.key === 'Enter' && itemsRef.current[selectedItem]) {
      itemsRef.current[selectedItem]?.click();
    }
  };

  useEffect(() => {
    // Focus the selected item
    flattenedTree[selectedItem]?.ref.current?.focus();
  }, [selectedItem, flattenedTree]);

  return (
    <Card className={css.card} disablePadding>
      <CommandPaletteInput
        value={filterText}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={setFilterText}
        onKeyPress={handleKeyDown}
      />
      {hasChildren && (
        <Card className={css.innerCard}>
          <MotionGroup>
            <List>
              {Children.map(children, (child, index) => {
                if (
                  isValidElement(child) &&
                  child.type === CommandPaletteItem
                ) {
                  return cloneElement(child, {
                    ref: (el: HTMLElement) => (itemsRef.current[index] = el),
                    active: index === selectedItem ? 0 : -1
                  });
                }
                return child;
              })}
            </List>
          </MotionGroup>
        </Card>
      )}
      {!hasChildren && emptyMessage && (
        <List>
          <ListItem>{emptyMessage}</ListItem>
        </List>
      )}
    </Card>
  );
};

CommandPalette.defaultProps = {
  autoFocus: true
};
