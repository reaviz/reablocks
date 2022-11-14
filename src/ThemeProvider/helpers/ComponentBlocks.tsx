import React from 'react';
import { useTheme } from '../ThemeContext';

export const ComponentBlocks = () => {
  const { components } = useTheme();

  return (
    <div
      style={{
        padding: '5px 15px',
        color: 'black',
        width: '100%'
      }}
    >
      {components ? (
        <>
          {Object.keys(components).map(key => (
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
                components.{key}
              </h3>
              <div>
                {Object.keys(components[key]).map(kk => (
                  <div key={kk} style={{ marginBottom: 5 }}>
                    <h5 style={{ margin: 0 }}>{kk}</h5>
                    --{components[key][kk]}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>⚠️ No components(s) defined</p>
      )}
    </div>
  );
};
