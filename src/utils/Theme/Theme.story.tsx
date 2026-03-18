import React from 'react';
import {
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
import { TypographyBlocks } from './blocks/TypographyBlocks';

export default {
  title: 'Components/Theme'
};

export const Colors = () => {
  const { tokens } = useTheme();
  const { colors } = extractTheme(tokens);
  return (
    <div style={{ width: '95vw' }}>
      <ColorBlocks colors={colors} />
    </div>
  );
};

export const Typography = () => {
  const { tokens } = useTheme();
  const { fontFamily, fontSize, fontWeight } = extractTheme(tokens);
  return (
    <div style={{ width: '95vw' }}>
      <TypographyBlocks
        families={fontFamily}
        sizes={fontSize}
        weights={fontWeight}
      />
    </div>
  );
};

export const Spacings = () => {
  const { tokens } = useTheme();
  const { spacing } = extractTheme(tokens);
  return (
    <div style={{ width: '95vw' }}>
      <SpacingBlocks spacings={spacing} />
    </div>
  );
};

export const Borders = () => {
  const { tokens } = useTheme();
  const { borderRadius } = extractTheme(tokens);
  return (
    <div style={{ width: '95vw' }}>
      <BorderBlocks borders={borderRadius} />
    </div>
  );
};

export const Shadows = () => {
  const { tokens } = useTheme();
  const { boxShadow } = extractTheme(tokens);
  return (
    <div style={{ width: '95vw' }}>
      <ShadowBlocks shadows={boxShadow} />
    </div>
  );
};

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
