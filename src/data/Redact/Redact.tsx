import React, { FC, useMemo, useState } from 'react';
import coverup from 'coverup';
import { twMerge } from 'tailwind-merge';
import { RedactTheme } from './RedactTheme';
import { useComponentTheme } from '@/utils';

export interface RedactProps {
  /**
   * Classname of the element.
   */
  className?: string;

  /**
   * Whether you can toggle the text or not.
   */
  allowToggle?: boolean;

  /**
   * Number of characters to compact to.
   */
  compactLength?: number;

  /**
   * The character to replace the text with.
   */
  character?: string;

  /**
   * Text to show upon hover.
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
  allowToggle,
  compactLength,
  tooltipText,
  className,
  character,
  value,
  theme: customTheme
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const masked = useMemo(
    () =>
      coverup(value, {
        keepLeft: 1,
        keepRight: 1,
        compactTo: compactLength,
        char: character
      }) || '',
    [value, character, compactLength]
  );

  const theme: RedactTheme = useComponentTheme('redact', customTheme);

  return (
    <span
      title={allowToggle ? tooltipText : undefined}
      role="button"
      className={twMerge(
        theme.base,
        allowToggle && theme.interactive,
        className
      )}
      onClick={() => allowToggle && setVisible(!visible)}
    >
      {visible ? value : masked}
    </span>
  );
};

Redact.defaultProps = {
  allowToggle: true,
  character: '*',
  compactLength: 8,
  tooltipText: 'Click to toggle sensitive content'
};
