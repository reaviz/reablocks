import { cn } from '@/utils/Theme/helpers';
import { ReablocksTheme } from '@/utils/Theme/themes/theme';
import { extendTheme, PartialReablocksTheme } from './extendTheme';
import { describe, it, expect } from 'vitest';

describe('extendTheme', () => {
  const defaultTheme: PartialReablocksTheme = {
    components: {
      button: {
        sizes: {
          small: 'text-xs px-2 py-[5px]',
          medium: 'text-sm px-3 py-[7px]'
        }
      }
    }
  };

  it('should return the default theme when no overrides are provided', () => {
    const result = extendTheme(defaultTheme as ReablocksTheme, {});

    expect(result).toEqual(defaultTheme);
  });

  it('should fully override small property', () => {
    const theme: PartialReablocksTheme = {
      components: {
        button: {
          sizes: {
            small: 'text-lg'
          }
        }
      }
    };

    const result = extendTheme(defaultTheme as ReablocksTheme, theme);

    expect(result.components.button.sizes.small).toBe('text-lg');
    expect(result.components.button.sizes.medium).toBe('text-sm px-3 py-[7px]');
  });

  it('should override class only of small property', () => {
    const theme: PartialReablocksTheme = {
      components: {
        button: {
          sizes: {
            small: 'text-lg'
          }
        }
      }
    };

    const result = extendTheme(
      defaultTheme as ReablocksTheme,
      theme,
      (source, target) => {
        if (typeof source === 'string' && typeof target === 'string') {
          return cn(source, target);
        }
        return undefined;
      }
    );

    expect(result.components.button.sizes.small).toBe('px-2 py-[5px] text-lg');
    expect(result.components.button.sizes.medium).toBe('text-sm px-3 py-[7px]');
  });
});
