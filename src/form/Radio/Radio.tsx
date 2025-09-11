import React, {
  FC,
  forwardRef,
  LegacyRef,
  ReactNode,
  useContext,
  useMemo
} from 'react';
import { motion } from 'motion/react';
import { RadioGroupContext } from './RadioGroupContext';
import { cn, useComponentTheme } from '@/utils';
import { RadioSizeTheme, RadioTheme } from './RadioTheme';

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
  label?: string | ReactNode;

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
  size?: keyof RadioSizeTheme;

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

  /**
   * Theme for the Radio.
   */
  theme?: RadioTheme;
}

const VARIANTS = {
  check: { opacity: 1, scale: 1 },
  uncheck: { opacity: 0, scale: 0 }
};

export interface RadioRef {
  /**
   * Reference to the radio element.
   */
  ref?: LegacyRef<HTMLDivElement>;
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
      size = 'medium',
      value,
      theme: customTheme,
      ...rest
    },
    ref
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

    const theme: RadioTheme = useComponentTheme('radio', customTheme);

    return (
      <div className={cn(theme.base, className)}>
        <div
          {...rest}
          ref={ref}
          tabIndex={0}
          className={cn(theme.radio.base, theme.sizes[size], {
            [theme.radio.checked]: checked,
            [theme.radio.disabled]: disabled
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
            className={cn(theme.indicator.base, theme.indicator.sizes[size], {
              [theme.indicator.disabled]: disabled
            })}
            initial={!disabled ? { opacity: 0, scale: 0.5 } : {}}
            variants={VARIANTS}
            animate={checked ? 'check' : 'uncheck'}
            transition={{ duration: 0.15 }}
          />
        </div>
        {label && (
          <span
            className={cn(theme.label.base, {
              [theme.label.checked]: checked,
              [theme.label.disabled]: disabled,
              [theme.label.clickable]: !disabled
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
