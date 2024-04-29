import { useState } from 'react';
import { InlineInput } from './InlineInput';

export default {
  title: 'Components/Form/Inline Input',
  component: InlineInput
};

export const Basic = () => {
  return (
    <div
      style={{
        border: 'var(--input-border)',
        borderRadius: 'var(--border-radius-md)',
        padding: 'var(--spacing-sm)'
      }}
    >
      <InlineInput
        placeholder="Type here..."
        extraWidth={20}
        onChange={e => console.log(e.target.value)}
      />
    </div>
  );
};
