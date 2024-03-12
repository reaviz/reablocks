import React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import {
  TypographyBlocks,
  ColorBlocks,
  SpacingBlocks,
  BorderBlocks,
  IconBlocks,
  PaletteBlocks
} from './helpers';
import favoriteIcon from './icon-demo.svg';
import tailwindConfig from '../../../tailwind.config';

export default {
  title: 'Components/Theme',
  decorators: [
    Story => (
      <div style={{ width: '95vw' }}>
        <Story />
      </div>
    )
  ]
};

export const Model = () => (
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
        padding: '0 var(--spacing-lg)',
        overflow: 'auto',
        width: '50%'
      }}
    >
      <h3>Model</h3>
      <pre>
        <code>{JSON.stringify(tailwindConfig, null, 2)}</code>
      </pre>
    </div>
    <div
      style={{
        borderLeft: 'solid 1px var(--slate-500)',
        padding: '0 var(--spacing-lg)',
        overflow: 'auto',
        width: '50%'
      }}
    >
      <h3>Output</h3>
      <pre>
        <code>{JSON.stringify(resolveConfig(tailwindConfig), null, 2)}</code>
      </pre>
    </div>
  </div>
);

export const Colors = () => <ColorBlocks />;

export const Palettes = () => <PaletteBlocks />;

export const Typography = () => <TypographyBlocks />;

export const Spacings = () => <SpacingBlocks />;

export const Borders = () => <BorderBlocks />;

// export const Gradients = () => <GradientBlocks />;

// export const Shadows = () => <ShadowBlocks />;

// export const Components = () => <ComponentBlocks />;

export const Icons = () => (
  <>
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
  </>
);
