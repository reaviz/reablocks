import React, { FC } from 'react';
import { TooltipProps, Tooltip } from '../Tooltip';
import FocusTrap from 'focus-trap-react';
import classNames from 'classnames';
import { useId } from 'rdk';
import css from './Popover.module.css';

export interface PopoverProps extends Partial<TooltipProps> {
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
}

export const Popover: FC<PopoverProps> = ({
  closeOnEscape,
  closeOnBodyClick,
  trigger,
  leaveDelay,
  children,
  content,
  className,
  disablePadding,
  popoverStyle,
  popoverClassName,
  ...rest
}) => {
  const id = useId();

  return (
    <Tooltip
      {...rest}
      trigger={trigger}
      pointerEvents="initial"
      leaveDelay={leaveDelay}
      isPopover
      className={classNames(css.popover, className, {
        [css.disablePadding]: disablePadding
      })}
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
              fallbackFocus: `#${id}`
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

Popover.defaultProps = {
  closeOnEscape: true,
  closeOnBodyClick: true,
  trigger: 'click',
  leaveDelay: 200
};
