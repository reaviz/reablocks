import React from 'react';
import {
  TypographyBlocks,
  ColorBlocks,
  SpacingBlocks,
  PaletteBlocks,
  BorderBlocks,
  ShadowBlocks,
  ComponentBlocks
} from './helpers';
import { ThemeProvider } from './ThemeProvider';
import { darkTheme } from './themes';

export default {
  title: 'Utils/Theme Provider',
  component: ThemeProvider
};

export const Model = () => (
  <ThemeProvider value={darkTheme}>
    <h2>Theme Model</h2>
    <div
      style={{
        width: '90vw',
        border: 'solid 1px var(--slate-900)',
        borderRadius: 5,
        padding: '0 20px',
        overflowX: 'auto'
      }}
    >
      <pre>
        <code>{JSON.stringify(darkTheme, null, 2)}</code>
      </pre>
    </div>
  </ThemeProvider>
);

export const Colors = () => (
  <ThemeProvider value={darkTheme}>
    <div style={{ width: '90vw' }}>
      <ColorBlocks />
    </div>
  </ThemeProvider>
);

export const Palettes = () => (
  <ThemeProvider value={darkTheme}>
    <div style={{ width: '90vw' }}>
      <PaletteBlocks />
    </div>
  </ThemeProvider>
);

export const Typography = () => (
  <ThemeProvider value={darkTheme}>
    <div style={{ width: '90vw' }}>
      <TypographyBlocks />
    </div>
  </ThemeProvider>
);

export const Spacings = () => (
  <ThemeProvider value={darkTheme}>
    <SpacingBlocks />
  </ThemeProvider>
);

export const Borders = () => (
  <ThemeProvider value={darkTheme}>
    <BorderBlocks />
  </ThemeProvider>
);

export const Shadows = () => (
  <ThemeProvider value={darkTheme}>
    <ShadowBlocks />
  </ThemeProvider>
);

export const Components = () => (
  <ThemeProvider
    value={{
      ...darkTheme,
      components: {
        select: {
          'select-border': 'grey',
          'select-background': 'white',
          'select-color': 'black'
        },
        input: {
          'select-border': 'grey',
          'select-background': 'white',
          'select-color': 'black'
        }
      }
    }}
  >
    <h2>Example Component Design Tokens</h2>
    <ComponentBlocks />
  </ThemeProvider>
);
