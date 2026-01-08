import type { FC, ReactNode } from 'react';
import React from 'react';

import { twMerge } from '@/utils';

import type { CheckboxSizeTheme, CheckboxTheme } from './CheckboxTheme';

interface CheckboxLabelProps {
  label: string | ReactNode;
  size: keyof CheckboxSizeTheme;
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
}) => (
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
