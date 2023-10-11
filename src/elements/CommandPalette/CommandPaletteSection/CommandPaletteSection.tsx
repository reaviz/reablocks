import React, { PropsWithChildren, forwardRef } from 'react';
import { List, ListHeader } from '../../../layout/List';
import classNames from 'classnames';
import { MotionGroup, MotionItem } from '../../../layout/Motion';
import css from './CommandPaletteSection.module.css';

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
>(({ children, className, title, index, ...rest }, ref) => (
  <MotionItem layout>
    <List
      ref={ref}
      {...rest}
      className={classNames(css.section, className, {
        [css.first]: index === 0
      })}
    >
      {title && <ListHeader>{title}</ListHeader>}
      <MotionGroup>{children}</MotionGroup>
    </List>
  </MotionItem>
));

CommandPaletteSection.displayName = 'CommandPaletteSection';
