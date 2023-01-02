import React, { FC, Children, Fragment } from 'react';
import { useInfinityList, InfinityListInputs } from './useInfinityList';

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
  size,
  threshold,
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

InfinityList.defaultProps = {
  size: 10,
  threshold: 3
};
