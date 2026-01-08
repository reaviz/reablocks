import { describe, expect, test } from 'vitest';

import { generateColor } from './stringToColor';

describe('generateColor', () => {
  describe('consistency', () => {
    test('should generate the same color for the same input', () => {
      const input = 'John Doe';
      const color1 = generateColor(input);
      const color2 = generateColor(input);

      expect(color1).toBe(color2);
    });

    test('should generate consistent colors across multiple calls', () => {
      const inputs = ['Alice', 'Bob', 'Charlie'];
      const firstRun = inputs.map(name => generateColor(name));
      const secondRun = inputs.map(name => generateColor(name));

      expect(firstRun).toEqual(secondRun);
    });
  });

  describe('uniqueness', () => {
    test('should generate different colors for different inputs', () => {
      const color1 = generateColor('Alice');
      const color2 = generateColor('Bob');
      const color3 = generateColor('Charlie');

      expect(color1).not.toBe(color2);
      expect(color2).not.toBe(color3);
      expect(color1).not.toBe(color3);
    });

    test('should be case-sensitive', () => {
      const lowercase = generateColor('john');
      const uppercase = generateColor('JOHN');
      const mixedcase = generateColor('John');

      expect(lowercase).not.toBe(uppercase);
      expect(lowercase).not.toBe(mixedcase);
      expect(uppercase).not.toBe(mixedcase);
    });
  });

  describe('default behavior', () => {
    test('should return HSL color string with default options', () => {
      const color = generateColor('test');

      expect(color).toMatch(/^hsl\(\d+, 65%, 50%\)$/);
    });

    test('should handle empty string', () => {
      const color = generateColor('');

      expect(color).toMatch(/^hsl\(\d+, 65%, 50%\)$/);
    });

    test('should generate colors within valid hue range (0-360)', () => {
      const inputs = ['a', 'test', 'John Doe', 'Very Long Name Here'];

      inputs.forEach(input => {
        const color = generateColor(input);
        const hueMatch = color.match(/hsl\((\d+),/);
        expect(hueMatch).not.toBeNull();

        if (hueMatch) {
          const hue = parseInt(hueMatch[1], 10);
          expect(hue).toBeGreaterThanOrEqual(0);
          expect(hue).toBeLessThan(360);
        }
      });
    });
  });

  describe('custom saturation', () => {
    test('should respect custom saturation value', () => {
      const color = generateColor('test', { saturation: 80 });

      expect(color).toMatch(/^hsl\(\d+, 80%, 50%\)$/);
    });

    test('should handle saturation of 0', () => {
      const color = generateColor('test', { saturation: 0 });

      expect(color).toMatch(/^hsl\(\d+, 0%, 50%\)$/);
    });

    test('should handle saturation of 100', () => {
      const color = generateColor('test', { saturation: 100 });

      expect(color).toMatch(/^hsl\(\d+, 100%, 50%\)$/);
    });
  });

  describe('custom lightness', () => {
    test('should respect custom lightness value', () => {
      const color = generateColor('test', { lightness: 60 });

      expect(color).toMatch(/^hsl\(\d+, 65%, 60%\)$/);
    });

    test('should handle lightness of 0', () => {
      const color = generateColor('test', { lightness: 0 });

      expect(color).toMatch(/^hsl\(\d+, 65%, 0%\)$/);
    });

    test('should handle lightness of 100', () => {
      const color = generateColor('test', { lightness: 100 });

      expect(color).toMatch(/^hsl\(\d+, 65%, 100%\)$/);
    });
  });

  describe('alpha channel', () => {
    test('should return HSLA format when alpha is not 100', () => {
      const color = generateColor('test', { alpha: 50 });

      expect(color).toMatch(/^hsla\(\d+, 65%, 50%, 0\.5\)$/);
    });

    test('should return HSL format when alpha is 100', () => {
      const color = generateColor('test', { alpha: 100 });

      expect(color).toMatch(/^hsl\(\d+, 65%, 50%\)$/);
      expect(color).not.toContain('hsla');
    });

    test('should handle alpha of 0 (fully transparent)', () => {
      const color = generateColor('test', { alpha: 0 });

      expect(color).toMatch(/^hsla\(\d+, 65%, 50%, 0\)$/);
    });

    test('should convert alpha to decimal correctly', () => {
      const testCases = [
        { alpha: 25, expected: '0.25' },
        { alpha: 50, expected: '0.5' },
        { alpha: 75, expected: '0.75' },
        { alpha: 10, expected: '0.1' }
      ];

      testCases.forEach(({ alpha, expected }) => {
        const color = generateColor('test', { alpha });
        expect(color).toContain(expected);
      });
    });
  });

  describe('combined options', () => {
    test('should respect all custom options together', () => {
      const color = generateColor('test', {
        saturation: 80,
        lightness: 60,
        alpha: 50
      });

      expect(color).toMatch(/^hsla\(\d+, 80%, 60%, 0\.5\)$/);
    });

    test('should allow partial options', () => {
      const color = generateColor('test', { saturation: 75 });

      expect(color).toMatch(/^hsl\(\d+, 75%, 50%\)$/);
    });
  });

  describe('real-world examples', () => {
    test('should generate expected colors for common names', () => {
      // These tests verify the exact output to catch any breaking changes
      const testCases = [
        { input: 'John Doe', expected: 'hsl(160, 65%, 50%)' },
        { input: 'Alice', expected: 'hsl(207, 65%, 50%)' },
        { input: 'Bob', expected: 'hsl(82, 65%, 50%)' },
        { input: 'Charlie', expected: 'hsl(125, 65%, 50%)' }
      ];

      testCases.forEach(({ input, expected }) => {
        const color = generateColor(input);
        expect(color).toBe(expected);
      });
    });

    test('should generate consistent colors for avatar use case', () => {
      // Simulating the Avatar component use case
      const names = ['Alice', 'Bob Meyer Bogger', 'Charlie'];
      const colors = names.map(name => generateColor(name));

      // All colors should be unique
      const uniqueColors = new Set(colors);
      expect(uniqueColors.size).toBe(colors.length);

      // All colors should be valid HSL format
      colors.forEach(color => {
        expect(color).toMatch(/^hsl\(\d+, 65%, 50%\)$/);
      });
    });
  });

  describe('edge cases', () => {
    test('should handle special characters', () => {
      const color1 = generateColor('user@example.com');
      const color2 = generateColor('user-name_123');
      const color3 = generateColor('名前');

      expect(color1).toMatch(/^hsl\(\d+, 65%, 50%\)$/);
      expect(color2).toMatch(/^hsl\(\d+, 65%, 50%\)$/);
      expect(color3).toMatch(/^hsl\(\d+, 65%, 50%\)$/);
    });

    test('should handle very long strings', () => {
      const longString = 'a'.repeat(1000);
      const color = generateColor(longString);

      expect(color).toMatch(/^hsl\(\d+, 65%, 50%\)$/);
    });

    test('should handle numeric strings', () => {
      const color = generateColor('12345');

      expect(color).toMatch(/^hsl\(\d+, 65%, 50%\)$/);
    });

    test('should handle whitespace-only strings', () => {
      const color = generateColor('   ');

      expect(color).toMatch(/^hsl\(\d+, 65%, 50%\)$/);
    });
  });
});
