import React, { FC } from 'react';
import { SelectOptionProps } from '@/form/Select/SelectOption';
import ellipsize from 'ellipsize';
import { CloseIcon } from '@/form/Select/icons';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { SelectTheme } from '@/form/Select/SelectTheme';

export interface SelectInputChipProps {
  option: SelectOptionProps;
  maxLength?: number;
  className?: string;
  disabled?: boolean;
  clearable?: boolean;
  theme?: SelectTheme;
  closeIcon?: React.ReactNode;
  onTagKeyDown: (
    event: React.KeyboardEvent<HTMLSpanElement>,
    option: SelectOptionProps
  ) => void;
  onSelectedChange: (option: SelectOptionProps) => void;
}

export const SelectInputChip: FC<Partial<SelectInputChipProps>> = ({
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
