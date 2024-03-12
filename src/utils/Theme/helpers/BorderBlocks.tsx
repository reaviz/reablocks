import React from 'react';
import TWConfig from '../config';

export const BorderBlocks = () => {
  const borders = TWConfig.borderRadius;

  return (
    <div
      style={{
        padding: '2px 4px',
        color: 'var(--body-color)',
        width: '100%'
      }}
    >
      {borders ? (
        <>
          {Object.keys(borders).map(key => (
            <div
              key={key}
              style={{
                marginBottom: '20px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '4px',
                border: 'solid 1px var(--border-color)'
              }}
            >
              <h3
                style={{
                  fontWeight: 500,
                  marginRight: '20px',
                  maxWidth: 300
                }}
              >
                <span
                  style={{ cursor: 'pointer' }}
                  title={`Double click to copy --border-radius-${key} to your clipboard`}
                  onDoubleClick={() =>
                    navigator.clipboard.writeText(`rounded-${key}`)
                  }
                >
                  rounded-{key}
                </span>
                <br />
                <small
                  style={{ cursor: 'pointer' }}
                  onDoubleClick={() =>
                    navigator.clipboard.writeText(borders[key])
                  }
                >
                  <code>{borders[key]}</code>
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
                    padding: '12px',
                    borderRadius: borders[key],
                    border: 'solid 1px blue'
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
