import React, {
  FC,
  ReactElement,
  Ref,
  RefObject,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef
} from 'react';
import { SelectOptionProps, SelectValue } from '@/form/Select/SelectOption';
import { InlineInput } from '@/form/Input';
import { DownArrowIcon } from '@/form/Select/icons/DownArrowIcon';
import { CloseIcon } from '@/form/Select/icons/CloseIcon';
import { DotsLoader } from '@/elements/Loader/DotsLoader';
import { RefreshIcon } from '@/form/Select/icons/RefreshIcon';
import { SelectInputChip, SelectInputChipProps } from './SelectInputChip';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { SelectTheme } from '@/form/Select/SelectTheme';
import { CloneElement } from '@/utils';

export interface SelectInputProps {
  /**
   * The id of the select input.
   */
  id?: string;

  /**
   * The name of the select input.
   */
  name?: string;

  /**
   * If true, the select input is required.
   */
  required?: boolean;

  /**
   * The options for the select input.
   */
  options: SelectOptionProps[];

  /**
   * If true, the select input is disabled.
   */
  disabled?: boolean;

  /**
   * If true, the select input menu is open.
   */
  menuOpen?: boolean;

  /**
   * The input text of the select input.
   */
  inputText: string;

  /**
   * If true, the select input will close on select.
   */
  closeOnSelect?: boolean;

  /**
   * The selected option of the select input.
   */
  selectedOption?: SelectOptionProps | SelectOptionProps[];

  /**
   * If true, the select input will auto focus.
   */
  autoFocus?: boolean;

  /**
   * The class name of the select input.
   */
  className?: string;

  /**
   * The active class name of the select input.
   */
  activeClassName?: string;

  /**
   * If true, the select input is createable.
   */
  createable?: boolean;

  /**
   * If true, the select input is filterable.
   */
  filterable?: boolean;

  /**
   * If true, the select input allows multiple selection.
   */
  multiple?: boolean;

  /**
   * If true, the select input is loading.
   */
  loading?: boolean;

  /**
   * The reference of the select input.
   */
  reference?: Ref<SelectInputRef>;

  /**
   * The placeholder of the select input.
   */
  placeholder?: string;

  /**
   * If true, the select input has an error.
   */
  error?: boolean;

  /**
   * If true, the select input is clearable.
   */
  clearable?: boolean;

  /**
   * If true, the select input is refreshable.
   */
  refreshable?: boolean;

  /**
   * If true, the select input menu is disabled.
   */
  menuDisabled?: boolean;

  /**
   * The theme of the select input.
   */
  theme?: SelectTheme;

  /**
   * The close icon of the select input.
   */
  closeIcon?: React.ReactNode;

  /**
   * The refresh icon of the select input.
   */
  refreshIcon?: React.ReactNode;

  /**
   * The expand icon of the select input.
   */
  expandIcon?: React.ReactNode;

  /**
   * The loading icon of the select input.
   */
  loadingIcon?: React.ReactNode;

  /**
   * The chip of the select input.
   */
  chip?: ReactElement<SelectInputChipProps, typeof SelectInputChip>;

  /**
   * The function to handle selected change.
   */
  onSelectedChange: (option: SelectValue) => void;

  /**
   * The function to handle expand click.
   */
  onExpandClick: (event: React.MouseEvent<Element>) => void;

  /**
   * The function to handle key down.
   */
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  /**
   * The function to handle key up.
   */
  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  /**
   * The function to handle focus.
   */
  onFocus: (
    event: React.FocusEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement>
  ) => void;

  /**
   * The function to handle blur.
   */
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * The function to handle input change.
   */
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * The function to handle input paste event.
   */
  onPaste: (event: React.ClipboardEvent<HTMLInputElement>) => void;

  /**
   * The function to handle refresh.
   */
  onRefresh?: () => void;
}

export interface SelectInputRef {
  inputRef: RefObject<HTMLInputElement>;
  containerRef: RefObject<HTMLDivElement>;
  focus: () => void;
}

const horiztonalArrowKeys = ['ArrowLeft', 'ArrowRight'];
const verticalArrowKeys = ['ArrowUp', 'ArrowDown'];
const actionKeys = [...verticalArrowKeys, 'Enter', 'Escape'];

export const SelectInput: FC<Partial<SelectInputProps>> = ({
  reference,
  autoFocus,
  selectedOption,
  disabled,
  placeholder,
  filterable,
  id,
  name,
  className,
  activeClassName,
  inputText,
  required,
  loading,
  clearable,
  multiple,
  refreshable,
  error,
  menuDisabled,
  menuOpen,
  refreshIcon = <RefreshIcon />,
  closeIcon = <CloseIcon />,
  expandIcon = <DownArrowIcon />,
  loadingIcon = <DotsLoader size="small" />,
  closeOnSelect,
  onSelectedChange,
  onKeyDown,
  onKeyUp,
  onExpandClick,
  onInputChange,
  onFocus,
  onBlur,
  onRefresh,
  onPaste,
  chip = <SelectInputChip />,
  theme: customTheme
}) => {
  const { selectInput: theme }: SelectTheme = useComponentTheme(
    'select',
    customTheme
  );
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<any | null>(null);

  const hasValue =
    (multiple && (selectedOption as SelectOptionProps[])?.length > 0) ||
    (!multiple && selectedOption);

  const placeholderText = hasValue ? '' : placeholder;
  const showClear = clearable && !disabled && hasValue;

  useImperativeHandle(reference, () => ({
    containerRef,
    inputRef,
    focus: () => focusInput()
  }));

  const inputTextValue = useMemo(() => {
    if (!inputText && hasValue) {
      if (!Array.isArray(selectedOption)) {
        const singleOption = selectedOption as SelectOptionProps;
        if (!singleOption.inputLabel) {
          return singleOption.children as string;
        }
      }
      return '';
    }

    return inputText;
  }, [hasValue, inputText, selectedOption]);

  const onClearValues = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      // Stop propogation to prevent closing the menu
      if (closeOnSelect) {
        event.stopPropagation();
      }
      onSelectedChange(null);
    },
    [onSelectedChange, closeOnSelect]
  );

  const focusInput = useCallback(() => {
    const input = inputRef.current;
    if (input) {
      if (input.value) {
        const len = input.value.length;
        // Handle dom settle
        setTimeout(() => input.setSelectionRange(len, len));
        input.focus();
      } else {
        input.focus();
      }
    }
  }, []);

  const onInputFocus = useCallback(
    (
      event:
        | React.FocusEvent<HTMLInputElement>
        | React.MouseEvent<HTMLDivElement>
    ) => {
      // On initial focus, move focus to the last character of the value
      if (!multiple && filterable && selectedOption) {
        // We are handling the selection ourself
        event.preventDefault();

        // Stop parent container click event from double firing
        event.stopPropagation();

        focusInput();
      }

      onFocus?.(event);
    },
    [filterable, focusInput, multiple, onFocus, selectedOption]
  );

  const onContainerClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled) {
        focusInput();
      }
    },
    [disabled, focusInput]
  );

  const removeLastValue = useCallback(() => {
    if (multiple) {
      const selectedOptions = selectedOption as SelectOptionProps[];
      onSelectedChange(selectedOptions[selectedOptions.length - 1]);
    } else {
      onSelectedChange(null);
    }
  }, [multiple, onSelectedChange, selectedOption]);

  const onInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const key = event.key;

      const isActionKey = actionKeys.includes(key);
      if (isActionKey) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (clearable && key === 'Backspace' && hasValue) {
        if (!multiple || (multiple && !inputText)) {
          event.preventDefault();
          event.stopPropagation();
          removeLastValue();
        }
      }

      onKeyDown?.(event);
    },
    [clearable, hasValue, inputText, multiple, onKeyDown, removeLastValue]
  );

  const onInputKeyUp = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const key = event.key;
      const isActionKey = actionKeys.includes(key);
      const isHorzKey = horiztonalArrowKeys.includes(key);

      if ((!filterable && !isActionKey) || isHorzKey) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        onKeyUp?.(event);
      }
    },
    [filterable, onKeyUp]
  );

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (filterable) {
        onInputChange(event);
      }
    },
    [filterable, onInputChange]
  );

  const onTagKeyDown = useCallback(
    (
      event: React.KeyboardEvent<HTMLSpanElement>,
      option: SelectOptionProps
    ) => {
      const key = event.key;
      if (key === 'Backspace' && !disabled && clearable) {
        onSelectedChange(option);
      }
    },
    [clearable, disabled, onSelectedChange]
  );

  const renderPrefix = useCallback(() => {
    if (multiple) {
      const multipleOptions = selectedOption as SelectOptionProps[];
      if (multipleOptions?.length) {
        return (
          <div
            className={twMerge(
              theme.prefix,
              multiple && theme.multiple?.prefix,
              'select-input-value'
            )}
          >
            {multipleOptions.map(option => (
              <CloneElement<SelectInputChipProps>
                element={chip}
                key={option.value}
                option={option}
                clearable={clearable}
                disabled={disabled}
                closeIcon={closeIcon}
                onSelectedChange={onSelectedChange}
                onTagKeyDown={onTagKeyDown}
              />
            ))}
          </div>
        );
      }
    } else {
      const singleOption = selectedOption as SelectOptionProps;
      if (singleOption?.inputLabel && !inputText) {
        return (
          <div
            className={twMerge(
              theme.prefix,
              theme.single?.prefix,
              'select-input-value'
            )}
          >
            {singleOption?.inputLabel}
          </div>
        );
      }
    }

    return null;
  }, [
    chip,
    clearable,
    closeIcon,
    disabled,
    inputText,
    multiple,
    onSelectedChange,
    onTagKeyDown,
    selectedOption,
    theme.multiple,
    theme.prefix,
    theme.single
  ]);

  return (
    <div
      ref={containerRef}
      className={twMerge(
        theme.base,
        disabled && theme.disabled,
        !filterable && theme.unfilterable,
        error && theme.error,
        ...(menuOpen ? [activeClassName, theme.open] : []),
        className
      )}
      onClick={onContainerClick}
    >
      <div
        className={twMerge(
          theme.inputContainer,
          multiple && theme.multiple?.inputContainer,
          !multiple && theme.single?.inputContainer
        )}
        onClick={onInputFocus}
      >
        {renderPrefix()}
        <InlineInput
          ref={inputRef}
          id={id}
          name={name}
          disabled={disabled}
          required={required}
          autoFocus={autoFocus}
          placeholder={placeholderText}
          inputClassName={twMerge(
            theme.input,
            theme.placeholder,
            'select-input-input'
          )}
          value={inputTextValue}
          autoCorrect="off"
          spellCheck="false"
          autoComplete="off"
          onKeyDown={onInputKeyDown}
          onKeyUp={onInputKeyUp}
          onChange={onChange}
          onFocus={onInputFocus}
          onBlur={onBlur}
          onPaste={onPaste}
          placeholderIsMinWidth={false}
        />
      </div>
      <div className={theme.suffix?.container}>
        {refreshable && !loading && (
          <button
            type="button"
            title="Refresh Options"
            disabled={disabled}
            className={twMerge(
              theme.suffix?.button,
              theme.suffix?.refresh,
              'select-input-refresh'
            )}
            onClick={onRefresh}
          >
            {refreshIcon}
          </button>
        )}
        {loading && <div className={theme.suffix?.loader}>{loadingIcon}</div>}
        {showClear && (
          <button
            type="button"
            title="Clear selection"
            disabled={disabled}
            className={twMerge(
              theme.suffix?.button,
              theme.suffix?.close,
              'select-input-clear'
            )}
            onClick={onClearValues}
          >
            {closeIcon}
          </button>
        )}
        {!menuDisabled && (
          <button
            type="button"
            title="Toggle options menu"
            disabled={disabled}
            className={twMerge(
              theme.suffix?.button,
              theme.suffix?.expand,
              'select-input-toggle'
            )}
            onClick={onExpandClick}
            tabIndex={-1}
          >
            {expandIcon}
          </button>
        )}
      </div>
    </div>
  );
};
