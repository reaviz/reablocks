import React, { FC, ReactNode, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ConnectedOverlay, ConnectedOverlayProps, useId } from 'rdk';
import FocusTrap from 'focus-trap-react';
import classNames from 'classnames';
import creteGlobalStateHook from 'create-global-state-hook';
import css from './ContextMenu.module.css';

const useGlobalMenuState = creteGlobalStateHook<any[]>([]);

export interface ContextMenuProps extends Omit<ConnectedOverlayProps, 'open'> {
  children: ReactNode;
  content: ReactNode;
  disabled?: boolean;
  autofocus?: boolean;
  autoClose?: boolean;
}

export const ContextMenu: FC<ContextMenuProps> = ({
  children,
  content,
  disabled,
  autofocus,
  autoClose,
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

  const closeAllMenus = useCallback(() => {
    setOpen(false);
    setMenus([]);
  }, [setOpen, setMenus]);

  const onClose = useCallback(() => {
    closeAllMenus();
  }, [closeAllMenus]);

  useEffect(() => {
    if (open) {
      closeAllMenus();
    }
  }, []);

  return (
    <ConnectedOverlay
      placement="bottom-start"
      triggerElement="span"
      {...rest}
      triggerClassName={classNames({
        [css.open]: open,
        [css.enabled]: !disabled
      })}
      trigger="contextmenu"
      open={open}
      content={() => (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          onClick={() => autoClose && onClose?.()}
        >
          {autofocus && (
            <FocusTrap
              focusTrapOptions={{
                escapeDeactivates: true,
                clickOutsideDeactivates: true,
                fallbackFocus: `#${id}`
              }}
            >
              <div id={id} tabIndex={-1}>
                {content}
              </div>
            </FocusTrap>
          )}
          {!autofocus && content}
        </motion.div>
      )}
      onOpen={onOpen}
      onClose={onClose}
    >
      {children}
    </ConnectedOverlay>
  );
};

ContextMenu.defaultProps = {
  autofocus: true,
  autoClose: true,
  closeOnEscape: true,
  closeOnBodyClick: true
};
