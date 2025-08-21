import classNames from 'classnames';
import { twMerge } from '@/utils';

/**
 * Classnames and tailwind merge helper function.
 */
export function cn(...args: classNames.ArgumentArray) {
  return twMerge(classNames(args));
}
