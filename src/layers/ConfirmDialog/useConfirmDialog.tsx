import React, { useCallback, useState } from 'react';

import type { ConfirmDialogProps } from './ConfirmDialog';
import { ConfirmDialog } from './ConfirmDialog';

export type OpenConfirmDialogProps = Omit<ConfirmDialogProps, 'open'>;

export const useConfirmDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogProps, setDialogProps] = useState<OpenConfirmDialogProps | null>(
    null
  );

  const closeDialog = useCallback(() => {
    setIsOpen(false);
    setDialogProps(null);
  }, []);

  const openDialog = useCallback(
    (props: OpenConfirmDialogProps) => {
      setDialogProps({
        ...props,
        onCancel: props.onCancel || closeDialog
      });
      setIsOpen(true);
    },
    [closeDialog]
  );

  const DialogComponent = useCallback(() => {
    if (!dialogProps) {
      return null;
    }

    return <ConfirmDialog open={isOpen} {...dialogProps} />;
  }, [isOpen, dialogProps]);

  return {
    isOpen,
    openDialog,
    closeDialog,
    DialogComponent
  };
};
