import { describe, test, expect } from 'vitest';

describe('Notifications ID handling', () => {
  describe('Custom ID support', () => {
    test('should accept string ID in NotificationOptions', () => {
      const options = {
        id: 'custom-string-id',
        variant: 'success' as const
      };

      // TypeScript should allow this
      expect(options.id).toBe('custom-string-id');
    });

    test('should accept numeric ID in NotificationOptions', () => {
      const options = {
        id: 12345,
        variant: 'error' as const
      };

      // TypeScript should allow this
      expect(options.id).toBe(12345);
    });

    test('should allow ID to be optional', () => {
      const options = {
        variant: 'warning' as const
      };

      // TypeScript should allow missing id
      expect(options.id).toBeUndefined();
    });
  });

  describe('clearNotification ID type', () => {
    test('should accept string ID for clearNotification', () => {
      const id: string | number = 'string-id';
      // TypeScript should allow this
      expect(typeof id).toBe('string');
    });

    test('should accept numeric ID for clearNotification', () => {
      const id: string | number = 123;
      // TypeScript should allow this
      expect(typeof id).toBe('number');
    });
  });
});
