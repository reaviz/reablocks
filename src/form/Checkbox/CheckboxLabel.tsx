import React, { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { CheckboxTheme } from './CheckboxTheme';

interface CheckboxLabelProps {
  id?: string;
  label: string | ReactNode;
  size: 'small' | 'medium' | 'large' | string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: () => void;
  labelClassName?: string;
  theme: CheckboxTheme;
}

export const CheckboxLabel: FC<CheckboxLabelProps> = ({
  id,
  label,
  size,
  disabled,
  checked,
  onChange,
  labelClassName,
  theme
}) => (
  <span
    id={id}
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
