import React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import {
  TypographyBlocks,
  ColorBlocks,
  SpacingBlocks,
  BorderBlocks,
  IconBlocks,
  PaletteBlocks,
  ShadowBlocks
} from './helpers';
import favoriteIcon from './icon-demo.svg';
import tailwindConfig from '../../../tailwind.config';
import TWConfig from './config';

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

const colors = TWConfig.colors;
// Delete palette colors
delete colors['primary'];
delete colors['secondary'];
delete colors['success'];
delete colors['error'];
delete colors['warning'];
delete colors['info'];
delete colors['disabled'];
delete colors['light'];
delete colors['dark'];
export const Colors = () => <ColorBlocks colors={colors} />;

const palettes = tailwindConfig.theme.extend.colors;
palettes['disabled'] = [palettes['disabled']];
export const Palettes = () => <PaletteBlocks palettes={palettes as any} />;

const families = TWConfig.fontFamily;
const sizes = TWConfig.fontSize;
const weights = TWConfig.fontWeight;
export const Typography = () => (
  <TypographyBlocks families={families} sizes={sizes} weights={weights} />
);

const spacings = TWConfig.spacing;
export const Spacings = () => <SpacingBlocks spacings={spacings} />;

const borders = TWConfig.borderRadius;
export const Borders = () => <BorderBlocks borders={borders} />;

const shadows = TWConfig.boxShadow;
export const Shadows = () => <ShadowBlocks shadows={shadows} />;

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
