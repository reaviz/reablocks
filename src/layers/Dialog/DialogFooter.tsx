'use client';

import React, { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { DialogTheme } from './DialogTheme';

export interface DialogFooterProps {
  /**
   * The content to display in the dialog footer.
   */
  children?: ReactNode;

  /**
   * Additional CSS class name for the footer container.
   */
  className?: string;

  /**
   * Theme for the Dialog Footer.
   */
  theme?: DialogTheme;
}

export const DialogFooter: FC<DialogFooterProps> = ({
  children,
  className,
  theme: customTheme
}) => {
  const theme = useComponentTheme<DialogTheme>('dialog', customTheme);

  return (
    <footer className={twMerge(theme.footer, className)}>{children}</footer>
  );
};

// Mark this component as a Dialog slot for detection
DialogFooter.displayName = 'DialogFooter';
