/**
 * Masks a value by keeping the first and last characters and replacing the
 * middle with a repeated character.
 *
 * Behavior:
 * - Falsy values (undefined/null/'') return ''.
 * - Values with a length of 2 or less are returned unchanged.
 * - When `compactLength` is greater than 0, the middle is replaced with
 *   `character` repeated `compactLength` times, regardless of the value's
 *   length — long values stay compact and don't reveal their true length.
 * - When `compactLength` is 0, the middle is masked at the value's true length
 *   (length - 2 characters).
 */
export function maskValue(
  value: string | undefined,
  compactLength: number,
  character: string
): string {
  if (!value) {
    return '';
  }

  const str = String(value);

  if (str.length <= 2) {
    return str;
  }

  const middleLength = compactLength > 0 ? compactLength : str.length - 2;

  return str[0] + character.repeat(middleLength) + str[str.length - 1];
}
