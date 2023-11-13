import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from './Button';

export default {
  title: 'Components/Elements/Button/Group',
  component: ButtonGroup
};

export const Filled = () => {
  return (
    <>
      <ButtonGroup variant="filled">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
      </ButtonGroup>
    </>
  );
};

export const Outline = () => {
  return (
    <>
      <ButtonGroup variant="outline">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
      </ButtonGroup>
    </>
  );
};

export const Text = () => {
  return (
    <>
      <ButtonGroup variant="text">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
      </ButtonGroup>
    </>
  );
};

export const Single = () => {
  return (
    <>
      <ButtonGroup variant="filled">
        <Button>One</Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup variant="outline">
        <Button>One</Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup variant="text">
        <Button>One</Button>
      </ButtonGroup>
    </>
  );
};

export const Double = () => {
  return (
    <>
      <ButtonGroup variant="filled">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup variant="outline">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup variant="text">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    </>
  );
};

export const Colors = () => {
  return (
    <>
      <ButtonGroup variant="filled">
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button disabled>Disabled</Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup variant="outline">
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button disabled>Disabled</Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup variant="text">
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button disabled>Disabled</Button>
      </ButtonGroup>
    </>
  );
};

export const Sizes = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <ButtonGroup size="small">
        <Button>ONE</Button>
        <Button>TWO</Button>
        <Button>THREE</Button>
        <Button>FOUR</Button>
        <Button>FIVE</Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup size="medium">
        <Button>ONE</Button>
        <Button>TWO</Button>
        <Button>THREE</Button>
        <Button>FOUR</Button>
        <Button>FIVE</Button>
      </ButtonGroup>
      <br />
      <br />
      <ButtonGroup size="large">
        <Button>ONE</Button>
        <Button>TWO</Button>
        <Button>THREE</Button>
        <Button>FOUR</Button>
        <Button>FIVE</Button>
      </ButtonGroup>
    </div>
  );
};
