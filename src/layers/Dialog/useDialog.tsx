import React, { useCallback, useEffect, useState } from 'react';

import type { DialogProps } from './Dialog';
import { Dialog } from './Dialog';

type DialogOptions =
  | {
      open?: boolean;
      onClose?: () => void;
    }
  | undefined;

export const useDialog = (prop?: DialogOptions) => {
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
    setInternalOpen(!open);
  };

  const Component = useCallback(
    (props: Partial<DialogProps>) => (
      <Dialog {...props} open={internalOpen} onClose={onCloseInternal} />
    ),
    [internalOpen, onCloseInternal],
  );

  return {
    isOpen: internalOpen,
    setOpen: setInternalOpen,
    toggleOpen: onToggleOpen,
    Dialog: Component,
  };
};
