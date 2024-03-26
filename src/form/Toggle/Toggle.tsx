import React, { FC, forwardRef, LegacyRef } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { ToggleTheme } from './ToggleTheme';
import { useComponentTheme } from '../../utils';

export interface ToggleProps {
  /**
   * Whether the toggle is checked or not.
   */
  checked: boolean;

  /**
   * Whether the toggle is disabled or not.
   */
  disabled?: boolean;

  /**
   * Additional class names to apply to the toggle.
   */
  className?: string;

  /**
   * The size of the toggle.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * When the toggle is changed.
   */
  onChange?: (value: boolean) => void;

  /**
   * When the toggle was blurred.
   */
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;

  /**
   * Theme for the Toggle.
   */
  theme?: ToggleTheme;
}

export interface ToggleRef {
  ref?: LegacyRef<HTMLDivElement>;
}

export const Toggle: FC<ToggleProps & ToggleRef> = forwardRef(
  (
    {
      checked,
      disabled,
      onChange,
      onBlur,
      className,
      size,
      theme: customTheme,
      ...rest
    },
    ref
  ) => {
    const theme: ToggleTheme = useComponentTheme('toggle', customTheme);

    return (
      <div
        {...rest}
        ref={ref}
        tabIndex={0}
        className={twMerge(
          theme.base,
          disabled && theme.disabled,
          checked && theme.checked,
          theme.sizes[size],
          className
        )}
        onClick={() => {
          if (!disabled && onChange) {
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
        <motion.div
          className={twMerge(theme.handle.base, theme.handle.sizes[size])}
          layout
          transition={{
            type: 'spring',
            stiffness: 700,
            damping: 30
          }}
        />
      </div>
    );
  }
);

Toggle.defaultProps = {
  size: 'medium'
};
