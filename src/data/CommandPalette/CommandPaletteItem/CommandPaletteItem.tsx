import React, { forwardRef } from 'react';
import { ListItem, ListItemProps } from '../../../layout/List';
import classNames from 'classnames';
import { MotionItem } from '../../../layout/Motion';
import css from './CommandPaletteItem.module.css';

export interface CommandPaletteItemProps extends ListItemProps {}

export const CommandPaletteItem = forwardRef<
  HTMLDivElement,
  CommandPaletteItemProps
>(({ children, active, className, onClick, ...rest }, ref) => (
  <MotionItem layout>
    <ListItem
      {...rest}
      ref={ref}
      className={classNames(className, css.item, {
        [css.active]: active,
        [css.clickable]: onClick
      })}
    >
      {children}
    </ListItem>
  </MotionItem>
));

CommandPaletteItem.displayName = 'CommandPaletteItem';
