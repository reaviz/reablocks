import { differenceInSeconds, formatDistance } from 'date-fns';

export function getDifference(date: Date) {
  return differenceInSeconds(new Date(), date);
}

export interface FormatRelativeOptions {
  addSuffix?: boolean;
  includeSeconds?: boolean;
}

export function formatRelative(date: Date, options?: FormatRelativeOptions) {
  // Reference: https://gist.github.com/johndavedecano/0630b27d2c0a9d717ae6fe918edcf534
  const diff = getDifference(date);

  if (diff < 30) {
    return 'now';
  } else {
    return formatDistance(date, new Date(), options);
  }
}

export function getInterval(date: Date) {
  const diff = getDifference(date);

  if (diff < 3600) {
    return 60000;
  } else if (diff >= 3600 && diff <= 86400) {
    return 3600000;
  } else {
    return 0;
  }
}
