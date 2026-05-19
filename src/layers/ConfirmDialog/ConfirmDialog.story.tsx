import { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ConfirmDialog, ConfirmDialogProps } from './ConfirmDialog';
import { ConfirmDialogActions } from './ConfirmDialogActions';
import { useConfirmDialogContext } from './ConfirmDialogContext';
import { Button } from '@/elements/Button';

const meta: Meta<typeof ConfirmDialog> = {
  title: 'Components/Layers/Confirm Dialog',
  component: ConfirmDialog,
  argTypes: {
    header: { control: 'text' },
    content: { control: 'text' },
    confirmLabel: { control: 'text' },
    cancelLabel: { control: 'text' },
    onConfirm: { action: 'confirmed' },
    onCancel: { action: 'cancelled' }
  }
};

export default meta;

type Story = StoryObj<ConfirmDialogProps>;

export const Default: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleConfirm = useCallback(
      function (): void {
        if (args.onConfirm) {
          args.onConfirm();
        }
        setIsOpen(false);
      },
      [args, setIsOpen]
    );

    const handleCancel = useCallback(
      function (): void {
        if (args.onCancel) {
          args.onCancel();
        }
        setIsOpen(false);
      },
      [args, setIsOpen]
    );

    return (
      <>
        <Button
          onClick={function (): void {
            setIsOpen(true);
          }}
        >
          Open Dialog
        </Button>
        <ConfirmDialog
          {...args}
          open={isOpen}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </>
    );
  },
  args: {
    header: 'Confirm Action',
    content: 'Are you sure you want to proceed?',
    confirmLabel: 'Confirm',
    cancelLabel: 'Cancel'
  }
};

export const AsyncAction: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [lastResult, setLastResult] = useState<string | null>(null);

    const handleConfirm = useCallback(async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (args.onConfirm) {
        args.onConfirm();
      }
      setLastResult(`Saved at ${new Date().toLocaleTimeString()}`);
      setIsOpen(false);
    }, [args]);

    const handleCancel = useCallback(() => {
      if (args.onCancel) {
        args.onCancel();
      }
      setIsOpen(false);
    }, [args]);

    return (
      <>
        <Button
          onClick={function (): void {
            setIsOpen(true);
          }}
        >
          Save Changes
        </Button>
        {lastResult && <p style={{ marginTop: 10 }}>{lastResult}</p>}
        <ConfirmDialog
          {...args}
          open={isOpen}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </>
    );
  },
  args: {
    header: 'Save Changes',
    content:
      'This will commit your changes to the server. The dialog stays open and shows a loader until the action completes.',
    confirmLabel: 'Save',
    cancelLabel: 'Cancel'
  }
};

export const Destructive: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleConfirm = useCallback(
      function (): void {
        if (args.onConfirm) {
          args.onConfirm();
        }
        setIsOpen(false);
      },
      [args, setIsOpen]
    );

    const handleCancel = useCallback(
      function (): void {
        if (args.onCancel) {
          args.onCancel();
        }
        setIsOpen(false);
      },
      [args, setIsOpen]
    );

    return (
      <>
        <Button
          onClick={function (): void {
            setIsOpen(true);
          }}
        >
          Delete Item
        </Button>
        <ConfirmDialog
          {...args}
          open={isOpen}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </>
    );
  },
  args: {
    header: 'Delete Item',
    content:
      'Are you sure you want to delete this item? This action cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
    variant: 'destructive'
  }
};

const PublishActions = ({ onSaveDraft }: { onSaveDraft: () => void }) => {
  const { onConfirm, onCancel, isLoading } = useConfirmDialogContext();
  return (
    <>
      <Button
        variant="outline"
        className="px-4 py-2"
        onClick={onCancel}
        disabled={isLoading}
      >
        Discard
      </Button>
      <Button
        variant="outline"
        color="secondary"
        className="px-4 py-2"
        onClick={onSaveDraft}
        disabled={isLoading}
      >
        Save draft
      </Button>
      <Button
        color="primary"
        className="px-4 py-2"
        onClick={onConfirm}
        disabled={isLoading}
      >
        {isLoading ? 'Publishing…' : 'Publish'}
      </Button>
    </>
  );
};

export const CustomActions: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [lastResult, setLastResult] = useState<string | null>(null);

    const handlePublish = useCallback(async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLastResult('Published');
      setIsOpen(false);
    }, []);

    const handleSaveDraft = useCallback(() => {
      setLastResult('Saved as draft');
      setIsOpen(false);
    }, []);

    return (
      <>
        <Button
          onClick={function (): void {
            setIsOpen(true);
          }}
        >
          Publish Post
        </Button>
        {lastResult && <p style={{ marginTop: 10 }}>{lastResult}</p>}
        <ConfirmDialog
          {...args}
          open={isOpen}
          onConfirm={handlePublish}
          onCancel={() => setIsOpen(false)}
        >
          <ConfirmDialogActions>
            <PublishActions onSaveDraft={handleSaveDraft} />
          </ConfirmDialogActions>
        </ConfirmDialog>
      </>
    );
  },
  args: {
    header: 'Publish Post',
    content:
      'Choose how to handle this draft. Publishing pushes it live; the dialog stays open and disables actions while the request runs.'
  }
};

export const AsyncDestructive: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [lastResult, setLastResult] = useState<string | null>(null);

    const handleConfirm = useCallback(async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (args.onConfirm) {
        args.onConfirm();
      }
      setLastResult(`Deleted at ${new Date().toLocaleTimeString()}`);
      setIsOpen(false);
    }, [args]);

    const handleCancel = useCallback(() => {
      if (args.onCancel) {
        args.onCancel();
      }
      setIsOpen(false);
    }, [args]);

    return (
      <>
        <Button
          onClick={function (): void {
            setIsOpen(true);
          }}
        >
          Delete Item
        </Button>
        {lastResult && <p style={{ marginTop: 10 }}>{lastResult}</p>}
        <ConfirmDialog
          {...args}
          open={isOpen}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </>
    );
  },
  args: {
    header: 'Delete Item',
    content:
      'Are you sure you want to delete this item? This action cannot be undone. The dialog stays open and shows a loader until the deletion completes.',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
    variant: 'destructive'
  }
};
