export interface HighlightChunk {
  /** A contiguous segment of the original text. */
  text: string;
  /** Whether this segment is a case-insensitive match of the keyword. */
  highlight: boolean;
}

/**
 * Splits `text` into ordered chunks covering the full string, flagging every
 * non-overlapping, case-insensitive occurrence of `keyword` as highlighted.
 *
 * The keyword is matched as a literal substring (no regex), so characters like
 * `(` or `.` are treated literally. Matches advance by `keyword.length`,
 * mirroring the 'g' flag semantics used by react-highlight-words.
 */
export const highlightChunks = (
  text: string,
  keyword: string
): HighlightChunk[] => {
  if (!keyword || !text) {
    return [{ text, highlight: false }];
  }

  const chunks: HighlightChunk[] = [];
  const haystack = text.toLowerCase();
  const needle = keyword.toLowerCase();

  let lastIndex = 0;
  let matchIndex = haystack.indexOf(needle, lastIndex);

  while (matchIndex !== -1) {
    if (matchIndex > lastIndex) {
      chunks.push({
        text: text.slice(lastIndex, matchIndex),
        highlight: false
      });
    }

    chunks.push({
      text: text.slice(matchIndex, matchIndex + needle.length),
      highlight: true
    });

    lastIndex = matchIndex + needle.length;
    matchIndex = haystack.indexOf(needle, lastIndex);
  }

  if (lastIndex < text.length) {
    chunks.push({ text: text.slice(lastIndex), highlight: false });
  }

  return chunks;
};
