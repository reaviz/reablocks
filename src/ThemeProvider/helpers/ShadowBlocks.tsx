import React from 'react';
import { useTheme } from '../ThemeContext';

export const ShadowBlocks = () => {
  const { shadows } = useTheme();

  return (
    <div
      style={{
        padding: '5px 15px',
        color: 'black',
        width: '100%'
      }}
    >
      {Object.keys(shadows).map(key => (
        <div
          key={key}
          style={{
            marginBottom: 20,
            padding: '15px 30px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: 5,
            border: 'solid 1px var(--slate-500)'
          }}
        >
          <h3 style={{ fontWeight: 500, marginRight: 50, maxWidth: 300 }}>
            --shadow-{key}
            <br />
            <small>
              <code>{shadows[key]}</code>
            </small>
          </h3>
          <div
            style={{
              justifyContent: 'end',
              display: 'flex',
              flex: 1
            }}
          >
            <div style={{ padding: 10, boxShadow: shadows[key] }}>Content</div>
          </div>
        </div>
      ))}
    </div>
  );
};
