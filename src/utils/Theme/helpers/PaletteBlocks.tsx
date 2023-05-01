import React from 'react';
import { useTheme } from '../ThemeContext';
import { ColorBlock } from './ColorBlocks';

export const PaletteBlocks = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        padding: 'var(--spacing-sm) var(--spacing-md)',
        color: 'var(--body-color)',
        fontFamily: 'var(--font-family)',
        width: '100%'
      }}
    >
      {Object.keys(theme.palettes!).map(key => (
        <div key={key}>
          <h3 style={{ fontWeight: 500, margin: 0 }}>
            {key}
            <br />
            <small>
              <code>palettes.{key}</code>
            </small>
          </h3>
          <div
            style={{
              marginBottom: 'var(--spacing-xl)',
              display: 'grid',
              gap: 12,
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
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
