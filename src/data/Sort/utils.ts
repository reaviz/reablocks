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

export function getNextDirection(direction?: SortDirection | null) {
  if (!direction) {
    return 'asc';
  } else if (direction === 'asc') {
    return 'desc';
  } else if (direction === 'desc') {
    return null;
  }
}
