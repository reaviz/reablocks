import React from 'react';
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { ThemeProvider, ThemeContext } from './ThemeProvider';
import { theme as defaultTheme } from './themes/theme';
import type { ReablocksTheme } from './themes/theme';

describe('ThemeProvider', () => {
  const originalConsoleWarn = console.warn;
  const originalConsoleError = console.error;
  const mockWarn = vi.fn();
  const mockError = vi.fn();

  beforeEach(() => {
    console.warn = mockWarn;
    console.error = mockError;
    document.documentElement.className = '';
    vi.clearAllMocks();
  });

  afterEach(() => {
    console.warn = originalConsoleWarn;
    console.error = originalConsoleError;
  });

  describe('default behavior', () => {
    test('should render children', () => {
      const { container } = render(
        <ThemeProvider>
          <div>Test Content</div>
        </ThemeProvider>
      );

      expect(container.textContent).toContain('Test Content');
    });

    test('should use v9 theme by default', () => {
      let contextValue: any = null;

      render(
        <ThemeProvider>
          <ThemeContext.Consumer>
            {value => {
              contextValue = value;
              return null;
            }}
          </ThemeContext.Consumer>
        </ThemeProvider>
      );

      expect(contextValue).toBeTruthy();
      expect(contextValue.variant).toBe('v9');
      expect(contextValue.theme).toEqual(defaultTheme);
    });

    test('should provide default theme in context', () => {
      let contextValue: any = null;

      render(
        <ThemeProvider>
          <ThemeContext.Consumer>
            {value => {
              contextValue = value;
              return null;
            }}
          </ThemeContext.Consumer>
        </ThemeProvider>
      );

      expect(contextValue.theme).toBeDefined();
      expect(contextValue.tokens).toBeDefined();
      expect(contextValue.updateTheme).toBeDefined();
      expect(contextValue.updateTokens).toBeDefined();
    });
  });

  describe('variant prop', () => {
    test('should accept v9 variant', () => {
      let contextValue: any = null;

      render(
        <ThemeProvider variant="v9">
          <ThemeContext.Consumer>
            {value => {
              contextValue = value;
              return null;
            }}
          </ThemeContext.Consumer>
        </ThemeProvider>
      );

      expect(contextValue.variant).toBe('v9');
    });

    test('should warn when variant changes at runtime', async () => {
      const { rerender } = render(
        <ThemeProvider variant="v9">
          <div>Test</div>
        </ThemeProvider>
      );

      expect(mockWarn).not.toHaveBeenCalled();

      rerender(
        <ThemeProvider variant="unify">
          <div>Test</div>
        </ThemeProvider>
      );

      await waitFor(() => {
        expect(mockWarn).toHaveBeenCalledWith(
          expect.stringContaining('[ThemeProvider] Changing variant at runtime')
        );
      });
    });

    test('should only warn once per variant change', async () => {
      const { rerender } = render(
        <ThemeProvider variant="v9">
          <div>Test</div>
        </ThemeProvider>
      );

      rerender(
        <ThemeProvider variant="unify">
          <div>Test</div>
        </ThemeProvider>
      );

      await waitFor(() => {
        expect(mockWarn).toHaveBeenCalledTimes(1);
      });

      rerender(
        <ThemeProvider variant="unify">
          <div>Test</div>
        </ThemeProvider>
      );

      expect(mockWarn).toHaveBeenCalledTimes(1);
    });
  });

  describe('Unify theme loading', () => {
    test('should set variant to unify when variant prop is unify', () => {
      let contextValue: any = null;

      render(
        <ThemeProvider variant="unify">
          <ThemeContext.Consumer>
            {value => {
              contextValue = value;
              return null;
            }}
          </ThemeContext.Consumer>
        </ThemeProvider>
      );

      expect(contextValue.variant).toBe('unify');
    });

    test('should use v9 theme when variant is v9', () => {
      let contextValue: any = null;

      render(
        <ThemeProvider variant="v9">
          <ThemeContext.Consumer>
            {value => {
              contextValue = value;
              return null;
            }}
          </ThemeContext.Consumer>
        </ThemeProvider>
      );

      expect(contextValue.variant).toBe('v9');
      expect(contextValue.theme).toEqual(defaultTheme);
    });
  });

  describe('theme merging', () => {
    test('should merge custom theme with base theme', () => {
      const customTheme = {
        components: {
          button: {
            base: 'custom-button-base',
            disabled: 'custom-disabled'
          }
        }
      } as Partial<ReablocksTheme>;

      let contextValue: any = null;

      render(
        <ThemeProvider theme={customTheme}>
          <ThemeContext.Consumer>
            {value => {
              contextValue = value;
              return null;
            }}
          </ThemeContext.Consumer>
        </ThemeProvider>
      );

      expect(contextValue.theme.components?.button?.base).toBe(
        'custom-button-base'
      );
      expect(contextValue.theme.components?.button?.disabled).toBe(
        'custom-disabled'
      );
    });

    test('should preserve base theme properties not overridden', () => {
      const customTheme = {
        components: {
          button: {
            base: 'custom-button-base'
          }
        }
      } as Partial<ReablocksTheme>;

      let contextValue: any = null;

      render(
        <ThemeProvider theme={customTheme}>
          <ThemeContext.Consumer>
            {value => {
              contextValue = value;
              return null;
            }}
          </ThemeContext.Consumer>
        </ThemeProvider>
      );

      const buttonTheme = contextValue.theme.components?.button;
      expect(buttonTheme?.base).toBe('custom-button-base');
      expect(buttonTheme?.fullWidth).toBeDefined();
      expect(buttonTheme?.sizes).toBeDefined();
    });

    test('should update theme when custom theme prop changes', () => {
      const initialTheme = {
        components: {
          button: {
            base: 'initial-base'
          }
        }
      } as Partial<ReablocksTheme>;

      const updatedTheme = {
        components: {
          button: {
            base: 'updated-base'
          }
        }
      } as Partial<ReablocksTheme>;

      let contextValue: any = null;

      const { rerender } = render(
        <ThemeProvider theme={initialTheme}>
          <ThemeContext.Consumer>
            {value => {
              contextValue = value;
              return null;
            }}
          </ThemeContext.Consumer>
        </ThemeProvider>
      );

      expect(contextValue.theme.components?.button?.base).toBe('initial-base');

      rerender(
        <ThemeProvider theme={updatedTheme}>
          <ThemeContext.Consumer>
            {value => {
              contextValue = value;
              return null;
            }}
          </ThemeContext.Consumer>
        </ThemeProvider>
      );

      expect(contextValue.theme.components?.button?.base).toBe('updated-base');
    });
  });

  describe('updateTheme', () => {
    test('should provide updateTheme function in context', () => {
      let contextValue: any = null;

      render(
        <ThemeProvider>
          <ThemeContext.Consumer>
            {value => {
              contextValue = value;
              return null;
            }}
          </ThemeContext.Consumer>
        </ThemeProvider>
      );

      expect(contextValue.updateTheme).toBeDefined();
      expect(typeof contextValue.updateTheme).toBe('function');
    });
  });

  describe('SSR safety', () => {
    test('should use default theme initially before client-side mount', () => {
      let contextValue: any = null;

      render(
        <ThemeProvider variant="unify">
          <ThemeContext.Consumer>
            {value => {
              contextValue = value;
              return null;
            }}
          </ThemeContext.Consumer>
        </ThemeProvider>
      );

      expect(contextValue.theme).toEqual(defaultTheme);
    });
  });

  describe('cleanup', () => {
    test('should handle unmount gracefully', () => {
      const { unmount } = render(
        <ThemeProvider variant="unify">
          <div>Test</div>
        </ThemeProvider>
      );

      expect(() => unmount()).not.toThrow();
    });
  });

  describe('tokens', () => {
    test('should provide tokens in context', () => {
      let contextValue: any = null;

      render(
        <ThemeProvider>
          <ThemeContext.Consumer>
            {value => {
              contextValue = value;
              return null;
            }}
          </ThemeContext.Consumer>
        </ThemeProvider>
      );

      expect(contextValue.tokens).toBeDefined();
      expect(typeof contextValue.tokens).toBe('object');
    });

    test('should provide updateTokens function in context', () => {
      let contextValue: any = null;

      render(
        <ThemeProvider>
          <ThemeContext.Consumer>
            {value => {
              contextValue = value;
              return null;
            }}
          </ThemeContext.Consumer>
        </ThemeProvider>
      );

      expect(contextValue.updateTokens).toBeDefined();
      expect(typeof contextValue.updateTokens).toBe('function');
    });
  });
});
