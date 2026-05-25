/**
 * Type guard for promise-like values. Returns true for native Promises
 * and any value exposing a callable `.then` method. Use this instead of
 * `instanceof Promise` so cross-realm promises and non-native promise
 * libraries (e.g. Bluebird) are also detected.
 */
export function isPromiseLike(value: unknown): value is PromiseLike<unknown> {
  return typeof (value as { then?: unknown } | null)?.then === 'function';
}
