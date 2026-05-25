// ConfirmDialog.tsx
import React, {
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState
} from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader
} from '@/layers/Dialog';
import { Button } from '@/elements/Button';
import { DotsLoader } from '@/elements/Loader';
import { hasSlotComponents, isPromiseLike } from '@/utils';
import {
  ConfirmDialogContext,
  ConfirmDialogContextValue
} from './ConfirmDialogContext';
import { ConfirmDialogActionsProps } from './ConfirmDialogActions';

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
   * The content of the dialog
   */
  content: string | ReactNode;

  /**
   * The label for the confirm button
   * @default 'Confirm'
   */
  confirmLabel?: string;

  /**
   * The label for the cancel button
   * @default 'Cancel'
   */
  cancelLabel?: string;

  /**
   * Callback when the confirm button is clicked. May return a Promise;
   * while it is pending the dialog shows a loading state and disables
   * its action buttons.
   */
  onConfirm?: () => void | Promise<void>;

  /**
   * Callback when the cancel button is clicked
   */
  onCancel?: () => void;

  /**
   * The visual variant of the dialog. Use `destructive` for actions like delete.
   * @default 'default'
   */
  variant?: 'default' | 'destructive';

  /**
   * Controlled loading state for the confirm action. When provided, takes
   * precedence over the dialog's internal async tracking — use this when
   * the loading state lives outside the dialog (e.g. driven by a mutation
   * hook). When omitted, the dialog automatically enters the loading state
   * if `onConfirm` returns a Promise.
   */
  loading?: boolean;

  /**
   * Whether the confirm button is disabled.
   */
  confirmDisabled?: boolean;

  /**
   * Optional slot children. Pass a `<ConfirmDialogActions>` element to
   * replace the default Confirm/Cancel buttons. Action children can read
   * the managed state via `useConfirmDialogContext()`. Other React nodes
   * are not rendered — use `header`/`content` props for those.
   */
  children?: ReactElement<ConfirmDialogActionsProps>;
}

const VARIANT_COLORS: Record<
  NonNullable<ConfirmDialogProps['variant']>,
  'primary' | 'error'
> = {
  default: 'primary',
  destructive: 'error'
};

const CONFIRM_DIALOG_SLOT_NAMES = ['ConfirmDialogActions'];

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  header,
  content,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  variant = 'default',
  loading,
  confirmDisabled = false,
  children
}) => {
  const [internalLoading, setInternalLoading] = useState(false);
  const isLoading = loading ?? internalLoading;

  // Ref mirrors isLoading so the re-entry guard sees the latest value
  // without forcing handleConfirm to re-create on every state change.
  const isLoadingRef = useRef(isLoading);
  isLoadingRef.current = isLoading;

  const handleConfirm = useCallback(async () => {
    if (isLoadingRef.current || !onConfirm) {
      return;
    }

    const result = onConfirm();
    if (isPromiseLike(result)) {
      const manageInternal = loading === undefined;
      if (manageInternal) {
        setInternalLoading(true);
      }
      try {
        await result;
      } finally {
        if (manageInternal) {
          setInternalLoading(false);
        }
      }
    }
  }, [onConfirm, loading]);

  const handleCancel = useCallback(() => {
    if (isLoading) {
      return;
    }
    onCancel?.();
  }, [isLoading, onCancel]);

  const contextValue = useMemo<ConfirmDialogContextValue>(
    () => ({
      isLoading,
      onConfirm: handleConfirm,
      onCancel: handleCancel,
      variant,
      confirmDisabled,
      confirmLabel,
      cancelLabel
    }),
    [
      isLoading,
      handleConfirm,
      handleCancel,
      variant,
      confirmDisabled,
      confirmLabel,
      cancelLabel
    ]
  );

  const hasActionsSlot = useMemo(
    () => hasSlotComponents(children, CONFIRM_DIALOG_SLOT_NAMES),
    [children]
  );

  return (
    <Dialog open={open} onClose={handleCancel}>
      <DialogHeader>{header}</DialogHeader>
      <DialogContent>{content}</DialogContent>
      <ConfirmDialogContext.Provider value={contextValue}>
        {hasActionsSlot ? (
          children
        ) : (
          <DialogFooter className="flex justify-end space-x-4">
            <Button
              className="px-4 py-2"
              onClick={handleConfirm}
              color={VARIANT_COLORS[variant]}
              disabled={confirmDisabled || isLoading}
              start={isLoading && <DotsLoader size="small" />}
              aria-label={confirmLabel}
              aria-busy={isLoading}
            >
              {!isLoading && confirmLabel}
            </Button>
            <Button
              className="px-4 py-2"
              onClick={handleCancel}
              disabled={isLoading}
            >
              {cancelLabel}
            </Button>
          </DialogFooter>
        )}
      </ConfirmDialogContext.Provider>
    </Dialog>
  );
};
