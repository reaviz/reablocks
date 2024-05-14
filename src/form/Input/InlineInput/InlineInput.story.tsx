import React, { useState } from 'react';
import { InlineInput } from './InlineInput';

export default {
  title: 'Components/Form/Inline Input',
  component: InlineInput
};

export const Basic = () => {
  const [text, setText] = useState('');
  return (
    <div
      style={{
        border: 'var(--input-border)',
        borderRadius: 'var(--border-radius-md)',
        padding: 'var(--spacing-sm)'
      }}
    >
      <InlineInput
        value={text}
        onChange={event => setText(event.target.value)}
        placeholder="Type here..."
      />
    </div>
  );
};
