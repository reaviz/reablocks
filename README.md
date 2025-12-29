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
- Smaller bundle size (141KB CSS)

### UDS Theme (Unify Design System)
Comprehensive design system with detailed component-specific tokens for advanced customization.

```tsx
import 'reablocks/uds.css';
import { ThemeProvider, Button } from 'reablocks';

function App() {
  return (
    <ThemeProvider variant="uds">
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

### Choosing a Variant

| Feature | v9 Theme | UDS Theme |
|---------|----------|-----------|
| **CSS Bundle Size** | 141KB | 246KB |
| **Token Style** | Semantic (`bg-primary`) | Component-specific (`bg-buttons-colors-core-icon-primary-background-resting`) |
| **Customization** | Simple overrides | Granular control |
| **Setup** | Minimal | More configuration |
| **Migration Required** | No (default) | Opt-in |

### Important Notes

- **Set variant once**: The `variant` prop should be set at app initialization and not changed at runtime
- **Match CSS import**: Always import the CSS file that matches your variant
- **No runtime switching**: Changing variants at runtime requires loading both CSS files and may cause styling issues

### Custom Theme Overrides

Both variants support custom theme overrides:

```tsx
<ThemeProvider
  variant="v9"  // or "uds"
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

For detailed migration guidance and token mappings, see [v9 to UDS Token Mapping](docs/migration/v9-to-uds-token-mapping.md).

## 🎁 Other Projects

- [Reaflow](https://reaflow.dev?utm=reablocks) - Open-source library for workflow and diagram graphs.
- [Reagraph](https://reagraph.dev?utm=reablocks) - Open-source library for large webgl based network graphs.
- [Reaviz](https://reaviz.dev?utm=reablocks) - Open-source library for data visualizations for React.
- [Reachat](https://reachat.dev?utm=reablocks) - Open-source library for building LLM/Chat UIs for React.

## 🔭 Development

If you want to run reablocks locally, its super easy!

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
