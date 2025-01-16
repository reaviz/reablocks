import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  FC,
  useMemo
} from 'react';
import { motion, useMotionValue } from 'motion/react';
import { RangeProps, RangeTooltip } from './RangeTooltip';
import { twMerge } from 'tailwind-merge';
import { cn, useComponentTheme } from '@/utils';
import { RangeTheme } from './RangeTheme';

export interface RangeSingleProps extends RangeProps<number> {
  /**
   * Display the highlight when true
   */
  showHighlight?: boolean;
}

export const RangeSingle: FC<RangeSingleProps> = ({
  disabled,
  style,
  handleClassName,
  onChange,
  className,
  min,
  max,
  value,
  valueDisplay = 'hover',
  valueFormat = value => value.toLocaleString(),
  step = 1,
  showHighlight = false,
  theme: customTheme
}) => {
  const [currentValue, setCurrentValue] = useState<number>(value);

  const range = useRef<HTMLDivElement | null>(null);
  const [rangeWidth, setRangeWidth] = useState(0);
  const [rangeLeft, setRangeLeft] = useState<number>(0);

  const valueX = useMotionValue(0);

  const fractionDigits = useMemo(
    () => step.toString()?.[1]?.length || 0,
    [step]
  );

  const getValue = (xPosition: number): number => {
    const draggedWidth = xPosition - rangeLeft;
    const draggedWidthPercentage = (draggedWidth * 100) / rangeWidth;
    const scaledStep = (step / (max - min)) * 100;
    const scaledValue =
      Math.round(draggedWidthPercentage / scaledStep) * scaledStep;
    const rawValue = min + ((max - min) * scaledValue) / 100;
    // Fix floating point precision. Example 3.50000000000000004
    const newValue =
      fractionDigits > 0 ? +rawValue.toFixed(fractionDigits) : rawValue;

    return Math.max(min, Math.min(newValue, max));
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
  const maxPercentage = ((currentValue - min) / (max - min)) * 100;

  const theme: RangeTheme = useComponentTheme('range', customTheme);

  return (
    <div
      ref={range}
      style={style}
      className={twMerge(theme.base, disabled && theme.disabled, className)}
    >
      <motion.div
        className={twMerge(theme.drag, handleClassName)}
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
        <div
          className={twMerge(
            theme.inputWrapper.base,
            disabled && theme.inputWrapper.disabled
          )}
        >
          <input
            type="range"
            className={theme.input}
            min={min}
            max={max}
            step={0.5}
            value={currentValue}
            disabled={disabled}
            onChange={e => updateCurrentValue(e.target.valueAsNumber)}
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
          />
        </div>
        {valueDisplay === 'hover' ? (
          <RangeTooltip visible={tooltipVisible}>
            {valueFormat(currentValue)}
          </RangeTooltip>
        ) : (
          valueFormat(currentValue)
        )}
      </motion.div>
      {showHighlight && (
        <div
          className={cn(theme.rangeHighlight.base, {
            [theme.rangeHighlight.disabled]: disabled
          })}
          style={{
            width: `${maxPercentage}%`
          }}
        />
      )}
    </div>
  );
};
