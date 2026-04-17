import { cloneDeep } from './cloneDeep';
import { isObject } from './isObject';

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
  mergeFunction?: (
    objValue: any,
    srcValue: any,
    key: string
  ) => string | undefined
): T & S {
  if (isObject(source) && Object.keys(source).length === 0) {
    return cloneDeep({ ...target, ...source });
  }

  const output = { ...target, ...source };

  if (isObject(source) && isObject(target)) {
    for (const key in source) {
      if (isObject(source[key]) && key in target && isObject(target[key])) {
        (output as Record<string, unknown>)[key] = mergeDeep(
          target[key] as object,
          source[key] as object,
          mergeFunction
        );
      } else if (mergeFunction) {
        const merged = mergeFunction(target[key], source[key], key);
        (output as Record<string, unknown>)[key] =
          merged !== undefined
            ? merged
            : isObject(source[key])
              ? cloneDeep(source[key])
              : source[key];
      } else {
        (output as Record<string, unknown>)[key] = isObject(source[key])
          ? cloneDeep(source[key])
          : source[key];
      }
    }
  }

  return output;
}
