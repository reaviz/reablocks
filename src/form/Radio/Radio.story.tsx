import React, { Fragment, useState } from 'react';
import { Radio } from './Radio';

export default {
  title: 'Components/Form/Radio',
  component: Radio
};

export const Simple = () => {
  const [state, setState] = useState(true);
  return <Radio checked={state} onChange={setState} />;
};

export const Disabled = () => {
  const [state, setState] = useState(true);
  return <Radio disabled checked={state} onChange={setState} />;
};

export const Sizes = () => {
  const [state, setState] = useState(true);

  return (
    <Fragment>
      <Radio checked={state} onChange={setState} size="small" label="small" />
      <br />
      <br />
      <Radio checked={state} onChange={setState} size="medium" label="medium" />
      <br />
      <br />
      <Radio checked={state} onChange={setState} size="large" label="large" />
    </Fragment>
  );
};
