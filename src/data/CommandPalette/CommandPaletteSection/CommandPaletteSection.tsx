import React, { PropsWithChildren, forwardRef } from 'react';
import { List, ListHeader } from '../../../layout/List';
import css from './CommandPaletteSection.module.css';
import classNames from 'classnames';

export interface CommandPaletteSectionProps extends PropsWithChildren {
  title?: string;
  className?: string;
}

export const CommandPaletteSection = forwardRef<
  HTMLDivElement,
  CommandPaletteSectionProps
>(({ children, className, title, ...rest }, ref) => (
  <List ref={ref} {...rest} className={classNames(css.section, className)}>
    {title && <ListHeader>{title}</ListHeader>}
    {children}
  </List>
));

CommandPaletteSection.displayName = 'CommandPaletteSection';
