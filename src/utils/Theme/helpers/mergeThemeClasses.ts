import { cn } from './cn';

/**
 * Customizer for extendTheme that merges class strings instead of replacing them.
 * Pass as the third argument to extendTheme to append/override specific Tailwind
 * classes rather than wholesale replacing a theme property.
 *
 * @example
 * extendTheme(theme, customTheme, mergeThemeClasses)
 */
export function mergeThemeClasses(
  source: any,
  target: any
): string | undefined {
  if (typeof source === 'string' && typeof target === 'string') {
    return cn(source, target);
  }
  return undefined;
}
