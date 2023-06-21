import React, { forwardRef } from 'react';
import { ListItem, ListItemProps } from '../../../layout/List';

export interface CommandPaletteItemProps extends ListItemProps {
  onClick?: () => void;
}

export const CommandPaletteItem = forwardRef<
  HTMLDivElement,
  CommandPaletteItemProps
>(({ children, onClick, ...rest }, ref) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    onClick?.();
  };

  return (
    <ListItem {...rest} ref={ref} disableGutters onClick={handleClick}>
      {children}
    </ListItem>
  );
});
