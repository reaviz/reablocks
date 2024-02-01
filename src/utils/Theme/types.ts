export interface Palette {
  background?: string;
  color?: string;
  'background-hover'?: string;
  'color-hover'?: string;
}

export interface Palettes {
  body?: Palette;
  primary?: Palette;
  secondary?: Palette;
  error?: Palette;
  warning?: Palette;
  success?: Palette;
  info?: Palette;
  disabled?: Palette;
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

export interface Weights {
  thin?: string;
  normal?: string;
  bold?: string;
  extraBold?: string;
}

export type Color = Scale;

export type Spacings = Sizes;

export interface Borders {
  radius?: Sizes;
}

export type Shadows = Scale;

export interface Colors {
  black?: string;
  white?: string;
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
  primary?: Color;
  secondary?: Color;
}

export interface FontFamilies {
  fontFamily?: string;
  monoFontFamily?: string;
}

export interface Typography {
  families?: FontFamilies;
  sizes?: Sizes;
  weights?: Weights;
}

export interface Components {
  [key: string]: {
    [key: string]: string;
  };
}

export type Gradients = Omit<Colors, 'overlay'>;

export interface Theme {
  palettes?: Palettes;
  colors?: Colors;
  spacings?: Spacings;
  borders?: Borders;
  gradients?: Gradients;
  shadows?: Shadows;
  typography?: Typography;
  components?: Components;
}
