import FocusTrap from 'focus-trap-react';
import type { FC } from 'react';
import React from 'react';

import type { TooltipProps } from '@/layers/Tooltip';
import { Tooltip } from '@/layers/Tooltip';
import { useId } from '@/utils';
import { twMerge } from '@/utils';
import { useComponentTheme } from '@/utils';

import type { PopoverTheme } from './PopoverTheme';

type FocusTargetValueOrFalse = HTMLElement | SVGElement | string | false;

type FocusTargetOrFalse =
  | FocusTargetValueOrFalse
  | (() => FocusTargetValueOrFalse);

export interface PopoverProps extends Partial<Omit<TooltipProps, 'theme'>> {
  /**
   * Disable default padding on popover.
   */
  disablePadding?: boolean;

  /**
   * Popover css styles.
   */
  popoverStyle?: React.StyleHTMLAttributes<any>;

  /**
   * Popover classname.
   */
  popoverClassName?: string;

  /**
   * Theme for the Popover.
   */
  theme?: PopoverTheme;

  /**
   * Popover has a focus trap that by default focuses the first element in the tab order.
   * With this option you can specify a different element to receive that initial focus, or use false for no initially focused element.
   */
  autoFocus?: FocusTargetOrFalse | undefined | (() => void);
}

export const Popover: FC<PopoverProps> = ({
  closeOnEscape = true,
  closeOnBodyClick = true,
  trigger = 'click',
  leaveDelay = 200,
  children,
  content,
  className,
  disablePadding,
  popoverStyle,
  popoverClassName,
  theme: customTheme,
  autoFocus,
  ...rest
}) => {
  const id = useId();
  const theme: PopoverTheme = useComponentTheme('popover', customTheme);

  return (
    <Tooltip
      {...rest}
      trigger={trigger}
      pointerEvents="initial"
      leaveDelay={leaveDelay}
      isPopover
      className={twMerge(
        theme.base,
        disablePadding && theme.disablePadding,
        className
      )}
      content={() => {
        const isContentFunction = typeof content === 'function';
        const children = isContentFunction ? content() : content;
        if (!children) {
          return null;
        }

        return (
          <FocusTrap
            focusTrapOptions={{
              escapeDeactivates: true,
              clickOutsideDeactivates: true,
              fallbackFocus: `#${id}`,
              initialFocus: autoFocus
            }}
          >
            <div
              id={id}
              tabIndex={-1}
              style={popoverStyle}
              className={popoverClassName}
            >
              {children}
            </div>
          </FocusTrap>
        );
      }}
    >
      {children}
    </Tooltip>
  );
};
