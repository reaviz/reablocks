import { describe, test, expect } from 'vitest';

import { maskValue } from './utils';

describe('maskValue', () => {
  test('should return empty string for undefined', () => {
    expect(maskValue(undefined, 8, '*')).toBe('');
  });

  test('should return empty string for empty string', () => {
    expect(maskValue('', 8, '*')).toBe('');
  });

  test('should return single character values unchanged', () => {
    expect(maskValue('a', 8, '*')).toBe('a');
  });

  test('should return two character values unchanged', () => {
    expect(maskValue('ab', 8, '*')).toBe('ab');
  });

  test('should mask three character values to first + char*compactLength + last', () => {
    expect(maskValue('abc', 8, '*')).toBe('a********c');
  });

  test('should mask longer values to first + char*compactLength + last', () => {
    expect(maskValue('abcdef', 3, '*')).toBe('a***f');
  });

  test('should support a custom character', () => {
    expect(maskValue('abcdef', 4, '#')).toBe('a####f');
  });

  test('should mask at true length when compactLength is 0', () => {
    expect(maskValue('abcdef', 0, '*')).toBe('a****f');
  });

  test('should mask at true length with custom character when compactLength is 0', () => {
    expect(maskValue('password', 0, 'x')).toBe('pxxxxxxd');
  });

  test('should handle the default-ish case', () => {
    expect(maskValue('mypassword', 8, '*')).toBe('m********d');
  });
});
