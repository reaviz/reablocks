// ConfirmDialog.tsx
import React, { ReactNode } from 'react';
import { Dialog } from '@/layers/Dialog';
import { Button } from '@/elements/Button';

export interface ConfirmDialogProps {
  open: boolean;
  header: string | ReactNode;
  description: string | ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  header,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel
}) => (
  <Dialog open={open} onClose={onCancel} header={header}>
    {() => (
      <>
        <p className="mb-6">{description}</p>
        <footer className="flex justify-end space-x-4">
          <Button className="px-4 py-2" onClick={onConfirm} color="primary">
            {confirmLabel}
          </Button>
          <Button className="px-4 py-2" onClick={onCancel}>
            {cancelLabel}
          </Button>
        </footer>
      </>
    )}
  </Dialog>
);
