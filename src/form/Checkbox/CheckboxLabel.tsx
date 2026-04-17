import React, { FC, ReactNode } from 'react';
import { cn } from '@/utils';
import { CheckboxSizeTheme, CheckboxTheme } from './CheckboxTheme';

interface CheckboxLabelProps {
  id?: string;
  label: string | ReactNode;
  size: keyof CheckboxSizeTheme;
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
    className={cn(
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
