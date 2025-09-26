import type { PropsWithChildren } from 'react';
import React, { forwardRef } from 'react';

import type { CommandPaletteTheme } from '@/elements/CommandPalette/CommandPaletteTheme';
import { List, ListHeader } from '@/layout';
import { MotionGroup, MotionItem } from '@/layout';
import { twMerge } from '@/utils';
import { useComponentTheme } from '@/utils';

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

  /**
   * Theme for the CommandPalette.
   */
  theme?: CommandPaletteTheme;
}

export const CommandPaletteSection = forwardRef<
  HTMLDivElement,
  CommandPaletteSectionProps
>(({ children, className, title, index, theme: customTheme, ...rest }, ref) => {
  const { section: sectionTheme }: CommandPaletteTheme = useComponentTheme(
    'commandPalette',
    customTheme,
  );

  return (
    <MotionItem layout>
      <List
        ref={ref}
        {...rest}
        className={twMerge(
          sectionTheme.base,
          index === 0 && sectionTheme.first,
          className,
        )}
      >
        {title && <ListHeader>{title}</ListHeader>}
        <MotionGroup>{children}</MotionGroup>
      </List>
    </MotionItem>
  );
});

CommandPaletteSection.displayName = 'CommandPaletteSection';
