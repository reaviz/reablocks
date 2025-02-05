import React from 'react';
import {
  TypographyBlocks,
  ColorBlocks,
  SpacingBlocks,
  BorderBlocks,
  IconBlocks,
  ShadowBlocks,
  ComponentBlocks
} from './blocks';
import favoriteIcon from './icon-demo.svg';
import { useTheme } from './hooks/useTheme';
import { extractTheme } from './themes/extractTheme';
import { useThemeVariables } from './config';

export default {
  title: 'Components/Theme',
  decorators: [
    Story => {
      const tokens = useThemeVariables();

      const {
        colors,
        borderRadius,
        boxShadow,
        spacing,
        fontFamily,
        fontSize,
        fontWeight
      } = extractTheme(tokens);

      return (
        <div style={{ width: '95vw' }}>
          <Story
            colors={colors}
            borderRadius={borderRadius}
            boxShadow={boxShadow}
            spacing={spacing}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
          />
        </div>
      );
    }
  ]
};

const {
  colors,
  borderRadius,
  boxShadow,
  spacing,
  fontFamily,
  fontSize,
  fontWeight
} = extractTheme({});

export const Colors = (_: unknown, { colors }) => {
  return <ColorBlocks colors={colors} />;
};

export const Typography = (
  __: unknown,
  { fontFamily, fontSize, fontWeight }
) => (
  <TypographyBlocks
    families={fontFamily}
    sizes={fontSize}
    weights={fontWeight}
  />
);

export const Spacings = () => <SpacingBlocks spacings={spacing} />;

export const Borders = () => <BorderBlocks borders={borderRadius} />;

export const Shadows = () => <ShadowBlocks shadows={boxShadow} />;

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
