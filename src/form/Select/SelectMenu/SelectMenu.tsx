import React, { FC, Fragment, useCallback } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { SelectOptionProps, SelectValue } from '../SelectOption';
import Highlighter from 'react-highlight-words';
import { GroupOptions, GroupOption } from '../utils';
import css from './SelectMenu.module.css';

export interface SelectMenuProps {
  id?: string;
  options: SelectOptionProps[];
  selectedOption?: SelectOptionProps | SelectOptionProps[];
  style?: React.CSSProperties;
  disabled?: boolean;
  groups?: GroupOptions;
  createable?: boolean;
  className?: string;
  multiple?: boolean;
  index: number;
  inputSearchText: string;
  filterable?: boolean;
  loading?: boolean;
  onSelectedChange: (option: SelectValue) => void;
}

export const SelectMenu: FC<Partial<SelectMenuProps>> = ({
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
  onSelectedChange
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

  const renderListItems = useCallback(
    (items: SelectOptionProps[], group?: GroupOption) =>
      items.map((o, i) => (
        <li
          key={`${group?.name}-${o.value}`}
          className={classNames(css.option, 'reaselct-menu-item', {
            [css.selected]: checkOptionSelected(o),
            [css.active]: index === i + (group?.offset || 0),
            [css.diabled]: disabled || o.disabled
          })}
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
        </li>
      )),
    [checkOptionSelected, disabled, index, inputSearchText, onSelectedChange]
  );

  return (
    <motion.div
      style={style}
      className={classNames(css.menu, className, 'reaselct-menu')}
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
      <ul>
        {options?.length === 0 && createable && trimmedText && !loading && (
          <li
            className="reaselct-menu-create-option"
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
          </li>
        )}
        {options?.length === 0 &&
          !createable &&
          filterable &&
          trimmedText &&
          !loading && (
            <li className="reaselct-menu-empty-search">
              No option(s) for &quot;{trimmedText}&quot;
            </li>
          )}
        {options?.length === 0 &&
          !createable &&
          filterable &&
          !trimmedText &&
          !loading && (
            <li className="reaselct-menu-empty">No option(s) available</li>
          )}
        {groups.hasGroups
          ? groups.groups.map(g => (
              <Fragment key={g.name}>
                {g.name === 'undefined' ? (
                  renderListItems(g.items, g)
                ) : (
                  <li
                    className={classNames(css.groupItem, 'reaselct-menu-group')}
                  >
                    <h3 className="reaselct-menu-group-header">{g.name}</h3>
                    <ul>{renderListItems(g.items, g)}</ul>
                  </li>
                )}
              </Fragment>
            ))
          : renderListItems(options)}
      </ul>
    </motion.div>
  );
};
