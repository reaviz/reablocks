import React from 'react';
import { darkTheme } from '../themes';

export const ComponentBlocks = () => {
  const components = darkTheme.components;

  function renderValue(value) {
    if (typeof value === 'string') {
      return (
        <code>
          <span
            style={{ cursor: 'pointer' }}
            title={`Double click to copy ${value} to your clipboard`}
            onDoubleClick={() => navigator.clipboard.writeText(value)}
          >
            {value}
          </span>
        </code>
      );
    }
  }

  return (
    <div
      style={{
        padding: '4px 8px',
        color: 'var(--body-color)',
        width: '100%'
      }}
    >
      {components ? (
        <>
          {Object.keys(components).map(key => (
            <>
              <h3
                style={{
                  fontWeight: 500,
                  marginRight: 50,
                  marginBottom: 'var(--spacing-sm)',
                  maxWidth: 300
                }}
              >
                {key}
              </h3>
              <div
                key={key}
                style={{
                  marginBottom: '20px',
                  padding: '20px 16px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, 300px)',
                  borderRadius: '4px',
                  border: 'solid 1px var(--border-color)'
                }}
              >
                {Object.keys(components[key]).map(kk => (
                  <div key={kk} style={{ marginBottom: 5 }}>
                    <h5
                      style={{ margin: 0, cursor: 'pointer' }}
                      title={`Double click to copy --${kk} to your clipboard`}
                      onDoubleClick={() =>
                        navigator.clipboard.writeText(`--${kk}`)
                      }
                    >
                      {kk}
                    </h5>
                    {renderValue(components[key][kk])}
                  </div>
                ))}
              </div>
            </>
          ))}
        </>
      ) : (
        <p>⚠️ No components(s) defined</p>
      )}
    </div>
  );
};
