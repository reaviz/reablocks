import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import Fuse from 'fuse.js';
import {
  ConnectedOverlay,
  ConnectedOverlayContentRef,
  Placement
} from '@/utils';
import { CloneElement, useId } from '@/utils';
import { SelectInput, SelectInputProps, SelectInputRef } from './SelectInput';
import { SelectMenu, SelectMenuProps } from './SelectMenu';
import { SelectOptionProps, SelectValue } from './SelectOption';
import { useFuzzy } from '@reaviz/react-use-fuzzy';
import { createOptions, getGroups, useWidth, keyNameToCode } from './utils';
import isEqual from 'react-fast-compare';

export interface SelectProps {
  /**
   * The id of the select.
   */
  id?: string;

  /**
   * The form name of the select.
   */
  name?: string;

  /**
   * Additional CSS style attributes to apply to the select.
   */
  style?: React.CSSProperties;

  /**
   * Additional class names to apply to the select.
   */
  className?: string;

  /**
   * Additional class names to apply to the select when the
   * menu is open
   */
  activeClassName?: string;

  /**
   * Set the select to disabled state.
   */
  disabled?: boolean;

  /**
   * Auto focus the select on render.
   */
  autoFocus?: boolean;

  /**
   * Close the select after you select an option.
   */
  closeOnSelect?: boolean;

  /**
   * The value of the select.
   */
  value?: string | string[];

  /**
   * The deafult value of the input filter.
   */
  defaultFilterValue?: string;

  /**
   * Whether the select is required or not.
   */
  required?: boolean;

  /**
   * Whether the select is multi or single select.
   */
  multiple?: boolean;

  /**
   * Default placeholder text.
   */
  placeholder?: string;

  /**
   * Whether you can filter the select options.
   */
  filterable?: boolean;

  /**
   * Whether you can clear the select after selection.
   */
  clearable?: boolean;

  /**
   * Whether you can use the Tab key to select the current active option.
   */
  tabToSelect?: boolean;

  /**
   * Whether the select is in loading state or not.
   */
  loading?: boolean;

  /**
   * Whether you can refresh the async values or not.
   */
  refreshable?: boolean;

  /**
   * Whether you can create new options or not.
   */
  createable?: boolean;

  /**
   * Select options when paste text inside input.
   */
  selectOnPaste?: boolean;

  /**
   * The list of KeyCodes for creating select values.
   * The default is ['Enter']
   * Typical options would be: ['Enter', 'Tab', 'Space', 'Comma']
   */
  selectOnKeys?: string[];

  /**
   * The options of the select.
   */
  children?: any;

  /**
   * Whether the select has an error state or not.
   */
  error?: boolean;

  /**
   * The placement options for the menu.
   */
  menuPlacement?: Placement;

  /**
   * Whether the menu is disabled or not.
   */
  menuDisabled?: boolean;

  /**
   * The size of the select.
   */
  size?: 'small' | 'medium' | 'large' | string;

  /**
   * When the input receives a key down event.
   */
  onInputKeydown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  /**
   * When the input receives a key up event.
   */
  onInputKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  /**
   * When the select was focused.
   */
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement>
  ) => void;

  /**
   * When the select was blurred.
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * When the select input value changed.
   */
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * When the user manually refreshed the options.
   */
  onRefresh?: () => void;

  /**
   * When the value changes.
   */
  onChange?: (value) => void;

  /**
   * When a new option is added or removed.
   */
  onOptionsChange?: (options: SelectOptionProps[]) => void;

  /**
   * Input override component.
   */
  input?: ReactElement<SelectInputProps, typeof SelectInput>;

  /**
   * Menu component override.
   */
  menu?: ReactElement<SelectMenuProps, typeof SelectMenu>;

  /**
   * The options for the Fuse.js search algorithm.
   */
  searchOptions?: Fuse.IFuseOptions<SelectOptionProps>;

  /**
   * When menu is opened
   */
  onOpenMenu?: () => void;

  /**
   * When menu is closed
   */
  onCloseMenu?: () => void;
}

export const Select: FC<SelectProps> = ({
  id,
  name,
  autoFocus,
  clearable = true,
  tabToSelect,
  filterable = true,
  menuPlacement = 'bottom-start',
  closeOnSelect = true,
  menuDisabled = false,
  refreshable = false,
  placeholder,
  disabled,
  createable,
  selectOnPaste,
  selectOnKeys = ['Enter'],
  loading,
  multiple,
  error,
  className,
  activeClassName,
  children,
  value,
  defaultFilterValue,
  required,
  size = 'medium',
  input = <SelectInput />,
  menu = <SelectMenu />,
  onRefresh,
  onChange,
  onBlur: onInputBlur,
  onFocus: onInputFocus,
  onInputKeydown,
  onInputKeyUp,
  onOptionsChange,
  onInputChange,
  searchOptions,
  onOpenMenu,
  onCloseMenu
}) => {
  const overlayRef = useRef<ConnectedOverlayContentRef | null>(null);
  const inputRef = useRef<SelectInputRef | null>(null);
  const [internalValue, setInternalValue] = useState<string | string[] | null>(
    value
  );
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  const internalId = useId(id);
  const [menuWidth, updateMenuWidth] = useWidth(
    inputRef.current?.containerRef,
    overlayRef
  );
  const [options, setOptions] = useState<SelectOptionProps[]>(
    createOptions(children)
  );

  useEffect(() => {
    const opts = createOptions(children);
    if (!isEqual(opts, options)) {
      setOptions(opts);
    }
  }, [children, options]);

  const { result, keyword, search, resetSearch } = useFuzzy<SelectOptionProps>(
    options,
    {
      keys: ['children', 'group'],
      ...searchOptions,
      getFn: menuDisabled ? () => '' : searchOptions?.getFn
    }
  );

  // If a keyword is used to filter options, automatically
  // highlight the first option for easy selection
  useEffect(() => {
    if (keyword && keyword.length > 0) {
      if (index === -1 || !result[index]) {
        setIndex(0);
      }
    }
  }, [keyword, index, setIndex, result]);

  useEffect(() => {
    // Run only on initial render
    if (!value && defaultFilterValue) {
      search(defaultFilterValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const groups = useMemo(() => getGroups(result), [result]);

  const selectedOption: SelectValue = useMemo(() => {
    if (multiple) {
      if (internalValue || internalValue === '') {
        return options.filter(o =>
          (internalValue as string[]).includes(o.value)
        );
      }

      return [];
    } else if (internalValue || internalValue === '') {
      return options.find(o => o.value === internalValue);
    }

    return null;
  }, [options, multiple, internalValue]);

  useLayoutEffect(() => {
    updateMenuWidth();
    overlayRef?.current?.updatePosition();
  }, [internalValue, updateMenuWidth]);

  useEffect(() => {
    // This is needed to allow a select to have a
    // starting variable that is set from state
    if (!isEqual(value, internalValue)) {
      setInternalValue(value);
    }
  }, [value, internalValue]);

  useEffect(() => {
    if (internalValue && createable) {
      if (multiple) {
        for (const v of internalValue) {
          const newOptions = [];

          const has = options.find(o => o.value === v);
          if (!has) {
            newOptions.push({
              children: v,
              value: v
            });
          }

          if (newOptions.length) {
            const updatedOptions = [...options, ...newOptions];

            onOptionsChange?.(updatedOptions);
          }
        }
      } else {
        const has = options.find(o => o.value === internalValue);
        if (!has) {
          const updatedOptions = [
            ...options,
            {
              children: internalValue,
              value: internalValue
            }
          ];

          onOptionsChange?.(updatedOptions);
        }
      }
    }
  }, [createable, internalValue, multiple, options, onOptionsChange]);

  const resetInput = useCallback(() => {
    setIndex(-1);
    resetSearch();
  }, [resetSearch]);

  const resetSelect = useCallback(() => {
    setOpen(false);
    resetInput();
  }, [resetInput]);

  const onArrowUpKeyUp = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      event.preventDefault();
      setIndex(Math.max(index - 1, -1));
    },
    [index]
  );

  const onArrowDownKeyUp = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      event.preventDefault();
      setIndex(Math.min(index + 1, groups.itemsCount - 1));
    },
    [groups.itemsCount, index]
  );

  const onInputFocused = useCallback(
    (
      event:
        | React.FocusEvent<HTMLInputElement>
        | React.MouseEvent<HTMLDivElement>
    ) => {
      if (!disabled && !menuDisabled) {
        setOpen(true);
      }

      onInputFocus?.(event);
    },
    [disabled, menuDisabled, onInputFocus]
  );

  const onInputExpanded = useCallback(
    (event: React.MouseEvent<Element>) => {
      event.stopPropagation();

      if (!disabled && !menuDisabled) {
        setOpen(!open);
      }
    },
    [disabled, menuDisabled, open]
  );

  const onInputChanged = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      search(value);
      onInputChange?.(event);
    },
    [onInputChange, search]
  );

  const toggleSelectedMultiOption = useCallback(
    (selections: SelectOptionProps | SelectOptionProps[]) => {
      const newOptions: SelectOptionProps[] = [];
      let newSelectedOptions = selectedOption as SelectOptionProps[];

      if (!selections) {
        newSelectedOptions = [];
      } else {
        if (!Array.isArray(selections)) {
          selections = [selections];
        }

        for (const next of selections) {
          const hasOption = options.find(o => o.value === next.value);
          const has = (internalValue || []).includes(next.value);
          if (has) {
            newSelectedOptions = newSelectedOptions.filter(
              o => o.value !== next.value
            );
          } else {
            newSelectedOptions = [...newSelectedOptions, next];
          }

          if (!hasOption && createable) {
            newOptions.push(next);
          }
        }
      }

      return {
        newValue: newSelectedOptions.map(o => o.value),
        newSelectedOptions,
        newOptions
      };
    },
    [createable, internalValue, options, selectedOption]
  );

  const toggleSelectedOption = useCallback(
    (option: SelectValue) => {
      let newValue: string | string[] | null;

      if (multiple) {
        const result = toggleSelectedMultiOption(option);
        newValue = result.newValue;
        if (result.newOptions?.length) {
          onOptionsChange?.([...options, ...result.newOptions]);
        }

        if (closeOnSelect) {
          setOpen(false);
        }
      } else {
        const singleOption = option as SelectOptionProps;
        const hasOption = options.find(o => o.value === singleOption?.value);
        newValue = singleOption?.value;
        const hasValue = newValue !== undefined && newValue !== null;

        if (createable && !hasOption && hasValue) {
          onOptionsChange?.([...options, singleOption]);
        }

        if (closeOnSelect && hasOption) {
          setOpen(false);
        }
      }

      setInternalValue(newValue);

      // keep current index if allowing multiple selections
      // unless a search keyword was used to select
      if (!multiple || keyword) {
        resetInput();
      }
      onChange?.(newValue);
    },
    [
      keyword,
      closeOnSelect,
      createable,
      multiple,
      onChange,
      onOptionsChange,
      options,
      resetInput,
      toggleSelectedMultiOption
    ]
  );

  const onAddSelection = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const inputElement = event.target as HTMLInputElement;
      let inputValue = inputElement.value.trim();
      // Remove the last character if it is a valuesSplitterKeyCode
      inputValue =
        inputValue.charAt(inputValue.length - 1) === event.key
          ? inputValue.slice(0, -1)
          : inputValue;

      if (index === -1 && createable && !inputValue) {
        return;
      }

      if (index > -1 || createable) {
        let newSelection;

        const hasSelection = index > -1 && result[index];
        if (createable && !hasSelection) {
          newSelection = {
            value: inputValue,
            children: inputValue
          };
        } else {
          newSelection = result[index];
        }
        // Add new item if menu not disabled or item not presents in the list otherwise just clear input
        if (
          newSelection &&
          (!menuDisabled || !value.includes(newSelection.value))
        ) {
          toggleSelectedOption(newSelection);
        } else if (menuDisabled && value.includes(newSelection.value)) {
          resetInput();
        }
      }
    },
    [
      createable,
      index,
      menuDisabled,
      resetInput,
      result,
      toggleSelectedOption,
      value
    ]
  );

  const onTabKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const inputElement = event.target as HTMLInputElement;
      const inputValue = inputElement.value.trim();

      if (event.shiftKey) {
        setOpen(false);
        return;
      }

      if (index > -1 || (createable && inputValue)) {
        onAddSelection(event);
      }

      if (multiple) {
        event.preventDefault();
      } else {
        setOpen(false);
      }
    },
    [index, onAddSelection, setOpen, multiple, createable]
  );

  const onInputKeyedUp = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const key = event.code;

      if (key === 'ArrowUp') {
        onArrowUpKeyUp(event);
      } else if (key === 'ArrowDown') {
        onArrowDownKeyUp(event);
      } else if (key === 'Escape') {
        resetSelect();
      } else if (selectOnKeys?.includes(key)) {
        onAddSelection(event);
      }

      onInputKeyUp?.(event);
    },
    [
      selectOnKeys,
      onInputKeyUp,
      onArrowUpKeyUp,
      onArrowDownKeyUp,
      resetSelect,
      onAddSelection
    ]
  );

  const onInputKeyedDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const key = event.key;
      if (key === 'Tab') {
        if (tabToSelect) {
          onTabKeyDown(event);
        } else {
          setOpen(false);
        }
      }

      onInputKeydown?.(event);
    },
    [onInputKeydown, onTabKeyDown, tabToSelect]
  );

  const onInputBlured = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      const inputElement = event.target as HTMLInputElement;
      const inputValue = inputElement.value.trim();
      if (menuDisabled && createable && inputValue) {
        const newSelection = {
          value: inputValue,
          children: inputValue
        };

        toggleSelectedOption(newSelection);
      }

      onInputBlur?.(event);
    },
    [createable, menuDisabled, onInputBlur, toggleSelectedOption]
  );

  const onPasteHandler = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      if (selectOnPaste) {
        const inputElement = e.target as HTMLInputElement;
        const inputValue = inputElement.value;
        const clipboardValue = e.clipboardData.getData('Text');
        const value = `${inputValue}${clipboardValue}`.trim();

        if (multiple) {
          const separators = selectOnKeys?.map(key =>
            String.fromCharCode(keyNameToCode[key])
          );
          const expression = `[${separators}]`;
          const regex = new RegExp(expression, 'g');
          const items = value.split(regex);
          const result = toggleSelectedMultiOption(
            items.map(item => ({ value: item, children: item }))
          );
          const optionsToSelect = createable
            ? result.newOptions
            : result.newSelectedOptions;
          if (result.newOptions?.length) {
            onOptionsChange?.([...options, ...optionsToSelect]);
          }
          setInternalValue(result.newValue);
          onChange?.(result.newValue);
        } else {
          toggleSelectedOption({ value: value, children: value });
          setInternalValue(value);
          onChange?.(value);
        }

        resetInput();
        e.preventDefault();
      }
    },
    [
      createable,
      selectOnPaste,
      multiple,
      onChange,
      onOptionsChange,
      options,
      resetInput,
      selectOnKeys,
      toggleSelectedMultiOption,
      toggleSelectedOption
    ]
  );

  const onMenuSelectedChange = useCallback(
    (option: SelectValue) => {
      toggleSelectedOption(option);

      if (closeOnSelect) {
        setOpen(false);
      } else {
        inputRef.current?.focus();
      }
    },
    [closeOnSelect, toggleSelectedOption]
  );

  const onOverlayClose = useCallback(() => {
    const inputValue = keyword.trim();
    if (createable && inputValue) {
      const newSelection = {
        value: inputValue,
        children: inputValue
      };

      toggleSelectedOption(newSelection);
    }

    resetSelect();
    onCloseMenu?.();
  }, [createable, keyword, onCloseMenu, resetSelect, toggleSelectedOption]);

  return (
    <ConnectedOverlay
      open={open}
      closeOnBodyClick={true}
      closeOnEscape={true}
      appendToBody={true}
      placement={menuPlacement}
      reference={inputRef?.current?.containerRef}
      ref={overlayRef}
      onClose={onOverlayClose}
      onOpen={onOpenMenu}
      content={() => (
        <CloneElement<SelectMenuProps>
          element={menu}
          id={`${internalId}-menu`}
          style={{ width: menuWidth }}
          selectedOption={selectedOption}
          createable={createable}
          disabled={disabled}
          options={result}
          groups={groups}
          index={index}
          multiple={multiple}
          inputSearchText={keyword}
          loading={loading}
          filterable={filterable}
          size={size}
          onSelectedChange={onMenuSelectedChange}
        />
      )}
    >
      <CloneElement<SelectInputProps>
        element={input}
        id={`${internalId}-input`}
        name={name}
        disabled={disabled}
        reference={inputRef}
        menuOpen={open}
        autoFocus={autoFocus}
        options={options}
        error={error}
        closeOnSelect={closeOnSelect}
        inputText={keyword}
        multiple={multiple}
        createable={createable}
        filterable={filterable}
        refreshable={refreshable}
        className={className}
        activeClassName={activeClassName}
        required={required}
        loading={loading}
        placeholder={placeholder}
        selectedOption={selectedOption}
        clearable={clearable}
        menuDisabled={menuDisabled}
        size={size}
        onSelectedChange={toggleSelectedOption}
        onExpandClick={onInputExpanded}
        onKeyDown={onInputKeyedDown}
        onKeyUp={onInputKeyedUp}
        onInputChange={onInputChanged}
        onBlur={onInputBlured}
        onFocus={onInputFocused}
        onRefresh={onRefresh}
        onPaste={onPasteHandler}
      />
    </ConnectedOverlay>
  );
};
