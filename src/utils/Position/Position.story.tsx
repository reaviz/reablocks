import { Meta } from '@storybook/react';
import React, { useRef, useState } from 'react';
import { usePosition } from './usePosition';

const meta: Meta = {
  title: 'Components/Utils/Position'
};

export const Simple = () => {
  const { refs, floatingStyles } = usePosition({
    placement: 'bottom'
  });

  return (
    <div
      style={{
        padding: 50,
        border: 'solid 1px red'
      }}
    >
      <div
        ref={refs.setReference}
        style={{
          width: 100,
          height: 100,
          background: 'black',
          padding: 50
        }}
      >
        Hello!
      </div>
      <div ref={refs.setFloating} style={floatingStyles}>
        Positioned
      </div>
    </div>
  );
};

export const TopPosition = () => {
  const [reference, setReference] = useState<HTMLDivElement>(null);
  const [floating, setFloating] = useState<HTMLDivElement>(null);
  const { floatingStyles } = usePosition({
    reference: reference,
    floating,
    placement: 'top'
  });

  return (
    <div
      style={{
        padding: 50,
        border: 'solid 1px red'
      }}
    >
      <div
        ref={setReference}
        style={{
          width: 100,
          height: 100,
          background: 'black',
          padding: 50
        }}
      >
        Hello!
      </div>
      <div ref={setFloating} style={floatingStyles}>
        Positioned
      </div>
    </div>
  );
};

export const FollowCursor = () => {
  const { refs, floatingStyles } = usePosition({ followCursor: true });

  return (
    <>
      <div ref={refs.setFloating} style={floatingStyles}>
        Floating
      </div>
    </>
  );
};

export default meta;
