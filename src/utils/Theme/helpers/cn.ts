import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

/**
 * Classnames and tailwind merge helper function.
 */
export function cn(...args: classNames.ArgumentArray) {
  return twMerge(classNames(args));
}
