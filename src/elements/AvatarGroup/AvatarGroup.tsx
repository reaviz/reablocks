import React, { Children, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import { useInfinityList } from '../../data/InfinityList';
import css from './AvatarGroup.module.css';

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

    return (
      <div {...rest} ref={ref} className={classNames(className, css.group)}>
        {data.map((child, index) => (
          <div key={index} className={css.avatar}>
            {child}
          </div>
        ))}
        {hasMore && <span className={css.overflow}>+{remaining} more</span>}
      </div>
    );
  }
);

AvatarGroup.defaultProps = {
  size: 10
};
