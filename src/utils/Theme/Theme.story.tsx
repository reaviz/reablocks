import React from 'react';
import {
  TypographyBlocks,
  ColorBlocks,
  SpacingBlocks,
  BorderBlocks,
  IconBlocks,
  PaletteBlocks,
  ShadowBlocks,
  ComponentBlocks
} from './helpers';
import favoriteIcon from './icon-demo.svg';
import tailwindConfig from '../../../tailwind.config';
import TWConfig from './config';
import { darkTheme } from './themes';

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

export const Components = () => (
  <ComponentBlocks components={darkTheme.components} />
);
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
