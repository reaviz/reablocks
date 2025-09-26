import type { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';

import { Button } from '@/elements/Button';

import type { ConfirmDialogProps } from './ConfirmDialog';
import { ConfirmDialog } from './ConfirmDialog';

const meta: Meta<typeof ConfirmDialog> = {
  title: 'Components/Layers/Confirm Dialog',
  component: ConfirmDialog,
  argTypes: {
    header: { control: 'text' },
    content: { control: 'text' },
    confirmLabel: { control: 'text' },
    cancelLabel: { control: 'text' },
    onConfirm: { action: 'confirmed' },
    onCancel: { action: 'cancelled' },
  },
};

export default meta;

type Story = StoryObj<ConfirmDialogProps>;

export const Default: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleConfirm = useCallback(
      function (): void {
        if (args.onConfirm) {
          args.onConfirm();
        }
        setIsOpen(false);
      },
      [args, setIsOpen],
    );

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleCancel = useCallback(
      function (): void {
        if (args.onCancel) {
          args.onCancel();
        }
        setIsOpen(false);
      },
      [args, setIsOpen],
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
    cancelLabel: 'Cancel',
  },
};
