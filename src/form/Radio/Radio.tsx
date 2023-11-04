import React, { FC, forwardRef, Ref, useContext, useMemo } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import css from './Radio.module.css';
import { RadioGroupContext } from './RadioGroupContext';

export interface RadioProps {
  /**
   * Whether the radio is checked or not.
   * Required only if `Radio` is used independently outside a `RadioGroup`.
   * If `Radio` is used inside a `RadioGroup` then the value is internally set depending upon if the `value` is same as the selected value.
   */
  checked?: boolean;

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
   * Required when `Radio` is used within a `RadioGroup`
   */
  value?: any;
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
    {
      checked: isRadioChecked,
      label,
      disabled,
      onChange,
      onBlur,
      className,
      size,
      value,
      ...rest
    },
    ref: Ref<HTMLDivElement>
  ) => {
    const { onChange: onGroupValueChange, selectedValue } =
      useContext(RadioGroupContext);
    const checked = useMemo(() => {
      if (selectedValue === null) {
        return isRadioChecked;
      } else {
        return selectedValue === value;
      }
    }, [isRadioChecked, selectedValue, value]);

    const onValueChange = (checked: boolean) => {
      onGroupValueChange?.(value);
      onChange?.(checked);
    };

    return (
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
            if (!disabled) {
              onValueChange(!checked);
            }
          }}
          onBlur={onBlur}
          onKeyDown={event => {
            if (!disabled && event.code === 'Space') {
              onValueChange(!checked);
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
              if (!disabled) {
                onValueChange(!checked);
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

Radio.defaultProps = {
  size: 'medium'
};
