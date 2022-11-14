import { Theme } from './types';

export const isRefObject = ref =>
  // eslint-disable-next-line no-prototype-builtins
  ref !== null && typeof ref === 'object' && ref.hasOwnProperty('current');

export const camelToDash = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

const applyColors = (theme: Theme) => {
  const colors: string[] = [];

  if (theme?.colors) {
    for (const key of Object.keys(theme.colors)) {
      for (const shade of Object.keys(theme.colors[key])) {
        colors.push(`--${key}-${shade}: ${theme.colors[key][shade]};`);
      }
    }
  }

  return colors;
};

const applyBorders = (theme: Theme) => {
  const borders: string[] = [];

  if (theme?.borders?.radius) {
    for (const key of Object.keys(theme?.borders?.radius)) {
      borders.push(`--border-radius-${key}: ${theme?.borders?.radius[key]};`);
    }
  }

  return borders;
};

const applyShadows = (theme: Theme) => {
  const shadows: string[] = [];

  if (theme?.shadows) {
    for (const key of Object.keys(theme?.shadows)) {
      shadows.push(`--shadow-${key}: ${theme?.shadows?.[key]};`);
    }
  }

  return shadows;
};

const applySpacings = (theme: Theme) => {
  const spacings: string[] = [];

  if (theme?.spacings) {
    for (const key of Object.keys(theme?.spacings)) {
      spacings.push(`--spacing-${key}: ${theme?.spacings?.[key]};`);
    }
  }

  return spacings;
};

const applyPalettes = (theme: Theme) => {
  const palettes: string[] = [];

  if (theme?.palettes) {
    for (const key of Object.keys(theme.palettes)) {
      for (const subkey of Object.keys(theme.palettes[key])) {
        palettes.push(`--${key}-${subkey}: ${theme.palettes[key][subkey]};`);
      }
    }
  }

  return palettes;
};

const applyTypography = (theme: Theme) => {
  const typographies: string[] = [];

  if (theme?.typography) {
    if (theme.typography.families) {
      for (const key of Object.keys(theme.typography.families)) {
        typographies.push(
          `--${camelToDash(key)}: ${theme.typography.families[key]};`
        );
      }
    }

    if (theme.typography.sizes) {
      for (const key of Object.keys(theme.typography.sizes)) {
        typographies.push(
          `--font-size-${key}: ${theme.typography.sizes[key]};`
        );
      }
    }
  }

  return typographies;
};

const applyComponents = (theme: Theme) => {
  const components: string[] = [];

  if (theme?.components) {
    for (const key of Object.keys(theme.components)) {
      for (const subkey of Object.keys(theme.components[key])) {
        components.push(`--${subkey}: ${theme.components[key][subkey]};`);
      }
    }
  }

  return components;
};

export const buildSheetRules = (theme: Theme) => {
  const template: string[] = [];

  if (theme) {
    template.push(...applyColors(theme));
    template.push(...applyPalettes(theme));
    template.push(...applyBorders(theme));
    template.push(...applyShadows(theme));
    template.push(...applySpacings(theme));
    template.push(...applyTypography(theme));
    template.push(...applyComponents(theme));
  }

  return template;
};

export const createSheet = (element: HTMLElement, theme: Theme) => {
  const styleEl = document.createElement('style');
  const sheet = element.appendChild(styleEl).sheet;

  if (!sheet) {
    throw new Error('Could not create style sheet');
  }

  const str = buildSheetRules(theme);

  sheet.insertRule(`
    body {
      ${str.join(' ')}
    }
  `);

  return sheet;
};
