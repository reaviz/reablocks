import { describe, test, expect, vi } from 'vitest';
import { mergeDeep } from './mergeDeep';
import { mergeThemeClasses } from './mergeThemeClasses';

describe('mergeDeep', () => {
  describe('basic merging', () => {
    test('should merge two flat objects', () => {
      const target = { a: 1, b: 2 };
      const source = { b: 3, c: 4 };

      expect(mergeDeep(target, source)).toEqual({ a: 1, b: 3, c: 4 });
    });

    test('should merge nested objects', () => {
      const target = { a: { x: 1, y: 2 } };
      const source = { a: { y: 3, z: 4 } };

      expect(mergeDeep(target, source)).toEqual({ a: { x: 1, y: 3, z: 4 } });
    });

    test('should override primitive values from source', () => {
      const target = { a: 'old', n: 1, b: true };
      const source = { a: 'new', n: 2, b: false };

      expect(mergeDeep(target, source)).toEqual({ a: 'new', n: 2, b: false });
    });

    test('should add keys present only in source', () => {
      const target = { a: 1 };
      const source = { b: 2, c: { d: 3 } };

      expect(mergeDeep(target, source)).toEqual({ a: 1, b: 2, c: { d: 3 } });
    });

    test('should preserve keys present only in target', () => {
      const target = { a: 1, b: { x: 1 } };
      const source = { c: 2 };

      expect(mergeDeep(target, source)).toEqual({
        a: 1,
        b: { x: 1 },
        c: 2
      });
    });

    test('should deeply merge multiple levels', () => {
      const target = { a: { b: { c: { d: 1, e: 2 } } } };
      const source = { a: { b: { c: { e: 3, f: 4 } } } };

      expect(mergeDeep(target, source)).toEqual({
        a: { b: { c: { d: 1, e: 3, f: 4 } } }
      });
    });
  });

  describe('immutability', () => {
    test('should not mutate the target', () => {
      const target = { a: { x: 1 }, b: 2 };
      const source = { a: { x: 9 }, c: 3 };
      const targetSnapshot = JSON.parse(JSON.stringify(target));

      mergeDeep(target, source);

      expect(target).toEqual(targetSnapshot);
    });

    test('should not mutate the source', () => {
      const target = { a: { x: 1 } };
      const source = { a: { y: 2 }, b: { z: 3 } };
      const sourceSnapshot = JSON.parse(JSON.stringify(source));

      mergeDeep(target, source);

      expect(source).toEqual(sourceSnapshot);
    });

    test('should deep-clone source-only object values so result is independent', () => {
      const target = { a: 1 };
      const source = { b: { x: 1 } };

      const result = mergeDeep(target, source) as { b: { x: number } };
      result.b.x = 99;

      expect(source.b.x).toBe(1);
    });
  });

  describe('empty source', () => {
    test('should return target equivalent when source is empty', () => {
      const target = { a: { x: 1 }, b: 2 };

      const result = mergeDeep(target, {});

      expect(result).toEqual(target);
      expect(result).not.toBe(target);
    });
  });

  describe('type mismatches between target and source', () => {
    test('source object replaces target primitive', () => {
      const target = { a: 1 };
      const source = { a: { x: 1 } };

      expect(mergeDeep(target, source)).toEqual({ a: { x: 1 } });
    });

    test('source primitive replaces target object', () => {
      const target = { a: { x: 1 } };
      const source = { a: 'hello' };

      expect(mergeDeep(target, source)).toEqual({ a: 'hello' });
    });

    test('should treat arrays as leaf values (replace, not merge)', () => {
      const target = { a: [1, 2, 3] };
      const source = { a: [4, 5] };

      expect(mergeDeep(target, source)).toEqual({ a: [4, 5] });
    });

    test('should replace target object with source array', () => {
      const target = { a: { x: 1 } };
      const source = { a: [1, 2] };

      expect(mergeDeep(target, source)).toEqual({ a: [1, 2] });
    });
  });

  describe('null and undefined values', () => {
    test('should replace target value with null from source', () => {
      const target = { a: { x: 1 } };
      const source = { a: null };

      expect(mergeDeep(target, source)).toEqual({ a: null });
    });

    test('should replace target value with undefined from source', () => {
      const target = { a: 1 };
      const source = { a: undefined };

      expect(mergeDeep(target, source)).toEqual({ a: undefined });
    });
  });

  describe('mergeFunction (customizer)', () => {
    test('should invoke mergeFunction for primitive leaves', () => {
      const merger = vi.fn((targetVal, srcVal) => `${targetVal}+${srcVal}`);
      const target = { a: 'x', b: 'y' };
      const source = { a: '1', b: '2' };

      const result = mergeDeep(target, source, merger);

      expect(result).toEqual({ a: 'x+1', b: 'y+2' });
      expect(merger).toHaveBeenCalledTimes(2);
      expect(merger).toHaveBeenCalledWith('x', '1', 'a');
      expect(merger).toHaveBeenCalledWith('y', '2', 'b');
    });

    test('should invoke mergeFunction first at every level (including object/object)', () => {
      const merger = vi.fn((_t, s) => s);
      const target = { a: { x: 'old' } };
      const source = { a: { x: 'new' } };

      mergeDeep(target, source, merger);

      expect(merger).toHaveBeenCalledWith({ x: 'old' }, { x: 'new' }, 'a');
    });

    test('should fall back to recursion when mergeFunction returns undefined for object/object', () => {
      const merger = vi.fn((t, s) =>
        typeof t === 'string' && typeof s === 'string' ? `${t}+${s}` : undefined
      );
      const target = { a: { x: 'old' } };
      const source = { a: { x: 'new' } };

      const result = mergeDeep(target, source, merger);

      expect(result).toEqual({ a: { x: 'old+new' } });
    });

    test('should fall back to default merge when mergeFunction returns undefined', () => {
      const merger = vi.fn(() => undefined);
      const target = { a: 1, b: { x: 2 } };
      const source = { a: 9, b: { x: 8 } };

      const result = mergeDeep(target, source, merger);

      expect(result).toEqual({ a: 9, b: { x: 8 } });
    });

    test('should invoke mergeFunction when source value is object but target value is not', () => {
      const merger = vi.fn(() => 'merged');
      const target = { a: 'string' };
      const source = { a: { x: 1 } };

      const result = mergeDeep(target, source, merger);

      expect(result).toEqual({ a: 'merged' });
      expect(merger).toHaveBeenCalledWith('string', { x: 1 }, 'a');
    });

    test('should invoke mergeFunction when target key is missing', () => {
      const merger = vi.fn((_t, s) => `merged:${s}`);
      const target = {};
      const source = { a: 'value' };

      const result = mergeDeep(target, source, merger);

      expect(result).toEqual({ a: 'merged:value' });
      expect(merger).toHaveBeenCalledWith(undefined, 'value', 'a');
    });

    test('should pass key name as third argument', () => {
      const keys: string[] = [];
      const merger = (_t: any, s: any, k: string) => {
        keys.push(k);
        return typeof s === 'object' ? undefined : s;
      };
      mergeDeep({ a: 1, b: { c: 2 } }, { a: 9, b: { c: 8 } }, merger);

      expect(keys).toEqual(['a', 'b', 'c']);
    });

    test('mergeFunction return value should win over default deep-merge for object/object', () => {
      const merger = vi.fn(() => 'REPLACED');
      const target = { a: { x: 'old' } };
      const source = { a: { x: 'new' } };

      const result = mergeDeep(target, source, merger);

      // If the return value were ignored, the default merge would yield
      // { a: { x: 'new' } } instead of { a: 'REPLACED' }.
      expect(result).toEqual({ a: 'REPLACED' });
    });

    test('mergeFunction return value should win over cloneDeep when source is object', () => {
      const merger = vi.fn(() => 'REPLACED');
      const target = { a: 1 };
      const source = { a: { x: 1 } };

      const result = mergeDeep(target, source, merger);

      expect(result).toEqual({ a: 'REPLACED' });
    });

    test('mergeFunction should not recurse into source after returning a value', () => {
      const merger = vi.fn((_t, s) =>
        typeof s === 'object' && s !== null ? 'STOPPED' : undefined
      );
      const target = { a: { deep: { x: 1 } } };
      const source = { a: { deep: { x: 2 } } };

      mergeDeep(target, source, merger);

      // Should be called once for top-level 'a' (returns 'STOPPED'), then stop.
      expect(merger).toHaveBeenCalledTimes(1);
      expect(merger).toHaveBeenCalledWith(
        { deep: { x: 1 } },
        { deep: { x: 2 } },
        'a'
      );
    });

    test.each([
      ['null', null],
      ['empty string', ''],
      ['zero', 0],
      ['false', false]
    ])(
      'falsy non-undefined return (%s) should be respected',
      (_label, value) => {
        const merger = vi.fn(() => value);
        const target = { a: 'old', b: { x: 1 } };
        const source = { a: 'new', b: { x: 2 } };

        const result = mergeDeep(target, source, merger);

        expect(result).toEqual({ a: value, b: value });
      }
    );
  });

  describe('theme-style merging (real-world use)', () => {
    test('should merge theme classes via mergeFunction customizer', () => {
      const join = (t: any, s: any) =>
        typeof t === 'string' && typeof s === 'string'
          ? `${t} ${s}`
          : undefined;

      const target = {
        button: {
          base: 'rounded p-2',
          variants: { primary: 'bg-blue-500' }
        }
      };
      const source = {
        button: {
          base: 'shadow',
          variants: { primary: 'bg-indigo-600' }
        }
      };

      const result = mergeDeep(target, source, join);

      expect(result).toEqual({
        button: {
          base: 'rounded p-2 shadow',
          variants: { primary: 'bg-blue-500 bg-indigo-600' }
        }
      });
    });

    test('mergeThemeClasses: should append source tailwind classes to target', () => {
      const target = {
        button: {
          base: 'rounded p-2',
          variants: { primary: 'text-white' }
        }
      };
      const source = {
        button: {
          base: 'shadow-md',
          variants: { primary: 'font-bold' }
        }
      };

      const result = mergeDeep(target, source, mergeThemeClasses);

      expect(result).toEqual({
        button: {
          base: 'rounded p-2 shadow-md',
          variants: { primary: 'text-white font-bold' }
        }
      });
    });

    test('mergeThemeClasses: should let later tailwind utilities override conflicting earlier ones', () => {
      const target = { button: { base: 'p-2 bg-blue-500' } };
      const source = { button: { base: 'p-4 bg-indigo-600' } };

      const result = mergeDeep(target, source, mergeThemeClasses) as {
        button: { base: string };
      };

      // tailwind-merge resolves conflicting utilities; the source value wins.
      expect(result.button.base).toBe('p-4 bg-indigo-600');
    });

    test('mergeThemeClasses: should preserve target-only branches when override is partial', () => {
      const target = {
        button: {
          base: 'btn',
          size: { sm: 'text-sm', md: 'text-base' }
        },
        input: { base: 'input border' }
      };
      const source = { button: { base: 'shadow' } };

      const result = mergeDeep(target, source, mergeThemeClasses);

      expect(result).toEqual({
        button: {
          base: 'btn shadow',
          size: { sm: 'text-sm', md: 'text-base' }
        },
        input: { base: 'input border' }
      });
    });

    test('mergeThemeClasses: should add source-only keys when target has no entry', () => {
      const target = { button: { base: 'btn' } };
      const source = {
        button: { base: 'shadow' },
        input: { base: 'input' }
      };

      const result = mergeDeep(target, source, mergeThemeClasses);

      expect(result).toEqual({
        button: { base: 'btn shadow' },
        input: { base: 'input' }
      });
    });

    test('should preserve target-only branches after merge', () => {
      const target = {
        button: { base: 'btn', size: { sm: 'text-sm' } },
        input: { base: 'input' }
      };
      const source = { button: { base: 'shadow' } };

      const result = mergeDeep(target, source);

      expect(result).toEqual({
        button: { base: 'shadow', size: { sm: 'text-sm' } },
        input: { base: 'input' }
      });
    });
  });

  describe('return value structure', () => {
    test('should be a new object distinct from target and source', () => {
      const target = { a: 1 };
      const source = { b: 2 };

      const result = mergeDeep(target, source);

      expect(result).not.toBe(target);
      expect(result).not.toBe(source);
    });
  });
});
