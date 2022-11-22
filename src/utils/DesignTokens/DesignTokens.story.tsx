import React from 'react';
import {
  TypographyBlocks,
  ColorBlocks,
  SpacingBlocks,
  PaletteBlocks,
  BorderBlocks,
  ShadowBlocks,
  ComponentBlocks,
  GradientBlocks,
  IconBlocks
} from './helpers';
import { DesignTokensProvider } from './DesignTokensProvider';
import { lightTheme } from './themes';
import { buildSheetRules } from './utils';
import favoriteIcon from './icon-demo.svg';

export default {
  title: 'Utils/Design Tokens',
  component: DesignTokensProvider
};

const exampleTheme = {
  ...lightTheme,
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
    },
    iconBlock: {
      'icon-block-background': 'black',
      'icon-block-color': 'white'
    }
  }
};

export const Model = () => (
  <DesignTokensProvider value={exampleTheme}>
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
  </DesignTokensProvider>
);

export const Colors = () => (
  <DesignTokensProvider value={lightTheme}>
    <div style={{ width: '90vw' }}>
      <ColorBlocks />
    </div>
  </DesignTokensProvider>
);

export const Palettes = () => (
  <DesignTokensProvider value={lightTheme}>
    <div style={{ width: '90vw' }}>
      <PaletteBlocks />
    </div>
  </DesignTokensProvider>
);

export const Typography = () => (
  <DesignTokensProvider value={lightTheme}>
    <div style={{ width: '90vw' }}>
      <TypographyBlocks />
    </div>
  </DesignTokensProvider>
);

export const Spacings = () => (
  <DesignTokensProvider value={lightTheme}>
    <SpacingBlocks />
  </DesignTokensProvider>
);

export const Borders = () => (
  <DesignTokensProvider value={lightTheme}>
    <BorderBlocks />
  </DesignTokensProvider>
);

export const Gradients = () => (
  <DesignTokensProvider value={lightTheme}>
    <div style={{ width: '90vw' }}>
      <GradientBlocks />
    </div>
  </DesignTokensProvider>
);

export const Shadows = () => (
  <DesignTokensProvider value={lightTheme}>
    <ShadowBlocks />
  </DesignTokensProvider>
);

export const Components = () => (
  <DesignTokensProvider value={exampleTheme}>
    <h2>Example Component Design Tokens</h2>
    <ComponentBlocks />
  </DesignTokensProvider>
);

export const Icons = () => (
  <DesignTokensProvider value={exampleTheme}>
    <h2>Icon Block Helper ( icons not included )</h2>
    <IconBlocks
      icons={[
        {
          name: 'favorite',
          src: favoriteIcon
        },
        {
          name: 'another favorite',
          src: favoriteIcon
        }
      ]}
    />
  </DesignTokensProvider>
);
