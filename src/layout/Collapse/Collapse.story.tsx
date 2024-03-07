import React, { useState } from 'react';
import { Collapse } from './Collapse';
import { Button } from '../../elements';

export default {
  title: 'Components/Layout/Collapse',
  component: Collapse
};

export const Simple = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div style={{ height: 300, textAlign: 'center' }}>
      <Button type="button" onClick={() => setExpanded(!expanded)}>
        Expand Contents
      </Button>
      <Collapse expanded={expanded}>
        <h1>Hello</h1>
        <p>The quick fox jumped over the fence</p>
        <p>The quick fox jumped over the fence</p>
        <p>The quick fox jumped over the fence</p>
      </Collapse>
    </div>
  );
};
