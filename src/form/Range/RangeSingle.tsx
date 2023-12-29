import React, { useCallback, useEffect, useRef, useState, FC } from 'react';
import classNames from 'classnames';
import { motion, useMotionValue } from 'framer-motion';
import { RangeProps, RangeTooltip } from './RangeTooltip';
import css from './Range.module.css';

export const RangeSingle: FC<RangeProps<number>> = ({
  disabled,
  style,
  handleClassName,
  onChange,
  className,
  min,
  max,
  value
}) => {
  const [currentValue, setCurrentValue] = useState<number>(value);

  const range = useRef<HTMLDivElement | null>(null);
  const [rangeWidth, setRangeWidth] = useState(0);
  const [rangeLeft, setRangeLeft] = useState<number>(0);

  const valueX = useMotionValue(0);

  const getValue = (xPosition: number): number => {
    const draggedWidth = xPosition - rangeLeft;
    const draggedWidthPercentage = (draggedWidth * 100) / rangeWidth;
    return Math.round(min + ((max - min) * draggedWidthPercentage) / 100);
  };

  const getPosition = useCallback(
    (value: number): number => ((value - min) / (max - min)) * rangeWidth,
    [min, max, rangeWidth]
  );

  const updateCurrentValue = useCallback(
    (newValue: number) => {
      newValue = Math.max(newValue, min);
      newValue = Math.min(newValue, max);
      setCurrentValue(newValue);
      valueX.set(getPosition(newValue));
      onChange?.(newValue);
    },
    [min, max, valueX, getPosition, onChange]
  );

  useEffect(() => {
    setRangeWidth(range.current.offsetWidth);
    setRangeLeft(range.current?.getBoundingClientRect()?.left || 0);
    valueX.set(getPosition(currentValue));
  }, [range, currentValue, valueX, getPosition]);

  const [dragging, setDragging] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const tooltipVisible = dragging || focused || hovering;

  return (
    <div
      ref={range}
      style={style}
      className={classNames([css.range, className], {
        [css.rangeDisabled]: disabled
      })}
    >
      <motion.div
        className={classNames(css.handleDrag, handleClassName, {
          [css.handleDragHighlight]: tooltipVisible
        })}
        drag={!disabled ? 'x' : null}
        dragMomentum={false}
        style={{ x: valueX }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onDragStart={() => setDragging(true)}
        onDrag={(e: MouseEvent) => updateCurrentValue(getValue(e.clientX))}
        onDragEnd={(e: MouseEvent) => {
          updateCurrentValue(getValue(e.clientX));
          setDragging(false);
        }}
        dragConstraints={{
          left: 0,
          right: rangeWidth
        }}
      >
        <div className={css.handle}>
          <input
            type="range"
            min={min}
            max={max}
            value={currentValue}
            disabled={disabled}
            onChange={e => updateCurrentValue(e.target.valueAsNumber)}
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
          />
        </div>
        <RangeTooltip visible={tooltipVisible}>{currentValue}</RangeTooltip>
      </motion.div>
    </div>
  );
};
