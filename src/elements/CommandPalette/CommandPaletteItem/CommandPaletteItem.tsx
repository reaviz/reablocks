import React, { forwardRef } from 'react';
import { ListItem, ListItemProps } from '@/layout';
import { MotionItem } from '@/layout';
import { Kbd } from '@/elements/Kbd';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { CommandPaletteTheme } from '@/elements/CommandPalette/CommandPaletteTheme';

export interface CommandPaletteItemProps extends Omit<ListItemProps, 'theme'> {
  hotkey?: string;

  /**
   * Theme for the CommandPalette.
   */
  theme?: CommandPaletteTheme;
}

export const CommandPaletteItem = forwardRef<
  HTMLDivElement,
  CommandPaletteItemProps
>(
  (
    {
      children,
      active,
      className,
      end,
      hotkey,
      onClick,
      theme: customTheme,
      ...rest
    },
    ref
  ) => {
    const { item: itemTheme }: CommandPaletteTheme = useComponentTheme(
      'commandPalette',
      customTheme
    );

    return (
      <MotionItem layout>
        <ListItem
          {...rest}
          ref={ref}
          className={twMerge(
            itemTheme.base,
            active && itemTheme.active,
            onClick && itemTheme.clickable
          )}
          end={
            <>
              {hotkey && <Kbd keycode={hotkey} size="small" />}
              {end}
            </>
          }
        >
          {children}
        </ListItem>
      </MotionItem>
    );
  }
);

CommandPaletteItem.displayName = 'CommandPaletteItem';
