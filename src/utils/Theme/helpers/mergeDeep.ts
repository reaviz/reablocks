import { cloneDeep } from './cloneDeep';
import { isObject } from './isObject';

type MergeFunction = (objValue: any, srcValue: any, key: string) => any;

/**
 * Deep-merges `source` into `target`, returning a new object.
 *
 * - When `mergeFunction` is provided, it is invoked first for every key. If
 *   it returns a non-`undefined` value, that value is used; returning
 *   `undefined` falls back to default merging.
 * - Default merging: plain objects on both sides are merged recursively;
 *   everything else (primitives, arrays, mismatched types) is taken from source.
 */
export function mergeDeep<T extends object, S extends object>(
  target: T,
  source: S,
  mergeFunction?: MergeFunction
): T & S {
  if (!isObject(target) || !isObject(source)) {
    return cloneDeep({ ...target, ...source }) as T & S;
  }

  const output: Record<string, unknown> = { ...target };

  for (const key in source) {
    const targetValue = (target as Record<string, unknown>)[key];
    const sourceValue = source[key];

    if (mergeFunction) {
      const merged = mergeFunction(targetValue, sourceValue, key);
      if (merged !== undefined) {
        output[key] = merged;
        continue;
      }
    }

    if (isObject(targetValue) && isObject(sourceValue)) {
      output[key] = mergeDeep(targetValue, sourceValue, mergeFunction);
    } else if (isObject(sourceValue)) {
      output[key] = cloneDeep(sourceValue);
    } else {
      output[key] = sourceValue;
    }
  }

  return output as T & S;
}
