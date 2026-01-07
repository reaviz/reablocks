import React, { useState } from 'react';
import { Dialog } from './Dialog';
import { DialogHeader } from './DialogHeader';
import { DialogContent } from './DialogContent';
import { DialogFooter } from './DialogFooter';
import { useDialog } from './useDialog';
import { Button } from '../../elements';
import { Stack } from '../../layout';

export default {
  title: 'Components/Layers/Dialog',
  component: Dialog
};

// New slot-based approach examples
export const SlotBased = () => {
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

export const SlotBasedWithFooter = () => {
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

export const SlotBasedWithForm = () => {
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

export const SlotBasedNoCloseButton = () => {
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

export const SlotBasedCustomHeader = () => {
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

export const AsChildPattern = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <Button onClick={() => setOpen(true)}>Open asChild Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogHeader asChild>
          <nav className="flex items-center justify-between border-b border-panel-accent">
            <h2 className="text-xl font-bold">Custom Navigation Header</h2>
            <button
              onClick={() => setOpen(false)}
              className="text-text-secondary hover:text-text-primary"
            >
              ✕
            </button>
          </nav>
        </DialogHeader>
        <DialogContent asChild>
          <section className="space-y-4">
            <p>
              Using <code>asChild</code>, you can render any element while
              inheriting the slot's styles.
            </p>
            <p>
              This is useful when you need semantic HTML or custom components.
            </p>
          </section>
        </DialogContent>
        <DialogFooter asChild>
          <div className="flex justify-between border-t border-panel-accent pt-4">
            <span className="text-text-secondary text-sm">
              Custom footer layout
            </span>
            <Button onClick={() => setOpen(false)} color="primary">
              Done
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

// Legacy prop-based examples (deprecated but still supported)
export const LegacySimple = () => {
  const { toggleOpen, Dialog } = useDialog();

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <Button onClick={toggleOpen}>Open</Button>
      <Dialog header="Whats up">Hello</Dialog>
    </div>
  );
};

LegacySimple.storyName = 'Legacy: Simple (Deprecated)';

export const LegacyCustomHeader = () => {
  const { toggleOpen, Dialog } = useDialog();

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <Button onClick={toggleOpen}>Open</Button>
      <Dialog header={<h3 className="text-2xl">What's up</h3>}>Hello</Dialog>
    </div>
  );
};

LegacyCustomHeader.storyName = 'Legacy: Custom Header (Deprecated)';

const MyHeader = ({ children }: any) => <div>{children}</div>;

export const LegacyCustomHeaderElement = () => {
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

LegacyCustomHeaderElement.storyName =
  'Legacy: Custom Header Element (Deprecated)';

export const LegacyNoHeader = () => {
  const { toggleOpen, Dialog } = useDialog();

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <Button onClick={toggleOpen}>Open</Button>
      <Dialog header={null}>Hello</Dialog>
    </div>
  );
};

LegacyNoHeader.storyName = 'Legacy: No Header (Deprecated)';

export const LegacyNoPadding = () => {
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

LegacyNoPadding.storyName = 'Legacy: No Padding (Deprecated)';

export const LegacyFooter = () => {
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

LegacyFooter.storyName = 'Legacy: Footer (Deprecated)';

export const LegacyConfirmDialog = () => {
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

LegacyConfirmDialog.storyName = 'Legacy: Confirm Dialog (Deprecated)';

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
