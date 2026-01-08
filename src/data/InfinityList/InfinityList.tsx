import type { FC } from 'react';
import React, { Children, Fragment } from 'react';

import type { InfinityListInputs } from './useInfinityList';
import { useInfinityList } from './useInfinityList';

export interface InfinityListProps extends Omit<InfinityListInputs, 'items'> {
  /**
   * The children to filter.
   */
  children: any;

  /**
   * CSS Classname to apply to the button.
   */
  buttonClassName?: string;
}

export const InfinityList: FC<InfinityListProps> = ({
  children,
  size = 10,
  threshold = 3,
  nextSize,
  buttonClassName
}) => {
  const arr = Children.toArray(children);
  const { data, hasMore, remaining, showNext } = useInfinityList({
    items: arr,
    size,
    threshold,
    nextSize
  });

  return (
    <>
      {data.map((child, i) => (
        <Fragment key={i}>{child}</Fragment>
      ))}
      {hasMore && (
        <button
          className={buttonClassName}
          onClick={event => {
            event.stopPropagation();
            showNext();
          }}
        >
          Show {Math.min(size, remaining)} more
        </button>
      )}
    </>
  );
};
