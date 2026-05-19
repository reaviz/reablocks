export interface EllipsisTheme {
  /**
   * Outer container applied to the component.
   */
  base: string;

  /**
   * The text content wrapper configuration.
   */
  content: {
    /**
     * Base styling for the content wrapper.
     */
    base: string;

    /**
     * Classes added when truncation is active (e.g. gradient fade mask).
     */
    truncated: string;
  };

  /**
   * Configuration for the container holding the "Show more/less" button and dividers.
   */
  buttonContainer: {
    base: string;
    collapsed: string;
    expanded: string;
    divider: string;
    /**
     * Expand/collapse button (the "..." / "Show less" control).
     */
    expandButton: string;
  };

  /**
   * Class applied to the rich tooltip popover when `tooltip` is provided.
   */
  tooltip: string;

  /**
   * The inner wrapper for the tooltip content.
   */
  tooltipContent: string;
}

const baseTheme: EllipsisTheme = {
  base: 'relative group break-all',
  content: {
    base: 'min-w-0 w-full transition-all duration-300 wrap-break-word',
    truncated:
      'mask-[linear-gradient(to_bottom,black_50%,transparent_100%)] mask-size-[100%_200%] mask-position-[0_0] group-hover:mask-position-[0_100%]'
  },
  buttonContainer: {
    base: 'w-full flex flex-row items-center justify-center pointer-events-none',
    collapsed:
      'absolute bottom-0 left-0 translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pt-8',
    expanded: 'mt-0',
    divider: 'flex-1 opacity-40 drop-shadow-md',
    expandButton:
      'cursor-pointer text-[unset] p-0 border-[none] outline-hidden shrink-0 whitespace-nowrap mx-2 pointer-events-auto drop-shadow-md'
  },
  tooltip: 'max-w-[600px] w-auto',
  tooltipContent: 'text-inherit w-full whitespace-normal'
};

export const ellipsisTheme: EllipsisTheme = {
  ...baseTheme
};
