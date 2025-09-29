import { AnimatePresence, motion } from 'motion/react';
import type { FC } from 'react';
import React from 'react';

import { useComponentTheme } from '@/utils';

import type { RangeTheme } from './RangeTheme';

export interface RangeProps<Value> {
  /**
   * Whether the range is disabled
   */
  disabled?: boolean;

  /**
   * Additional class name to apply to the range
   */
  className?: string;

  /**
   * Additional class name to apply to the handle
   */
  handleClassName?: string;

  /**
   * The minimum value of the range
   */
  min: number;

  /**
   * The maximum value of the range
   */
  max: number;

  /**
   * The value will be a multiple of step
   * The default is 1
   */
  step?: number;

  /**
   * The value of the range
   */
  value: Value;

  /**
   * When to display the current value
   */
  valueDisplay?: 'always' | 'hover';

  /**
   * Format the value to display
   */
  valueFormat?: (value: number) => string;

  /**
   * Additional css styles to apply to the range
   */
  style?: React.CSSProperties;

  /**
   * Event fired when the range value changes
   */
  onChange?: (value: Value) => void;

  /**
   * Theme for the range
   */
  theme?: RangeTheme;
}

export interface RangeTooltipProps {
  children?: React.ReactNode;
  visible: boolean;
}

export const RangeTooltip: FC<RangeTooltipProps> = ({ children, visible }) => {
  const theme: RangeTheme = useComponentTheme('range');

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={theme.tooltip}
          initial={{
            opacity: 0,
            scale: 0.3,
            translateX: '-50%'
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          exit={{ opacity: 0, scale: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
