import React, { FC, Fragment, useCallback } from 'react';
import { motion } from 'framer-motion';
import { SelectOptionProps, SelectValue } from '@/form/Select/SelectOption';
import Highlighter from 'react-highlight-words';
import { GroupOptions, GroupOption } from '@/form/Select/utils';
import { List, ListItem } from '@/layout';
import { useComponentTheme } from '@/utils';
import { SelectTheme } from '@/form/Select/SelectTheme';
import { twMerge } from 'tailwind-merge';

export interface SelectMenuProps {
  /**
   * The id of the select.
   */
  id?: string;

  /**
   * Options passed to the select.
   */
  options?: SelectOptionProps[];

  /**
   * The selected option(s).
   */
  selectedOption?: SelectOptionProps | SelectOptionProps[];

  /**
   * Additional CSS styles to apply to the select menu.
   */
  style?: React.CSSProperties;

  /**
   * Whether the menu is disabled or not.
   */
  disabled?: boolean;

  /**
   * The groups of options.
   */
  groups?: GroupOptions;

  /**
   * Whether users can create options or not.
   */
  createable?: boolean;

  /**
   * Additional class names to apply to the select menu.
   */
  className?: string;

  /**
   * Whether the menu can select multiples or not.
   */
  multiple?: boolean;

  /**
   * Internal active index of the keyboard position.
   */
  index?: number;

  /**
   * The input's search text to use for highlighting.
   */
  inputSearchText?: string;

  /**
   * Whether users can filter the options or not.
   */
  filterable?: boolean;

  /**
   * Whether the component is loading or not.
   */
  loading?: boolean;

  /**
   * Event fired when the selected option(s) change.
   */
  onSelectedChange?: (option: SelectValue) => void;

  /**
   * The theme for the Select.
   */
  theme?: SelectTheme;
}

export const SelectMenu: FC<SelectMenuProps> = ({
  style,
  disabled,
  createable,
  selectedOption,
  options,
  loading,
  className,
  index,
  filterable,
  groups,
  multiple,
  inputSearchText,
  onSelectedChange,
  theme: customTheme
}) => {
  const trimmedText = inputSearchText.trim();

  const checkOptionSelected = useCallback(
    (option: SelectOptionProps) => {
      if (multiple) {
        if (Array.isArray(selectedOption)) {
          return selectedOption.find(o => o.value === option.value);
        }

        return false;
      }

      return (selectedOption as SelectOptionProps)?.value === option.value;
    },
    [selectedOption, multiple]
  );

  const { selectMenu: theme }: SelectTheme = useComponentTheme(
    'select',
    customTheme
  );

  const renderListItems = useCallback(
    (items: SelectOptionProps[], group?: GroupOption) =>
      items.map((o, i) => (
        <ListItem
          key={`${group?.name}-${o.value}`}
          className={twMerge(
            theme.option?.base,
            theme.option?.hover,
            checkOptionSelected(o) && theme.option?.selected,
            index === i + (group?.offset || 0) && theme.option?.active,
            (disabled || o.disabled) && theme.option?.disabled
          )}
          onClick={event => {
            event.preventDefault();
            event.stopPropagation();
            onSelectedChange(o);
          }}
        >
          {o.menuLabel ? (
            o.menuLabel
          ) : (
            <Highlighter
              searchWords={[inputSearchText]}
              autoEscape={true}
              textToHighlight={o.children}
            />
          )}
        </ListItem>
      )),
    [
      checkOptionSelected,
      disabled,
      index,
      inputSearchText,
      onSelectedChange,
      theme.option
    ]
  );

  return (
    <motion.div
      style={style}
      className={twMerge(theme.base, className, 'select-menu')}
      initial={{
        opacity: 0,
        y: -20,
        pointerEvents: 'none'
      }}
      animate={{
        opacity: 1,
        y: 0,
        pointerEvents: 'auto',
        transition: {
          when: 'beforeChildren'
        }
      }}
      exit={{
        y: -14,
        opacity: 0,
        pointerEvents: 'none',
        transition: { duration: 0.3, ease: 'anticipate' }
      }}
    >
      <List>
        {options?.length === 0 && createable && trimmedText && !loading && (
          <ListItem
            className="select-menu-create-option"
            onClick={event => {
              event.preventDefault();
              event.stopPropagation();
              onSelectedChange({
                value: trimmedText.toLowerCase(),
                children: trimmedText.toLowerCase()
              });
            }}
          >
            Create option &quot;{trimmedText.toLowerCase()}&quot;
          </ListItem>
        )}
        {options?.length === 0 &&
          !createable &&
          filterable &&
          trimmedText &&
          !loading && (
            <ListItem className="select-menu-empty-search">
              No option(s) for &quot;{trimmedText}&quot;
            </ListItem>
          )}
        {options?.length === 0 &&
          !createable &&
          filterable &&
          !trimmedText &&
          !loading && (
            <ListItem className="select-menu-empty">
              No option(s) available
            </ListItem>
          )}
        {groups.hasGroups
          ? groups.groups.map(g => (
              <Fragment key={g.name}>
                {g.name === 'undefined' ? (
                  renderListItems(g.items, g)
                ) : (
                  <ListItem
                    className={twMerge(theme.groupItem, 'select-menu-group')}
                  >
                    <h3
                      className={twMerge(
                        theme.groupTitle,
                        'select-menu-group-header'
                      )}
                    >
                      {g.name}
                    </h3>
                    <List>{renderListItems(g.items, g)}</List>
                  </ListItem>
                )}
              </Fragment>
            ))
          : renderListItems(options)}
      </List>
    </motion.div>
  );
};
