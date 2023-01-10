import React from 'react';
import { ContextMenu } from './ContextMenu';

export default {
  title: 'Components/Layers/Context Menu',
  component: ContextMenu
};

export const Simple = () => (
  <div>
    <ContextMenu
      content={<div style={{ padding: 20 }}>something cool here</div>}
    >
      <button>👋 right click me</button>
    </ContextMenu>
  </div>
);

export const Multiple = () => (
  <div>
    <ContextMenu
      content={<div style={{ padding: 20 }}>something cool here</div>}
    >
      <button>👋 right click me</button>
    </ContextMenu>
    <br />
    <br />
    <br />
    <ContextMenu
      content={<div style={{ padding: 20 }}>something cool here again?</div>}
    >
      <button>👋 right click me too!</button>
    </ContextMenu>
  </div>
);

export const ListMenu = () => (
  <div>
    <ContextMenu
      content={
        <ul>
          <li>Panda</li>
          <li>Zebra</li>
          <li>Bird</li>
        </ul>
      }
    >
      <button>👋 right click me</button>
    </ContextMenu>
  </div>
);
