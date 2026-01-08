import React, { useCallback, useEffect, useRef, useState } from 'react';

import type { MenuProps } from './Menu';
import { Menu } from './Menu';

type MenuOptions =
  | {
      open?: boolean;
      onClose?: () => void;
    }
  | undefined;

export const useMenu = (prop?: MenuOptions) => {
  const { open, onClose } = prop || {};
  const [internalOpen, setInternalOpen] = useState<boolean>(open);
  const ref = useRef<any | null>(null);

  useEffect(() => {
    setInternalOpen(open);
  }, [open]);

  const onCloseInternal = useCallback(() => {
    setInternalOpen(false);
    onClose?.();
  }, [onClose]);

  const onToggleOpen = useCallback(() => {
    setInternalOpen(!internalOpen);
  }, [internalOpen]);

  const Component = useCallback(
    (props: MenuProps) => (
      <Menu
        {...props}
        open={internalOpen}
        reference={ref}
        onClose={onCloseInternal}
      />
    ),
    [internalOpen, onCloseInternal]
  );

  return {
    isOpen: internalOpen,
    setOpen: setInternalOpen,
    toggleOpen: onToggleOpen,
    Menu: Component,
    ref
  };
};
