import React, { forwardRef } from 'react';
import { ListItem, ListItemProps } from '../../../layout/List';
import classNames from 'classnames';
import css from './CommandPaletteItem.module.css';

export interface CommandPaletteItemProps extends ListItemProps {}

export const CommandPaletteItem = forwardRef<
  HTMLDivElement,
  CommandPaletteItemProps
>(({ children, active, className, ...rest }, ref) => (
  <ListItem
    {...rest}
    ref={ref}
    className={classNames(className, css.item, { [css.active]: active })}
  >
    {children}
  </ListItem>
));

CommandPaletteItem.displayName = 'CommandPaletteItem';
