import type { FC } from 'react';
import React, { useMemo } from 'react';

import type { PluralizeInputs } from './utils';
import { pluralize } from './utils';

export interface PluralizeProps extends PluralizeInputs {
  /**
   * CSS classname for the span element.
   */
  className?: string;
}

export const Pluralize: FC<PluralizeProps> = ({
  count = 0,
  singular,
  className,
  showCount = true,
  plural,
  zero,
}) => {
  const text = useMemo(
    () => pluralize({ count, singular, showCount, plural, zero }),
    [count, singular, showCount, plural, zero],
  );

  return <span className={className}>{text}</span>;
};
