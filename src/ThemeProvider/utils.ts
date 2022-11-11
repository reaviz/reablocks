import { Theme } from './types';

export const isRefObject = ref =>
  ref !== null && typeof ref === 'object' && ref.hasOwnProperty('current');

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

export const buildSheetRules = (theme: Theme) => {
  const template: string[] = [];

  if (theme) {
    const colors = applyColors(theme);
    template.push(...colors);
  }

  return template.join(' ');
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
      ${str}
    }
  `);

  return sheet;
};
