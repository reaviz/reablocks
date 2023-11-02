import React, { FC, forwardRef, Ref, useCallback } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import css from './Radio.module.css';

export interface RadioProps {
  /**
   * Whether the radio is checked or not.
   */
  checked: boolean;

  /**
   * Label for the radio.
   */
  label?: string;

  /**
   * Whether the radio is disabled or not.
   */
  disabled?: boolean;

  /**
   * Additional class names to apply to the radio.
   */
  className?: string;

  /**
   * Size of the radio.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Event handler for when the radio is changed.
   */
  onChange?: (value: boolean) => void;

  /**
   * Event handler for when the radio is blurred.
   */
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;

  /**
   * Value passed to the form when used inside a `RadioGroup`.
   */
  value?: string;
}

const VARIANTS = {
  check: { opacity: 1, scale: 1 },
  uncheck: { opacity: 0, scale: 0 }
};

export interface RadioRef {
  ref?: Ref<HTMLDivElement>;
}

export const Radio: FC<RadioProps & RadioRef> = forwardRef(
  (
    { checked, label, disabled, onChange, onBlur, className, size, ...rest },
    ref: Ref<HTMLDivElement>
  ) => (
    <div className={classNames(css.container, className)}>
      <div
        {...rest}
        ref={ref}
        tabIndex={0}
        className={classNames(css.radio, {
          [css.disabled]: disabled,
          [css.checked]: checked,
          [css[size]]: true
        })}
        onClick={() => {
          if (!disabled && onChange) {
            onChange?.(!checked);
          }
        }}
        onBlur={onBlur}
        onKeyDown={event => {
          if (!disabled && onChange && event.code === 'Space') {
            onChange?.(!checked);
          }
        }}
      >
        <motion.div
          className={css.indicator}
          initial={!disabled ? { opacity: 0, scale: 0.5 } : {}}
          variants={VARIANTS}
          animate={checked ? 'check' : 'uncheck'}
          transition={{ duration: 0.15 }}
        />
      </div>
      {label && (
        <span
          className={classNames(css.label, {
            [css.clickable]: !disabled
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
  )
);

Radio.defaultProps = {
  size: 'medium'
};
