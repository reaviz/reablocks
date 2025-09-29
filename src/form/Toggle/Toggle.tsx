import type { MotionNodeAnimationOptions } from 'motion/react';
import { motion } from 'motion/react';
import type { FC, LegacyRef } from 'react';
import React, { forwardRef } from 'react';

import { cn, useComponentTheme } from '@/utils';

import type { ToggleSizeTheme, ToggleTheme } from './ToggleTheme';

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
   * Whether to animate the toggle.
   */
  animated?: boolean;

  /**
   * Animation configuration for the toggle.
   */
  animation?: MotionNodeAnimationOptions;

  /**
   * Additional class names to apply to the toggle.
   */
  className?: string;

  /**
   * The size of the toggle.
   */
  size?: keyof ToggleSizeTheme;

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
  /**
   * Reference to the toggle element.
   */
  ref?: LegacyRef<HTMLDivElement>;
}

export const Toggle: FC<ToggleProps & ToggleRef> = forwardRef<
  HTMLDivElement,
  ToggleProps
>(
  (
    {
      checked,
      disabled,
      onChange,
      onBlur,
      className,
      size = 'medium',
      animated = true,
      animation,
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
        role="switch"
        className={cn(
          theme.base,
          theme.sizes[size],
          {
            [theme.checked]: checked,
            [theme.disabled]: disabled,
            [theme.disabledAndChecked]: disabled && checked
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
          className={cn(theme.handle.base, theme.handle.sizes[size], {
            [theme.handle.disabled]: disabled,
            [theme.handle.disabledAndChecked]: disabled && checked
          })}
          layout
          {...(animation
            ? animation
            : {
                transition: {
                  type: 'spring',
                  stiffness: 700,
                  damping: 30,
                  duration: animated ? 0.3 : 0
                }
              })}
        />
      </div>
    );
  }
);
