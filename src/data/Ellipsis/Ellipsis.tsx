import ellipsize from 'ellipsize';
import type { FC } from 'react';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import { useComponentTheme } from '@/utils';

import type { EllipsisTheme } from './EllipsisTheme';

export interface EllipsisProps {
  /**
   * The value to ellipsis.
   */
  value: string;

  /**
   * Whether you can expand or not. Default: true.
   */
  expandable?: boolean;

  /**
   * Limit of characters to show. Default: 256.
   */
  limit?: number;

  /**
   * The title text to show on the hover.
   */
  title?: string | false;

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
  value,
  className,
  title,
  removeLinebreaks = true,
  expandable = true,
  limit = 256,
  lines,
  moreText = '...',
  lessText = 'Show less',
  theme: customTheme
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [isTruncated, setIsTruncated] = useState<boolean>(false);
  const [isMeasured, setIsMeasured] = useState<boolean>(false);
  const [truncatedText, setTruncatedText] = useState<string>(value);
  const contentRef = useRef<HTMLDivElement>(null);
  const theme: EllipsisTheme = useComponentTheme('ellipsis', customTheme);

  const substr = useMemo(() => {
    const formatted = removeLinebreaks
      ? value.replace(/(\r\n|\n|\r)/gm, ' ')
      : value;
    return ellipsize(formatted, limit, { ellipse: expandable ? '' : '...' });
  }, [expandable, limit, value, removeLinebreaks]);

  const measureText = useCallback(() => {
    if (lines === undefined) {
      if (substr.length !== value.length) {
        setTruncatedText(substr);
        setIsTruncated(true);
      }
      setIsMeasured(true);
      return;
    }

    if (!contentRef.current) {
      return;
    }

    const content = contentRef.current;
    const lineHeight = parseInt(window.getComputedStyle(content).lineHeight);
    const maxHeight = lines ? lineHeight * lines : content.clientHeight;

    content.style.maxHeight = `${maxHeight}px`;
    content.style.overflow = 'hidden';

    let truncated = value;
    content.textContent = truncated + moreText;

    if (content.scrollHeight > maxHeight) {
      setIsTruncated(true);
      while (content.scrollHeight > maxHeight && truncated.length > 0) {
        truncated = truncated.slice(0, -1).trim();
        content.textContent = truncated + moreText;
      }
      setTruncatedText(truncated);
    } else {
      setIsTruncated(false);
      setTruncatedText(value);
    }

    content.style.maxHeight = '';
    content.style.overflow = '';
    setIsMeasured(true);
  }, [lines, value, moreText, substr]);

  useEffect(() => {
    // NOTE: The contentRef is used to measure the text. It must be a child of the parent element
    // and positioned as a block element (div). The contentRef is not used to render the text due
    // to the way wrapping works in CSS.
    measureText();
    if (lines !== undefined && typeof window !== 'undefined') {
      window.addEventListener('resize', measureText);
      return () => window.removeEventListener('resize', measureText);
    }
  }, [measureText, lines]);

  const toggleExpand = (event: React.MouseEvent) => {
    event.stopPropagation();
    setExpanded(!expanded);
  };

  return (
    <div className={className}>
      {!isMeasured && lines !== undefined && (
        <div ref={contentRef} className="invisible">
          {value}
        </div>
      )}
      {isMeasured && (
        <>
          <span title={title !== false ? title || value : undefined}>
            {expanded ? value : truncatedText}
          </span>
          {expandable && isTruncated && (
            <>
              {expanded ? ' ' : ''}
              <button
                type="button"
                title={
                  expanded
                    ? 'Click to show less'
                    : 'Click to view rest of content'
                }
                className={theme.dots}
                onClick={toggleExpand}
              >
                {expanded ? lessText : moreText}
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};
