export interface Palette {
  background?: string;
  color?: string;
}

export interface Palettes {
  body?: Palette;
  primary?: Palette;
  secondary?: Palette;
  error?: Palette;
  warning?: Palette;
  success?: Palette;
}

export interface Scale {
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
}

export interface Sizes {
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
  xxl?: number | string;
}

export type Color = Scale;

export type Spacings = Sizes;

export interface Borders {
  radius?: Sizes;
}

export type Shadows = Scale;

export interface Colors {
  red?: Color;
  purple?: Color;
  blue?: Color;
  green?: Color;
  yellow?: Color;
  orange?: Color;
  gray?: Color;
  pink?: Color;
  slate?: Color;
  overlay?: Color;
}

export interface FontFamilies {
  fontFamily?: string;
  monoFontFamily?: string;
}

export interface Typography {
  families?: FontFamilies;
  sizes?: Sizes;
}

export interface Components {
  [key: string]: {
    [key: string]: string;
  };
}

export type Gradients = Omit<Colors, 'overlay'>;

export interface DesignTokens {
  palettes?: Palettes;
  colors?: Colors;
  spacings?: Spacings;
  borders?: Borders;
  gradients?: Gradients;
  shadows?: Shadows;
  typography?: Typography;
  components?: Components;
}
