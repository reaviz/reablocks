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
  > **Advanced users**: If you want to customize Reablocks design tokens in your own Tailwind config, you'll need **Tailwind CSS ≥ 4.0.0** (the v9 and Unify themes use v4 features like `@theme` blocks and `@custom-variant` directives).

### Migrating from Alpha (v10.0.0-alpha.x)

If you've been using the `unify-ds` branch alpha releases, please see the [Alpha to v10.0.0 Migration Guide](docs/migration/alpha-to-v10-migration.md) for required changes. Key changes:
- CSS import changed from `index.css` to `unify.css`
- ThemeProvider now requires `variant="unify"` prop
- `theme` prop is now optional (for custom overrides only)

## 🎨 Theme Variants

Reablocks v10 offers two theme variants to suit different design needs:

### v9 Theme (Default)
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

### Choosing a Variant

| Feature | v9 Theme | Unify Theme |
|---------|----------|-------------|
| **CSS Bundle Size** | Smaller (~145 KB / 19 KB gzipped in v10.0) | Larger (~310 KB / 35 KB gzipped in v10.0) |
| **Token Style** | Semantic (`bg-primary`) | Component-specific (`bg-buttons-colors-core-icon-primary-background-resting`) |
| **Customization** | Simple overrides | Granular control |
| **Setup** | Minimal | More configuration |
| **Migration Required** | No (default) | Opt-in |

**Bundle Size Impact**: The Unify theme includes more comprehensive design tokens and is typically larger than the v9 theme. Actual sizes vary between versions as design tokens evolve—run `npm run build:styles` to see exact sizes for your version.

**Important**: CSS files are pre-built and shipped in the package. You download the full stylesheet regardless of which components you use (no tree-shaking). This keeps setup simple (no Tailwind build required) but means the bundle size is fixed.

**Recommendation**: Use Unify for design-system-heavy enterprise applications where the extra 16 KB is negligible compared to features gained. For marketing sites or lightweight apps, the v9 theme may be more appropriate.

### Light and Dark Mode

Both themes support light and dark modes out of the box. Toggle between modes by applying theme classes:

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

The ThemeProvider automatically observes these changes and updates component styling accordingly. Both v9 and Unify themes include pre-configured light and dark color palettes.

### Important Notes

- **Set variant once**: The `variant` prop should be set at app initialization and not changed at runtime
- **Match CSS import**: Always import the CSS file that matches your variant
- **No runtime switching**: Changing variants at runtime requires loading both CSS files and may cause styling issues
- **Import only one CSS file**: Do not import both `index.css` and `unify.css` in the same application. The last import wins, which can cause unexpected styling and increased bundle size. Choose one based on your `variant` prop.
- **Tailwind palette utilities**: The pre-built CSS includes standard Tailwind palette utilities (e.g., `text-gray-700`, `bg-blue-500`) so they work without installing Tailwind. For tighter integration with Unify tokens, consider migrating to semantic tokens or Unify component tokens. See the migration guide for details.

### Custom Theme Overrides

Both variants support custom theme overrides:

```tsx
<ThemeProvider
  variant="v9"  // or "unify"
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

For detailed migration guidance and token mappings, see [v9 to Unify Token Mapping](docs/migration/v9-to-unify-token-mapping.md).

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
