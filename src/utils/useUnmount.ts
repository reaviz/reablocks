import { useLayoutEffect, useRef } from 'react';

/**
 * Hook to run a function when the component unmounts.
 *
 * @param fn The function to run when the component unmounts.
 */
export const useUnmount = fn => {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  useLayoutEffect(() => () => fnRef.current(), []);
};
