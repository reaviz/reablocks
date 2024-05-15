import React, { useState } from 'react';
import { InlineInput } from './InlineInput';

export default {
  title: 'Components/Form/Inline Input',
  component: InlineInput
};

export const Basic = () => {
  const [text, setText] = useState('');
  return (
    <div className="border border-blue-500 p-2">
      <InlineInput
        value={text}
        onChange={event => setText(event.target.value)}
        placeholder="..."
      />
    </div>
  );
};
