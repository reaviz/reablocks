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

const dropShadows: Record<string, string> = {
  'drop-shadow-0': '0rem',
  'drop-shadow-1': '0.0625rem',
  'drop-shadow-2': '0.125rem',
  'drop-shadow-4': '0.25rem',
  'drop-shadow-6': '0.375rem',
  'drop-shadow-8': '0.5rem',
  'drop-shadow-10': '0.625rem',
  'drop-shadow-12': '0.75rem',
  'drop-shadow-14': '0.875rem',
  'drop-shadow-16': '1rem',
  'drop-shadow-18': '1.125rem',
  'drop-shadow-20': '1.25rem',
  'drop-shadow-40': '2.5rem',
  'drop-shadow-60': '3.75rem'
};

export const Shadows = (_: unknown, { theme }) => (
  <ShadowBlocks shadows={dropShadows} theme={theme} />
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
