import React from 'react';
import { useTheme } from '../ThemeContext';

export const SpacingBlocks = () => {
  const { spacing } = useTheme();

  return (
    <div
      style={{
        padding: '5px 15px',
        color: 'black',
        width: '100%'
      }}
    >
      {Object.keys(spacing).map(key => (
        <div
          key={key}
          style={{
            marginBottom: 20,
            padding: 15,
            display: 'flex',
            alignItems: 'center',
            borderRadius: 5,
            border: 'solid 1px var(--slate-900)'
          }}
        >
          <h3 style={{ fontWeight: 500, marginRight: 50 }}>
            {key}
            <br />
            <small>
              {spacing[key]}
              {' - '}
              <code>spacing.{key}</code>
            </small>
          </h3>
          <div
            style={{
              justifyContent: 'end',
              display: 'flex',
              flex: 1
            }}
          >
            <div style={{ padding: spacing[key], border: 'solid 1px blue' }}>
              Content
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
