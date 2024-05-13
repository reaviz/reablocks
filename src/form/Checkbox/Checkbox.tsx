import React, { FC, forwardRef, LegacyRef, useCallback } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { CheckboxTheme } from './CheckboxTheme';
import { useComponentTheme } from '@/utils';
import { CheckboxLabel } from './CheckboxLabel';

export interface CheckboxProps {
  /**
   * Whether the checkbox is checked or not.
   */
  checked?: boolean;

  /**
   * Whether the checkbox is in an intermediate state or not.
   */
  intermediate?: boolean;

  /**
   * Label for the checkbox.
   */
  label?: string;

  /**
   * Label position of checkbox.
   */
  labelPosition?: 'left' | 'right';

  /**
   * Whether the checkbox is disabled or not.
   */
  disabled?: boolean;

  /**
   * Size of the checkbox.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Additional class names to apply to the checkbox.
   */
  className?: string;

  /**
   * Additional class names to apply to the container.
   */
  containerClassName?: string;

  /**
   * Additional class names to apply to the label.
   */
  labelClassName?: string;

  /**
   * Custom svg path for border.
   */
  borderPath?: string;

  /**
   * Custom svg path for checked state.
   */
  checkedPath?: string;

  /**
   * Custom svg path for intermediate state.
   */
  intermediatePath?: string;

  /**
   * Event handler for when the checkbox is changed.
   */
  onChange?: (value: boolean) => void;

  /**
   * Event handler for when the checkbox is blurred.
   */
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;

  /**
   * Theme for the Checkbox.
   */
  theme?: CheckboxTheme;
}

export interface CheckboxRef {
  ref?: LegacyRef<HTMLDivElement>;
}

export const Checkbox: FC<CheckboxProps & CheckboxRef> = forwardRef(
  (
    {
      checked = false,
      intermediate = false,
      label,
      disabled,
      size = 'medium',
      labelPosition = 'right',
      onChange,
      onBlur,
      className,
      containerClassName,
      labelClassName,
      borderPath = 'M 1 0 L 16 0 C 16.552 0 17 0.448 17 1 L 17 15 C 17 15.552 16.552 16 16 16 L 1 16 C 0.448 16 0 15.552 0 15 L 0 1 C 0 0.448 0.448 0 1 0 Z',
      checkedPath = 'M 4 8 L 8 12 L 12 4',
      intermediatePath = 'M 5.36396 8.17792 L 10.6044 8.17792',
      theme: customTheme,
      ...rest
    },
    ref
  ) => {
    const theme: CheckboxTheme = useComponentTheme('checkbox', customTheme);
    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

    const checkVariants = {
      pressed: (isChecked: boolean) => ({ pathLength: isChecked ? 0.85 : 0.3 }),
      checked: { pathLength: 1 },
      unchecked: { pathLength: 0 }
    };

    const handleOnChange = useCallback(() => {
      if (!disabled && onChange) {
        onChange(!checked);
      }
    }, [disabled, onChange, checked]);

    return (
      <div
        className={twMerge(
          theme.base,
          containerClassName,
          checked && 'checked'
        )}
      >
        {labelPosition === 'left' && label && (
          <CheckboxLabel
            label={label}
            size={size}
            disabled={disabled}
            onChange={handleOnChange}
            labelClassName={labelClassName}
            theme={theme}
          />
        )}
        <motion.div
          {...rest}
          ref={ref}
          tabIndex={disabled ? -1 : 0}
          className={twMerge(
            theme.checkbox,
            disabled && theme.disabled,
            checked && theme.checked,
            theme.sizes[size],
            className
          )}
          onClick={e => {
            if (!disabled && onChange) {
              e.stopPropagation();
              onChange(!checked);
            }
          }}
          onBlur={onBlur}
          onKeyDown={event => {
            if (!disabled && onChange && event.code === 'Space') {
              onChange(!checked);
            }
          }}
        >
          <motion.svg
            animate={checked ? 'checked' : 'unchecked'}
            whileHover={!disabled ? 'hover' : undefined}
            whileTap={!disabled ? 'pressed' : undefined}
            viewBox="0 0 16 16"
            width={16}
            height={16}
          >
            <motion.path
              className={twMerge(
                theme.border,
                disabled && theme.disabled,
                checked && theme.checked
              )}
              d={borderPath}
              variants={theme.boxVariants}
            />
            {intermediate ? (
              <motion.path
                d={intermediatePath}
                fill="transparent"
                strokeWidth="1"
                className={theme.check}
                variants={checkVariants}
                style={{ pathLength, opacity }}
                custom={checked}
              />
            ) : (
              <motion.path
                d={checkedPath}
                fill="transparent"
                strokeWidth="1"
                className={theme.check}
                variants={checkVariants}
                style={{ pathLength, opacity }}
                custom={checked}
              />
            )}
          </motion.svg>
        </motion.div>
        {labelPosition === 'right' && label && (
          <CheckboxLabel
            label={label}
            size={size}
            disabled={disabled}
            onChange={handleOnChange}
            labelClassName={labelClassName}
            theme={theme}
          />
        )}
      </div>
    );
  }
);
