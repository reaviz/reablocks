import React from 'react';
import { useTheme } from '../ThemeContext';
import chroma from 'chroma-js';

export const ColorBlock = ({ name, color }) => (
  <div
    key={name}
    style={{
      border: 'solid 1px var(--slate-500)',
      borderRadius: 'var(--border-radius-md)',
      overflow: 'hidden'
    }}
  >
    <div
      style={{
        padding: 'var(--spacing-lg)',
        background: color,
        color: 'var(--body-color)',
        borderBottom: 'solid 1px var(--slate-500)'
      }}
    />
    <div
      style={{
        padding: 'var(--spacing-sm) var(--spacing-md)',
        fontSize: '12px'
      }}
    >
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

export const ColorPaletteBlock = ({ name, color, showName = true }) => {
  const valid = chroma.valid(color);
  const fontColor =
    valid && !name.includes('overlay')
      ? chroma(color).luminance() >= 0.3
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
          padding: 'var(--spacing-md)',
          background: color,
          height: '100%'
        }}
      >
        {showName && (
          <div>
            <code
              style={{ cursor: 'pointer', color: fontColor, fontSize: '12px' }}
              title={`Double click to copy ${name} to your clipboard`}
              onDoubleClick={() => navigator.clipboard.writeText(name)}
            >
              {name}
            </code>
          </div>
        )}
        <div>
          <code
            style={{ cursor: 'pointer', color: fontColor, fontSize: '12px' }}
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

export const ColorPaletteBlocks = ({
  name,
  colors,
  token = null,
  showNames = true
}) => (
  <div
    style={{
      marginBottom: 'var(--spacing-xl)'
    }}
  >
    <h3 style={{ fontWeight: 500, margin: 0 }}>
      {name}
      {token && (
        <>
          <br />
          <small>
            <code>{token.toLowerCase()}</code>
          </small>
        </>
      )}
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
      {typeof colors === 'string' ? (
        <ColorBlock name={`--${name}`} color={colors} showName={showNames} />
      ) : (
        <>
          {Object.keys(colors).map(color => (
            <ColorPaletteBlock
              key={`--${name}-${color}`}
              name={`--${name}-${color}`}
              color={colors[color]}
              showName={showNames}
            />
          ))}
        </>
      )}
    </div>
  </div>
);

export const ColorBlocks = () => {
  const { colors } = useTheme();

  return (
    <div
      style={{
        padding: 'var(--spacing-sm) var(--spacing-md)',
        fontFamily: 'var(--font-family)',
        color: 'var(--body-color)',
        width: '100%'
      }}
    >
      {colors ? (
        <>
          {Object.keys(colors).map(key => (
            <ColorPaletteBlocks
              key={key}
              name={key}
              token={`colors.${key}`}
              colors={colors[key]}
            />
          ))}
        </>
      ) : (
        <p>⚠️ No colors defined</p>
      )}
    </div>
  );
};
