import React, { Fragment } from 'react';
import { useDrawer } from './useDrawer';
import { Drawer } from './Drawer';
import { Button } from '../../elements';

export default {
  title: 'Components/Layers/Drawer',
  component: Drawer
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
