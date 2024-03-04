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
import { SelectOptionProps, SelectValue } from '../SelectOption';
import { InlineInput } from '../../Input';
import { DownArrowIcon } from '../icons/DownArrowIcon';
import { CloseIcon } from '../icons/CloseIcon';
import { DotsLoader } from '../../../elements/Loader/DotsLoader';
import { RefreshIcon } from '../icons/RefreshIcon';
import { SelectInputChip, SelectInputChipProps } from './SelectInputChip';
import { CloneElement } from 'rdk';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '../../../utils/Theme/TW';
import { SelectTheme } from '../SelectTheme';

export interface SelectInputProps {
  id?: string;
  name?: string;
  required?: boolean;
  options: SelectOptionProps[];
  disabled?: boolean;
  menuOpen?: boolean;
  fontSize?: string | number;
  inputText: string;
  closeOnSelect?: boolean;
  selectedOption?: SelectOptionProps | SelectOptionProps[];
  autoFocus?: boolean;
  className?: string;
  activeClassName?: string;
  createable?: boolean;
  filterable?: boolean;
  multiple?: boolean;
  loading?: boolean;
  reference?: Ref<SelectInputRef>;
  placeholder?: string;
  error?: boolean;
  clearable?: boolean;
  refreshable?: boolean;
  menuDisabled?: boolean;

  closeIcon?: React.ReactNode;
  refreshIcon?: React.ReactNode;
  expandIcon?: React.ReactNode;
  loadingIcon?: React.ReactNode;

  chip?: ReactElement<SelectInputChipProps, typeof SelectInputChip>;

  onSelectedChange: (option: SelectValue) => void;
  onExpandClick: (event: React.MouseEvent<Element>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus: (
    event: React.FocusEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement>
  ) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  fontSize,
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
  refreshIcon,
  closeIcon,
  expandIcon,
  loadingIcon,
  closeOnSelect,
  onSelectedChange,
  onKeyDown,
  onKeyUp,
  onExpandClick,
  onInputChange,
  onFocus,
  onBlur,
  onRefresh,
  chip
}) => {
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
            className={twMerge(theme.selectInput?.prefix, 'select-input-value')}
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
            className={twMerge(theme.selectInput?.prefix, 'select-input-value')}
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
    selectedOption
  ]);

  const theme = useComponentTheme('select') as SelectTheme;

  return (
    <div
      ref={containerRef}
      className={twMerge(
        theme.selectInput?.base,
        disabled && theme.selectInput?.disabled,
        !filterable && theme.selectInput?.unfilterable,
        error && theme.selectInput?.unfilterable,
        !multiple && theme.selectInput?.single,
        multiple && theme.selectInput?.multiple,
        ...(menuOpen ? [activeClassName, theme.selectInput?.open] : []),
        className
      )}
      onClick={onContainerClick}
    >
      <div className={theme.selectInput?.inputContainer} onClick={onInputFocus}>
        {renderPrefix()}
        <InlineInput
          inputRef={el => (inputRef.current = el)}
          id={id}
          style={{ fontSize }}
          name={name}
          disabled={disabled}
          required={required}
          autoFocus={autoFocus}
          placeholder={placeholderText}
          inputClassName={twMerge(
            theme.selectInput?.input,
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
          placeholderIsMinWidth={false}
        />
      </div>
      <div className={theme.selectInput?.suffix?.container}>
        {refreshable && !loading && (
          <button
            type="button"
            title="Refresh Options"
            disabled={disabled}
            className={twMerge(
              theme.selectInput?.suffix?.button,
              theme.selectInput?.suffix?.refresh,
              'select-input-refresh'
            )}
            onClick={onRefresh}
          >
            {refreshIcon}
          </button>
        )}
        {loading && (
          <div className={theme.selectInput?.suffix?.loader}>{loadingIcon}</div>
        )}
        {showClear && (
          <button
            type="button"
            title="Clear selection"
            disabled={disabled}
            className={twMerge(
              theme.selectInput.suffix.button,
              theme.selectInput?.suffix?.close,
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
              theme.selectInput?.suffix?.button,
              theme.selectInput?.suffix?.expand,
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

SelectInput.defaultProps = {
  fontSize: 13,
  expandIcon: <DownArrowIcon />,
  closeIcon: <CloseIcon />,
  refreshIcon: <RefreshIcon />,
  loadingIcon: <DotsLoader size="small" />,
  chip: <SelectInputChip />
};
