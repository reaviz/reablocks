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
import { useTheme } from './hooks';

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

export const Typography = () => (
  <TypographyBlocks
    families={TWConfig.fontFamily}
    sizes={TWConfig.fontSize}
    weights={TWConfig.fontWeight}
  />
);

export const Spacings = () => <SpacingBlocks spacings={TWConfig.spacing} />;

export const Borders = () => <BorderBlocks borders={TWConfig.borderRadius} />;

export const Shadows = () => <ShadowBlocks shadows={TWConfig.boxShadow} />;

export const Components = () => {
  const { theme } = useTheme();
  return <ComponentBlocks components={theme.components} />;
};

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
