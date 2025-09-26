import humanFormat from 'human-format';
import pluralize from 'pluralize';

export type DurationFormatTypes = number | string | null | undefined;

const timeScale = new humanFormat.Scale({
  ms: 1,
  s: 1 * 1000,
  min: 60 * 1000,
  hr: 3600 * 1000,
  day: 86400 * 1000,
  month: 2592000 * 1000,
});

export function formatDuration(
  time: DurationFormatTypes,
  emptyValue = 'N/A',
  zeroValue = '0 ms',
) {
  let newTime = time;

  // Try and tease out the different formats users might pass
  if (typeof time === 'string') {
    newTime = parseFloat(time as string);
  } else if (time === null || time === undefined) {
    return [emptyValue];
  }

  // Let's get the format and tease out the different values
  const humanized = humanFormat(newTime as number, { scale: timeScale });
  const [valueStr, unitStr] = humanized.split(' ');

  const value = parseFloat(valueStr);
  if (value === 0) {
    return zeroValue;
  } else if (value === 1) {
    return humanized;
  }

  if (
    unitStr === null ||
    unitStr === undefined ||
    value === null ||
    value === undefined
  ) {
    return [emptyValue];
  }

  return `${value} ${pluralize(unitStr, value)}`;
}
