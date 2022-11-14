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
import { buildSheetRules } from './utils';

export default {
  title: 'Utils/Theme Provider',
  component: ThemeProvider
};

const exampleTheme = {
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
};

export const Model = () => (
  <ThemeProvider value={exampleTheme}>
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }}
    >
      <div
        style={{
          padding: '0 20px',
          overflow: 'auto',
          width: '50%'
        }}
      >
        <h3>Model</h3>
        <pre>
          <code>{JSON.stringify(exampleTheme, null, 2)}</code>
        </pre>
      </div>
      <div
        style={{
          borderLeft: 'solid 1px var(--slate-500)',
          padding: '0 20px',
          overflow: 'auto',
          width: '50%'
        }}
      >
        <h3>Output</h3>
        <pre>
          {buildSheetRules(exampleTheme).map(k => (
            <div>{k}</div>
          ))}
        </pre>
      </div>
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
  <ThemeProvider value={exampleTheme}>
    <h2>Example Component Design Tokens</h2>
    <ComponentBlocks />
  </ThemeProvider>
);
