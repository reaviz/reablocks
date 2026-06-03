---
version: alpha
name: reablocks
description: >-
  Design system for reablocks — an open-source, Tailwind CSS-powered React
  component library by reaviz. Dark-first, compact, and Inter-driven. The
  semantic tokens reflect the default dark theme; light-mode values ship as
  "<token>-light" variants (see Colors).
colors:
  # Base
  white: "#ffffff"
  black: "#000000"
  # Named brand colors
  black-pearl: "#02020f"
  athens-gray: "#f7f7fa"
  mystic: "#e6e6f0"
  vulcan: "#11111f"
  charade: "#242433"
  waterloo: "#77778c"
  anakiwa: "#93b6ff"
  # Gray scale
  gray-100: "#f7f7fa"
  gray-200: "#e6e6f0"
  gray-300: "#c9c9d6"
  gray-400: "#77778c"
  gray-500: "#5c5c73"
  gray-600: "#3d3d4d"
  gray-700: "#242433"
  gray-800: "#1e1e2e"
  gray-900: "#11111f"
  gray-950: "#02020f"
  # Blue scale (brand accent)
  blue-100: "#e7efff"
  blue-200: "#c3d7ff"
  blue-300: "#87aeff"
  blue-400: "#4c86ff"
  blue-500: "#105eff"
  blue-600: "#0d4ed2"
  blue-700: "#0a3da6"
  blue-800: "#082d79"
  blue-900: "#051c4c"
  blue-950: "#041028"
  # Red scale
  red-100: "#fce5e6"
  red-200: "#f7bfc1"
  red-300: "#f08083"
  red-400: "#e84045"
  red-500: "#e00007"
  red-600: "#b70006"
  red-700: "#8e0005"
  red-800: "#660104"
  red-900: "#3d0103"
  red-950: "#200204"
  # Orange scale
  orange-100: "#fef3e5"
  orange-200: "#fde1bf"
  orange-300: "#fbc280"
  orange-400: "#f8a340"
  orange-500: "#f68500"
  orange-600: "#cb6e00"
  orange-700: "#9f5701"
  orange-800: "#743f01"
  orange-900: "#482802"
  orange-950: "#251602"
  # Yellow scale
  yellow-100: "#fff9e5"
  yellow-200: "#fff1bf"
  yellow-300: "#ffe380"
  yellow-400: "#ffd440"
  yellow-500: "#ffc600"
  yellow-600: "#d2a300"
  yellow-700: "#a58001"
  yellow-800: "#785e01"
  yellow-900: "#4b3b02"
  yellow-950: "#261f03"
  # Green scale
  green-100: "#eef8e9"
  green-200: "#d5efc8"
  green-300: "#aadf91"
  green-400: "#80ce5b"
  green-500: "#55be24"
  green-600: "#469d1d"
  green-700: "#377c16"
  green-800: "#275c10"
  green-900: "#183b09"
  green-950: "#091a02"
  # Teal scale
  teal-100: "#e5fbf9"
  teal-200: "#bff6f0"
  teal-300: "#80ede0"
  teal-400: "#40e5d1"
  teal-500: "#00dcc2"
  teal-600: "#00c2ab"
  teal-700: "#019a88"
  teal-800: "#017365"
  teal-900: "#024b42"
  teal-950: "#02231f"
  # Cyan scale
  cyan-100: "#e5f9fe"
  cyan-200: "#bff0fb"
  cyan-300: "#80e2f8"
  cyan-400: "#40d3f4"
  cyan-500: "#00c5f0"
  cyan-600: "#01a7cb"
  cyan-700: "#0289a6"
  cyan-800: "#036b82"
  cyan-900: "#044d5d"
  cyan-950: "#052f38"
  # Violet scale
  violet-100: "#f0e8fd"
  violet-200: "#dac5f9"
  violet-300: "#b58bf3"
  violet-400: "#9152ee"
  violet-500: "#6c18e8"
  violet-600: "#5b14c5"
  violet-700: "#4b10a1"
  violet-800: "#3a0d7e"
  violet-900: "#2a095b"
  violet-950: "#190537"
  # Purple scale
  purple-100: "#f3e5fc"
  purple-200: "#e2bff7"
  purple-300: "#c580f0"
  purple-400: "#a840e8"
  purple-500: "#8b00e0"
  purple-600: "#7501bc"
  purple-700: "#5f0298"
  purple-800: "#490274"
  purple-900: "#330350"
  purple-950: "#1d042d"
  # Magenta scale
  magenta-100: "#fae5f6"
  magenta-200: "#f1bfe9"
  magenta-300: "#e480d3"
  magenta-400: "#d740be"
  magenta-500: "#c900a8"
  magenta-600: "#ab018f"
  magenta-700: "#8c0276"
  magenta-800: "#6e025c"
  magenta-900: "#4f0343"
  magenta-950: "#31042a"
  # Pink scale
  pink-100: "#fde5f1"
  pink-200: "#f9bfdb"
  pink-300: "#f480b7"
  pink-400: "#ee4094"
  pink-500: "#de006b"
  pink-600: "#bb015a"
  pink-700: "#98014a"
  pink-800: "#740239"
  pink-900: "#510229"
  pink-950: "#2e0318"
  # Lime scale
  lime-100: "#f4fae5"
  lime-200: "#e3f3bf"
  lime-300: "#c6e880"
  lime-400: "#aadc40"
  lime-500: "#8ed000"
  lime-600: "#78b001"
  lime-700: "#628f01"
  lime-800: "#4c6f02"
  lime-900: "#364e02"
  lime-950: "#202e03"
  # Semantic tokens (dark theme — the library default)
  primary: "{colors.blue-500}"
  primary-active: "{colors.blue-500}"
  primary-hover: "{colors.blue-400}"
  primary-inactive: "{colors.blue-200}"
  secondary: "{colors.charade}"
  secondary-active: "{colors.charade}"
  secondary-hover: "{colors.gray-700}"
  secondary-inactive: "{colors.gray-600}"
  success: "{colors.green-500}"
  success-active: "{colors.green-500}"
  success-hover: "{colors.green-400}"
  success-background: "{colors.green-950}"
  error: "{colors.red-500}"
  error-active: "{colors.red-500}"
  error-hover: "{colors.red-400}"
  error-background: "{colors.red-950}"
  warning: "{colors.orange-500}"
  warning-active: "{colors.orange-500}"
  warning-hover: "{colors.orange-400}"
  warning-background: "{colors.orange-950}"
  info: "{colors.blue-500}"
  info-active: "{colors.blue-500}"
  info-hover: "{colors.blue-400}"
  info-background: "{colors.blue-950}"
  panel: "{colors.black-pearl}"
  panel-accent: "{colors.charade}"
  surface: "{colors.charade}"
  surface-accent: "{colors.blue-500}"
  text-primary: "{colors.athens-gray}"
  text-secondary: "{colors.waterloo}"
  # Label/icon color on filled color surfaces (buttons). Mode-INVARIANT:
  # always near-white, in dark AND light mode (hence no -light variant).
  # Never substitute a dark gray for this in dark mode.
  on-primary: "{colors.athens-gray}"
  # Semantic tokens — light mode (suffix convention: <token>-light).
  # The spec has no native multi-mode support; in light mode, resolve any
  # semantic token X through X-light. Palette primitives never change.
  primary-light: "{colors.blue-500}"
  primary-active-light: "{colors.blue-500}"
  primary-hover-light: "{colors.blue-600}"
  primary-inactive-light: "{colors.gray-500}"
  secondary-light: "{colors.blue-200}"
  secondary-active-light: "{colors.blue-200}"
  secondary-hover-light: "{colors.blue-300}"
  secondary-inactive-light: "{colors.waterloo}"
  success-light: "{colors.green-500}"
  success-active-light: "{colors.green-500}"
  success-hover-light: "{colors.green-600}"
  success-background-light: "{colors.green-100}"
  error-light: "{colors.red-500}"
  error-active-light: "{colors.red-400}"
  error-hover-light: "{colors.red-600}"
  error-background-light: "{colors.red-100}"
  warning-light: "{colors.orange-500}"
  warning-active-light: "{colors.orange-500}"
  warning-hover-light: "{colors.orange-600}"
  warning-background-light: "{colors.orange-100}"
  info-light: "{colors.blue-500}"
  info-active-light: "{colors.blue-500}"
  info-hover-light: "{colors.blue-600}"
  info-background-light: "{colors.blue-100}"
  panel-light: "{colors.white}"
  panel-accent-light: "{colors.mystic}"
  surface-light: "{colors.gray-300}"
  surface-accent-light: "{colors.blue-500}"
  text-primary-light: "{colors.vulcan}"
  text-secondary-light: "{colors.gray-700}"
typography:
  h1:
    fontFamily: "Inter, sans-serif"
    fontSize: 2.25rem
    fontWeight: 800
    lineHeight: 2.5rem
    letterSpacing: -0.025em
  h2:
    fontFamily: "Inter, sans-serif"
    fontSize: 1.875rem
    fontWeight: 600
    lineHeight: 2.25rem
    letterSpacing: -0.025em
  h3:
    fontFamily: "Inter, sans-serif"
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 2rem
    letterSpacing: -0.025em
  h4:
    fontFamily: "Inter, sans-serif"
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.75rem
    letterSpacing: -0.025em
  h5:
    fontFamily: "Inter, sans-serif"
    fontSize: 1rem
    fontWeight: 600
    lineHeight: 1.5rem
    letterSpacing: -0.025em
  h6:
    fontFamily: "Inter, sans-serif"
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.25rem
    letterSpacing: -0.025em
  body-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5rem
  body-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.25rem
  body-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1rem
  body-xs:
    fontFamily: "Inter, sans-serif"
    fontSize: 0.625rem
    fontWeight: 400
    lineHeight: 1rem
  label-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: 1.25rem
    fontWeight: 600
  label-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 0.875rem
    fontWeight: 600
  label-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: 0.75rem
    fontWeight: 600
  mono:
    fontFamily: "Fira Code, monospace"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.25rem
rounded:
  none: 0px
  xs: 0.125rem
  sm: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  2xl: 1rem
  3xl: 1.5rem
  4xl: 2rem
  full: 9999px
spacing:
  unit: 0.25rem
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  2xl: 3rem
components:
  button:
    backgroundColor: "{colors.gray-800}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.xs}"
    padding: "0.5rem 1rem"
  button-hover:
    backgroundColor: "{colors.gray-700}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.text-primary}"
  button-secondary-hover:
    backgroundColor: "{colors.secondary-hover}"
  button-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-primary}"
  button-warning:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.on-primary}"
  button-error:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-primary}"
  button-disabled:
    backgroundColor: "{colors.gray-600}"
    textColor: "{colors.gray-400}"
  button-small:
    typography: "{typography.label-sm}"
    padding: "0.25rem 0.5rem"
  button-large:
    typography: "{typography.label-lg}"
    padding: "0.625rem 1.25rem"
  button-outline-primary:
    textColor: "{colors.primary}"
  button-text-primary:
    textColor: "{colors.primary}"
  input:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: "0.375rem 0.625rem"
  checkbox:
    size: 1rem
  checkbox-checked:
    backgroundColor: "{colors.blue-500}"
  checkbox-label:
    textColor: "{colors.gray-400}"
    typography: "{typography.body-md}"
  checkbox-label-checked:
    textColor: "{colors.gray-100}"
  radio:
    size: 1rem
    rounded: "{rounded.full}"
  radio-indicator:
    backgroundColor: "{colors.primary}"
    size: 0.625rem
    rounded: "{rounded.full}"
  radio-label:
    textColor: "{colors.text-secondary}"
  radio-label-checked:
    textColor: "{colors.text-primary}"
  toggle:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.full}"
    width: 3rem
    height: 1.5rem
  toggle-checked:
    backgroundColor: "{colors.primary}"
  toggle-handle:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.full}"
    width: 1.25rem
  chip:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: "0.125rem 0.5rem"
  chip-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.panel}"
  chip-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.text-primary}"
  chip-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.panel}"
  chip-warning:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.panel}"
  chip-error:
    backgroundColor: "{colors.error}"
    textColor: "{colors.panel}"
  chip-info:
    backgroundColor: "{colors.info}"
    textColor: "{colors.panel}"
  badge:
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    width: 18px
    height: 18px
    padding: 0.375rem
  badge-default:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
  badge-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-primary}"
  badge-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.text-primary}"
  badge-error:
    backgroundColor: "{colors.error}"
    textColor: "{colors.text-primary}"
  card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.xs}"
    padding: 1.75rem
  tooltip:
    backgroundColor: "{colors.panel-accent}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: 0.375rem
  dialog:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
  dialog-content:
    padding: 1.25rem
---

# reablocks

## Overview

reablocks is an open-source React component library by [reaviz](https://github.com/reaviz),
built entirely on Tailwind CSS 4. It ships 50+ components across elements
(Button, Avatar, Badge, Chip), forms (Input, Select, Checkbox, Radio, Toggle,
Calendar), overlays (Dialog, Drawer, Popover, Tooltip, Notification), layout
(Card, Tabs, Tree, Stepper), and typography (H1–H6, P, Lead, Muted).

The visual personality is **dark-first, dense, and engineered**: near-black
panels (`{colors.black-pearl}`) layered with charcoal surfaces
(`{colors.charade}`), a single electric-blue accent (`{colors.primary}`,
#105eff) carrying almost all interactive emphasis, compact 14px body type in
Inter, tight 2px corner radii on structural elements, and hairline borders
instead of shadows for separation. The result reads as a professional
developer/data-tool aesthetic — calm, high-contrast, and unornamented, with
color reserved for state (success/error/warning/info) and interaction.

Dark is the default theme; a complete light theme exists and is activated by
adding the `theme-light` class (or `data-theme="light"`) to a root element.
All component styling flows from a centralized, type-safe theme object —
consumers customize via the theme system, never by fighting CSS specificity.

## Colors

The semantic tokens are the public color API and carry most component
styling (`primary`, `panel`, `surface`, `text-primary`, …). The raw palette
scales (13 families × 10 steps, 100–950) are the substrate the semantic
layer points into — but not exclusively: component themes also reach
directly into the gray scale for neutral states (default button fills,
disabled states, checkbox strokes and labels) and the blue scale for
selection accents, and the palette serves accent work (charts,
illustrations, category colors).

- **Primary (`{colors.primary}`, #105eff):** the single brand accent — an
  electric blue used for primary actions, checked/selected states, focus
  underlines, and links. Hover brightens to `{colors.primary-hover}` (#4c86ff).
- **Secondary (`{colors.secondary}`, #242433):** charcoal used for secondary
  button fills and secondary emphasis (pale blue #c3d7ff in light mode).
- **Success / Error / Warning / Info** (#55be24 / #e00007 / #f68500 /
  #105eff): state colors, each with a `-hover` variant and a very dark
  `-background` tint for filled callouts/notifications in dark mode.
- **Panel (`{colors.panel}`, #02020f):** the near-black app/canvas and card
  background. `{colors.panel-accent}` (#242433) is the hairline border color
  used on cards, inputs, and dialogs.
- **Surface (`{colors.surface}`, #242433):** raised interactive surfaces —
  toggle tracks, radio borders, dividers, heading underlines.
- **Text (`{colors.text-primary}` #f7f7fa, `{colors.text-secondary}`
  #77778c):** near-white primary text on dark; muted slate-gray for
  secondary/labels.
- **On-primary (`{colors.on-primary}`, #f7f7fa):** the label/icon color on
  filled color surfaces (primary/success/warning/error buttons). **Always
  near-white — in dark mode AND light mode.** It has no `-light` variant on
  purpose; never render it as a dark gray in either mode.

Dark is the default and normative in the token block above. The complete
light theme ships as `<token>-light` variants in the token block (the
DESIGN.md spec has no native multi-mode support, so this file uses the
suffix convention — when rendering light mode, resolve any semantic token
`X` through `X-light`; tokens without a `-light` counterpart and all
palette primitives are mode-invariant). The key remappings:

| Token | Dark (default) | Light |
|---|---|---|
| `primary` | #105eff | #105eff (hover darkens to #0d4ed2) |
| `secondary` | #242433 | #c3d7ff (blue-200) |
| `panel` | #02020f | #ffffff |
| `panel-accent` | #242433 | #e6e6f0 (mystic) |
| `surface` | #242433 | #c9c9d6 (gray-300) |
| `text-primary` | #f7f7fa | #11111f (vulcan) |
| `text-secondary` | #77778c | #242433 (gray-700) |
| `success-background` | #091a02 | #eef8e9 (green-100) |
| `error-background` | #200204 | #fce5e6 (red-100) |
| `warning-background` | #251602 | #fef3e5 (orange-100) |
| `info-background` | #041028 | #e7efff (blue-100) |

Note the light-mode character shift: interactive `-hover` states *darken*
instead of brighten (see the `*-hover-light` tokens), and `error-active-light`
(#e84045) is the only `-active` token that diverges from its base. Never
hardcode a mode: reference semantic tokens so both themes resolve correctly.

## Typography

Two families: **Inter** for everything, **Fira Code** for code. The body
scale is deliberately compact — the default body size is **14px**
(`{typography.body-md}`), one step smaller than typical web defaults, which
gives reablocks UIs their dense, data-tool feel. Body steps: 16px
(`body-lg`), 14px (`body-md`, default), 12px (`body-sm`), 10px (`body-xs`).

Headings are tight and quiet: every level uses letter-spacing -0.025em
(`tracking-tight`); h1 is the only extra-bold moment (2.25rem / 800), h2–h6
descend at weight 600 (1.875 / 1.5 / 1.25 / 1 / 0.875rem). h2 traditionally
carries a hairline bottom border in `{colors.surface}` with 0.5rem padding
below, marking major page sections. Button and form labels use the `label-*`
tokens at weight 600 — `label-sm`/`label-md` mirror the body sizes (12/14px)
while `label-lg` jumps to 1.25rem for large buttons.

Supporting styles from the library: `p` (line-height 1.75rem), `lead`
(1.25rem, `text-secondary`), `large` (1rem, weight 600), `muted` (0.75rem,
`text-secondary`), `small` (0.75rem, weight 500), blockquotes are italic
with a 2px left border in `{colors.surface}`.

## Layout

Spacing follows the Tailwind 4px grid: every gap, inset, and padding is a
multiple of `{spacing.unit}` (0.25rem). Components are compact — buttons pad
0.5rem × 1rem at medium, inputs 0.375rem × 0.625rem, cards 1.75rem all
around, dialog regions 1.25rem. Adornments (icons in buttons/inputs) sit
0.25–0.375rem from their labels. Prefer tight, even rhythm over generous
whitespace; density is part of the identity. Dialogs cap at 80vw × 80vh.
There is no prescriptive page grid — components are layout-agnostic and
compose inside whatever container structure the host app uses.

## Elevation & Depth

reablocks conveys hierarchy primarily through **layered darkness and
hairline borders, not shadows**: the #02020f panel sits at the bottom,
#242433 surfaces rise above it, and 1px `{colors.panel-accent}` borders
separate cards, inputs, and dialogs from the canvas. A standard shadow scale
exists (`--shadow-2xs` 0 1px rgb(0 0 0 / 0.05) through `--shadow-2xl`
0 25px 50px -12px rgb(0 0 0 / 0.25)) but is used sparingly — dialogs use the
strongest (`shadow-2xl`); most components use none. Glow gradients are the
signature depth accent: inputs show a radial-gradient blue underline on
hover/focus (#105eff fading to #242433, brightening to #93b6ff at focus),
and decorative "bottom border glow" / button-gradient treatments use the
same anakiwa-to-blue family.

## Shapes

The shape language is **barely-rounded rectangles with fully-round
controls**. Structural elements — buttons, cards, inputs, chips — use the
near-sharp `{rounded.xs}` (2px); tooltips and dialogs step up to
`{rounded.sm}` (4px). Pill/circular shapes are reserved for small controls:
toggles, radios, and badges are fully round (`{rounded.full}`). The larger
radii (md–4xl) exist in the scale for consumer use but the library's own
identity stays at the sharp end. Avoid medium-rounded (8–12px) corners on
cards or buttons — that immediately breaks the reablocks look.

## Components

### Buttons

Filled, outline, and text variants. The default filled button is
`{colors.gray-800}` (#1e1e2e, hover #242433) — dark gray in *both* modes —
with a weight-600 Inter label and `{rounded.xs}` corners. Filled buttons
have **no visible border** (only a border *color* is set; just outline
buttons carry an actual 1px border); primary/secondary/success/warning/
error variants swap the fill to their semantic token. Hover shifts fill to
the `-hover` token (primary → #4c86ff; note in dark mode `secondary` and
`secondary-hover` resolve to the same #242433, so secondary buttons show no
visible hover shift there). **Label color is `{colors.on-primary}` (#f7f7fa) — white in dark mode AND
light mode — on all filled buttons, except `button-secondary`, which uses
`{colors.text-primary}` so its label darkens to #11111f on the pale-blue
light-mode fill.** Never render filled primary/success/warning/error button
labels in black or dark gray in any mode. Outline buttons are
transparent with a 1px border and text in the variant color; text buttons
are borderless with colored text that brightens on hover.
Sizes: small (12px label, 0.25×0.5rem), medium (14px, 0.5×1rem — default),
large (20px label, 0.625×1.25rem). Disabled filled buttons go
`{colors.gray-600}` with `{colors.gray-400}` text and `cursor-not-allowed`.

### Inputs

A flex wrapper on `{colors.panel}` with a 1px `{colors.panel-accent}`
border, `{rounded.xs}` corners, and 14px sans text. There is **no focus
ring**: hover and focus paint a 1px radial-gradient underline pinned to the
bottom edge (hover #105eff→#242433; focus #93b6ff→#105eff→#3d3d4d). Error
state swaps the border to `{colors.error}`; disabled pins text to waterloo
#77778c in *both* modes (a fixed palette value, not the mode-flipping
`text-secondary`), applies a muted disabled background tint, and removes
the underline. Sizes: small (12px,
0.25rem padding), medium (14px — default), large (16px, 1.25rem padding).

### Checkbox, Radio, Toggle

Selection controls carry the blue accent. **Checkbox**: an animated 1rem SVG
box — transparent with a `{colors.gray-400}` stroke unchecked; filled
`{colors.blue-500}` with a white check when checked; labels sit 0.625rem
right, `{colors.gray-400}` resting and `{colors.gray-100}` when checked
(light mode flips labels dark: #242433 resting, #11111f checked).
**Radio**: a transparent fully-round 1rem circle with a 1px
`{colors.surface}` border that turns `{colors.primary-active}` when
selected, with a 0.625rem `{colors.primary}` dot; hover shifts borders to
`{colors.primary-hover}`. **Toggle**: a pill track (3rem × 1.5rem medium) in
`{colors.surface}`, turning `{colors.primary}` when on; the round
`{colors.panel}` handle slides start→end. Hovered radio/checkbox labels
turn `{colors.blue-300}`. Disabled parts use `{colors.secondary-inactive}`
(radio labels at 40% opacity); a disabled *unchecked* toggle track goes
transparent, while disabled-checked tracks use `{colors.secondary-inactive}`
with a black handle (white in light mode).

### Chips & Badges

Chips are compact pills-with-corners (`{rounded.xs}`, sized by
`{typography.body-sm}` but rendered at font-weight 500, not 400): default
is `{colors.panel}` with primary text; color variants fill with the
semantic token and flip text to `{colors.panel}` for contrast — except
`chip-secondary`, which keeps `{colors.text-primary}` text on its charcoal
fill. Outline chips are transparent with colored text and a 1px
`{colors.panel-accent}` border (not color-matched). Sizes step 10/12/14px.
Badges are fixed 18×18px fully-round dots anchored to a corner of their
target — white/black by default, with `{colors.primary}`,
`{colors.secondary}`, or `{colors.error}` variants for counts and alerts.

### Cards, Tooltips, Dialogs

All three sit on the panel system. **Card**: `{colors.panel}` with a 1px
`{colors.panel-accent}` border, `{rounded.xs}`, generous 1.75rem padding —
the flattest, sharpest container. **Tooltip**: `{colors.panel-accent}`
(charcoal in dark, mystic #e6e6f0 in light), `{rounded.sm}`, 0.375rem
padding, single-line centered text, with an optional 8px rotated-square
arrow inheriting the fill. **Dialog**: a
`{colors.panel}` sheet with `{colors.panel-accent}` border, `{rounded.sm}`,
`shadow-2xl`, a default width of 50% of the viewport capped at 80vw/80vh;
header title is 1.875rem bold, regions pad 1.25rem.

## Do's and Don'ts

- **Do** use semantic tokens (`primary`, `panel`, `surface`,
  `text-primary`) for all surfaces, text, and states — they resolve
  correctly in both dark and light modes.
- **Do** customize through the theme system: `extendTheme()` globally,
  `extendComponentTheme()` or the per-instance `theme` prop locally.
- **Do** stay on the shared scales — radius (`xs`–`4xl`), the 10–16px text
  scale, the 0.25rem spacing grid — instead of arbitrary values.
- **Do** keep dark as the default and switch modes only via
  `theme-light`/`theme-dark` classes or `data-theme` attributes on the root.
- **Do** reserve raw palette steps (e.g. `teal-500`, `violet-400`) for
  accents like charts and category colors.
- **Don't** hardcode hex values where a semantic token exists — it breaks
  light-mode and theme overrides.
- **Don't** use raw grays (`gray-700`, `gray-950`) for surfaces or text that
  have semantic equivalents (`surface`, `panel`, `text-primary`).
- **Don't** add medium/large corner radii or heavy drop shadows to buttons,
  cards, or inputs — reablocks separates with hairline borders and layered
  darkness, not soft elevation.
- **Don't** introduce new font families or bump body text above 14px by
  default; the compact Inter scale is core to the identity.
- **Don't** override component styles with external CSS or `!important` —
  pass overrides through the theme so deep-merging keeps the rest intact.

## Theming API

This section extends the standard DESIGN.md sections with
implementation-level guidance for agents writing code against reablocks.

- Wrap the app once: `<ThemeProvider theme={theme}>` (components throw
  outside a provider).
- Global restyling: `extendTheme(theme, { components: { button: { base:
  '...' } } })` — a deep partial merged over the defaults.
- Single component type: `extendComponentTheme()`; single instance: the
  `theme` prop every component accepts.
- Theme values are Tailwind class strings; user `className` merges last via
  `tailwind-merge`, so utility overrides win without `!important`.
- The CSS custom-property layer (`--primary`, `--panel`, `--text-primary`,
  palette scales) lives in `src/index.css` and is exposed to Tailwind as
  semantic utilities: `bg-primary`, `bg-panel`, `border-panel-accent`,
  `text-text-primary`, `bg-surface`.
