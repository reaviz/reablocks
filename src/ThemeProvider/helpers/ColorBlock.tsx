import React from 'react';
import { useTheme } from '../ThemeContext';

export const ColorBlock = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        padding: '5px 15px',
        color: 'black',
        width: '100%'
      }}
    >
      {Object.keys(theme.colors!).map(key => (
        <div key={key}>
          <h2>{key}</h2>
          <div
            style={{
              display: 'grid',
              gap: 12,
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'
            }}
          >
            {Object.keys(theme.colors![key]).map(color => (
              <div
                key={color}
                style={{
                  border: 'solid 1px var(--slate-900)',
                  borderRadius: 5,
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    padding: 20,
                    background: theme.colors![key][color]
                  }}
                />
                <div style={{ padding: '5px 10px' }}>
                  <div>
                    <code>
                      --{key}-{color}
                    </code>
                  </div>
                  <div>
                    <code>{theme.colors![key][color]}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
