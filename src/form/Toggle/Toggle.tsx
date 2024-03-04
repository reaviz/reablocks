import React, { FC, forwardRef, LegacyRef } from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import css from './Toggle.module.css';

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
}

export interface ToggleRef {
  ref?: LegacyRef<HTMLDivElement>;
}

export const Toggle: FC<ToggleProps & ToggleRef> = forwardRef(
  ({ checked, disabled, onChange, onBlur, className, size, ...rest }, ref) => (
    <div
      {...rest}
      ref={ref}
      tabIndex={0}
      className={classnames(
        css.switch,
        {
          [css.disabled]: disabled,
          [css.checked]: checked,
          [css[size]]: true
        },
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
        className={css.handle}
        layout
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30
        }}
      />
    </div>
  )
);

Toggle.defaultProps = {
  size: 'medium'
};
