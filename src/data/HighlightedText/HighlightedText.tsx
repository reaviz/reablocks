import React, { FC, Fragment, ReactNode } from 'react';
import { highlightChunks } from './utils';

export interface HighlightedTextProps {
  /**
   * The keyword to highlight within the text.
   */
  search?: string;

  /**
   * The content to highlight. Only string or number children are
   * highlighted; other nodes render unchanged.
   */
  children?: string | number | ReactNode;
}

/**
 * Renders text with every case-insensitive occurrence of `search` wrapped
 * in a `<mark>` element. Non-text children are rendered as-is.
 */
export const HighlightedText: FC<HighlightedTextProps> = ({
  search,
  children
}) =>
  typeof children === 'string' || typeof children === 'number' ? (
    <span>
      {highlightChunks(String(children), search ?? '').map((chunk, i) =>
        chunk.highlight ? (
          <mark key={i}>{chunk.text}</mark>
        ) : (
          <Fragment key={i}>{chunk.text}</Fragment>
        )
      )}
    </span>
  ) : (
    <>{children}</>
  );
