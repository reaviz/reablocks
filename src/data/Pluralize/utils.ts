import pluralizeLib from 'pluralize';

export interface PluralizeInputs {
  /**
   * Count of items.
   */
  count: number;

  /**
   * Singular form of the word.
   */
  singular: string;

  /**
   * Plural form of the word. Not required.
   */
  plural?: string;

  /**
   * Zero state of the word. Not required.
   */
  zero?: string;

  /**
   * Show count in addition to word.
   */
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
