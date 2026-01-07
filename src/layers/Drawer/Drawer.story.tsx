import React, { Fragment, useState } from 'react';
import { Drawer } from './Drawer';
import { DrawerHeader } from './DrawerHeader';
import { DrawerContent } from './DrawerContent';
import { DrawerFooter } from './DrawerFooter';
import { Button } from '../../elements';
import { Stack } from '../../layout';

export default {
  title: 'Components/Layers/Drawer',
  component: Drawer
};

export const Simple = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Button type="button" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <DrawerHeader>Drawer Title</DrawerHeader>
        <DrawerContent>
          <p>Hello There!</p>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

export const WithFooter = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Button type="button" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <DrawerHeader>Edit Settings</DrawerHeader>
        <DrawerContent>
          <p>
            This is the drawer content. You can put any content here including
            forms, lists, or other components.
          </p>
        </DrawerContent>
        <DrawerFooter>
          <Stack justifyContent="end" className="w-full">
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button color="primary">Save</Button>
          </Stack>
        </DrawerFooter>
      </Drawer>
    </Fragment>
  );
};

export const WithForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Button type="button" onClick={() => setOpen(true)}>
        Open Form Drawer
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)} size="400px">
        <form
          onSubmit={e => {
            e.preventDefault();
            alert('Form submitted!');
            setOpen(false);
          }}
        >
          <DrawerHeader>Create New Item</DrawerHeader>
          <DrawerContent>
            <div className="flex flex-col gap-4">
              <label className="flex flex-col gap-1">
                <span className="text-sm text-text-secondary">Title</span>
                <input
                  type="text"
                  className="px-3 py-2 border border-panel-accent rounded bg-panel"
                  placeholder="Enter title"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm text-text-secondary">Description</span>
                <textarea
                  className="px-3 py-2 border border-panel-accent rounded bg-panel"
                  placeholder="Enter description"
                  rows={4}
                />
              </label>
            </div>
          </DrawerContent>
          <DrawerFooter>
            <Stack justifyContent="end" className="w-full">
              <Button type="button" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Create
              </Button>
            </Stack>
          </DrawerFooter>
        </form>
      </Drawer>
    </Fragment>
  );
};

export const BottomSheet = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Button type="button" onClick={() => setOpen(true)}>
        Open Bottom Sheet
      </Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        position="bottom"
        size="300px"
      >
        <DrawerHeader>Bottom Sheet</DrawerHeader>
        <DrawerContent>
          <p>This is a bottom sheet style drawer.</p>
        </DrawerContent>
        <DrawerFooter>
          <Button onClick={() => setOpen(false)} className="w-full">
            Close
          </Button>
        </DrawerFooter>
      </Drawer>
    </Fragment>
  );
};

export const LeftDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Button type="button" onClick={() => setOpen(true)}>
        Open Left Drawer
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)} position="start">
        <DrawerHeader>Navigation</DrawerHeader>
        <DrawerContent>
          <nav className="flex flex-col gap-2">
            <a href="#" className="p-2 hover:bg-surface rounded">
              Home
            </a>
            <a href="#" className="p-2 hover:bg-surface rounded">
              Products
            </a>
            <a href="#" className="p-2 hover:bg-surface rounded">
              About
            </a>
            <a href="#" className="p-2 hover:bg-surface rounded">
              Contact
            </a>
          </nav>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

export const CustomAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <Button type="button" onClick={() => setIsOpen(!isOpen)}>
        Open
      </Button>
      <Drawer
        className="max-w-[400px] mr-10 max-h-[90vh] my-auto rounded-xl"
        animation={{
          initial: { x: '120%', opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: '120%', opacity: 0 },
          transition: { duration: 0.5, ease: [0.12, 0.78, 0.32, 0.98] }
        }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DrawerHeader>Custom Animation</DrawerHeader>
        <DrawerContent>
          <p>This drawer has a custom animation!</p>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};
