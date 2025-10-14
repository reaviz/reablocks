import classNames from 'classnames';
import { twMerge, extendTailwindMerge, type Config } from 'tailwind-merge';

/**
 * Classnames and tailwind merge helper function.
 */
export function cn(...args: classNames.ArgumentArray) {
  return twMerge(classNames(args));
}

/**
 * Create a custom cn function with tailwind-merge configuration.
 * This allows you to extend or override the default tailwind-merge behavior.
 *
 * @param config - Configuration object for tailwind-merge
 * @returns A customized cn function
 *
 * @example
 * ```ts
 * const customCn = createCn({
 *   extend: {
 *     classGroups: {
 *       'font-size': ['text-base', 'text-custom']
 *     }
 *   }
 * });
 *
 * customCn('text-base', 'text-custom'); // 'text-custom'
 * ```
 *
 * @see https://github.com/dcastil/tailwind-merge/blob/v2.6.0/docs/configuration.md
 */
export function createCn(
  config: Parameters<typeof extendTailwindMerge>[0]
): typeof cn {
  const customTwMerge = extendTailwindMerge(config);
  return (...args: classNames.ArgumentArray) => customTwMerge(classNames(args));
}
