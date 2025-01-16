import React, { FC, ReactNode, useState, useCallback, useEffect } from 'react';
import { motion } from 'motion/react';
import { ConnectedOverlay, ConnectedOverlayProps } from '@/utils';
import { useId } from '@/utils';
import FocusTrap from 'focus-trap-react';
import creteGlobalStateHook from 'create-global-state-hook';
import { twMerge } from 'tailwind-merge';
import { ContextMenuTheme } from './ContextMenuTheme';
import { useComponentTheme } from '@/utils';

const useGlobalMenuState = creteGlobalStateHook<any[]>([]);

export interface ContextMenuContentProps {
  close: () => void;
  closeAll: () => void;
}

export interface ContextMenuProps extends Omit<ConnectedOverlayProps, 'open'> {
  /**
   * Child element to trigger the context menu.
   */
  children: ReactNode;

  /**
   * Content to show in the context menu.
   */
  content: any | ((args: any) => ReactNode);

  /**
   * Whether the context menu is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the context menu should autofocus on open.
   */
  autofocus?: boolean;

  /**
   * Whether the context menu should close on click.
   */
  autoClose?: boolean;

  /**
   * Class name to apply to the trigger element.
   */
  triggerClassName?: string;

  /**
   * Class name to apply to the trigger when the context menu is open.
   */
  triggerOpenClassName?: string;

  /**
   * Theme for the Context Menu.
   */
  theme?: ContextMenuTheme;
}

export const ContextMenu: FC<ContextMenuProps> = ({
  children,
  content,
  disabled,
  triggerClassName,
  triggerOpenClassName,
  autofocus = true,
  autoClose = true,
  theme: customTheme,
  closeOnEscape = true,
  closeOnBodyClick = true,
  ...rest
}) => {
  const id = useId();
  const [menus, setMenus] = useGlobalMenuState();
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = useCallback(() => {
    if (!disabled) {
      menus.forEach(m => m(false));
      setOpen(true);
      setMenus([setOpen]);
    }
  }, [disabled, setOpen, setMenus, menus]);

  const closeAll = useCallback(() => {
    setOpen(false);
    setMenus([]);
  }, [setOpen, setMenus]);

  const close = useCallback(() => {
    setOpen(false);
    setMenus(menus.filter(m => m !== setOpen));
  }, [menus, setMenus]);

  const onClose = useCallback(() => {
    closeAll();
  }, [closeAll]);

  useEffect(() => {
    if (open) {
      closeAll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closeAll]);
  const theme: ContextMenuTheme = useComponentTheme('contextMenu', customTheme);

  return (
    <ConnectedOverlay
      placement="bottom-start"
      triggerElement="span"
      closeOnEscape={closeOnEscape}
      closeOnBodyClick={closeOnBodyClick}
      {...rest}
      triggerClassName={twMerge(
        triggerClassName,
        !disabled && theme.enabled,
        open && triggerOpenClassName
      )}
      trigger="contextmenu"
      open={open}
      content={() => (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          onClick={() => autoClose && onClose?.()}
        >
          {autofocus ? (
            <FocusTrap
              focusTrapOptions={{
                escapeDeactivates: true,
                clickOutsideDeactivates: true,
                fallbackFocus: `#${id}`
              }}
            >
              <div id={id} tabIndex={-1}>
                {typeof content === 'function'
                  ? content({ closeAll, close })
                  : content}
              </div>
            </FocusTrap>
          ) : (
            <>
              {typeof content === 'function'
                ? content({ closeAll, close })
                : content}
            </>
          )}
        </motion.div>
      )}
      onOpen={onOpen}
      onClose={onClose}
    >
      {children}
    </ConnectedOverlay>
  );
};
