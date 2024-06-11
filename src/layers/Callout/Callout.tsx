import React, { FC, ReactNode } from 'react';
import { Stack } from '@/layout';
import { cn, useComponentTheme } from '@/utils';
import { CalloutTheme } from './CalloutTheme';

export interface CalloutProps {
  /**
   * The text of the callout.
   */
  text: string | ReactNode;

  /**
   * The icon of the callout.
   */
  icon?: ReactNode;

  /**
   * The variant of the callout.
   */
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';

  /**
   * The theme of the callout.
   */
  theme?: CalloutTheme;
}

export const Callout: FC<CalloutProps> = ({
  text,
  icon,
  variant = 'default',
  theme: customTheme
}) => {
  const theme = useComponentTheme('callout', customTheme);

  return (
    <Stack className={cn(theme.base.common, theme.base.variant[variant])}>
      {icon && (
        <div className={cn(theme.icon.common, theme.icon.variant[variant])}>
          {icon}
        </div>
      )}
      <div className={theme.text}>{text}</div>
    </Stack>
  );
};
