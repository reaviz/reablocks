import React, { PropsWithChildren, forwardRef } from 'react';
import { List, ListHeader } from '../../../layout';
import { MotionGroup, MotionItem } from '../../../layout';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '../../../utils';
import { CommandPaletteTheme } from '../CommandPaletteTheme';

export interface CommandPaletteSectionProps extends PropsWithChildren {
  /**
   * Section title.
   */
  title?: string;

  /**
   * Additional class name.
   */
  className?: string;

  /**
   * Section stack index. Set internally.
   */
  index?: number;
}

export const CommandPaletteSection = forwardRef<
  HTMLDivElement,
  CommandPaletteSectionProps
>(({ children, className, title, index, ...rest }, ref) => {
  const { section: sectionTheme }: CommandPaletteTheme =
    useComponentTheme('commandPalette');

  return (
    <MotionItem layout>
      <List
        ref={ref}
        {...rest}
        className={twMerge(
          sectionTheme.base,
          index === 0 && sectionTheme.first,
          className
        )}
      >
        {title && <ListHeader>{title}</ListHeader>}
        <MotionGroup>{children}</MotionGroup>
      </List>
    </MotionItem>
  );
});

CommandPaletteSection.displayName = 'CommandPaletteSection';
