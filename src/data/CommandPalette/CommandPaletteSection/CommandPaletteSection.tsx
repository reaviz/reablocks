import React, { PropsWithChildren } from 'react';
import { List, ListHeader } from '../../../layout';

export interface CommandPaletteSectionProps extends PropsWithChildren {
  title?: string;
}

export const CommandPaletteSection: React.FC<CommandPaletteSectionProps> = ({
  title,
  children
}) => {
  return (
    <List>
      {title && <ListHeader>{title}</ListHeader>}
      {children}
    </List>
  );
};
