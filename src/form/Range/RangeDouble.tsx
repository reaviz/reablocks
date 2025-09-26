import { motion, useMotionValue } from 'motion/react';
import type { FC } from 'react';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { twMerge } from '@/utils';
import { cn, useComponentTheme } from '@/utils';

import type { RangeTheme } from './RangeTheme';
import type { RangeProps } from './RangeTooltip';
import { RangeTooltip } from './RangeTooltip';

export const RangeDouble: FC<RangeProps<[number, number]>> = ({
  disabled,
  style,
  className,
  handleClassName,
  min,
  max,
  value,
  valueDisplay = 'hover',
  valueFormat = value => value.toLocaleString(),
  onChange,
  theme: customTheme,
  step = 1,
}) => {
  const minValueBetween = step;
  const [minValue, maxValue] = value;
  const initialMinValue = Math.max(minValue, min);
  const initalMaxValue = Math.min(
    maxValue < initialMinValue + minValueBetween
      ? initialMinValue + minValueBetween
      : maxValue,
    max,
  );

  const [currentMin, setCurrentMin] = useState(initialMinValue);
  const [currentMax, setCurrentMax] = useState(initalMaxValue);

  const range = useRef<HTMLDivElement | null>(null);
  const [rangeWidth, setRangeWidth] = useState(0);
  const [rangeLeft, setRangeLeft] = useState(0);

  const minX = useMotionValue(0);
  const maxX = useMotionValue(0);

  const fractionDigits = useMemo(
    () => step.toString()?.[1]?.length || 0,
    [step],
  );

  const getValue = (xPosition: number): number => {
    const draggedWidth = xPosition - rangeLeft;
    const draggedWidthPercentage = (draggedWidth * 100) / rangeWidth;

    const scaledStep = (step / (max - min)) * 100;
    const scaledValue =
      Math.round(draggedWidthPercentage / scaledStep) * scaledStep;
    const scaledValueWithStep = (scaledValue / 100) * (max - min) + min;
    const rawValue = Math.round(scaledValueWithStep / step) * step;
    // Fix floating point precision. Example 3.50000000000000004
    const newValue =
      fractionDigits > 0 ? +rawValue.toFixed(fractionDigits) : rawValue;

    return Math.max(min, Math.min(newValue, max));
  };

  const getPosition = useCallback(
    (value: number): number => ((value - min) / (max - min)) * rangeWidth,
    [min, max, rangeWidth],
  );

  const minSpaceBetween = getPosition(min + minValueBetween);

  const updateCurrentMin = useCallback(
    (newMin: number, notifyChange = false) => {
      newMin = Math.max(newMin, min);
      if (newMin <= currentMax - minValueBetween) {
        setCurrentMin(newMin);
        minX.set(getPosition(newMin));
        if (notifyChange) {
          onChange?.([newMin, currentMax]);
        }
      }
    },
    [currentMax, min, minX, getPosition, onChange, minValueBetween],
  );

  const updateCurrentMax = useCallback(
    (newMax: number, notifyChange = false) => {
      newMax = Math.min(newMax, max);
      if (newMax >= currentMin + minValueBetween) {
        setCurrentMax(newMax);
        maxX.set(getPosition(newMax));
        if (notifyChange) {
          onChange?.([currentMin, newMax]);
        }
      }
    },
    [currentMin, max, maxX, getPosition, onChange, minValueBetween],
  );

  useLayoutEffect(() => {
    const updateRange = () => {
      const rect = range.current.getBoundingClientRect();
      setRangeWidth(rect.width);
      setRangeLeft(rect.left);
      minX.set(getPosition(currentMin));
      maxX.set(getPosition(currentMax));
    };

    // the callback inside requestAnimationFrame is ran when the browser is ready to accept the next repaint
    // this fixes issues setting range width when the slider is placed in an animated parent element like a popup
    requestAnimationFrame(updateRange);

    // Add window resize event listener to recalculate dimensions when window size changes
    window.addEventListener('resize', updateRange);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', updateRange);
    };
  }, [currentMin, minX, currentMax, maxX, getPosition]);

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

  const theme: RangeTheme = useComponentTheme('range', customTheme);

  return (
    <div
      style={style}
      ref={range}
      className={twMerge(theme.base, disabled && theme.disabled, className)}
    >
      <motion.div
        className={twMerge(theme.drag, handleClassName)}
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
          right: maxX.get() - minSpaceBetween,
        }}
        dragElastic={false}
      >
        <div
          className={twMerge(
            theme.inputWrapper.base,
            disabled && theme.inputWrapper.disabled,
          )}
        >
          <input
            type="range"
            className={theme.input}
            min={min}
            max={max}
            value={currentMin}
            onChange={e => updateCurrentMin(e.target.valueAsNumber)}
            onBlur={() => setFocusedMin(false)}
            onFocus={() => setFocusedMin(true)}
            disabled={disabled}
          />
        </div>
        {valueDisplay === 'hover' ? (
          <RangeTooltip visible={minTooltipVisible}>
            {valueFormat(currentMin)}
          </RangeTooltip>
        ) : (
          valueFormat(currentMin)
        )}
      </motion.div>
      <motion.div
        className={twMerge(theme.drag)}
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
          right: rangeWidth,
        }}
        dragElastic={false}
      >
        <div
          className={twMerge(
            theme.inputWrapper.base,
            disabled && theme.inputWrapper.disabled,
          )}
        >
          <input
            type="range"
            className={theme.input}
            min={min}
            max={max}
            value={currentMax}
            onChange={e => updateCurrentMax(e.target.valueAsNumber)}
            onBlur={() => setFocusedMax(false)}
            onFocus={() => setFocusedMax(true)}
            disabled={disabled}
          />
        </div>
        {valueDisplay === 'hover' ? (
          <RangeTooltip visible={maxTooltipVisible}>
            {valueFormat(currentMax)}
          </RangeTooltip>
        ) : (
          valueFormat(currentMax)
        )}
      </motion.div>
      <div
        className={cn(theme.rangeHighlight.base, {
          [theme.rangeHighlight.disabled]: disabled,
        })}
        style={{
          width: `${maxPercentage - minPercentage}%`,
          marginLeft: `${minPercentage}%`,
        }}
      />
    </div>
  );
};
