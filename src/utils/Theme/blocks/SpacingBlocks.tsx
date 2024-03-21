import React from 'react';

export const SpacingBlocks = ({ spacings }) => {
  return (
    <div
      style={{
        padding: '6px 12px',
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
                marginBottom: '16px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '4px',
                border: 'solid 1px var(--border-color)'
              }}
            >
              <h3 style={{ fontWeight: 500, marginRight: 50 }}>
                <code
                  style={{ cursor: 'pointer' }}
                  title={`Double click to copy ${key} to your clipboard`}
                  onDoubleClick={() => navigator.clipboard.writeText(key)}
                >
                  {key}
                </code>
                <br />
                <small
                  style={{ cursor: 'pointer' }}
                  onDoubleClick={() =>
                    navigator.clipboard.writeText(spacings[key])
                  }
                >
                  {spacings[key]}
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
                    padding: spacings[key],
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
        <p>⚠️ No spacings defined</p>
      )}
    </div>
  );
};
