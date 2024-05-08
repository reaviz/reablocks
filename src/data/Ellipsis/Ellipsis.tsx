import React, { FC, useState, useMemo } from 'react';
import ellipsize from 'ellipsize';
import { EllipsisTheme } from './EllipsisTheme';
import { useComponentTheme } from '@/utils';

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
}

export const Ellipsis: FC<EllipsisProps> = ({
  value,
  className,
  title,
  removeLinebreaks = true,
  expandable = true,
  limit = 256,
  theme: customTheme
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const substr = useMemo(() => {
    const formatted = removeLinebreaks
      ? value.replace(/(\r\n|\n|\r)/gm, ' ')
      : value;
    return ellipsize(formatted, limit, { ellipse: expandable ? '' : '...' });
  }, [expandable, limit, value, removeLinebreaks]);

  const theme: EllipsisTheme = useComponentTheme('ellipsis', customTheme);

  return (
    <span className={className}>
      {expanded ? (
        value
      ) : (
        <span title={title !== false ? title || value : undefined}>
          {substr}
        </span>
      )}
      {expandable && !expanded && value.length > limit && (
        <button
          type="button"
          title="Click to view rest of content"
          className={theme.dots}
          onClick={event => {
            event.stopPropagation();
            setExpanded(true);
          }}
        >
          ...
        </button>
      )}
    </span>
  );
};
