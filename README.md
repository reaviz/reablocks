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

## 🧪 Visual Regression Testing

This project uses [Playwright](https://playwright.dev/) to screenshot every Storybook story and catch unintended visual changes.

**Prerequisites:** Storybook must be running on `localhost:6006` (or Playwright will start it automatically).

```bash
# Run visual tests against existing baseline screenshots
npm run test:visual

# Update baseline screenshots (after intentional visual changes)
npm run test:visual:update
```

`test:visual:extract` runs automatically as part of both commands — it fetches the story list from Storybook so Playwright knows what to screenshot.

## ❤️ Contributors & Credits

Thanks to Netlify for hosting!

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/v3/img/components/netlify-dark.svg" alt="Deploys by Netlify" />
</a>

Thanks to all our contributors!

<a href="https://github.com/reaviz/reaviz/graphs/contributors"><img src="https://opencollective.com/reaviz/contributors.svg?width=890" /></a>
