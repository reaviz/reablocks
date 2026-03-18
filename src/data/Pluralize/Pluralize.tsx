import React, { FC, useMemo } from 'react';
import { pluralize, PluralizeInputs } from './utils';

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
  zero
}) => {
  const text = useMemo(
    () => pluralize({ count, singular, showCount, plural, zero }),
    [count, singular, showCount, plural, zero]
  );

  return <span className={className}>{text}</span>;
};
