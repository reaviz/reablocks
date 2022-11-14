import React from 'react';
import { useTheme } from '../ThemeContext';

export const SpacingBlocks = () => {
  const { spacings } = useTheme();

  return (
    <div
      style={{
        padding: '5px 15px',
        color: 'black',
        width: '100%'
      }}
    >
      {Object.keys(spacings).map(key => (
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
              {spacings[key]}
              {' - '}
              <code>spacings.{key}</code>
            </small>
          </h3>
          <div
            style={{
              justifyContent: 'end',
              display: 'flex',
              flex: 1
            }}
          >
            <div style={{ padding: spacings[key], border: 'solid 1px blue' }}>
              Content
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
