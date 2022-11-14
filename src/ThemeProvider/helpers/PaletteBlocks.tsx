import React from 'react';
import { useTheme } from '../ThemeContext';
import { ColorBlock } from './ColorBlocks';

export const PaletteBlocks = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        padding: '5px 15px',
        color: 'var(--body-color)',
        width: '100%'
      }}
    >
      {Object.keys(theme.palettes!).map(key => (
        <div key={key}>
          <h3 style={{ fontWeight: 500 }}>
            {key}
            <br />
            <small>
              <code>palettes.{key}</code>
            </small>
          </h3>
          <div
            style={{
              marginBottom: 20,
              display: 'grid',
              gap: 12,
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'
            }}
          >
            {Object.keys(theme.palettes[key]).map(item => (
              <ColorBlock
                key={`--${key}-${item}`}
                name={`--${key}-${item}`}
                color={theme.palettes![key][item]}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
