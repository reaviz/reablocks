import React, { FC, ReactNode, useMemo } from 'react';
import { Stack } from '@/layout';
import { cn, useComponentTheme } from '@/utils';
import { CalloutTheme } from './CalloutTheme';

import InfoIcon from '@/assets/icons/info.svg?react';
import CheckCircleIcon from '@/assets/icons/check_circle.svg?react';
import WarningIcon from '@/assets/icons/warning.svg?react';
import ErrorCircleIcon from '@/assets/icons/error_circle.svg?react';

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

  const defaultIcon = useMemo(() => {
    switch (variant) {
      case 'success':
        return <CheckCircleIcon />;
      case 'error':
        return <ErrorCircleIcon />;
      case 'warning':
        return <WarningIcon />;
      case 'info':
        return <InfoIcon />;
      default:
        return <InfoIcon />;
    }
  }, [variant]);

  return (
    <Stack className={cn(theme.base.common, theme.base.variant[variant])}>
      <div className={cn(theme.icon.common, theme.icon.variant[variant])}>
        {icon ?? defaultIcon}
      </div>
      <div className={theme.text}>{text}</div>
    </Stack>
  );
};
