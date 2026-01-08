import React, { useState } from 'react';

import { Button } from '../../elements';
import { Collapse } from './Collapse';

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

export const NoAnimation = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div style={{ height: 300, textAlign: 'center' }}>
      <Button type="button" onClick={() => setExpanded(!expanded)}>
        Expand Contents
      </Button>
      <Collapse expanded={expanded} animation={{ transition: { duration: 0 } }}>
        <h1>Hello</h1>
        <p>The quick fox jumped over the fence</p>
        <p>The quick fox jumped over the fence</p>
        <p>The quick fox jumped over the fence</p>
      </Collapse>
    </div>
  );
};

export const CustomAnimation = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div style={{ height: 300, textAlign: 'center' }}>
      <Button type="button" onClick={() => setExpanded(!expanded)}>
        Scale & Fade
      </Button>
      <Collapse
        expanded={expanded}
        animation={{
          initial: 'collapsed',
          animate: 'open',
          exit: 'collapsed',
          variants: {
            open: {
              opacity: 1,
              height: 'auto',
              scale: 1,
              filter: 'blur(0px)'
            },
            collapsed: {
              opacity: 0,
              height: 0,
              scale: 0.95,
              filter: 'blur(4px)'
            }
          },
          transition: {
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1],
            scale: {
              duration: 0.5
            },
            filter: {
              duration: 0.3
            }
          }
        }}
      >
        <h1>Hello</h1>
        <p>The quick fox jumped over the fence</p>
        <p>The quick fox jumped over the fence</p>
        <p>The quick fox jumped over the fence</p>
      </Collapse>
    </div>
  );
};
