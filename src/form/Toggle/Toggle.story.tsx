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

export const Disabled = () => (
  <div
    className="bg-panel p-20"
    style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}
  >
    <Toggle disabled checked />
    <Toggle disabled checked={false} />
  </div>
);

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
