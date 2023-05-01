import React, { FC, forwardRef, Ref, useCallback } from 'react';
import classNames from 'classnames';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useTheme } from '../../utils/Theme';
import css from './Checkbox.module.css';

export interface CheckboxProps {
  /**
   * Whether the checkbox is checked or not.
   */
  checked: boolean;

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
   * Event handler for when the checkbox is changed.
   */
  onChange?: (value: boolean) => void;

  /**
   * Event handler for when the checkbox is blurred.
   */
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
}

export interface CheckboxRef {
  ref?: Ref<HTMLDivElement>;
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
      ...rest
    },
    ref: Ref<HTMLDivElement>
  ) => {
    const theme = useTheme();
    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

    const checkVariants = {
      pressed: (isChecked: boolean) => ({ pathLength: isChecked ? 0.85 : 0.3 }),
      checked: { pathLength: 1 },
      unchecked: { pathLength: 0 }
    };

    const boxVariants = {
      hover: {
        strokeWidth: 1,
        stroke: theme.components.checkbox['checkbox-box-checked-stroke']
      },
      pressed: { scale: 0.95 },
      checked: {
        stroke: theme.components.checkbox['checkbox-box-checked-stroke']
      },
      unchecked: {
        stroke: theme.components.checkbox['checkbox-box-unchecked-stroke']
      }
    };

    return (
      <div className={classNames(css.container, containerClassName)}>
        <motion.div
          {...rest}
          ref={ref}
          tabIndex={disabled ? -1 : 0}
          className={classNames(css.checkbox, className, {
            [css.disabled]: disabled,
            [css.small]: size === 'small',
            [css.medium]: size === 'medium',
            [css.large]: size === 'large'
          })}
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
          >
            <motion.path
              d="M 0 0 L 0 16 L 16 16 L 16 0 Z"
              variants={boxVariants}
            />
            {intermediate ? (
              <motion.path
                d="M 5.36396 8.17792 L 10.6044 8.17792"
                fill="transparent"
                strokeWidth="1"
                className={css.check}
                variants={checkVariants}
                style={{ pathLength, opacity }}
                custom={checked}
              />
            ) : (
              <motion.path
                d="M 5.36396 8.17792 L 7.34236 9.91424 L 10.6044 5.832"
                fill="transparent"
                strokeWidth="1"
                className={css.check}
                variants={checkVariants}
                style={{ pathLength, opacity }}
                custom={checked}
              />
            )}
          </motion.svg>
        </motion.div>
        {label && (
          <span
            className={classNames(css.label, labelClassName, {
              [css.clickable]: !disabled && onChange
            })}
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
