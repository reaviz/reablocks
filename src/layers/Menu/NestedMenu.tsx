import { ListItem } from '@/layout';
import React, {
  forwardRef,
  Fragment,
  KeyboardEvent,
  useCallback,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import { OverlayEvent } from '@/utils/Overlay';
import { Placement } from '@/utils/Position';
import { Menu } from './Menu';
import classNames from 'classnames';
import { MotionNodeAnimationOptions } from 'motion';

export interface NestedMenuRef {
  /**
   * Close the menu.
   */
  close: () => void;
}

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
   * floating-ui placement type.
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
   * Animation configuration for the menu.
   */
  animation?: MotionNodeAnimationOptions;

  /**
   * Nested Menu was closed.
   */
  onClose?: (event: OverlayEvent) => void;
}

export const NestedMenu = forwardRef<NestedMenuRef, NestedMenuProps>(
  (
    {
      label,
      children,
      style,
      placement = 'right-start',
      menuClassName,
      menuStyle,
      enterDelay = 0,
      autofocus = true,
      leaveDelay = 100,
      className,
      maxHeight,
      activeClassName,
      closeOnBodyClick = true,
      closeOnEscape = true,
      animation,
      onClose
    },
    ref
  ) => {
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

    const onKeyDown = useCallback((e: KeyboardEvent) => {
      e.stopPropagation();
      if (e.key === 'ArrowLeft' || e.key === 'Escape') {
        setActive(false);
      }
    }, []);

    /**
     * Expose the close ability to the outside
     */
    useImperativeHandle(ref, () => ({
      close: () => {
        setActive(false);
      }
    }));

    return (
      <Fragment>
        <ListItem
          className={classNames(className, { [activeClassName]: active })}
          style={style}
          ref={itemRef}
          onClick={onClickItem}
          onMouseEnter={onMouseEnterItem}
          onMouseLeave={onMouseLeaveItem}
        >
          {label}
        </ListItem>
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
          animation={animation}
          ref={menuRef}
          onMouseEnter={onMouseEnterMenu}
          onMouseLeave={onMouseLeaveMenu}
          onClose={onNestedMenuClose}
        >
          <div onKeyDown={onKeyDown}>{children}</div>
        </Menu>
      </Fragment>
    );
  }
);
