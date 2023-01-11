import React, { Fragment } from 'react';
import { useDrawer } from './useDrawer';
import { Drawer } from './Drawer';

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
      <button type="button" onClick={toggleOpen}>
        Open
      </button>
    </Fragment>
  );
};

const CustomHeaderElement = () => <div>hello!</div>;

export const CustomHeader = () => {
  const { toggleOpen, Drawer } = useDrawer();
  return (
    <Fragment>
      <Drawer headerElement={<CustomHeaderElement />}>
        <p>Hello There!</p>
      </Drawer>
      <button type="button" onClick={toggleOpen}>
        Open
      </button>
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
      <button type="button" onClick={toggleOpen}>
        Open
      </button>
    </Fragment>
  );
};
