import humanFormat from 'human-format';

export type FormatSizeTypes = number | string | null | undefined;

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
