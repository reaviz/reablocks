import React, { FC, forwardRef, LegacyRef, useMemo } from 'react';
import FocusTrap from 'focus-trap-react';
import { MiddlewareState, size } from '@floating-ui/react';
import { ConnectedOverlay, OverlayEvent } from '@/utils/Overlay';
import { Modifiers, Placement } from '@/utils/Position';
import { useId } from '@/utils';
import { motion } from 'motion/react';
import { twMerge } from 'tailwind-merge';
import { MenuTheme } from './MenuTheme';
import { useComponentTheme } from '@/utils';

export interface MenuProps {
  /**
   * Whether to append the menu to the body or not.
   */
  appendToBody?: boolean;

  /**
   * Autofocus the menu on open or not.
   */
  autofocus?: boolean;

  /**
   * The menu contents.
   */
  children: any | (() => any);

  /**
   * CSS class applied to menu element.
   */
  className?: string;

  /**
   * Close the menu on click or not.
   */
  closeOnBodyClick?: boolean;

  /**
   * Close the menu on escape.
   */
  closeOnEscape?: boolean;

  /**
   * floating-ui placement type.
   */
  placement?: Placement;

  /**
   * Reference element for the menu position.
   */
  reference?: any;

  /**
   * CSS Properties for the menu.
   */
  style?: React.CSSProperties;

  /**
   * Whether to show the menu or not.
   */
  open?: boolean;

  /**
   * Max height of the menu.
   */
  maxHeight?: string;

  /**
   * floating-ui Position modifiers.
   */
  modifiers?: Modifiers;

  /**
   * Whether the menu should be the same width as the reference element
   */
  autoWidth?: boolean;

  /**
   * Min width of the menu.
   */
  minWidth?: number;

  /**
   * Max width of the menu.
   */
  maxWidth?: number;

  /**
   * Menu was closed.
   */
  onClose?: (event: OverlayEvent) => void;

  /**
   * Mouse enter event.
   */
  onMouseEnter?: (event) => void;

  /**
   * Mouse leave event.
   */
  onMouseLeave?: (event) => void;

  /**
   * Theme for the Menu.
   */
  theme?: MenuTheme;
}

export interface MenuRef {
  /**
   * Reference to the menu element.
   */
  ref?: LegacyRef<HTMLDivElement>;
}

export const Menu: FC<MenuProps & MenuRef> = forwardRef<
  HTMLDivElement,
  MenuProps
>(
  (
    {
      reference,
      children,
      style,
      className,
      placement = 'bottom-start',
      closeOnEscape = true,
      open = false,
      appendToBody = true,
      closeOnBodyClick = true,
      maxHeight = 'max-height: calc(100vh - 48px)',
      autofocus = true,
      modifiers,
      autoWidth,
      minWidth,
      maxWidth,
      onClose,
      onMouseEnter,
      onMouseLeave,
      theme: customTheme
    },
    ref
  ) => {
    const id = useId();

    const internalModifiers = useMemo(() => {
      if (autoWidth) {
        const sameWidth = {
          name: 'sameWidth',
          fn: (state: MiddlewareState) => {
            const { width } = state.rects.reference;
            let menuWidth = width;

            if (maxWidth && menuWidth > maxWidth) {
              menuWidth = maxWidth;
            } else if (minWidth && menuWidth < minWidth) {
              menuWidth = minWidth;
            }

            return { data: { menuWidth } };
          }
        };

        const sizeModifier = size({
          apply({ middlewareData, elements }) {
            elements.floating.style.width = `${middlewareData?.sameWidth?.menuWidth ?? 0}px`;
          }
        });

        return modifiers
          ? [...(modifiers ?? []), sameWidth, sizeModifier]
          : [sameWidth, sizeModifier];
      } else {
        // Reset width to auto when autoWidth is false
        const autoWidth = size({
          apply({ elements }) {
            elements.floating.style.width = 'auto';
          }
        });

        return [...(modifiers ?? []), autoWidth];
      }
    }, [modifiers, autoWidth, minWidth, maxWidth]);

    const theme: MenuTheme = useComponentTheme('menu', customTheme);

    return (
      <ConnectedOverlay
        open={open}
        closeOnBodyClick={closeOnBodyClick}
        appendToBody={appendToBody}
        reference={reference}
        placement={placement}
        modifiers={internalModifiers}
        closeOnEscape={closeOnEscape}
        content={() => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={twMerge(theme.base, className)}
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {autofocus ? (
              <FocusTrap
                focusTrapOptions={{
                  escapeDeactivates: true,
                  clickOutsideDeactivates: true,
                  fallbackFocus: `#${id}`
                }}
              >
                <div
                  id={id}
                  className={theme.inner}
                  tabIndex={-1}
                  style={{ maxHeight }}
                >
                  {typeof children === 'function' ? children() : children}
                </div>
              </FocusTrap>
            ) : (
              <div className={theme.inner} style={{ maxHeight }}>
                {typeof children === 'function' ? children() : children}
              </div>
            )}
          </motion.div>
        )}
        onClose={onClose}
      />
    );
  }
);
