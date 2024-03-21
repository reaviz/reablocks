import React, { forwardRef } from 'react';
import { ListItem, ListItemProps } from '../../../layout';
import { MotionItem } from '../../../layout';
import { Kbd } from '../../Kbd';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '../../../utils';
import { CommandPaletteTheme } from '../CommandPaletteTheme';

export interface CommandPaletteItemProps extends ListItemProps {
  hotkey?: string;
}

export const CommandPaletteItem = forwardRef<
  HTMLDivElement,
  CommandPaletteItemProps
>(({ children, active, className, end, hotkey, onClick, ...rest }, ref) => {
  const { item: itemTheme }: CommandPaletteTheme =
    useComponentTheme('commandPalette');

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
});

CommandPaletteItem.displayName = 'CommandPaletteItem';
