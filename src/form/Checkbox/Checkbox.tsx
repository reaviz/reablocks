import { motion, useMotionValue, useTransform } from 'motion/react';
import type { LegacyRef, ReactNode } from 'react';
import React, { forwardRef, useCallback, useEffect, useState } from 'react';

import { useComponentTheme } from '@/utils';
import { twMerge } from '@/utils';

import { CheckboxLabel } from './CheckboxLabel';
import type { CheckboxSizeTheme, CheckboxTheme } from './CheckboxTheme';

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
  label?: string | ReactNode;

  /**
   * Label position of checkbox.
   */
  labelPosition?: 'start' | 'end';

  /**
   * Whether the checkbox is disabled or not.
   */
  disabled?: boolean;

  /**
   * Size of the checkbox.
   */
  size?: keyof CheckboxSizeTheme;

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
  /**
   * The ref to the checkbox element.
   */
  ref?: LegacyRef<HTMLDivElement>;
}

export const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(
  (
    {
      checked = false,
      intermediate = false,
      label,
      disabled,
      size = 'medium',
      labelPosition = 'end',
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

    // If the checkbox is inside a dialog, the animation will not work.
    // This is a workaround to force the animation to work by triggering
    // a re-render once after initial mount
    const [_, setForceAnimation] = useState<boolean>(false);
    useEffect(() => {
      if (checked || intermediate) {
        setForceAnimation(true);
      }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
        {labelPosition === 'start' && label && (
          <CheckboxLabel
            label={label}
            size={size}
            checked={checked}
            disabled={disabled}
            onChange={handleOnChange}
            labelClassName={twMerge('mr-2.5', labelClassName)}
            theme={theme}
          />
        )}
        <motion.div
          {...rest}
          ref={ref}
          tabIndex={disabled ? -1 : 0}
          className={twMerge(
            theme.checkbox.base,
            checked && theme.checkbox.checked,
            disabled && theme.checkbox.disabled,
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
                theme.border.base,
                checked && theme.border.checked,
                disabled && theme.border.disabled
              )}
              d={borderPath}
              variants={theme.boxVariants}
            />
            {intermediate ? (
              <motion.path
                d={intermediatePath}
                fill="transparent"
                strokeWidth="1"
                className={theme.check.base}
                variants={checkVariants}
                style={{ pathLength, opacity }}
                custom={checked}
              />
            ) : (
              <motion.path
                d={checkedPath}
                fill="transparent"
                strokeWidth="1"
                className={twMerge(
                  theme.check.base,
                  disabled && theme.check.disabled,
                  checked && theme.check.checked
                )}
                variants={checkVariants}
                style={{ pathLength, opacity }}
                custom={checked}
              />
            )}
          </motion.svg>
        </motion.div>
        {labelPosition === 'end' && label && (
          <CheckboxLabel
            label={label}
            size={size}
            checked={checked}
            disabled={disabled}
            onChange={handleOnChange}
            labelClassName={twMerge('ml-2.5', labelClassName)}
            theme={theme}
          />
        )}
      </div>
    );
  }
);
