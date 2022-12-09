import humanFormat from 'human-format';

export type FormatSizeTypes = number | string | null | undefined;

export function formatSize(size: FormatSizeTypes) {
  let newSize = size;

  if (typeof size === 'string') {
    newSize = parseFloat(size as string);
  } else if (size === null || size === undefined) {
    return ['N/A'];
  }

  return humanFormat.bytes(newSize);
}
