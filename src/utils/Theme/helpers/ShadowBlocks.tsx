import React from 'react';
import { useTheme } from '../ThemeContext';

export const ShadowBlocks = () => {
  const { shadows } = useTheme();

  return (
    <div
      style={{
        padding: 'var(--spacing-sm) var(--spacing-md)',
        fontFamily: 'var(--font-family)',
        color: 'var(--body-color)',
        width: '100%'
      }}
    >
      {shadows ? (
        <>
          {Object.keys(shadows).map(key => (
            <div
              key={key}
              style={{
                marginBottom: 'var(--spacing-xl)',
                padding: 'var(--spacing-lg) var(--spacing-xl)',
                display: 'flex',
                alignItems: 'center',
                borderRadius: 'var(--border-radius-md)',
                border: 'solid 1px var(--slate-500)'
              }}
            >
              <h3 style={{ fontWeight: 500, marginRight: 50, maxWidth: 300 }}>
                <span
                  style={{ cursor: 'pointer' }}
                  title={`Double click to copy --shadow-${key} to your clipboard`}
                  onDoubleClick={() =>
                    navigator.clipboard.writeText(`--shadow-${key}`)
                  }
                >
                  --shadow-{key}
                </span>
                <br />
                <small>
                  <code
                    style={{ cursor: 'pointer' }}
                    onDoubleClick={() =>
                      navigator.clipboard.writeText(shadows[key])
                    }
                  >
                    {shadows[key]}
                  </code>
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
                    padding: 'var(--spacing-md)',
                    boxShadow: shadows[key]
                  }}
                >
                  Content
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>⚠️ No shadows defined</p>
      )}
    </div>
  );
};
