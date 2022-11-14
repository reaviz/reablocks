import React from 'react';
import { useTheme } from '../ThemeContext';

export const ColorBlock = ({ name, color }) => (
  <div
    key={name}
    style={{
      border: 'solid 1px var(--slate-900)',
      borderRadius: 5,
      overflow: 'hidden'
    }}
  >
    <div
      style={{
        padding: 20,
        background: color,
        borderBottom: 'solid 1px var(--slate-900)'
      }}
    />
    <div style={{ padding: '5px 10px' }}>
      <div>
        <code>{name}</code>
      </div>
      <div>
        <code>{color}</code>
      </div>
    </div>
  </div>
);

export const ColorBlocks = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        padding: '5px 15px',
        color: 'black',
        width: '100%'
      }}
    >
      {Object.keys(theme.colors!).map(key => (
        <div
          key={key}
          style={{
            marginBottom: 20
          }}
        >
          <h3 style={{ fontWeight: 500 }}>
            {key}
            <br />
            <small>
              <code>colors.{key}</code>
            </small>
          </h3>
          <div
            style={{
              display: 'grid',
              gap: 12,
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'
            }}
          >
            {Object.keys(theme.colors![key]).map(color => (
              <ColorBlock
                key={`--${key}-${color}`}
                name={`--${key}-${color}`}
                color={theme.colors![key][color]}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
