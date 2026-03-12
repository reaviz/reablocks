import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './visual-tests',
  outputDir: './visual-tests/test-results',
  snapshotDir: './visual-tests/screenshots',
  snapshotPathTemplate: '{snapshotDir}/{arg}{ext}',
  timeout: 30_000,
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01,
      animations: 'disabled'
    }
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI
    ? 'github'
    : [['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:9009',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 }
      }
    }
  ],
  webServer: {
    command: 'npx storybook dev -p 6006 --no-open',
    url: 'http://localhost:9009',
    timeout: 120_000,
    reuseExistingServer: !process.env.CI
  }
});
