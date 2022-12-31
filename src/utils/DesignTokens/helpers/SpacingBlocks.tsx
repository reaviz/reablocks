import React from 'react';
import { useDts } from '../DesignTokensContext';

export const SpacingBlocks = () => {
  const { spacings } = useDts();

  return (
    <div
      style={{
        padding: 'var(--spacing-sm) var(--spacing-md)',
        fontFamily: 'var(--font-family)',
        color: 'var(--body-color)',
        width: '100%'
      }}
    >
      {spacings ? (
        <>
          {Object.keys(spacings).map(key => (
            <div
              key={key}
              style={{
                marginBottom: 'var(--spacing-xl)',
                padding: 'var(--spacing-lg)',
                display: 'flex',
                alignItems: 'center',
                borderRadius: 'var(--border-radius-md)',
                border: 'solid 1px var(--slate-500)'
              }}
            >
              <h3 style={{ fontWeight: 500, marginRight: 50 }}>
                <code
                  style={{ cursor: 'pointer' }}
                  title={`Double click to copy --spacing-${key} to your clipboard`}
                  onDoubleClick={() =>
                    navigator.clipboard.writeText(`--spacing-${key}`)
                  }
                >
                  --{key}
                </code>
                <br />
                <small>{spacings[key]}</small>
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
                    padding: spacings[key],
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
        <p>⚠️ No spacings defined</p>
      )}
    </div>
  );
};
