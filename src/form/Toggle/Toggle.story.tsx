import { Toggle } from './Toggle';
import React, { useState } from 'react';

export default {
  title: 'Components/Form/Toggle',
  component: Toggle
};

export const Simple = () => {
  const [state, setState] = useState(true);
  return <Toggle checked={state} onChange={setState} />;
};

export const Disabled = () => {
  const [state, setState] = useState(true);
  return <Toggle disabled checked={state} onChange={setState} />;
};

export const Sizes = () => {
  const [stateSmall, setStateSmall] = useState(true);
  const [stateMedium, setStateMedium] = useState(true);
  const [stateLarge, setStateLarge] = useState(true);

  return (
    <>
      <Toggle checked={stateSmall} onChange={setStateSmall} size="small" />
      <br />
      <Toggle checked={stateMedium} onChange={setStateMedium} size="medium" />
      <br />
      <Toggle checked={stateLarge} onChange={setStateLarge} size="large" />
    </>
  );
};
