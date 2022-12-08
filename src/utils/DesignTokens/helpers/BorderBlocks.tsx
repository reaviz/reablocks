import React from 'react';
import { useDts } from '../DesignTokensContext';

export const BorderBlocks = () => {
  const { borders } = useDts();

  return (
    <div
      style={{
        padding: '5px 15px',
        fontFamily: 'var(--font-family)',
        color: 'var(--body-color)',
        width: '100%'
      }}
    >
      {borders ? (
        <>
          {Object.keys(borders.radius).map(key => (
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
                <span
                  style={{ cursor: 'pointer' }}
                  title={`Double click to copy --border-radius-${key} to your clipboard`}
                  onDoubleClick={() =>
                    navigator.clipboard.writeText(`--border-radius-${key}`)
                  }
                >
                  --border-radius-{key}
                </span>
                <br />
                <small>
                  <code>{borders.radius[key]}</code>
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
                    borderRadius: borders.radius[key],
                    border: 'solid 1px var(--blue-900)'
                  }}
                >
                  Content
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>⚠️ No borders defined</p>
      )}
    </div>
  );
};
