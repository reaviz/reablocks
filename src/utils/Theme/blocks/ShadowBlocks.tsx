import React from 'react';

export const ShadowBlocks = ({ shadows }) => (
  <div
    style={{
      padding: '4px 8px',
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
              marginBottom: '20px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              borderRadius: '6px',
              border: 'solid 1px var(--border-color)'
            }}
          >
            <h3 style={{ fontWeight: 500, marginRight: 50, maxWidth: 300 }}>
              <span
                style={{ cursor: 'pointer' }}
                title={'Double click to copy class name to your clipboard'}
                onDoubleClick={() =>
                  navigator.clipboard.writeText(key.replace('--', ''))
                }
              >
                {key.replace('--', '')}
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
                  backgroundColor: '#191919',
                  padding: '12px',
                  fontSize: '16px',
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
