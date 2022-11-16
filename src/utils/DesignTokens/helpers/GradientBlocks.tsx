import React from 'react';
import { useDts } from '../DesignTokensContext';
import { ColorBlock } from './ColorBlocks';

export const GradientBlocks = () => {
  const { gradients } = useDts();

  return (
    <div
      style={{
        padding: '5px 15px',
        fontFamily: 'var(--font-family)',
        color: 'var(--body-color)',
        width: '100%'
      }}
    >
      {gradients ? (
        <>
          {Object.keys(gradients).map(key => (
            <div
              key={key}
              style={{
                marginBottom: 20
              }}
            >
              <h3 style={{ fontWeight: 500, margin: 0 }}>
                {key}
                <br />
                <small>
                  <code>gradients.{key}</code>
                </small>
              </h3>
              <div
                style={{
                  display: 'grid',
                  gap: 12,
                  gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 300px))'
                }}
              >
                {Object.keys(gradients[key]).map(color => (
                  <ColorBlock
                    key={`--${key}-${color}`}
                    name={`--gradient-${key}-${color}`}
                    color={gradients[key][color]}
                  />
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>⚠️ No gradients defined</p>
      )}
    </div>
  );
};
