import React, { FC, useMemo, useState } from 'react';
import { RedactTheme } from './RedactTheme';
import { maskValue } from './utils';
import { cn, useComponentTheme } from '@/utils';

export interface RedactProps {
  /**
   * Classname of the element.
   */
  className?: string;

  /**
   * Whether you can toggle the text or not.
   * @default true
   */
  allowToggle?: boolean;

  /**
   * Number of characters to compact to.
   * @default 8
   */
  compactLength?: number;

  /**
   * The character to replace the text with.
   * @default '*'
   */
  character?: string;

  /**
   * Text to show upon hover.
   * @default 'Click to toggle sensitive content'
   */
  tooltipText?: string;

  /**
   * Value to conceal.
   */
  value?: string;

  /**
   * The theme for the Redact.
   */
  theme?: RedactTheme;
}

export const Redact: FC<RedactProps> = ({
  allowToggle = true,
  compactLength = 8,
  tooltipText = 'Click to toggle sensitive content',
  className,
  character = '*',
  value,
  theme: customTheme
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const masked = useMemo(
    () => maskValue(value, compactLength, character),
    [value, character, compactLength]
  );

  const theme: RedactTheme = useComponentTheme('redact', customTheme);

  return (
    <span
      title={allowToggle ? tooltipText : undefined}
      role="button"
      className={cn(theme.base, allowToggle && theme.interactive, className)}
      onClick={() => allowToggle && setVisible(!visible)}
    >
      {visible ? value : masked}
    </span>
  );
};
