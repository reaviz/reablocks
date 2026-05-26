export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export interface Palette {
  /** Background color used by the palette. */
  background?: string;
  /** Foreground color used by the palette. */
  color?: string;
  /** Background color used on hover. */
  'background-hover'?: string;
  /** Foreground color used on hover. */
  'color-hover'?: string;
}

export interface Palettes {
  /** Palette used for default body content. */
  body?: Palette;
  /** Palette used for primary actions and emphasis. */
  primary?: Palette;
  /** Palette used for secondary actions and emphasis. */
  secondary?: Palette;
  /** Palette used for error states. */
  error?: Palette;
  /** Palette used for warning states. */
  warning?: Palette;
  /** Palette used for success states. */
  success?: Palette;
  /** Palette used for informational states. */
  info?: Palette;
  /** Palette used for disabled states. */
  disabled?: Palette;
}

export interface Scale {
  /** Scale step 50. */
  50?: string;
  /** Scale step 100. */
  100?: string;
  /** Scale step 200. */
  200?: string;
  /** Scale step 300. */
  300?: string;
  /** Scale step 400. */
  400?: string;
  /** Scale step 500. */
  500?: string;
  /** Scale step 600. */
  600?: string;
  /** Scale step 700. */
  700?: string;
  /** Scale step 800. */
  800?: string;
  /** Scale step 900. */
  900?: string;
}

export interface Sizes {
  /** Extra-small size value. */
  xs?: number | string;
  /** Small size value. */
  sm?: number | string;
  /** Medium size value. */
  md?: number | string;
  /** Large size value. */
  lg?: number | string;
  /** Extra-large size value. */
  xl?: number | string;
  /** Double-extra-large size value. */
  xxl?: number | string;
}

export interface Weights {
  /** Thin font-weight value. */
  thin?: string;
  /** Normal font-weight value. */
  normal?: string;
  /** Bold font-weight value. */
  bold?: string;
  /** Extra-bold font-weight value. */
  extraBold?: string;
}

export type Color = Scale;

export type Spacings = Sizes;

export interface Borders {
  /** Border-radius size scale. */
  radius?: Sizes;
}

export type Shadows = Scale;

export interface Colors {
  /** Black color value. */
  black?: string;
  /** White color value. */
  white?: string;
  /** Red color scale. */
  red?: Color;
  /** Purple color scale. */
  purple?: Color;
  /** Blue color scale. */
  blue?: Color;
  /** Green color scale. */
  green?: Color;
  /** Yellow color scale. */
  yellow?: Color;
  /** Orange color scale. */
  orange?: Color;
  /** Gray color scale. */
  gray?: Color;
  /** Pink color scale. */
  pink?: Color;
  /** Slate color scale. */
  slate?: Color;
  /** Overlay color scale used for translucent surfaces. */
  overlay?: Color;
  /** Primary brand color scale. */
  primary?: Color;
  /** Secondary brand color scale. */
  secondary?: Color;
}

export interface FontFamilies {
  /** Default font family used for body text. */
  fontFamily?: string;
  /** Monospace font family. */
  monoFontFamily?: string;
}

export interface Typography {
  /** Font families used by the typography scale. */
  families?: FontFamilies;
  /** Font sizes used by the typography scale. */
  sizes?: Sizes;
  /** Font weights used by the typography scale. */
  weights?: Weights;
}

export interface Components {
  /** Map of component slot names to their class-name overrides. */
  [key: string]: {
    [key: string]: string;
  };
}

export type Gradients = Omit<Colors, 'overlay'>;

export interface Theme {
  /** Semantic color palettes used by the theme. */
  palettes?: Palettes;
  /** Raw color scales available to the theme. */
  colors?: Colors;
  /** Spacing scale used by the theme. */
  spacings?: Spacings;
  /** Border settings used by the theme. */
  borders?: Borders;
  /** Gradient color scales used by the theme. */
  gradients?: Gradients;
  /** Shadow scale used by the theme. */
  shadows?: Shadows;
  /** Typography settings used by the theme. */
  typography?: Typography;
  /** Per-component class-name overrides used by the theme. */
  components?: Components;
}
