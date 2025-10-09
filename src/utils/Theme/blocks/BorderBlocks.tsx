import React from 'react';

export const BorderBlocks = ({
  borders
}: {
  borders: { [key: string]: string };
}) => (
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
                title={'Double click to copy class name to your clipboard'}
                onDoubleClick={() =>
                  navigator.clipboard.writeText(key.replace('--', ''))
                }
              >
                {key.replace('--', '')}
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
