import React, { FC } from 'react';
import { SelectOptionProps } from '../SelectOption';
import ellipsize from 'ellipsize';
import { CloseIcon } from '../icons/CloseIcon';
import css from './SelectInputChip.module.css';
import classNames from 'classnames';

export interface SelectInputChipProps {
  option: SelectOptionProps;
  maxLength?: number;
  className?: string;
  disabled?: boolean;
  clearable?: boolean;
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
  maxLength,
  closeIcon,
  onTagKeyDown,
  onSelectedChange
}) => {
  const origLabel = option.inputLabel || option.children;
  const label =
    typeof origLabel === 'string' ? ellipsize(origLabel, maxLength) : origLabel;

  return (
    <span
      className={classNames(css.tag, className, 'reaselct-input-chip')}
      title={origLabel as string}
      tabIndex={-1}
      onKeyDown={event => onTagKeyDown(event, option)}
    >
      {label}
      {!disabled && clearable && (
        <button type="button" onClick={() => onSelectedChange(option)}>
          {closeIcon}
        </button>
      )}
    </span>
  );
};

SelectInputChip.defaultProps = {
  closeIcon: <CloseIcon />,
  maxLength: 20
};
