import { useEffect, useRef, useState } from 'react';

interface UseContentHeightOptions {
  /**
   * Number of panes to track (default: 1)
   */
  paneCount?: number;
}

interface UseContentHeightResult {
  /**
   * Refs to attach to the content elements
   */
  contentRefs: React.MutableRefObject<Array<HTMLDivElement | null>>;

  /**
   * Heights for each pane
   */
  contentHeights: Record<number, number>;

  /**
   * Get the style object for a specific pane
   */
  getHeightStyle: (paneIndex: number) => {
    height: string;
    transition: string;
  };
}

/**
 * Hook to preserve content height during view transitions
 */
export const useContentHeight = (
  options: UseContentHeightOptions = {}
): UseContentHeightResult => {
  const { paneCount = 1 } = options;

  const [contentHeights, setContentHeights] = useState<Record<number, number>>(
    {}
  );
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observers: ResizeObserver[] = [];

    Array.from({ length: paneCount }).forEach((_, paneIndex) => {
      const element = contentRefs.current[paneIndex];
      if (!element) return;

      const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          const height = entry.contentRect.height;
          if (height > 0) {
            setContentHeights(prev => ({
              ...prev,
              [paneIndex]: height
            }));
          }
        }
      });

      resizeObserver.observe(element);
      observers.push(resizeObserver);
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, [paneCount]);

  const getHeightStyle = (paneIndex: number) => ({
    height: contentHeights[paneIndex]
      ? `${contentHeights[paneIndex]}px`
      : 'auto',
    transition: 'height 0.1s ease-in-out'
  });

  return {
    contentRefs,
    contentHeights,
    getHeightStyle
  };
};
