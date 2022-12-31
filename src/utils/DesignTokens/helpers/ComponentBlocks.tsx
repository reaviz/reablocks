import React from 'react';
import { useDts } from '../DesignTokensContext';

export const ComponentBlocks = () => {
  const { components } = useDts();

  return (
    <div
      style={{
        padding: 'var(--spacing-sm) var(--spacing-md)',
        fontFamily: 'var(--font-family)',
        color: 'var(--body-color)',
        width: '100%'
      }}
    >
      {components ? (
        <>
          {Object.keys(components).map(key => (
            <div
              key={key}
              style={{
                marginBottom: 'var(--spacing-lg)',
                padding: 'var(--spacing-lg) var(--spacing-xl)',
                display: 'flex',
                alignItems: 'center',
                borderRadius: 'var(--border-radius-md)',
                border: 'solid 1px var(--slate-500)'
              }}
            >
              <h3 style={{ fontWeight: 500, marginRight: 50, maxWidth: 300 }}>
                components.{key}
              </h3>
              <div>
                {Object.keys(components[key]).map(kk => (
                  <div key={kk} style={{ marginBottom: 5 }}>
                    <h5
                      style={{ margin: 0, cursor: 'pointer' }}
                      title={`Double click to copy --${kk} to your clipboard`}
                      onDoubleClick={() =>
                        navigator.clipboard.writeText(`--${kk}`)
                      }
                    >
                      --{kk}
                    </h5>
                    {components[key][kk]}
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
