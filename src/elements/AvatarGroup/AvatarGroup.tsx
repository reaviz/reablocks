import React, { Children, forwardRef, Ref } from 'react';
import { useInfinityList } from '../../data/InfinityList';
import { AvatarGroupTheme } from './AvatarGroupTheme';
import { useComponentTheme } from '../../utils/Theme/TW';
import { twMerge } from 'tailwind-merge';

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
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    { children, className, size, ...rest }: AvatarGroupProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const childrenArray = Children.toArray(children);

    const { data, hasMore, remaining } = useInfinityList({
      items: childrenArray,
      size
    });

    const theme: AvatarGroupTheme = useComponentTheme('avatarGroup');

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

AvatarGroup.defaultProps = {
  size: 10
};
