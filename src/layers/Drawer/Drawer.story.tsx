import React, { Fragment, useState } from 'react';

import { Button } from '../../elements';
import { Drawer } from './Drawer';
import { useDrawer } from './useDrawer';

export default {
  title: 'Components/Layers/Drawer',
  component: Drawer,
};

export const Simple = () => {
  const { toggleOpen, Drawer } = useDrawer();
  return (
    <Fragment>
      <Drawer>
        <p>Hello There!</p>
      </Drawer>
      <Button type="button" onClick={toggleOpen}>
        Open
      </Button>
    </Fragment>
  );
};

export const BottomSheet = () => {
  const { toggleOpen, Drawer } = useDrawer();
  return (
    <Fragment>
      <Drawer position="bottom">
        <p>Hello There!</p>
      </Drawer>
      <Button type="button" onClick={toggleOpen}>
        Open
      </Button>
    </Fragment>
  );
};

const MyHeader = () => <div>hello!</div>;

export const CustomHeaderElement = () => {
  const { toggleOpen, Drawer } = useDrawer();
  return (
    <Fragment>
      <Drawer headerElement={<MyHeader />}>
        <p>Hello There!</p>
      </Drawer>
      <Button type="button" onClick={toggleOpen}>
        Open
      </Button>
    </Fragment>
  );
};

export const Header = () => {
  const { toggleOpen, Drawer } = useDrawer();
  return (
    <Fragment>
      <Drawer header="Hello!!!!">
        <p>Hello There!</p>
      </Drawer>
      <Button type="button" onClick={toggleOpen}>
        Open
      </Button>
    </Fragment>
  );
};
export const CustomHeader = () => {
  const { toggleOpen, Drawer } = useDrawer();
  return (
    <Fragment>
      <Drawer header={<h3>Hello!!!!</h3>}>
        <p>Hello There!</p>
      </Drawer>
      <Button type="button" onClick={toggleOpen}>
        Open
      </Button>
    </Fragment>
  );
};

export const CustomAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <Drawer
        className="max-w-[400px] mr-10 max-h-[90vh] my-auto rounded-xl"
        animation={{
          initial: { x: '120%', opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: '120%', opacity: 0 },
          transition: { duration: 0.5, ease: [0.12, 0.78, 0.32, 0.98] },
        }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <p>Hello There!</p>
      </Drawer>
      <Button type="button" onClick={() => setIsOpen(!isOpen)}>
        Open
      </Button>
    </Fragment>
  );
};
