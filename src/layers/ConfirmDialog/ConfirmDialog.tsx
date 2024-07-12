// ConfirmDialog.tsx
import React, { ReactNode } from 'react';
import { Dialog } from '@/layers/Dialog';
import { Button } from '@/elements/Button';

export interface ConfirmDialogProps {
  /**
   * Whether the dialog is open or not
   */
  open: boolean;

  /**
   * The header of the dialog
   */
  header: string | ReactNode;

  /**
   * The description of the dialog
   */
  description: string | ReactNode;

  /**
   * The label for the confirm button
   */
  confirmLabel?: string;

  /**
   * The label for the cancel button
   */
  cancelLabel?: string;

  /**
   * Callback when the confirm button is clicked
   */
  onConfirm?: () => void;

  /**
   * Callback when the cancel button is clicked
   */
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
