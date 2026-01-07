'use client';

import React, { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { DrawerTheme } from './DrawerTheme';

export interface DrawerFooterProps {
  /**
   * The content to display in the drawer footer.
   */
  children?: ReactNode;

  /**
   * Additional CSS class name for the footer container.
   */
  className?: string;

  /**
   * Theme for the Drawer Footer.
   */
  theme?: DrawerTheme;
}

export const DrawerFooter: FC<DrawerFooterProps> = ({
  children,
  className,
  theme: customTheme
}) => {
  const theme = useComponentTheme<DrawerTheme>('drawer', customTheme);

  return (
    <footer className={twMerge(theme.footer, className)}>{children}</footer>
  );
};

// Mark this component as a Drawer slot for detection
DrawerFooter.displayName = 'DrawerFooter';
