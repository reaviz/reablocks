import React from 'react';
import { useDts } from '../DesignTokensContext';
import chroma from 'chroma-js';

export const ColorBlock = ({ name, color }) => (
  <div
    key={name}
    style={{
      border: 'solid 1px var(--slate-500)',
      borderRadius: 5,
      overflow: 'hidden'
    }}
  >
    <div
      style={{
        padding: 20,
        background: color,
        color: 'var(--body-color)',
        borderBottom: 'solid 1px var(--slate-500)'
      }}
    />
    <div style={{ padding: '5px 10px', fontSize: '12px' }}>
      <div>
        <code
          style={{ cursor: 'pointer' }}
          title={`Double click to copy ${name} to your clipboard`}
          onDoubleClick={() => navigator.clipboard.writeText(name)}
        >
          {name}
        </code>
      </div>
      <div>
        <code
          style={{ cursor: 'pointer' }}
          title={`Double click to copy ${color} to your clipboard`}
          onDoubleClick={() => navigator.clipboard.writeText(color)}
        >
          {color}
        </code>
      </div>
    </div>
  </div>
);

const ColorPaletteBlock = ({ name, color }) => {
  const valid = chroma.valid(color);
  const fontColor =
    valid && !name.includes('overlay')
      ? chroma(color).luminance() >= 0.5
        ? chroma(color).darken(100).css()
        : chroma(color).brighten(100).css()
      : 'var(--body-color)';

  return (
    <div
      key={name}
      style={{
        borderRight: 'solid 1px var(--slate-500)'
      }}
    >
      <div
        style={{
          padding: 10,
          fontSize: '12px',
          background: color
        }}
      >
        <div>
          <code
            style={{ cursor: 'pointer', color: fontColor }}
            title={`Double click to copy ${name} to your clipboard`}
            onDoubleClick={() => navigator.clipboard.writeText(name)}
          >
            {name}
          </code>
        </div>
        <div>
          <code
            style={{ cursor: 'pointer', color: fontColor }}
            title={`Double click to copy ${color} to your clipboard`}
            onDoubleClick={() => navigator.clipboard.writeText(color)}
          >
            {color}
          </code>
        </div>
      </div>
    </div>
  );
};

export const ColorBlocks = () => {
  const { colors } = useDts();

  return (
    <div
      style={{
        padding: '5px 15px',
        fontFamily: 'var(--font-family)',
        color: 'var(--body-color)',
        width: '100%'
      }}
    >
      {colors ? (
        <>
          {Object.keys(colors).map(key => (
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
                  <code>colors.{key}</code>
                </small>
              </h3>
              <div
                style={{
                  display: 'grid',
                  overflow: 'hidden',
                  borderRadius: 'var(--border-radius-md)',
                  border: 'solid 1px var(--slate-500)',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))'
                }}
              >
                {Object.keys(colors[key]).map(color => (
                  <ColorPaletteBlock
                    key={`--${key}-${color}`}
                    name={`--${key}-${color}`}
                    color={colors[key][color]}
                  />
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>⚠️ No colors defined</p>
      )}
    </div>
  );
};
