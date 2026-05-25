import { describe, test, expect } from 'vitest';
import { isPromiseLike } from './isPromiseLike';

describe('isPromiseLike', () => {
  test('detects native Promises', () => {
    expect(isPromiseLike(Promise.resolve())).toBe(true);
    expect(isPromiseLike(Promise.reject().catch(() => {}))).toBe(true);
    expect(isPromiseLike(new Promise(() => {}))).toBe(true);
  });

  test('detects thenables (objects with a .then function)', () => {
    expect(isPromiseLike({ then: () => {} })).toBe(true);
  });

  test('detects thenable functions', () => {
    const thenableFn = Object.assign(() => {}, { then: () => {} });
    expect(isPromiseLike(thenableFn)).toBe(true);
  });

  test('detects async function return values', () => {
    const asyncFn = async () => 42;
    expect(isPromiseLike(asyncFn())).toBe(true);
  });

  test('rejects plain objects without .then', () => {
    expect(isPromiseLike({})).toBe(false);
    expect(isPromiseLike({ foo: 'bar' })).toBe(false);
  });

  test('rejects objects whose .then is not a function', () => {
    expect(isPromiseLike({ then: 'not a function' })).toBe(false);
    expect(isPromiseLike({ then: 42 })).toBe(false);
    expect(isPromiseLike({ then: null })).toBe(false);
  });

  test('rejects primitives and nullish values', () => {
    expect(isPromiseLike(undefined)).toBe(false);
    expect(isPromiseLike(null)).toBe(false);
    expect(isPromiseLike(0)).toBe(false);
    expect(isPromiseLike('')).toBe(false);
    expect(isPromiseLike(false)).toBe(false);
    expect(isPromiseLike(42)).toBe(false);
    expect(isPromiseLike('promise')).toBe(false);
    expect(isPromiseLike(true)).toBe(false);
  });

  test('rejects arrays', () => {
    expect(isPromiseLike([])).toBe(false);
    expect(isPromiseLike([1, 2, 3])).toBe(false);
  });
});
