import React, { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import css from './Range.module.css';

export interface RangeProps<Value> {
  disabled?: boolean;
  className?: string;
  onChange?: (value: Value) => void;
  min: number;
  max: number;
  value: Value;
  style?: React.CSSProperties;
}

export interface RangeTooltipProps {
  children?: React.ReactNode;
  visible: boolean;
}

export const RangeTooltip: FC<RangeTooltipProps> = ({ children, visible }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        className={css.tooltip}
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
