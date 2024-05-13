import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { CheckboxTheme } from './CheckboxTheme';

interface CheckboxLabelProps {
  label: string;
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onChange?: () => void;
  labelClassName?: string;
  theme: CheckboxTheme;
}

export const CheckboxLabel: FC<CheckboxLabelProps> = ({
  label,
  size,
  disabled,
  onChange,
  labelClassName,
  theme
}) => {
  return (
    <span
      className={twMerge(
        theme.label.base,
        theme.label.sizes[size],
        disabled && theme.disabled,
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
