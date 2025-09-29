export type SortDirection = 'asc' | 'desc' | null;

export interface SortValue {
  /**
   * The field to sort by.
   */
  field: string;

  /**
   * The direction to sort by.
   */
  direction: SortDirection;
}

/**
 * @param direction Current sort direction
 *
 * @param defaultDirection Inital sort direction in case currently unsorted
 *
 * @param canBeNull If next direction can be null (unsorted)
 */
export function getNextDirection(
  direction?: SortDirection | null,
  defaultDirection: NonNullable<SortDirection> = 'asc',
  canBeNull: boolean = true
) {
  if (!direction) {
    return defaultDirection;
  } else if (direction === 'asc') {
    return 'desc';
  } else if (direction === 'desc') {
    return canBeNull ? null : 'asc';
  }
}
