import React, { useCallback, useEffect, useState } from 'react';

import type { DrawerProps } from './Drawer';
import { Drawer } from './Drawer';

type DrawerOptions =
  | {
      open?: boolean;
      onClose?: () => void;
    }
  | undefined;

export const useDrawer = (prop?: DrawerOptions) => {
  const { open, onClose } = prop || {};
  const [internalOpen, setInternalOpen] = useState<boolean>(open);

  useEffect(() => {
    setInternalOpen(open);
  }, [open]);

  const onCloseInternal = useCallback(() => {
    setInternalOpen(false);
    onClose?.();
  }, [onClose]);

  const onToggleOpen = () => {
    setInternalOpen(!internalOpen);
  };

  const Component = useCallback(
    (props: Partial<DrawerProps>) => (
      <Drawer {...props} open={internalOpen} onClose={onCloseInternal} />
    ),
    [internalOpen, onCloseInternal],
  );

  return {
    isOpen: internalOpen,
    setOpen: setInternalOpen,
    toggleOpen: onToggleOpen,
    Drawer: Component,
  };
};
