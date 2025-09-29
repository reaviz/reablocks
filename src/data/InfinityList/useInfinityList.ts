import { useCallback, useEffect, useMemo, useState } from 'react';

export interface InfinityListInputs {
  /**
   * The array of items to page on.
   */
  items: any[];

  /**
   * The page size. Combined with the threshold, this will determine the page size.
   */
  size?: number;

  /**
   * The fuzzy threshold to use when calculating the next page size.
   */
  threshold?: number;

  /**
   * The numer of items to show in the next page. If undefined, will use the size.
   * If you want to show all items, pass infinity.
   */
  nextSize?: number;
}

export const useInfinityList = ({
  items,
  threshold = 3,
  size = 10,
  nextSize
}: InfinityListInputs) => {
  const [index, setIndex] = useState<number>(0);
  const data = useMemo(() => [...items].slice(0, index), [index, items]);
  const hasMore = index < items.length;
  const remaining = items.length - index;

  const showNext = useCallback(
    (amount?: number) => {
      if (hasMore) {
        const nextAmount =
          nextSize === Infinity ? remaining : nextSize || amount || size;
        const newIndex = Math.min(items.length, index + nextAmount);
        setIndex(newIndex);
      }
    },
    [hasMore, index, size, items, remaining, nextSize]
  );

  useEffect(() => {
    const len = items?.length || 0;
    const endIdx =
      len <= size + threshold ? size + threshold : Math.min(len, size);

    setIndex(endIdx);
  }, [items.length, size, threshold]);

  return {
    data,
    hasMore,
    remaining,
    showNext
  };
};
