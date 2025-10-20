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
   * Theme for the Skeleton.
   */
  theme?: SkeletonTheme;
}

export const Skeleton: FC<SkeletonProps> = ({
  className,
  style,
  animated = false,
  theme: customTheme,
  ...rest
}) => {
  const theme: SkeletonTheme = useComponentTheme('skeleton', customTheme);

  return (
    <div
      className={twMerge(theme.base, animated && theme.animated, className)}
      style={style}
      aria-busy="true"
      aria-live="polite"
      {...rest}
    />
  );
};
