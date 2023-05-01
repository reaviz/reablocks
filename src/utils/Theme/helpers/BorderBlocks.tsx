import React from 'react';
import { useTheme } from '../ThemeContext';

export const BorderBlocks = () => {
  const { borders } = useTheme();

  return (
    <div
      style={{
        padding: 'var(--spacing-sm) var(--spacing-md)',
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
                marginBottom: 'var(--spacing-xl)',
                padding: 'var(--spacing-lg)',
                display: 'flex',
                alignItems: 'center',
                borderRadius: 'var(--border-radius-md)',
                border: 'solid 1px var(--slate-500)'
              }}
            >
              <h3
                style={{
                  fontWeight: 500,
                  marginRight: 'var(--spacing-xl)',
                  maxWidth: 300
                }}
              >
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
                <small
                  style={{ cursor: 'pointer' }}
                  onDoubleClick={() =>
                    navigator.clipboard.writeText(borders.radius[key])
                  }
                >
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
                    padding: 'var(--spacing-sm)',
                    borderRadius: borders.radius[key],
                    border: 'solid 1px var(--blue-100)'
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
