import React from 'react';
import { Skeleton } from './Skeleton';

export default {
  title: 'Components/Elements/Skeleton',
  component: Skeleton
};

export const Simple = () => {
  return (
    <div style={{ width: 300 }}>
      <Skeleton style={{ height: 20, marginBottom: 10 }} />
    </div>
  );
};

export const Animated = () => {
  return (
    <div style={{ width: 300 }}>
      <Skeleton animated style={{ height: 20, marginBottom: 10 }} />
    </div>
  );
};

export const Sizes = () => {
  return (
    <div style={{ width: 300 }}>
      <Skeleton style={{ height: 10, marginBottom: 10 }} />
      <Skeleton style={{ height: 20, marginBottom: 10 }} />
      <Skeleton style={{ height: 30, marginBottom: 10 }} />
      <Skeleton style={{ height: 40 }} />
    </div>
  );
};

export const Multiple = () => {
  return (
    <div style={{ width: 300 }}>
      {[...Array(5)].map((_, i) => (
        <Skeleton
          key={i}
          animated
          style={{ height: 20, marginBottom: 10, width: `${100 - i * 10}%` }}
        />
      ))}
    </div>
  );
};

export const Shapes = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: 20,
        alignItems: 'center',
        flexWrap: 'wrap'
      }}
    >
      <Skeleton
        animated
        style={{ width: 60, height: 60, borderRadius: '50%' }}
      />
      <Skeleton animated style={{ width: 200, height: 60 }} />
      <Skeleton
        animated
        style={{ width: 100, height: 100, borderRadius: '8px' }}
      />
    </div>
  );
};

export const CardPlaceholder = () => {
  return (
    <div
      style={{
        width: 400,
        padding: 20,
        border: '1px solid #e0e0e0',
        borderRadius: 8
      }}
    >
      <Skeleton
        animated
        style={{ width: 60, height: 60, borderRadius: '50%', marginBottom: 10 }}
      />
      <Skeleton
        animated
        style={{ height: 24, marginBottom: 10, width: '60%' }}
      />
      <Skeleton animated style={{ height: 16, marginBottom: 8 }} />
      <Skeleton
        animated
        style={{ height: 16, marginBottom: 8, width: '90%' }}
      />
      <Skeleton animated style={{ height: 16, width: '70%' }} />
    </div>
  );
};

export const CustomStyles = () => {
  return (
    <div style={{ width: 300 }}>
      <Skeleton
        animated
        className="my-4"
        style={{
          height: 100,
          borderRadius: 16,
          backgroundColor: '#3b82f6',
          opacity: 0.3
        }}
      />
      <Skeleton
        style={{
          height: 50,
          borderRadius: 4,
          background: 'linear-gradient(90deg, #ff6b6b 0%, #ffd93d 100%)'
        }}
      />
    </div>
  );
};
