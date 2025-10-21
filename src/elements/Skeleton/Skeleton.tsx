import React, { FC } from 'react';
import { SkeletonTheme } from './SkeletonTheme';
import { useComponentTheme } from '@/utils';
import { twMerge } from 'tailwind-merge';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Additional CSS class names to apply to the skeleton.
   */
  className?: string;

  /**
   * Inline styles to apply to the skeleton.
   */
  style?: React.CSSProperties;

  /**
   * Whether to show animated shimmer effect.
   * @default false
   */
  animated?: boolean;

  /**
   * Predefined variant for the skeleton.
   * - text: Single line of text (h-4 w-full)
   * - rounded: Circular shape for avatars (rounded-full w-10 h-10)
   * - rectangle: Wide rectangular shape (h-24 w-full)
   * - square: Square shape (w-24 h-24)
   */
  variant?: 'text' | 'rounded' | 'rectangle' | 'square' | string;

  /**
   * Theme for the Skeleton.
   */
  theme?: SkeletonTheme;
}

export const Skeleton: FC<SkeletonProps> = ({
  className,
  style,
  animated = false,
  variant,
  theme: customTheme,
  ...rest
}) => {
  const theme: SkeletonTheme = useComponentTheme('skeleton', customTheme);

  return (
    <div
      className={twMerge(
        theme.base,
        animated && theme.animated,
        variant && theme.variants[variant],
        className
      )}
      style={style}
      aria-busy="true"
      aria-live="polite"
      {...rest}
    />
  );
};
