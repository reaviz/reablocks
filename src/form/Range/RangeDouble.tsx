import React, { useCallback, useEffect, useRef, useState, FC } from 'react';
import classNames from 'classnames';
import { motion, useMotionValue } from 'framer-motion';
import { RangeProps, RangeTooltip } from './RangeTooltip';
import css from './Range.module.css';

const MIN_VALUE_BETWEEN = 1;

export const RangeDouble: FC<RangeProps<[number, number]>> = ({
  disabled,
  style,
  className,
  handleClassName,
  min,
  max,
  value,
  onChange
}) => {
  const [minValue, maxValue] = value;
  const initialMinValue = Math.max(minValue, min);
  const initalMaxValue = Math.min(
    maxValue < initialMinValue + MIN_VALUE_BETWEEN
      ? initialMinValue + MIN_VALUE_BETWEEN
      : maxValue,
    max
  );

  const [currentMin, setCurrentMin] = useState(initialMinValue);
  const [currentMax, setCurrentMax] = useState(initalMaxValue);

  const range = useRef<HTMLDivElement | null>(null);
  const [rangeWidth, setRangeWidth] = useState(0);
  const [rangeLeft, setRangeLeft] = useState(0);

  const minX = useMotionValue(0);
  const maxX = useMotionValue(0);

  const getValue = (xPosition: number): number => {
    const draggedWidth = xPosition - rangeLeft;
    const draggedWidthPercentage = (draggedWidth * 100) / rangeWidth;
    return Math.round(min + ((max - min) * draggedWidthPercentage) / 100);
  };

  const getPosition = useCallback(
    (value: number): number => ((value - min) / (max - min)) * rangeWidth,
    [min, max, rangeWidth]
  );

  const minSpaceBetween = getPosition(min + MIN_VALUE_BETWEEN);

  const updateCurrentMin = useCallback(
    (newMin: number, notifyChange = false) => {
      newMin = Math.max(newMin, min);
      if (newMin <= currentMax - MIN_VALUE_BETWEEN) {
        setCurrentMin(newMin);
        minX.set(getPosition(newMin));
        notifyChange && onChange?.([newMin, currentMax]);
      }
    },
    [currentMax, min, minX, getPosition, onChange]
  );

  const updateCurrentMax = useCallback(
    (newMax: number, notifyChange = false) => {
      newMax = Math.min(newMax, max);
      if (newMax >= currentMin + MIN_VALUE_BETWEEN) {
        setCurrentMax(newMax);
        maxX.set(getPosition(newMax));
        notifyChange && onChange?.([currentMin, newMax]);
      }
    },
    [currentMin, max, maxX, getPosition, onChange]
  );

  useEffect(() => {
    const rect = range.current.getBoundingClientRect();
    setRangeWidth(rect.width);
    setRangeLeft(rect.left);
    minX.set(getPosition(currentMin));
    maxX.set(getPosition(currentMax));
  }, [range, currentMin, minX, currentMax, maxX, getPosition]);

  useEffect(() => {
    setCurrentMin(initialMinValue);
    setCurrentMax(initalMaxValue);
  }, [initalMaxValue, initialMinValue]);

  const [draggingMin, setDraggingMin] = useState(false);
  const [focusedMin, setFocusedMin] = useState(false);
  const [hoveringMin, setHoveringMin] = useState(false);
  const minTooltipVisible = draggingMin || focusedMin || hoveringMin;
  const minPercentage = ((currentMin - min) / (max - min)) * 100;

  const [draggingMax, setDraggingMax] = useState(false);
  const [focusedMax, setFocusedMax] = useState(false);
  const [hoveringMax, setHoveringMax] = useState(false);
  const maxTooltipVisible = draggingMax || focusedMax || hoveringMax;
  const maxPercentage = ((currentMax - min) / (max - min)) * 100;

  return (
    <div
      style={style}
      ref={range}
      className={classNames([css.range, className], {
        [css.rangeDisabled]: disabled
      })}
    >
      <motion.div
        className={classNames(css.handleDrag, handleClassName, {
          [css.handleDragHighlight]: minTooltipVisible
        })}
        drag={!disabled ? 'x' : null}
        dragMomentum={false}
        style={{ x: minX }}
        onMouseEnter={() => setHoveringMin(true)}
        onMouseLeave={() => setHoveringMin(false)}
        onDragStart={() => setDraggingMin(true)}
        onDrag={(e: MouseEvent) => updateCurrentMin(getValue(e.clientX))}
        onDragEnd={(e: MouseEvent) => {
          updateCurrentMin(getValue(e.clientX), true);
          setDraggingMin(false);
        }}
        dragConstraints={{
          left: 0,
          right: maxX.get() - minSpaceBetween
        }}
        dragElastic={false}
      >
        <div className={css.handle}>
          <input
            type="range"
            min={min}
            max={max}
            value={currentMin}
            onChange={e => updateCurrentMin(e.target.valueAsNumber)}
            onBlur={() => setFocusedMin(false)}
            onFocus={() => setFocusedMin(true)}
            disabled={disabled}
          />
        </div>
        <RangeTooltip visible={minTooltipVisible}>{currentMin}</RangeTooltip>
      </motion.div>
      <motion.div
        className={classNames(css.handleDrag, {
          [css.handleDragHighlight]: maxTooltipVisible
        })}
        drag={!disabled ? 'x' : null}
        dragMomentum={false}
        style={{ x: maxX }}
        onMouseEnter={() => setHoveringMax(true)}
        onMouseLeave={() => setHoveringMax(false)}
        onDragStart={() => setDraggingMax(true)}
        onDrag={(e: MouseEvent) => updateCurrentMax(getValue(e.clientX))}
        onDragEnd={(e: MouseEvent) => {
          updateCurrentMax(getValue(e.clientX), true);
          setDraggingMax(false);
        }}
        dragConstraints={{
          left: minX.get() + minSpaceBetween,
          right: rangeWidth
        }}
        dragElastic={false}
      >
        <div className={css.handle}>
          <input
            type="range"
            min={min}
            max={max}
            value={currentMax}
            onChange={e => updateCurrentMax(e.target.valueAsNumber)}
            onBlur={() => setFocusedMax(false)}
            onFocus={() => setFocusedMax(true)}
            disabled={disabled}
          />
        </div>
        <RangeTooltip visible={maxTooltipVisible}>{currentMax}</RangeTooltip>
      </motion.div>
      <div
        className={css.rangeHighlight}
        style={{
          width: `${maxPercentage - minPercentage}%`,
          marginLeft: `${minPercentage}%`
        }}
      />
    </div>
  );
};
