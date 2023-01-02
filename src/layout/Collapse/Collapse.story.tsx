import React, { useState } from 'react';
import { Collapse } from './Collapse';

export default {
  title: 'Components/Layout/Collapse',
  component: Collapse
};

export const Simple = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div style={{ width: 300, height: 300, textAlign: 'center' }}>
      <button type="button" onClick={() => setExpanded(!expanded)}>
        Expand Contents
      </button>
      <Collapse expanded={expanded}>
        <h1>Hello</h1>
        <p>The quick fox jumped over the fence</p>
        <p>The quick fox jumped over the fence</p>
        <p>The quick fox jumped over the fence</p>
      </Collapse>
    </div>
  );
};
