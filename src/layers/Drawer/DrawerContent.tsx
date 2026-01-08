'use client';

import type { HTMLAttributes, ReactNode } from 'react';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { useComponentTheme } from '@/utils';

import { useDrawerContext } from './DrawerContext';
import type { DrawerTheme } from './DrawerTheme';

export interface DrawerContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content to display in the drawer body.
   */
  children?: ReactNode;

  /**
   * Additional CSS class name for the content container.
   */
  className?: string;

  /**
   * Whether to disable padding for the content.
   * When used in context, inherits from Drawer's disablePadding prop.
   */
  disablePadding?: boolean;

  /**
   * Theme for the Drawer Content.
   */
  theme?: DrawerTheme;
}

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  (
    {
      children,
      className,
      disablePadding: disablePaddingProp,
      theme: customTheme,
      ...props
    },
    ref
  ) => {
    const theme = useComponentTheme<DrawerTheme>('drawer', customTheme);
    const context = useDrawerContext();

    // Use prop if provided, otherwise use context value
    const disablePadding =
      disablePaddingProp ?? context?.disablePadding ?? false;

    return (
      <div
        ref={ref}
        className={twMerge(theme.content, disablePadding && 'p-0', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

// Mark this component as a Drawer slot for detection
DrawerContent.displayName = 'DrawerContent';
