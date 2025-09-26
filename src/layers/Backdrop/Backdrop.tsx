import { motion } from 'motion/react';
import type { FC, MouseEvent } from 'react';
import React from 'react';

import { cn, useComponentTheme } from '@/utils';

import type { BackdropTheme } from './BackdropTheme';

export interface BackdropProps {
  /**
   * The z-index of the backdrop.
   */
  zIndex?: number;

  /**
   * The index of the portal.
   */
  portalIndex?: number;

  /**
   * Additional class names to apply to the backdrop.
   */
  className?: string;

  /**
   * Theme for the Backdrop.
   */
  theme?: BackdropTheme;

  /**
   * Callback for when the backdrop is clicked.
   */
  onClick?: (event: MouseEvent) => void;
}

export const Backdrop: FC<BackdropProps> = ({
  zIndex = 998,
  portalIndex = 0,
  className,
  theme: customTheme,
  onClick,
}) => {
  const theme = useComponentTheme<BackdropTheme>('backdrop', customTheme);

  return (
    <motion.div
      className={cn(theme.base, className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: theme.opacity - (portalIndex as number) / 10 }}
      exit={{ opacity: 0 }}
      style={{ zIndex }}
      onClick={onClick}
    />
  );
};
