import React from 'react';

import {
  BorderBlocks,
  ColorBlocks,
  ComponentBlocks,
  IconBlocks,
  ShadowBlocks,
  SpacingBlocks,
  TypographyBlocks
} from './blocks';
import { useTheme } from './hooks/useTheme';
import favoriteIcon from './icon-demo.svg';
import { extractTheme } from './themes/extractTheme';

export default {
  title: 'Components/Theme',
  decorators: [
    (Story, context) => {
      const { tokens } = useTheme();

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
            theme={context?.globals?.theme}
          />
        </div>
      );
    }
  ]
};

export const Colors = (_: unknown, { colors, theme }) => {
  return <ColorBlocks colors={colors} theme={theme} />;
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

export const Spacings = (__: unknown, { spacing }) => (
  <SpacingBlocks spacings={spacing} />
);

export const Borders = (_: unknown, { borderRadius }) => (
  <BorderBlocks borders={borderRadius} />
);

export const Shadows = (_: unknown, { boxShadow }) => (
  <ShadowBlocks shadows={boxShadow} />
);

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
