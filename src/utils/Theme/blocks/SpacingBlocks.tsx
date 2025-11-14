import React from 'react';

export const SpacingBlocks = ({ spacings }: any) => {
  const steps = Array.from({ length: 20 }, (_, index) => index + 1);
  steps.unshift(0.5);
  steps.push(...[24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96]);
  const value = parseFloat(spacings['--spacing']);
  const unit = spacings['--spacing']?.replace(value, '');

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
          {steps.map(step => (
            <div
              key={step}
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
                  title={`Double click to copy ${step} to your clipboard`}
                  onDoubleClick={() =>
                    navigator.clipboard.writeText(step.toString())
                  }
                >
                  {step}
                </code>
                <br />
                <small
                  style={{ cursor: 'pointer' }}
                  onDoubleClick={() =>
                    navigator.clipboard.writeText(value * step + unit)
                  }
                >
                  {value * step}
                  {unit}
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
                    padding: value * step + unit,
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
