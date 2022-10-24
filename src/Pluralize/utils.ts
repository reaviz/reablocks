import pluralizeLib from 'pluralize';

export interface PluralizeInputs {
  count: number;
  singular: string;
  plural?: string;
  zero?: string;
  showCount?: boolean;
}

export const pluralize = ({
  count,
  zero,
  singular,
  plural,
  showCount
}: PluralizeInputs) => {
  if (count === 0 && zero) {
    return zero;
  }

  let returnedString = singular;
  if (count !== 1) {
    returnedString = plural || pluralizeLib(singular, count);
  }

  return showCount
    ? `${count.toLocaleString()} ${returnedString}`
    : returnedString;
};
