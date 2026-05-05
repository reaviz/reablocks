import { describe, test, expect } from 'vitest';
import { mergeThemeClasses } from './mergeThemeClasses';

describe('mergeThemeClasses', () => {
  describe('string inputs', () => {
    test('should concatenate two non-conflicting class strings', () => {
      expect(mergeThemeClasses('rounded p-2', 'shadow-md')).toBe(
        'rounded p-2 shadow-md'
      );
    });

    test('should let the second arg override conflicting tailwind utilities', () => {
      expect(mergeThemeClasses('p-2', 'p-4')).toBe('p-4');
      expect(mergeThemeClasses('bg-blue-500', 'bg-indigo-600')).toBe(
        'bg-indigo-600'
      );
    });

    test('should resolve conflicts inside multi-class strings via tailwind-merge', () => {
      expect(mergeThemeClasses('p-2 bg-blue-500', 'p-4 bg-indigo-600')).toBe(
        'p-4 bg-indigo-600'
      );
    });

    test('should preserve non-conflicting classes from both sides', () => {
      expect(mergeThemeClasses('rounded text-white', 'shadow font-bold')).toBe(
        'rounded text-white shadow font-bold'
      );
    });

    test('should handle empty source string', () => {
      expect(mergeThemeClasses('', 'shadow')).toBe('shadow');
    });

    test('should handle empty target string', () => {
      expect(mergeThemeClasses('rounded', '')).toBe('rounded');
    });

    test('should handle both strings empty', () => {
      expect(mergeThemeClasses('', '')).toBe('');
    });

    test('should handle responsive and state variants', () => {
      expect(
        mergeThemeClasses('p-2 hover:bg-blue-500', 'md:p-4 hover:bg-indigo-600')
      ).toBe('p-2 md:p-4 hover:bg-indigo-600');
    });

    test('should dedupe duplicated classes', () => {
      expect(mergeThemeClasses('rounded p-2', 'rounded shadow')).toBe(
        'p-2 rounded shadow'
      );
    });
  });

  describe('non-string inputs', () => {
    test('should return undefined when source is not a string', () => {
      expect(mergeThemeClasses({ x: 1 }, 'shadow')).toBeUndefined();
      expect(mergeThemeClasses(undefined, 'shadow')).toBeUndefined();
      expect(mergeThemeClasses(null, 'shadow')).toBeUndefined();
      expect(mergeThemeClasses(42, 'shadow')).toBeUndefined();
    });

    test('should return undefined when target is not a string', () => {
      expect(mergeThemeClasses('rounded', { x: 1 })).toBeUndefined();
      expect(mergeThemeClasses('rounded', undefined)).toBeUndefined();
      expect(mergeThemeClasses('rounded', null)).toBeUndefined();
      expect(mergeThemeClasses('rounded', 42)).toBeUndefined();
    });

    test('should return undefined when neither is a string', () => {
      expect(mergeThemeClasses({ x: 1 }, { y: 2 })).toBeUndefined();
      expect(mergeThemeClasses(undefined, undefined)).toBeUndefined();
      expect(mergeThemeClasses(null, null)).toBeUndefined();
    });
  });
});
