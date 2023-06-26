import React, { forwardRef } from 'react';
import { ListItem, ListItemProps } from '../../../layout/List';
import classNames from 'classnames';
import { MotionItem } from '../../../layout/Motion';
import css from './CommandPaletteItem.module.css';
import { Kbb } from '../../../elements';

export interface CommandPaletteItemProps extends ListItemProps {
  hotkey?: string;
}

export const CommandPaletteItem = forwardRef<
  HTMLDivElement,
  CommandPaletteItemProps
>(({ children, active, className, end, hotkey, onClick, ...rest }, ref) => (
  <MotionItem layout>
    <ListItem
      {...rest}
      ref={ref}
      className={classNames(className, css.item, {
        [css.active]: active,
        [css.clickable]: onClick
      })}
      end={
        <>
          {hotkey && <Kbb>{hotkey}</Kbb>}
          {end}
        </>
      }
    >
      {children}
    </ListItem>
  </MotionItem>
));

CommandPaletteItem.displayName = 'CommandPaletteItem';
