import { Fragment, useState } from 'react';

import { Button } from '@/elements/Button';
import { Dialog, useDialog } from '@/layers/Dialog';

import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox
};

export const Simple = () => {
  const [state, setState] = useState(true);
  return <Checkbox checked={state} label="Check me" onChange={setState} />;
};

export const WithoutLabel = () => {
  const [state, setState] = useState(true);
  return <Checkbox checked={state} onChange={setState} />;
};

export const LabelPosition = () => {
  const [state, setState] = useState(true);
  return (
    <Fragment>
      <div style={{ padding: 20 }}>
        <Checkbox
          checked={state}
          label="Start label"
          labelPosition="start"
          onChange={setState}
        />
      </div>
      <div style={{ padding: 20 }}>
        <Checkbox checked={state} label="End label" onChange={setState} />
      </div>
    </Fragment>
  );
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
  const [state2, setState2] = useState(false);
  return (
    <>
      <div style={{ padding: 20 }}>
        <Checkbox
          checked={state}
          label="Disabled"
          onChange={setState}
          disabled
        />
      </div>
      <div style={{ padding: 20 }}>
        <Checkbox
          checked={state2}
          label="Disabled"
          onChange={setState2}
          disabled
        />
      </div>
    </>
  );
};

export const Custom = () => {
  const [state, setState] = useState(true);
  return (
    <Fragment>
      <Checkbox
        borderPath="M2 0.5h12s1.5 0 1.5 1.5v12s0 1.5 -1.5 1.5h-12s-1.5 0 -1.5 -1.5v-12s0 -1.5 1.5 -1.5"
        checkedPath="M14.4902 2.99544C14.3604 2.99923 14.2371 3.0534 14.1465 3.14648L5.5 11.793L1.85352 8.14648C1.80744 8.0985 1.75226 8.06019 1.69119 8.0338C1.63013 8.00741 1.56441 7.99346 1.49789 7.99279C1.43137 7.99211 1.36539 8.00471 1.3038 8.02986C1.24221 8.055 1.18626 8.09218 1.13922 8.13922C1.09218 8.18626 1.055 8.24221 1.02986 8.3038C1.00471 8.36539 0.99211 8.43137 0.992787 8.49789C0.993463 8.56441 1.00741 8.63013 1.0338 8.69119C1.06019 8.75226 1.0985 8.80744 1.14648 8.85352L5.14648 12.8535C5.24026 12.9472 5.36741 12.9999 5.5 12.9999C5.63259 12.9999 5.75974 12.9472 5.85352 12.8535L14.8535 3.85352C14.9256 3.78326 14.9749 3.69287 14.9948 3.59417C15.0147 3.49547 15.0044 3.39305 14.9651 3.30033C14.9259 3.20761 14.8595 3.1289 14.7748 3.0745C14.6901 3.0201 14.5909 2.99254 14.4902 2.99544Z"
        checked={state}
        label="Custom checked"
        onChange={setState}
      />
    </Fragment>
  );
};

export const CustomLabel = () => {
  const [state, setState] = useState(true);
  return (
    <Checkbox
      checked={state}
      label={
        <div>
          <span className="mr-1">Check</span>
          <b>me</b>
        </div>
      }
      onChange={setState}
    />
  );
};

export const WithDialog = () => {
  const { isOpen, setOpen } = useDialog();
  const [checked, setChecked] = useState(true);

  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <div className="flex flex-row items-center gap-6">
        <Button onClick={() => setOpen(true)}>Open</Button>
      </div>
      <Dialog
        size={600}
        open={isOpen}
        onClose={() => setOpen(false)}
        header="Checkbox test"
      >
        {() => (
          <div>
            <Checkbox
              label="Test checkbox"
              checked={checked}
              onChange={setChecked}
            />
            <br />
            <Checkbox
              label="Test indeterminate state"
              checked={checked}
              onChange={setChecked}
              intermediate
            />
          </div>
        )}
      </Dialog>
    </main>
  );
};
