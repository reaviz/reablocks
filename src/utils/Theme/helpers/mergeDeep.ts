import mergeWith from 'lodash.mergewith';

/**
 * Merge and deep copy the values of all the enumerable own properties of target object from source object to a new object
 * @param target The target object to get properties from.
 * @param source The source object from which to copy properties.
 * @param mergeFunction
 * @return A new merged and deep copied object.
 */
export function mergeDeep<T extends object, S extends object>(
  target: T,
  source: S,
  mergeFunction?: (objValue: any, srcValue: any, key: string) => string
): T & S {
  return mergeWith({}, target, source, mergeFunction);
}
