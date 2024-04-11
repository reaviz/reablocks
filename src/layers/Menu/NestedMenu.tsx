import React, { FC, Fragment, useCallback, useRef, useState } from 'react';
import { OverlayEvent } from '../../utils/Overlay';
import { Placement } from '../../utils/Position';
import { Menu } from './Menu';
import classNames from 'classnames';

export interface NestedMenuProps {
  /**
   * Menu contents.
   */
  children: any;

  /**
   * Label element for the menu item.
   */
  label: any;

  /**
   * Popper placement type.
   */
  placement?: Placement;

  /**
   * CSS class applied to label element.
   */
  className?: string;

  /**
   * CSS Properties for the label element.
   */
  style?: React.CSSProperties;

  /**
   * CSS class applied to label element.
   */
  menuClassName?: string;

  /**
   * CSS class applied to label element when active.
   */
  activeClassName?: string;

  /**
   * CSS Properties for the label element.
   */
  menuStyle?: React.CSSProperties;

  /**
   * Delay before showing tooltip.
   */
  enterDelay?: number;

  /**
   * Delay before closing tooltip.
   */
  leaveDelay?: number;

  /**
   * Close the menu on click or not.
   */
  closeOnBodyClick?: boolean;

  /**
   * Close the menu on escape.
   */
  closeOnEscape?: boolean;

  /**
   * Max height of the menu.
   */
  maxHeight?: string;

  /**
   * Autofocus the menu on open or not.
   */
  autofocus?: boolean;

  /**
   * Nested Menu was closed.
   */
  onClose?: (event: OverlayEvent) => void;
}

export const NestedMenu: FC<NestedMenuProps> = ({
  label,
  children,
  style,
  placement,
  menuClassName,
  menuStyle,
  enterDelay,
  autofocus,
  leaveDelay,
  className,
  maxHeight,
  activeClassName,
  closeOnBodyClick,
  closeOnEscape,
  onClose
}) => {
  const [active, setActive] = useState<boolean>(false);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuEntered = useRef<boolean>(false);
  const enterTimeoutRef = useRef<any | null>(null);
  const leaveTimeoutRef = useRef<any | null>(null);

  const onMouseEnterItem = useCallback(() => {
    clearTimeout(enterTimeoutRef.current);
    clearTimeout(leaveTimeoutRef.current);
    enterTimeoutRef.current = setTimeout(() => setActive(true), enterDelay);
  }, [enterDelay]);

  const onClickItem = useCallback(() => {
    clearTimeout(enterTimeoutRef.current);
    clearTimeout(leaveTimeoutRef.current);
    setActive(!active);
  }, [active]);

  const onMouseLeaveItem = useCallback(() => {
    leaveTimeoutRef.current = setTimeout(() => {
      if (!menuEntered.current) {
        setActive(false);
      }
    }, leaveDelay);
  }, [leaveDelay]);

  const onMouseEnterMenu = useCallback(event => {
    clearTimeout(enterTimeoutRef.current);
    clearTimeout(leaveTimeoutRef.current);
    menuEntered.current = true;
  }, []);

  const onMouseLeaveMenu = useCallback(
    event => {
      clearTimeout(enterTimeoutRef.current);
      clearTimeout(leaveTimeoutRef.current);
      menuEntered.current = false;

      leaveTimeoutRef.current = setTimeout(() => {
        if (!itemRef.current?.contains(event.target)) {
          setActive(false);
        }
      }, leaveDelay);
    },
    [leaveDelay]
  );

  const onNestedMenuClose = useCallback(
    event => {
      setActive(false);
      onClose?.(event);
    },
    [onClose]
  );

  return (
    <Fragment>
      <div
        className={classNames(className, { [activeClassName]: active })}
        style={style}
        ref={itemRef}
        onClick={onClickItem}
        onMouseEnter={onMouseEnterItem}
        onMouseLeave={onMouseLeaveItem}
      >
        {label}
      </div>
      <Menu
        className={menuClassName}
        autofocus={autofocus}
        style={menuStyle}
        reference={itemRef}
        closeOnBodyClick={closeOnBodyClick}
        closeOnEscape={closeOnEscape}
        open={active}
        placement={placement}
        maxHeight={maxHeight}
        ref={menuRef}
        onMouseEnter={onMouseEnterMenu}
        onMouseLeave={onMouseLeaveMenu}
        onClose={onNestedMenuClose}
      >
        {children}
      </Menu>
    </Fragment>
  );
};

NestedMenu.defaultProps = {
  autofocus: true,
  placement: 'right-start',
  closeOnEscape: true,
  closeOnBodyClick: true,
  enterDelay: 0,
  leaveDelay: 100
};
