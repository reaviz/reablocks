import { useState } from 'react';

let id = 0;
const genId = () => `ref-${++id}`;

/**
 * Auto-generate a id.
 * Inspired by: https://github.com/reach/reach-ui/blob/master/packages/auto-id/src/index.ts
 */
export const useId = (idFromProps?: string | null) => {
  const [id] = useState(idFromProps || genId());
  return `${id}`;
};
