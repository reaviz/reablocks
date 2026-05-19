import React, {
  Children,
  FC,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import ellipsize from 'ellipsize';
import { EllipsisTheme } from './EllipsisTheme';
import {
  useComponentTheme,
  cn,
  hasSlotComponents,
  extractSlots
} from '@/utils';
import { Tooltip } from '@/layers/Tooltip';
import { EllipsisContext, EllipsisContextValue } from './EllipsisContext';
import { EllipsisButton } from './EllipsisButton';

export interface EllipsisProps {
  /**
   * The value to ellipsis. Optional if children are provided.
   * @deprecated Use `children` instead.
   */
  value?: string;

  /**
   * Children components for CSS-based truncation.
   */
  children?: ReactNode;

  /**
   * Class name for the tooltip.
   */
  tooltipClassName?: string;

  /**
   * Whether you can expand or not. Default: true.
   */
  expandable?: boolean;

  /**
   * Limit of characters to show. Default: 256.
   */
  limit?: number;

  /**
   * The title text to show on the hover in the Tooltip.
   */
  title?: string | false;

  /**
   * Delay in milliseconds before showing the tooltip. Default: 200.
   */
  tooltipEnterDelay?: number;

  /**
   * Remove line breaks or not.
   */
  removeLinebreaks?: boolean;

  /**
   * Class name for the container.
   */
  className?: string;

  /**
   * Theme for the Ellipsis.
   */
  theme?: EllipsisTheme;

  /**
   * Number of lines to show before truncation. If set, overrides the character limit.
   */
  lines?: number;

  /**
   * Custom text for the expand button. Default: "..."
   */
  moreText?: string;

  /**
   * Custom text for the collapse button. Default: "Show less"
   */
  lessText?: string;
}

export const Ellipsis: FC<EllipsisProps> = ({
  value = '',
  children,
  tooltipClassName,
  className,
  title,
  tooltipEnterDelay = 200,
  removeLinebreaks = true,
  expandable = true,
  limit = 256,
  lines,
  moreText = 'Show more',
  lessText = 'Show less',
  theme: customTheme
}) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isTruncated, setIsTruncated] = useState<boolean>(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const theme: EllipsisTheme = useComponentTheme('ellipsis', customTheme);

  // Detect EllipsisButton slot and split it out from the content children.
  const useSlots = useMemo(
    () => hasSlotComponents(children, ['EllipsisButton']),
    [children]
  );

  const slots = useMemo(
    () =>
      useSlots
        ? extractSlots<{ button: ReactNode }>(children, {
            EllipsisButton: 'button'
          })
        : null,
    [useSlots, children]
  );

  const contentChildren: ReactNode = slots ? slots.other : children;
  const hasChildren = slots
    ? slots.other.length > 0
    : Children.count(children) > 0;

  const substr = useMemo(() => {
    if (hasChildren) return '';
    const formatted = removeLinebreaks
      ? value.replace(/(\r\n|\n|\r)/gm, ' ')
      : value;

    return ellipsize(formatted, limit, { ellipse: '...' });
  }, [hasChildren, limit, value, removeLinebreaks]);

  const isCharTruncated =
    !hasChildren && lines === undefined && substr.length !== value.length;

  const checkTruncation = useCallback(() => {
    const el = contentRef.current;
    if (!el) return;

    let truncated = false;
    if (hasChildren || lines !== undefined) {
      truncated = el.scrollHeight > el.clientHeight;
    } else {
      truncated = isCharTruncated;
    }

    setIsTruncated(truncated);
  }, [hasChildren, lines, isCharTruncated]);

  useEffect(() => {
    checkTruncation();

    const el = contentRef.current;
    if (!el) return;

    const resizeObserver = new ResizeObserver(() => {
      checkTruncation();
    });
    resizeObserver.observe(el);

    return () => {
      resizeObserver.disconnect();
    };
  }, [checkTruncation]);

  const toggleExpand = useCallback((event: MouseEvent) => {
    event.stopPropagation();
    setShowAll(prev => !prev);
  }, []);

  // Resolve Truncation Active
  const renderButton = expandable && (isTruncated || showAll);

  const appliedLines = lines ?? 1;

  // Decide what to render inside the wrapper
  let content: ReactNode;
  if (hasChildren) {
    content = contentChildren;
  } else if (lines !== undefined) {
    // CSS line-clamp handles truncation natively, render the full value
    content = value;
  } else {
    // Character limit path — swap to full value when expanded
    content = showAll ? value : substr;
  }

  const finalTooltip =
    title !== false ? title || (!hasChildren ? value : null) : null;

  const contextValue: EllipsisContextValue = useMemo(
    () => ({ showAll, isTruncated, toggleExpand, moreText, lessText }),
    [showAll, isTruncated, toggleExpand, moreText, lessText]
  );

  return (
    <EllipsisContext.Provider value={contextValue}>
      <div className={cn(theme.base, className)}>
        <Tooltip
          arrow
          className={cn(theme.tooltip, tooltipClassName)}
          content={
            isTruncated && !showAll && finalTooltip ? (
              <div className={theme.tooltipContent}>{finalTooltip}</div>
            ) : null
          }
          enterDelay={tooltipEnterDelay}
        >
          <div
            ref={contentRef}
            className={cn(theme.content.base, {
              [`line-clamp-${appliedLines}`]:
                (hasChildren || lines !== undefined) && !showAll,
              [theme.content.truncated]: expandable && isTruncated && !showAll
            })}
          >
            {content}
          </div>
        </Tooltip>
        {renderButton && (slots?.button ?? <EllipsisButton />)}
      </div>
    </EllipsisContext.Provider>
  );
};
