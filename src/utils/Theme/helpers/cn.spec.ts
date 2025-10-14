import { describe, test, expect } from 'vitest';
import { cn, createCn } from './cn';

describe('cn', () => {
  test('should merge class names', () => {
    const result = cn('text-red-500', 'text-blue-500');
    expect(result).toBe('text-blue-500');
  });

  test('should handle conditional classes', () => {
    const isHidden = false;
    const result = cn('base-class', isHidden && 'hidden', 'visible');
    expect(result).toBe('base-class visible');
  });

  test('should merge tailwind classes correctly', () => {
    const result = cn('p-4', 'p-2');
    expect(result).toBe('p-2');
  });

  test('should handle arrays', () => {
    const result = cn(['text-red-500', 'bg-blue-500'], 'text-green-500');
    expect(result).toBe('bg-blue-500 text-green-500');
  });

  test('should handle objects', () => {
    const result = cn({ 'text-red-500': true, 'bg-blue-500': false });
    expect(result).toBe('text-red-500');
  });
});

describe('createCn', () => {
  test('should create a custom cn function', () => {
    const customCn = createCn({
      extend: {
        classGroups: {
          'font-size': [{ text: ['custom-size'] }]
        }
      }
    });

    expect(typeof customCn).toBe('function');
  });

  test('custom cn should merge classes', () => {
    const customCn = createCn({});
    const result = customCn('text-red-500', 'text-blue-500');
    expect(result).toBe('text-blue-500');
  });

  test('custom cn should respect custom config', () => {
    const customCn = createCn({
      extend: {
        classGroups: {
          'custom-group': ['custom-a', 'custom-b']
        },
        conflictingClassGroups: {
          'custom-group': ['text-color']
        }
      }
    });

    // Custom classes should work
    const result1 = customCn('custom-a', 'custom-b');
    expect(result1).toBe('custom-b');

    // Should still handle regular tailwind classes
    const result2 = customCn('p-4', 'p-2');
    expect(result2).toBe('p-2');
  });

  test('custom cn should handle conditional classes', () => {
    const customCn = createCn({});
    const isHidden = false;
    const result = customCn('base-class', isHidden && 'hidden', 'visible');
    expect(result).toBe('base-class visible');
  });

  test('custom cn with prefix override', () => {
    const customCn = createCn({
      prefix: 'tw-'
    });

    const result = customCn('tw-p-4', 'tw-p-2');
    expect(result).toBe('tw-p-2');
  });

  test('custom cn with separator override', () => {
    const customCn = createCn({
      separator: '_'
    });

    const result = customCn('hover_bg-blue-500', 'hover_bg-red-500');
    expect(result).toBe('hover_bg-red-500');
  });

  test('multiple custom cn instances should be independent', () => {
    const customCn1 = createCn({
      extend: {
        classGroups: {
          'custom-1': ['class-1']
        }
      }
    });

    const customCn2 = createCn({
      extend: {
        classGroups: {
          'custom-2': ['class-2']
        }
      }
    });

    // Both should work independently
    expect(typeof customCn1).toBe('function');
    expect(typeof customCn2).toBe('function');

    const result1 = customCn1('p-4', 'p-2');
    const result2 = customCn2('m-4', 'm-2');

    expect(result1).toBe('p-2');
    expect(result2).toBe('m-2');
  });
});
