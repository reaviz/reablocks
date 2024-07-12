import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ConfirmDialog, ConfirmDialogProps } from './ConfirmDialog';
import { Button } from '@/elements/Button';

export default {
  title: 'Components/Layers/Confirm Dialog',
  component: ConfirmDialog,
  argTypes: {
    header: { control: 'text' },
    description: { control: 'text' },
    confirmLabel: { control: 'text' },
    cancelLabel: { control: 'text' },
    onConfirm: { action: 'confirmed' },
    onCancel: { action: 'cancelled' }
  }
} as Meta;

const Template: StoryFn<ConfirmDialogProps> = args => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <ConfirmDialog
        {...args}
        open={isOpen}
        onConfirm={() => {
          args?.onConfirm();
          setIsOpen(false);
        }}
        onCancel={() => {
          args?.onCancel();
          setIsOpen(false);
        }}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  header: 'Confirm Action',
  description: 'Are you sure you want to proceed?',
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel'
};
