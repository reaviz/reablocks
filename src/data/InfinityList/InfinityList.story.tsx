import React from 'react';
import { InfinityList } from './InfinityList';
import { useInfinityList } from './useInfinityList';

export default {
  title: 'Components/Data/InfinityList',
  component: InfinityList
};

const items = [...Array(50).keys()];

export const Simple = () => (
  <InfinityList>
    {items.map(i => (
      <div key={i}>Item {i}</div>
    ))}
  </InfinityList>
);

export const Hook = () => {
  const { data, hasMore, showNext } = useInfinityList({ items });

  return (
    <div>
      {data.map(i => (
        <div key={i}>Item {i}</div>
      ))}
      {hasMore && <button onClick={() => showNext()}>Show More</button>}
    </div>
  );
};
