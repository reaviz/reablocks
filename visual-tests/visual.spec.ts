import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

interface StoryEntry {
  id: string;
  title: string;
  name: string;
}

const stories: StoryEntry[] = JSON.parse(
  readFileSync(resolve(__dirname, 'stories.json'), 'utf-8')
);

for (const story of stories) {
  test(`${story.title} / ${story.name}`, async ({ page }) => {
    await page.goto(`/iframe.html?id=${story.id}&viewMode=story`);

    const root = page.locator('#storybook-root');
    await root.waitFor({ state: 'visible', timeout: 10_000 });
    await page.waitForLoadState('networkidle');

    // Freeze animations for deterministic screenshots
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
        }
      `
    });

    await expect(page).toHaveScreenshot(`${story.id}.png`, {
      fullPage: true
    });
  });
}
