import clone from 'lodash.clonedeep';

/**
 * Deep clone an object.
 */
export function cloneDeep<T>(source: T): T {
  return clone<T>(source);
}
