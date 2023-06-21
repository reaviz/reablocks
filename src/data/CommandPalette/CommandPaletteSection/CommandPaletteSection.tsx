import React, { PropsWithChildren } from 'react';
import { List, ListHeader } from '../../../layout/List';

export interface CommandPaletteSectionProps extends PropsWithChildren {
  title?: string;
  className?: string;
}

export const CommandPaletteSection: React.FC<CommandPaletteSectionProps> = ({
  title,
  children,
  ...rest
}) => (
  <List {...rest}>
    {title && <ListHeader>{title}</ListHeader>}
    {children}
  </List>
);
