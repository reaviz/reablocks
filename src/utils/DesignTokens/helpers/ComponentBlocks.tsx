import React from 'react';
import { useDts } from '../DesignTokensContext';
import chroma from 'chroma-js';

export const ComponentBlocks = () => {
  const { components } = useDts();

  function renderValue(value) {
    if (chroma.valid(value)) {
      return (
        <div style={{ display: 'flex', alignContent: 'center' }}>
          <div
            style={{
              background: value,
              borderRadius: 'var(--border-radius-sm)',
              height: 15,
              width: 15,
              marginRight: 'var(--spacing-sm)',
              border: 'solid 1px var(--slate-500)'
            }}
          />
          <code
            style={{ cursor: 'pointer' }}
            onDoubleClick={() => navigator.clipboard.writeText(value)}
          >
            {value}
          </code>
        </div>
      );
    } else {
      return (
        <code
          style={{ cursor: 'pointer' }}
          onDoubleClick={() => navigator.clipboard.writeText(value)}
        >
          {value}
        </code>
      );
    }
  }

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
                  marginBottom: 'var(--spacing-lg)',
                  padding: 'var(--spacing-lg) var(--spacing-xl)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, 200px)',
                  borderRadius: 'var(--border-radius-md)',
                  border: 'solid 1px var(--slate-500)'
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
                      --{kk}
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
