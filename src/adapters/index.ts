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
  '--text-secondary': '--color-content-text-neutral-3',

  // Named Colors
  '--color-black-pearl': '--color-neutrals-force-dusk-900',
  '--color-athens-gray': '--color-neutrals-force-dusk-50',
  '--color-mystic': '--color-neutrals-force-dusk-100',
  '--color-vulcan': '--color-neutrals-force-dusk-800',
  '--color-charade': '--color-neutrals-force-dusk-600',
  '--color-waterloo': '--color-neutrals-force-dusk-300',

  // Gray Scale
  '--color-gray-100': '--color-neutrals-force-dusk-50',
  '--color-gray-200': '--color-neutrals-force-dusk-100',
  '--color-gray-300': '--color-neutrals-force-dusk-200',
  '--color-gray-400': '--color-neutrals-force-dusk-300',
  '--color-gray-500': '--color-neutrals-force-dusk-400',
  '--color-gray-600': '--color-neutrals-force-dusk-500',
  '--color-gray-700': '--color-neutrals-force-dusk-600',
  '--color-gray-800': '--color-neutrals-force-dusk-700',
  '--color-gray-900': '--color-neutrals-force-dusk-800',
  '--color-gray-950': '--color-neutrals-force-dusk-900',

  // Blue Scale
  '--color-blue-100': '--color-color-blue-hyperstream-50',
  '--color-blue-200': '--color-color-blue-hyperstream-100',
  '--color-blue-300': '--color-color-blue-hyperstream-200',
  '--color-blue-400': '--color-color-blue-hyperstream-400',
  '--color-blue-500': '--color-color-blue-hyperstream-600',
  '--color-blue-600': '--color-color-blue-hyperstream-700',
  '--color-blue-700': '--color-color-blue-hyperstream-800',
  '--color-blue-800': '--color-color-blue-hyperstream-900',
  '--color-blue-900': '--color-color-blue-hyperstream-950',
  '--color-blue-950': '--color-color-blue-hyperstream-1000',

  // Red Scale
  '--color-red-100': '--color-color-red-crimson-wrath-50',
  '--color-red-200': '--color-color-red-crimson-wrath-100',
  '--color-red-300': '--color-color-red-crimson-wrath-200',
  '--color-red-400': '--color-color-red-crimson-wrath-300',
  '--color-red-500': '--color-color-red-crimson-wrath-400',
  '--color-red-600': '--color-color-red-crimson-wrath-500',
  '--color-red-700': '--color-color-red-crimson-wrath-600',
  '--color-red-800': '--color-color-red-crimson-wrath-700',
  '--color-red-900': '--color-color-red-crimson-wrath-800',
  '--color-red-950': '--color-color-red-crimson-wrath-900',

  // Green Scale
  '--color-green-100': '--color-color-green-verdant-flux-50',
  '--color-green-200': '--color-color-green-verdant-flux-100',
  '--color-green-300': '--color-color-green-verdant-flux-200',
  '--color-green-400': '--color-color-green-verdant-flux-300',
  '--color-green-500': '--color-color-green-verdant-flux-400',
  '--color-green-600': '--color-color-green-verdant-flux-500',
  '--color-green-700': '--color-color-green-verdant-flux-600',
  '--color-green-800': '--color-color-green-verdant-flux-700',
  '--color-green-900': '--color-color-green-verdant-flux-800',
  '--color-green-950': '--color-color-green-verdant-flux-900',

  // Orange Scale
  '--color-orange-100': '--color-color-orange-sunstreak-50',
  '--color-orange-200': '--color-color-orange-sunstreak-100',
  '--color-orange-300': '--color-color-orange-sunstreak-200',
  '--color-orange-400': '--color-color-orange-sunstreak-300',
  '--color-orange-500': '--color-color-orange-sunstreak-400',
  '--color-orange-600': '--color-color-orange-sunstreak-500',
  '--color-orange-700': '--color-color-orange-sunstreak-600',
  '--color-orange-800': '--color-color-orange-sunstreak-700',
  '--color-orange-900': '--color-color-orange-sunstreak-800',
  '--color-orange-950': '--color-color-orange-sunstreak-900',

  // Yellow Scale
  '--color-yellow-100': '--color-color-yellow-twin-sunlight-50',
  '--color-yellow-200': '--color-color-yellow-twin-sunlight-100',
  '--color-yellow-300': '--color-color-yellow-twin-sunlight-200',
  '--color-yellow-400': '--color-color-yellow-twin-sunlight-300',
  '--color-yellow-500': '--color-color-yellow-twin-sunlight-400',
  '--color-yellow-600': '--color-color-yellow-twin-sunlight-500',
  '--color-yellow-700': '--color-color-yellow-twin-sunlight-600',
  '--color-yellow-800': '--color-color-yellow-twin-sunlight-700',
  '--color-yellow-900': '--color-color-yellow-twin-sunlight-800',
  '--color-yellow-950': '--color-color-yellow-twin-sunlight-900',

  // Pink Scale
  '--color-pink-100': '--color-color-pink-plasma-circuit-50',
  '--color-pink-200': '--color-color-pink-plasma-circuit-100',
  '--color-pink-300': '--color-color-pink-plasma-circuit-200',
  '--color-pink-400': '--color-color-pink-plasma-circuit-300',
  '--color-pink-500': '--color-color-pink-plasma-circuit-400',
  '--color-pink-600': '--color-color-pink-plasma-circuit-500',
  '--color-pink-700': '--color-color-pink-plasma-circuit-600',
  '--color-pink-800': '--color-color-pink-plasma-circuit-700',
  '--color-pink-900': '--color-color-pink-plasma-circuit-800',
  '--color-pink-950': '--color-color-pink-plasma-circuit-900',

  // Violet Scale
  '--color-violet-100': '--color-color-purple-nexus-100',
  '--color-violet-200': '--color-color-purple-nexus-200',
  '--color-violet-300': '--color-color-purple-nexus-300',
  '--color-violet-400': '--color-color-purple-nexus-400',
  '--color-violet-500': '--color-color-purple-nexus-500',
  '--color-violet-600': '--color-color-purple-nexus-600',
  '--color-violet-700': '--color-color-purple-nexus-700',
  '--color-violet-800': '--color-color-purple-nexus-800',
  '--color-violet-900': '--color-color-purple-nexus-900',
  '--color-violet-950': '--color-color-purple-nexus-950',

  // Teal Scale
  '--color-teal-100': '--color-color-teal-sunspark-oasis-50',
  '--color-teal-200': '--color-color-teal-sunspark-oasis-100',
  '--color-teal-300': '--color-color-teal-sunspark-oasis-200',
  '--color-teal-400': '--color-color-teal-sunspark-oasis-300',
  '--color-teal-500': '--color-color-teal-sunspark-oasis-400',
  '--color-teal-600': '--color-color-teal-sunspark-oasis-500',
  '--color-teal-700': '--color-color-teal-sunspark-oasis-600',
  '--color-teal-800': '--color-color-teal-sunspark-oasis-700',
  '--color-teal-900': '--color-color-teal-sunspark-oasis-800',
  '--color-teal-950': '--color-color-teal-sunspark-oasis-900',

  // Stroke/Border Colors
  '--stroke-neutral': '--color-stroke-neutral-raised-base',
  '--stroke-brand': '--color-stroke-brand-base',
  '--stroke-focus': '--color-stroke-focused-highlight',
  '--stroke-success': '--color-stroke-semantic-success-base',
  '--stroke-error': '--color-stroke-semantic-error-base',
  '--stroke-warning': '--color-stroke-semantic-warning-base',
  '--stroke-info': '--color-stroke-semantic-info-base',

  // Spacing
  '--spacing-xs': '--spacing-padding-xs',
  '--spacing-sm': '--spacing-padding-sm',
  '--spacing-md': '--spacing-padding-base',
  '--spacing-lg': '--spacing-padding-lg',
  '--spacing-xl': '--spacing-padding-xl',

  // Border Radius
  '--radius-sm': '--corner-radius-sm',
  '--radius-md': '--corner-radius-primary',
  '--radius-lg': '--corner-radius-lg',
  '--radius-pill': '--corner-radius-pill'
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
