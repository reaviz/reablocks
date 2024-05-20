import humanFormat from 'human-format';

export type FormatSizeTypes = number | string | null | undefined;

/**
 * Given a size, format it to a human readable string.
 *
 * @param size the size to format
 * @param emptyValue what to show when empty
 * @param scale the scale to format on
 * @param decimals number of decimal places
 * @returns formatted string
 */
export function formatSize(
  size: FormatSizeTypes,
  emptyValue = 'N/A',
  scale = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'],
  decimals = 2
) {
  let newSize = size;
  var binaryScale = humanFormat.Scale.create(scale, 1024);

  if (typeof size === 'string') {
    newSize = parseFloat(size as string);
  } else if (size === null || size === undefined) {
    return [emptyValue];
  }

  return humanFormat(newSize as number, {
    scale: binaryScale,
    decimals
  });
}
