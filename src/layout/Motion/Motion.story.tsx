import React, { useState } from 'react';
import { MotionGroup } from './MotionGroup';
import { MotionItem } from './MotionItem';

export default {
  title: 'Layout/Motion',
  component: MotionGroup,
  subcomponents: {
    MotionItem
  }
};

export const Simple = () => (
  <MotionGroup>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
      <MotionItem key={i}>Hello {i}</MotionItem>
    ))}
  </MotionGroup>
);

export const Sorting = () => {
  const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <>
      <button onClick={() => setItems([...items].reverse())}>
        Update List Order
      </button>
      <hr />
      <MotionGroup>
        {items.map(i => (
          <MotionItem key={i} layout>
            Hello {i}
          </MotionItem>
        ))}
      </MotionGroup>
    </>
  );
};
