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
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

export type Color = Scale;

export type Spacings = Sizes;

export type Borders = Sizes;

export type Shadows = Scale;

export interface Colors {
  red?: Color;
  purple?: Color;
  blue?: Color;
  green?: Color;
  yellow?: Color;
  orange?: Color;
  grey?: Color;
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

export interface Theme {
  name?: string;
  palettes?: Palettes;
  colors?: Colors;
  spacing?: Spacings;
  borders?: Borders;
  shadows?: Shadows;
  typography?: Typography;
  components?: {
    [key: string]: any;
  };
}
