import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { CheckboxTheme } from './CheckboxTheme';

interface CheckboxLabelProps {
  label: string;
  size: 'small' | 'medium' | 'large' | string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: () => void;
  labelClassName?: string;
  theme: CheckboxTheme;
}

export const CheckboxLabel: FC<CheckboxLabelProps> = ({
  label,
  size,
  disabled,
  checked,
  onChange,
  labelClassName,
  theme
}) => {
  return (
    <span
      className={twMerge(
        theme.label.base,
        theme.label.sizes[size],
        checked && theme.label.checked,
        disabled && theme.label.disabled,
        !disabled && onChange && theme.label.clickable,
        labelClassName
      )}
      onClick={() => {
        if (!disabled && onChange) {
          onChange();
        }
      }}
    >
      {label}
    </span>
  );
};
