import React from 'react';
import { useDts } from '../DesignTokensContext';

export const SpacingBlocks = () => {
  const { spacings } = useDts();

  return (
    <div
      style={{
        padding: '5px 15px',
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
                marginBottom: 20,
                padding: 15,
                display: 'flex',
                alignItems: 'center',
                borderRadius: 5,
                border: 'solid 1px var(--slate-500)'
              }}
            >
              <h3 style={{ fontWeight: 500, marginRight: 50 }}>
                <code>--spacing-{key}</code>
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
