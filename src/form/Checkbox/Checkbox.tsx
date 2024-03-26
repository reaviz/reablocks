import React, { FC, forwardRef, LegacyRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { CheckboxTheme } from './CheckboxTheme';
import { useComponentTheme } from '../../utils';

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
      checked,
      intermediate,
      label,
      disabled,
      size,
      onChange,
      onBlur,
      className,
      containerClassName,
      labelClassName,
      borderPath = 'M 0 0 L 0 16 L 16 16 L 16 0 Z',
      checkedPath = 'M 5.36396 8.17792 L 7.34236 9.91424 L 10.6044 5.832',
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

    return (
      <div className={twMerge(theme.base, containerClassName)}>
        <motion.div
          {...rest}
          ref={ref}
          tabIndex={disabled ? -1 : 0}
          className={twMerge(
            theme.checkbox,
            disabled && theme.disabled,
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
              className={theme.border}
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
        {label && (
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
                onChange?.(!checked);
              }
            }}
          >
            {label}
          </span>
        )}
      </div>
    );
  }
);

Checkbox.defaultProps = {
  checked: false,
  intermediate: false,
  size: 'medium'
};
