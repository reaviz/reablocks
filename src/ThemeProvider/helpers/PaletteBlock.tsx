import React from 'react';
import { useTheme } from '../ThemeContext';

export const PaletteBlock = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        padding: '5px 15px',
        color: 'black',
        width: '100%'
      }}
    >
      {Object.keys(theme.palettes!).map(key => (
        <div key={key}>
          <h2>{key}</h2>
        </div>
      ))}
    </div>
  );
};
