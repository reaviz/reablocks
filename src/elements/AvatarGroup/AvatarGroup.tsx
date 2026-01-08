import type { Ref } from 'react';
import React, { Children, forwardRef } from 'react';

import { useInfinityList } from '@/data';
import { useComponentTheme } from '@/utils';
import { twMerge } from '@/utils';

import type { AvatarGroupTheme } from './AvatarGroupTheme';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The avatars to display in the group.
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply to the avatar group
   */
  className?: string;

  /**
   * The maximum number of avatars to show before +x more
   */
  size?: number;

  /**
   * Theme for the AvatarGroup
   */
  theme?: AvatarGroupTheme;
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      children,
      className,
      size = 10,
      theme: customTheme,
      ...rest
    }: AvatarGroupProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const childrenArray = Children.toArray(children);

    const { data, hasMore, remaining } = useInfinityList({
      items: childrenArray,
      size
    });

    const theme: AvatarGroupTheme = useComponentTheme(
      'avatarGroup',
      customTheme
    );

    return (
      <div {...rest} ref={ref} className={twMerge(theme.base, className)}>
        {data.map((child, index) => (
          <div key={index} className={theme.avatar}>
            {child}
          </div>
        ))}
        {hasMore && <span className={theme.overflow}>+{remaining} more</span>}
      </div>
    );
  }
);
