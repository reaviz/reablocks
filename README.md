<div align="center">
  <img width="650" src="docs/assets/logo-light.png">
  <br />
  50+ UI components for React based on Tailwind.
  <br /><br />
  <a href="https://github.com/reaviz/reablocks/actions/workflows/build.yml">
    <img src="https://github.com/reaviz/reablocks/actions/workflows/build.yml/badge.svg" />
  </a>
  &nbsp;
  <a href="https://npm.im/reablocks" target="_blank">
    <img src="https://img.shields.io/npm/v/reablocks.svg" />
  </a>&nbsp;
  <a href="https://npm.im/reablocks" target="_blank">
    <img src="https://badgen.net/npm/dw/reablocks" />
  </a>&nbsp;
  <a href="https://github.com/reaviz/reablocks/blob/master/LICENSE">
    <img src="https://badgen.now.sh/badge/license/apache2" />
  </a>&nbsp;
  <a href="https://github.com/reaviz/reablocks">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/reaviz/reablocks?style=social" />
  </a>&nbsp;
  <a href="https://discord.gg/tt8wGExq35" target="_blank">
    <img src="https://img.shields.io/discord/773948315037073409?label=discord" />
  </a>
</div>

---

## 🚀 Quick Links
- [Website](https://reablocks.dev)
- [Docs](https://reablocks.dev/docs)
- [Blocks](https://reablocks.dev/blocks)
- [Storybook](https://storybook.reablocks.dev)
- [CLI](https://github.com/reaviz/reablocks-cli)
- [Changelog](https://reablocks.dev/docs/changelog)

## 📦 Installation

```bash
npm install reablocks
```

### Requirements
  - **React** ≥ 16.0.0

  > **Note**: Reablocks ships pre-built CSS. You do **not** need to install Tailwind CSS to use Reablocks - simply import the CSS file.
  >
  > **Advanced users**: If you want to customize Reablocks design tokens in your own Tailwind config, you'll need **Tailwind CSS ≥ 4.0.0** (the default and Unify themes use v4 features like `@theme` blocks and `@custom-variant` directives).

### Migrating from Alpha (v10.0.0-alpha.x)

If you've been using the `unify-ds` branch alpha releases, please note key changes:
- CSS import changed from `index.css` to `unify.css`
- ThemeProvider now requires `variant="unify"` prop
- `theme` prop is now optional (for custom overrides only)

## 🎨 Theme Variants

Reablocks v10 offers three theme variants to suit different design needs:

### Default Theme
Simplified, semantic design tokens optimized for developer experience and quick prototyping.

```tsx
import 'reablocks/index.css';
import { ThemeProvider, Button } from 'reablocks';

function App() {
  return (
    <ThemeProvider>
      <Button>Click me</Button>
    </ThemeProvider>
  );
}
```

**Best for:**
- New projects getting started quickly
- Prototypes and MVPs
- Projects that prefer simpler, semantic token names
- Typically smaller CSS than the Unify variant

### Unify Theme (Unify Design System)
Comprehensive design system with detailed component-specific tokens for advanced customization.

```tsx
import 'reablocks/unify.css';
import { ThemeProvider, Button } from 'reablocks';

function App() {
  return (
    <ThemeProvider variant="unify">
      <Button>Click me</Button>
    </ThemeProvider>
  );
}
```

**Best for:**
- Enterprise applications
- Design system implementations
- Projects requiring precise design token control
- Teams migrating from Unify Design System
- Advanced theming and customization needs

### Unify Theme (Compatibility Build)
If you want Tailwind palette utilities (e.g., `gray-500`, `slate-700`) to use Unify's design tokens instead of Tailwind's default values, use the compatibility build:

```tsx
import 'reablocks/unify-compat.css';
import { ThemeProvider, Button } from 'reablocks';

function App() {
  return (
    <ThemeProvider variant="unify">
      <Button>Click me</Button>
    </ThemeProvider>
  );
}
```

**Key Difference**:
- **`unify.css`**: `text-gray-500` uses Tailwind's default gray (#6b7280)
- **`unify-compat.css`**: `text-gray-500` uses Unify's neutral token (matches your design system)

**Use this when**: You have existing code with palette utilities and want them to match your Unify design system colors. Otherwise, use the standard `unify.css` and migrate to semantic/component tokens over time.

### Custom Theme (Bring Your Own CSS)
For maximum customization, use the `custom` variant to provide your own CSS file with custom design tokens while using Reablocks components:

```tsx
import { ThemeProvider } from 'reablocks';
import './my-custom-tokens.css'; // Your own CSS with custom variables

function App() {
  return (
    <ThemeProvider variant="custom">
      <Button>Click me</Button>
    </ThemeProvider>
  );
}
```

**Best for:**
- Complete design system control
- Custom CSS variables and tokens
- Integration with existing design systems
- Advanced Tailwind customization

**How it works:**
- No Reablocks CSS is loaded (don't import `index.css` or `unify.css`)
- Uses default theme structure (Tailwind class names)
- Optionally provide a custom theme object via the `theme` prop
- Your CSS defines the design tokens/variables that the theme classes reference

> **Why use custom variant instead of theme overrides?** The `theme` prop on default/unify variants still uses Reablocks CSS files (~19-35 KB gzipped). Use `variant="custom"` when you want zero Reablocks CSS in your bundle, such as when integrating with an existing design system or implementing custom Tailwind configuration with your own design tokens.

**Example with custom theme object:**
```tsx
import { ThemeProvider } from 'reablocks';
import { myCustomTheme } from './my-theme';
import './my-custom-styles.css';

function App() {
  return (
    <ThemeProvider variant="custom" theme={myCustomTheme}>
      <Button>Click me</Button>
    </ThemeProvider>
  );
}
```

### Choosing a Variant

**CSS Bundle Size**
- **Default Theme**: Smaller (~145 KB / 19 KB gzipped in v10.0)
- **Unify Theme**: Larger (~310 KB / 35 KB gzipped in v10.0)
- **Custom Theme**: You control (your own CSS)

**Token Style**
- **Default Theme**: Semantic tokens (e.g., `bg-primary`)
- **Unify Theme**: Component-specific tokens (e.g., `bg-buttons-colors-core-icon-primary-background-resting`)
- **Custom Theme**: Your own design tokens

**Customization**
- **Default Theme**: Simple overrides
- **Unify Theme**: Granular control
- **Custom Theme**: Complete control

**Setup**
- **Default Theme**: Minimal (no configuration needed)
- **Unify Theme**: More configuration (requires `variant="unify"` and `unify.css` import)
- **Custom Theme**: Advanced (requires `variant="custom"`, your own CSS, and optional theme object)

**Bundle Size Impact**: The Unify theme includes more comprehensive design tokens and is typically larger than the default theme. Actual sizes vary between versions as design tokens evolve—run `npm run build:styles` to see exact sizes for your version.

**Important**: CSS files are pre-built and shipped in the package. You download the full stylesheet regardless of which components you use (no tree-shaking). This keeps setup simple (no Tailwind build required) but means the bundle size is fixed.

**Recommendation**: Choose based on your needs and preferences:
- **Visual preference**: The themes have slightly different visual styles; compare them in [Storybook](https://storybook.reablocks.dev) to see which you prefer
- **Design system needs**: Use Unify for enterprise applications requiring granular design token control
- **Bundle size**: For marketing sites or lightweight apps where every KB matters, the default theme may be more appropriate (~16KB gzipped difference)

### Light and Dark Mode

The default and Unify themes support light and dark modes out of the box. Toggle between modes by applying theme classes:

```tsx
// Toggle to dark mode
document.documentElement.classList.add('theme-dark');

// Toggle to light mode
document.documentElement.classList.remove('theme-dark');
document.documentElement.classList.add('theme-light');
```

Or using data attributes:
```tsx
document.documentElement.setAttribute('data-theme', 'dark');
document.documentElement.setAttribute('data-theme', 'light');
```

The ThemeProvider automatically observes these changes and updates component styling accordingly. Both the default and Unify themes include pre-configured light and dark color palettes.

> **Note**: When using `variant="custom"`, you're responsible for implementing light/dark mode support in your own CSS by targeting the `.theme-dark`, `.theme-light`, `[data-theme="dark"]`, or `[data-theme="light"]` selectors. The ThemeProvider will still observe theme changes, but your CSS must define the color values for each mode.

### Important Notes

- **Set variant once**: The `variant` prop should be set at app initialization and not changed at runtime
- **Match CSS import**: Always import the CSS file that matches your variant
  - `variant="default"` → import `'reablocks/index.css'`
  - `variant="unify"` → import `'reablocks/unify.css'` or `'reablocks/unify-compat.css'`
  - `variant="custom"` → import your own CSS file (do not import any Reablocks CSS)
- **No runtime switching**: Changing variants at runtime requires loading both CSS files and may cause styling issues
- **Import only one CSS file**: Do not import both `index.css` and `unify.css` in the same application. The last import wins, which can cause unexpected styling and increased bundle size. Choose one based on your `variant` prop.
- **Tailwind palette utilities**: The pre-built CSS includes standard Tailwind palette utilities (e.g., `text-gray-700`, `bg-blue-500`) so they work without installing Tailwind. For tighter integration with Unify tokens, consider migrating to Unify component tokens or direct design system tokens. See the migration guide for details.

### Custom Theme Overrides for Default and Unify Variants

The default and Unify variants support custom theme overrides. By default, custom themes are merged with the base theme:

```tsx
<ThemeProvider
  variant="default"  // or "unify"
  theme={{
    components: {
      button: {
        colors: {
          primary: {
            filled: 'bg-purple-600 hover:bg-purple-700'
          }
        }
      }
    }
  }}
>
  <App />
</ThemeProvider>
```

### Fully Replacing the Theme

To fully replace the base theme instead of merging, use the `replaceTheme` prop:

```tsx
import { ThemeProvider } from 'reablocks';
import { theme as myCompleteTheme } from './my-custom-theme';

<ThemeProvider theme={myCompleteTheme} replaceTheme>
  <App />
</ThemeProvider>
```

**When to use `replaceTheme`:**
- Building a completely custom theme from scratch
- Replacing the entire theme structure
- When you don't want any base theme properties

**When to use default merging:**
- Overriding specific component styles
- Extending the default or Unify theme
- Making targeted customizations

**Important notes:**
- When `replaceTheme={true}`, the `variant` prop is ignored since no base theme is loaded. You're replacing the theme object entirely, not selecting a variant.
- The `replaceTheme` prop affects the theme object (JavaScript/TypeScript), not the CSS file. Even with `replaceTheme={true}`, you still need to import a CSS file (either `index.css`, `unify.css`, or your own custom CSS).
- If you want both a custom theme object AND custom CSS with no Reablocks styles, use `variant="custom"` with `theme` prop (no need for `replaceTheme` since custom variant uses your theme as-is or merges with default structure).

For detailed migration guidance and token mappings, see the [Default to Unify Token Mapping](https://reablocks.dev/docs/getting-started/migration/default-to-unify-token-mapping) guide on the website.

## 🎁 Other Projects

- [Reaflow](https://reaflow.dev?utm=reablocks) - Open-source library for workflow and diagram graphs.
- [Reagraph](https://reagraph.dev?utm=reablocks) - Open-source library for large webgl based network graphs.
- [Reaviz](https://reaviz.dev?utm=reablocks) - Open-source library for data visualizations for React.
- [Reachat](https://reachat.dev?utm=reablocks) - Open-source library for building LLM/Chat UIs for React.

## 🔭 Development

If you want to run reablocks locally, it's super easy!

- Clone the repository
- `npm i`
- `npm start`
- Browser opens to Storybook page

## ❤️ Contributors & Credits

Thanks to Netlify for hosting!

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/v3/img/components/netlify-dark.svg" alt="Deploys by Netlify" />
</a>

Thanks to all our contributors!

<a href="https://github.com/reaviz/reaviz/graphs/contributors"><img src="https://opencollective.com/reaviz/contributors.svg?width=890" /></a>
