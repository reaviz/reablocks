'use client';

import { MouseEvent, createContext, useContext } from 'react';

export interface EllipsisContextValue {
  /**
   * Whether the content is currently expanded to show all.
   */
  showAll: boolean;

  /**
   * Whether the content is currently truncated.
   */
  isTruncated: boolean;

  /**
   * Toggle between expanded and collapsed state.
   */
  toggleExpand: (event: MouseEvent) => void;

  /**
   * Label used for the expand action.
   */
  moreText: string;

  /**
   * Label used for the collapse action.
   */
  lessText: string;
}

export const EllipsisContext = createContext<EllipsisContextValue | null>(null);

/**
 * Hook to access the Ellipsis context. Must be used within an Ellipsis component.
 */
export const useEllipsisContext = () => {
  const context = useContext(EllipsisContext);
  if (!context) {
    throw new Error(
      'Ellipsis compound components must be used within an Ellipsis component'
    );
  }
  return context;
};
