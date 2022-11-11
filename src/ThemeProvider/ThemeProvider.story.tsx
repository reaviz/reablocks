import React from 'react';
import {
  TypographyBlock,
  ColorBlock,
  SpacingBlock,
  PaletteBlock,
  BorderBlock,
  ShadowBlock
} from './helpers';
import { ThemeProvider } from './ThemeProvider';
import { darkTheme } from './themes';

export default {
  title: 'Utils/Theme Provider',
  component: ThemeProvider
};

export const Colors = () => (
  <ThemeProvider value={darkTheme}>
    <div style={{ width: '90vw' }}>
      <ColorBlock />
    </div>
  </ThemeProvider>
);

export const Palettes = () => (
  <ThemeProvider value={darkTheme}>
    <PaletteBlock />
  </ThemeProvider>
);

export const Typography = () => (
  <ThemeProvider value={darkTheme}>
    <TypographyBlock />
  </ThemeProvider>
);

export const Spacings = () => (
  <ThemeProvider value={darkTheme}>
    <SpacingBlock />
  </ThemeProvider>
);

export const Borders = () => (
  <ThemeProvider value={darkTheme}>
    <BorderBlock />
  </ThemeProvider>
);

export const Shadows = () => (
  <ThemeProvider value={darkTheme}>
    <ShadowBlock />
  </ThemeProvider>
);
