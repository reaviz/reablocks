import React, { Fragment, useState } from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox
};

export const Simple = () => {
  const [state, setState] = useState(true);
  return <Checkbox checked={state} label="Check me" onChange={setState} />;
};

export const Intermediate = () => {
  const [state, setState] = useState(true);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <Checkbox
        checked={state}
        label="¯\_(ツ)_/¯"
        onChange={setState}
        intermediate
      />
      <Checkbox checked={state} label="Disabled" onChange={setState} disabled />
      <Checkbox
        checked={state}
        label="Intermediate"
        onChange={setState}
        intermediate
      />
    </div>
  );
};

export const States = () => {
  const [state, setState] = useState(true);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <Checkbox checked={state} label="Disabled" onChange={setState} disabled />
      <Checkbox
        checked={state}
        label="Intermediate"
        onChange={setState}
        intermediate
      />
    </div>
  );
};

export const Sizes = () => {
  const [state, setState] = useState(true);
  return (
    <Fragment>
      <div style={{ padding: 20 }}>
        <Checkbox
          checked={state}
          size="small"
          label="Small"
          onChange={setState}
        />
      </div>
      <div style={{ padding: 20 }}>
        <Checkbox
          checked={state}
          size="medium"
          label="Medium"
          onChange={setState}
        />
      </div>
      <div style={{ padding: 20 }}>
        <Checkbox
          checked={state}
          size="large"
          label="Large"
          onChange={setState}
        />
      </div>
    </Fragment>
  );
};

export const Disabled = () => {
  const [state, setState] = useState(true);
  return (
    <Checkbox checked={state} label="Disabled" onChange={setState} disabled />
  );
};
