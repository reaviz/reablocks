import React from 'react';
import { useTheme } from '../ThemeContext';

export const BorderBlocks = () => {
  const {
    borders: { radius }
  } = useTheme();

  return (
    <div
      style={{
        padding: '5px 15px',
        color: 'black',
        width: '100%'
      }}
    >
      {Object.keys(radius).map(key => (
        <div
          key={key}
          style={{
            marginBottom: 20,
            padding: 15,
            display: 'flex',
            alignItems: 'center',
            borderRadius: 5,
            border: 'solid 1px var(--slate-500)'
          }}
        >
          <h3 style={{ fontWeight: 500, marginRight: 50, maxWidth: 300 }}>
            --border-radius-{key}
            <br />
            <small>
              <code>{radius[key]}</code>
            </small>
          </h3>
          <div
            style={{
              justifyContent: 'end',
              display: 'flex',
              flex: 1
            }}
          >
            <div
              style={{
                padding: 5,
                borderRadius: radius[key],
                border: 'solid 1px var(--blue-900)'
              }}
            >
              Content
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
