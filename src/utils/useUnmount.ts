import { useLayoutEffect, useRef } from 'react';

export const useUnmount = fn => {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  useLayoutEffect(() => () => fnRef.current(), []);
};
