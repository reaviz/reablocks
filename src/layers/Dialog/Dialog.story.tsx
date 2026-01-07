import React, { useState } from 'react';
import { Dialog } from './Dialog';
import { DialogHeader } from './DialogHeader';
import { DialogContent } from './DialogContent';
import { DialogFooter } from './DialogFooter';
import { Button } from '../../elements';
import { Stack } from '../../layout';

export default {
  title: 'Components/Layers/Dialog',
  component: Dialog
};

export const Simple = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogHeader>Whats up</DialogHeader>
        <DialogContent>Hello</DialogContent>
      </Dialog>
    </div>
  );
};

export const WithFooter = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogHeader>Confirm Action</DialogHeader>
        <DialogContent>
          <p>
            This is notification text. Fusce dapibus, tellus ac cursus commodo,
            tortor mauris condimentum nibh, ut fermentum massa justo sit amet
            risus.
          </p>
        </DialogContent>
        <DialogFooter>
          <Stack justifyContent="end" className="w-full">
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button color="primary">Save</Button>
          </Stack>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export const WithForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <Button onClick={() => setOpen(true)}>Open Form Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)} size="400px">
        <form
          onSubmit={e => {
            e.preventDefault();
            alert('Form submitted!');
            setOpen(false);
          }}
        >
          <DialogHeader>Edit Profile</DialogHeader>
          <DialogContent>
            <div className="flex flex-col gap-4">
              <label className="flex flex-col gap-1">
                <span className="text-sm text-text-secondary">Name</span>
                <input
                  type="text"
                  className="px-3 py-2 border border-panel-accent rounded bg-panel"
                  placeholder="Enter your name"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm text-text-secondary">Email</span>
                <input
                  type="email"
                  className="px-3 py-2 border border-panel-accent rounded bg-panel"
                  placeholder="Enter your email"
                />
              </label>
            </div>
          </DialogContent>
          <DialogFooter>
            <Stack justifyContent="end" className="w-full">
              <Button type="button" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Save Changes
              </Button>
            </Stack>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
};

export const NoCloseButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        showCloseButton={false}
      >
        <DialogHeader>No Close Button</DialogHeader>
        <DialogContent>
          <p>This dialog has no close button in the header.</p>
        </DialogContent>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export const CustomHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogHeader>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎉</span>
            <span>Custom Header Content</span>
          </div>
        </DialogHeader>
        <DialogContent>
          <p>You can put any custom content in the header!</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export const CustomAnimation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        animation={{
          initial: { opacity: 0, scale: 0.5, rotate: -10 },
          animate: { opacity: 1, scale: 1, rotate: 0 },
          exit: { opacity: 0, scale: 0.5, rotate: 10 },
          transition: { duration: 0.4, type: 'spring', stiffness: 150 }
        }}
      >
        <DialogHeader>Custom Animation Dialog</DialogHeader>
        <DialogContent>
          <p>This dialog uses custom animation properties.</p>
          <p>It scales and rotates while fading in and out.</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};
