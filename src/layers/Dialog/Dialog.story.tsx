import React from 'react';
import { Dialog } from './Dialog';
import { useDialog } from './useDialog';
import { Button } from '../../elements';
import { Stack } from '../../layout';

export default {
  title: 'Components/Layers/Dialog',
  component: Dialog
};

export const Simple = () => {
  const { toggleOpen, Dialog } = useDialog();

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <Button onClick={toggleOpen}>Open</Button>
      <Dialog header="Whats up">Hello</Dialog>
    </div>
  );
};

export const CustomHeader = () => {
  const { toggleOpen, Dialog } = useDialog();

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <Button onClick={toggleOpen}>Open</Button>
      <Dialog header={<h3 className="text-2xl">What's up</h3>}>Hello</Dialog>
    </div>
  );
};

const MyHeader = ({ children }: any) => <div>{children}</div>;

export const CustomHeaderElement = () => {
  const { toggleOpen, Dialog } = useDialog();

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <Button onClick={toggleOpen}>Open</Button>
      <Dialog header="My Custom Header" headerElement={<MyHeader />}>
        Body Content
      </Dialog>
    </div>
  );
};

export const NoHeader = () => {
  const { toggleOpen, Dialog } = useDialog();

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <Button onClick={toggleOpen}>Open</Button>
      <Dialog header={null}>Hello</Dialog>
    </div>
  );
};

export const NoPadding = () => {
  const { toggleOpen, Dialog } = useDialog();

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <Button onClick={toggleOpen}>Open</Button>
      <Dialog header={null} disablePadding={true}>
        Hello
      </Dialog>
    </div>
  );
};

export const Footer = () => {
  const { toggleOpen, Dialog } = useDialog();

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <Button onClick={toggleOpen}>Open</Button>
      <Dialog
        header="Whats up"
        footer={
          <div>
            <Button>Save</Button>
          </div>
        }
      >
        <div style={{ height: '300px', backgroundColor: 'white' }}>Hello</div>
      </Dialog>
    </div>
  );
};

export const ConfirmDialog = () => {
  const { toggleOpen, Dialog } = useDialog();

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <Button onClick={toggleOpen}>Open</Button>
      <Dialog
        header="Whats up"
        footer={
          <Stack justifyContent="end" className="w-full">
            <Button>Cancel</Button>
            <Button color="primary">Save</Button>
          </Stack>
        }
      >
        <div>
          This is notification text. Fusce dapibus, tellus ac cursus commodo,
          tortor mauris condimentum nibh, ut fermentum massa justo sit amet
          risus.
        </div>
      </Dialog>
    </div>
  );
};
