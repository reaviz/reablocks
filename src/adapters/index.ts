/**
 * Unify Design System Adapter for Reablocks
 *
 * Provides utilities and presets for integrating Unify design tokens
 * with the reablocks component library.
 *
 * CSS-only usage (recommended):
 *   Import the adapter CSS file alongside your Unify tokens.
 *   See `unify.css` for detailed usage instructions.
 *
 * JS usage:
 *   Use `createUnifyAdapter()` to programmatically inject Unify token
 *   mappings at runtime.
 */

/**
 * Mapping of reablocks CSS custom property names to Unify semantic token names.
 * Used by `createUnifyAdapter()` and available for custom adapter implementations.
 */
export const unifyTokenMap: Record<string, string> = {
  // Primary
  '--primary': '--color-background-brand-base',
  '--primary-active': '--color-background-brand-1',
  '--primary-hover': '--color-background-brand-1',
  '--primary-inactive': '--color-background-brand-3',

  // Secondary
  '--secondary': '--color-background-neutral-raised-2',
  '--secondary-active': '--color-background-neutral-raised-2',
  '--secondary-hover': '--color-background-neutral-raised-1',
  '--secondary-inactive': '--color-background-neutral-raised-4',

  // Success
  '--success': '--color-background-semantic-success-base',
  '--success-active': '--color-background-semantic-success-base',
  '--success-hover': '--color-background-semantic-success-1',
  '--success-background': '--color-background-semantic-success-5',

  // Error
  '--error': '--color-background-semantic-error-base',
  '--error-active': '--color-background-semantic-error-base',
  '--error-hover': '--color-background-semantic-error-1',
  '--error-background': '--color-background-semantic-error-5',

  // Warning
  '--warning': '--color-background-semantic-warning-base',
  '--warning-active': '--color-background-semantic-warning-base',
  '--warning-hover': '--color-background-semantic-warning-1',
  '--warning-background': '--color-background-semantic-warning-5',

  // Info
  '--info': '--color-background-semantic-info-base',
  '--info-active': '--color-background-semantic-info-base',
  '--info-hover': '--color-background-semantic-info-1',
  '--info-background': '--color-background-semantic-info-5',

  // Panel
  '--panel': '--color-background-neutral-canvas-base',
  '--panel-accent': '--color-background-neutral-raised-base',

  // Surface
  '--surface': '--color-background-neutral-raised-2',
  '--surface-accent': '--color-background-brand-base',

  // Text
  '--text-primary': '--color-content-text-neutral-base',
  '--text-secondary': '--color-content-text-neutral-3'
};

/**
 * Injects Unify token mappings into the document as CSS custom properties.
 *
 * Useful when you need to activate the Unify adapter at runtime (e.g., in
 * a Storybook decorator or dynamic theme switcher) rather than via a static
 * CSS import.
 *
 * @param target - The element to apply the CSS custom properties to. Defaults to `document.documentElement`.
 * @returns A cleanup function that removes the injected style element.
 *
 * @example
 * ```ts
 * import { createUnifyAdapter } from 'reablocks/adapters';
 *
 * // Activate the adapter
 * const cleanup = createUnifyAdapter();
 *
 * // Later, remove it
 * cleanup();
 * ```
 */
export function createUnifyAdapter(
  target: HTMLElement = typeof document !== 'undefined'
    ? document.documentElement
    : null
): () => void {
  if (!target) {
    return () => {};
  }

  const style = document.createElement('style');
  style.setAttribute('data-reablocks-unify-adapter', '');

  const declarations = Object.entries(unifyTokenMap)
    .map(([reablocksVar, unifyVar]) => `  ${reablocksVar}: var(${unifyVar});`)
    .join('\n');

  style.textContent = `:root, :host {\n${declarations}\n}`;
  document.head.appendChild(style);

  return () => {
    style.remove();
  };
}

/**
 * Checks whether Unify design tokens are available in the current document.
 * Looks for the presence of key Unify semantic tokens on the root element.
 *
 * @returns `true` if Unify tokens are detected.
 */
export function isUnifyAvailable(): boolean {
  if (typeof document === 'undefined') {
    return false;
  }

  const styles = getComputedStyle(document.documentElement);
  const testVar = styles.getPropertyValue('--color-background-brand-base');
  return testVar.trim().length > 0;
}
