import ellipsize from 'ellipsize';
import type { FC } from 'react';
import React from 'react';

import { CloseIcon } from '@/form/Select/icons';
import type { SelectOptionProps } from '@/form/Select/SelectOption';
import type { SelectTheme } from '@/form/Select/SelectTheme';
import { twMerge } from '@/utils';
import { useComponentTheme } from '@/utils';

export interface SelectInputChipProps {
  /**
   * The option to render as a chip.
   */
  option?: SelectOptionProps;

  /**
   * The maximum length of the chip.
   */
  maxLength?: number;

  /**
   * Additional class names to apply to the chip.
   */
  className?: string;

  /**
   * Whether the chip is disabled or not.
   */
  disabled?: boolean;

  /**
   * Whether the chip is clearable or not.
   */
  clearable?: boolean;

  /**
   * Theme for the Select.
   */
  theme?: SelectTheme;

  /**
   * The close icon for the chip.
   */
  closeIcon?: React.ReactNode;

  /**
   * Callback for when a key is pressed on the chip.
   */
  onTagKeyDown?: (
    event: React.KeyboardEvent<HTMLSpanElement>,
    option: SelectOptionProps
  ) => void;

  /**
   * Callback for when the selected option changes.
   */
  onSelectedChange?: (option: SelectOptionProps) => void;
}

export const SelectInputChip: FC<SelectInputChipProps> = ({
  option,
  disabled,
  clearable,
  className,
  maxLength = 20,
  closeIcon = <CloseIcon />,
  onTagKeyDown,
  onSelectedChange,
  theme: customTheme
}) => {
  const origLabel = option.inputLabel || option.children;
  const label =
    typeof origLabel === 'string' ? ellipsize(origLabel, maxLength) : origLabel;

  const { selectInput: theme }: SelectTheme = useComponentTheme(
    'select',
    customTheme
  );

  return (
    <span
      className={twMerge(
        theme.chip.base,
        theme.chip.hover,
        theme.chip.focused,
        theme.chip.disabled,
        className,
        'select-input-chip'
      )}
      title={origLabel as string}
      tabIndex={-1}
      onKeyDown={event => onTagKeyDown(event, option)}
    >
      {label}
      {!disabled && clearable && (
        <button
          type="button"
          onClick={() => onSelectedChange(option)}
          className={twMerge(theme.chip.removeButton)}
        >
          {closeIcon}
        </button>
      )}
    </span>
  );
};
