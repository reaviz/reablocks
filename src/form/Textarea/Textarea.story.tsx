import { useRef } from 'react';
import { Textarea } from './Textarea';
import { Button } from '@/elements';

export default {
  title: 'Components/Form/Textarea',
  component: Textarea
};

export const AutoFocus = () => <Textarea autoFocus />;

export const Basic = () => <Textarea />;

export const DefaultValue = () => <Textarea defaultValue="Text" />;

export const Disabled = () => <Textarea disabled value="Text" />;

export const Error = () => <Textarea error value="Text" />;

export const FullWidth = () => (
  <div style={{ width: '600px' }}>
    <Textarea fullWidth />
  </div>
);

export const Placeholder = () => <Textarea placeholder="Type your text here" />;

export const Sizes = () => (
  <div className="flex items-center gap-2.5 flex-col">
    <Textarea value="Small" size="small" />
    <Textarea value="Medium" size="medium" />
    <Textarea value="Large" size="large" />
  </div>
);

export const OutsideFocus = () => {
  const inputRef = useRef(null);

  return (
    <div className="flex items-center gap-2.5 flex-col">
      <Button onClick={() => inputRef?.current.focus()}>Click to focus</Button>
      <Textarea ref={inputRef} />
    </div>
  );
};
